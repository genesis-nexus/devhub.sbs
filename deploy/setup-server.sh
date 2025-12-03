#!/bin/bash

###############################################################################
# DevHub.sbs Server Setup Script
#
# This script prepares a fresh Ubuntu server for hosting DevHub.sbs
# Run once on a new server: sudo bash deploy/setup-server.sh
###############################################################################

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
DOMAIN="devhub.sbs"
WEB_ROOT="/var/www/devhub.sbs"
ADMIN_EMAIL="admin@devhub.sbs"

# Functions
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_root() {
    if [[ $EUID -ne 0 ]]; then
        print_error "This script must be run as root (use sudo)"
        exit 1
    fi
}

check_ubuntu() {
    if [ ! -f /etc/os-release ]; then
        print_error "Cannot determine OS version"
        exit 1
    fi

    . /etc/os-release
    if [ "$ID" != "ubuntu" ]; then
        print_warning "This script is designed for Ubuntu. Current OS: $ID"
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
}

# Main setup process
main() {
    echo "============================================"
    print_status "DevHub.sbs Server Setup"
    echo "============================================"
    echo ""

    check_root
    check_ubuntu

    # Step 1: Update system
    print_status "Updating system packages..."
    apt update
    apt upgrade -y
    print_success "System updated"

    # Step 2: Install required packages
    print_status "Installing required packages..."
    apt install -y \
        nginx \
        git \
        curl \
        wget \
        ufw \
        certbot \
        python3-certbot-nginx \
        software-properties-common \
        apt-transport-https
    print_success "Packages installed"

    # Step 3: Configure firewall
    print_status "Configuring firewall..."
    ufw --force enable
    ufw allow 'Nginx Full'
    ufw allow 'OpenSSH'
    ufw status
    print_success "Firewall configured"

    # Step 4: Start and enable Nginx
    print_status "Configuring Nginx..."
    systemctl start nginx
    systemctl enable nginx
    print_success "Nginx configured and started"

    # Step 5: Create directory structure
    print_status "Creating directory structure..."
    mkdir -p /var/www
    mkdir -p /var/backups/devhub.sbs
    mkdir -p /var/log/devhub
    print_success "Directory structure created"

    # Step 6: Remove default Nginx site
    if [ -L /etc/nginx/sites-enabled/default ]; then
        print_status "Removing default Nginx site..."
        rm /etc/nginx/sites-enabled/default
        print_success "Default site removed"
    fi

    # Step 7: Optimize Nginx configuration
    print_status "Optimizing Nginx configuration..."

    # Backup original nginx.conf
    cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup

    # Add performance optimizations if not already present
    if ! grep -q "worker_connections 4096" /etc/nginx/nginx.conf; then
        sed -i 's/worker_connections.*/worker_connections 4096;/' /etc/nginx/nginx.conf
    fi

    # Enable gzip if not already enabled
    if ! grep -q "gzip on" /etc/nginx/nginx.conf; then
        sed -i '/http {/a \\tgzip on;\n\tgzip_vary on;\n\tgzip_proxied any;\n\tgzip_comp_level 6;\n\tgzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml application/atom+xml image/svg+xml text/x-component text/x-cross-domain-policy;' /etc/nginx/nginx.conf
    fi

    print_success "Nginx optimized"

    # Step 8: Setup log rotation
    print_status "Setting up log rotation..."
    cat > /etc/logrotate.d/devhub <<EOF
/var/log/nginx/devhub.sbs-*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    prerotate
        if [ -d /etc/logrotate.d/httpd-prerotate ]; then \
            run-parts /etc/logrotate.d/httpd-prerotate; \
        fi
    endscript
    postrotate
        invoke-rc.d nginx rotate >/dev/null 2>&1
    endscript
}
EOF
    print_success "Log rotation configured"

    # Step 9: Setup automatic security updates
    print_status "Setting up automatic security updates..."
    apt install -y unattended-upgrades
    dpkg-reconfigure -plow unattended-upgrades
    print_success "Automatic security updates enabled"

    # Step 10: Install fail2ban for additional security
    print_status "Installing and configuring fail2ban..."
    apt install -y fail2ban
    systemctl start fail2ban
    systemctl enable fail2ban

    # Create fail2ban nginx filter
    cat > /etc/fail2ban/filter.d/nginx-noscript.conf <<EOF
[Definition]
failregex = ^<HOST> -.*GET.*(\.php|\.asp|\.exe|\.pl|\.cgi|\.scgi)
ignoreregex =
EOF

    # Configure fail2ban for nginx
    cat > /etc/fail2ban/jail.local <<EOF
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5

[nginx-http-auth]
enabled = true

[nginx-noscript]
enabled = true
port = http,https
filter = nginx-noscript
logpath = /var/log/nginx/access.log
maxretry = 6
EOF

    systemctl restart fail2ban
    print_success "fail2ban installed and configured"

    # Step 11: Create a deployment status page
    print_status "Creating status page..."
    mkdir -p /var/www/html
    cat > /var/www/html/index.html <<EOF
<!DOCTYPE html>
<html>
<head>
    <title>Server Ready</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
        h1 { color: #2c3e50; }
        .success { color: #27ae60; }
        .info { background: #ecf0f1; padding: 15px; border-radius: 5px; margin: 20px 0; }
    </style>
</head>
<body>
    <h1 class="success">Server Setup Complete</h1>
    <div class="info">
        <p><strong>Status:</strong> Ready for deployment</p>
        <p><strong>Domain:</strong> $DOMAIN</p>
        <p><strong>Server Time:</strong> $(date)</p>
        <p><strong>Next Step:</strong> Run deployment script</p>
    </div>
    <h2>Next Steps:</h2>
    <ol>
        <li>Deploy the website: <code>sudo bash /var/www/devhub.sbs/deploy/deploy.sh</code></li>
        <li>Setup SSL: <code>sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN</code></li>
        <li>Test the website</li>
    </ol>
</body>
</html>
EOF
    print_success "Status page created"

    # Step 12: Display system information
    echo ""
    echo "============================================"
    print_success "Server setup completed successfully!"
    echo "============================================"
    echo ""
    echo "System Information:"
    echo "  OS:       $(lsb_release -d | cut -f2)"
    echo "  Kernel:   $(uname -r)"
    echo "  Nginx:    $(nginx -v 2>&1 | cut -d'/' -f2)"
    echo "  Certbot:  $(certbot --version 2>&1 | cut -d' ' -f2)"
    echo ""
    echo "Services Status:"
    systemctl is-active nginx && echo "  Nginx:    ${GREEN}Running${NC}" || echo "  Nginx:    ${RED}Stopped${NC}"
    systemctl is-active fail2ban && echo "  fail2ban: ${GREEN}Running${NC}" || echo "  fail2ban: ${RED}Stopped${NC}"
    ufw status | grep -q "Status: active" && echo "  Firewall: ${GREEN}Active${NC}" || echo "  Firewall: ${RED}Inactive${NC}"
    echo ""
    echo "Next Steps:"
    echo "  1. Clone or deploy your website files"
    echo "  2. Configure domain DNS to point to this server IP"
    echo "  3. Run deployment script: sudo bash deploy/deploy.sh"
    echo "  4. Setup SSL certificate: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
    echo ""
    echo "Server IP Address:"
    ip addr show | grep "inet " | grep -v 127.0.0.1 | awk '{print "  " $2}' | cut -d'/' -f1
    echo ""
    echo "Useful Commands:"
    echo "  Check Nginx status:  sudo systemctl status nginx"
    echo "  View Nginx logs:     sudo tail -f /var/log/nginx/access.log"
    echo "  View fail2ban logs:  sudo tail -f /var/log/fail2ban.log"
    echo "  Firewall status:     sudo ufw status"
    echo ""

    # Step 13: Create helpful aliases
    print_status "Creating helpful command aliases..."
    cat >> /root/.bashrc <<EOF

# DevHub.sbs aliases
alias devhub-deploy='cd /var/www/devhub.sbs && sudo bash deploy/deploy.sh'
alias devhub-update='cd /var/www/devhub.sbs && sudo bash deploy/update.sh'
alias devhub-logs='sudo tail -f /var/log/nginx/devhub.sbs-access.log'
alias devhub-errors='sudo tail -f /var/log/nginx/devhub.sbs-error.log'
alias devhub-status='sudo systemctl status nginx'
EOF
    print_success "Command aliases created"

    echo "Reload your shell or run: source /root/.bashrc"
    echo ""
}

# Run main function
main "$@"
