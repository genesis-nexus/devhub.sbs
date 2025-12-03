#!/bin/bash

###############################################################################
# DevHub.sbs Nginx Setup Script
#
# This script sets up Nginx to serve static files from /var/www/devhub.sbs/docs
# Following standard Nginx deployment practices
#
# Prerequisites:
#   - Static files must be at /var/www/devhub.sbs/docs/
#   - Run as root or with sudo
#
# Usage:
#   sudo ./setup-nginx.sh
###############################################################################

set -euo pipefail  # Exit on error, undefined variables, pipe failures

# Configuration
readonly SITE_NAME="devhub"
readonly WEB_ROOT="/var/www/devhub.sbs"
readonly DOC_ROOT="${WEB_ROOT}/docs"
readonly NGINX_AVAILABLE="/etc/nginx/sites-available/${SITE_NAME}.conf"
readonly NGINX_ENABLED="/etc/nginx/sites-enabled/${SITE_NAME}.conf"
readonly NGINX_DEFAULT_ENABLED="/etc/nginx/sites-enabled/default"

# Colors for output
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
check_root() {
    if [[ "${EUID}" -ne 0 ]]; then
        log_error "This script must be run as root or with sudo"
        exit 1
    fi
}

# Check if Nginx is installed
check_nginx() {
    if ! command -v nginx &> /dev/null; then
        log_warning "Nginx is not installed"
        return 1
    fi
    return 0
}

# Install Nginx
install_nginx() {
    log_info "Installing Nginx..."
    apt-get update -qq
    apt-get install -y nginx
    log_success "Nginx installed successfully"
}

# Verify document root exists
verify_doc_root() {
    if [[ ! -d "${DOC_ROOT}" ]]; then
        log_error "Document root does not exist: ${DOC_ROOT}"
        log_info "Please ensure your website files are located at ${DOC_ROOT}"
        exit 1
    fi

    if [[ ! -f "${DOC_ROOT}/index.html" ]]; then
        log_warning "index.html not found in ${DOC_ROOT}"
    fi

    log_success "Document root verified: ${DOC_ROOT}"
}

# Create Nginx configuration
create_nginx_config() {
    log_info "Creating Nginx configuration..."

    cat > "${NGINX_AVAILABLE}" <<'EOF'
# Nginx configuration for DevHub.sbs
# Standard static site configuration with IP address support

server {
    # Listen on port 80 for both IPv4 and IPv6
    # default_server means this will catch all requests, including IP addresses
    listen 80 default_server;
    listen [::]:80 default_server;

    # Server name configuration
    # The underscore (_) is a catch-all that matches any hostname/IP address
    server_name _;

    # Document root
    root /var/www/devhub.sbs/docs;
    index index.html index.htm;

    # Logging
    access_log /var/log/nginx/devhub-access.log;
    error_log /var/log/nginx/devhub-error.log;

    # Character set
    charset utf-8;

    # Main location block
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security: Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Special files
    location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
    }

    location = /favicon.ico {
        log_not_found off;
        access_log off;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF

    log_success "Nginx configuration created at ${NGINX_AVAILABLE}"
}

# Remove default Nginx site
remove_default_site() {
    if [[ -L "${NGINX_DEFAULT_ENABLED}" ]] || [[ -f "${NGINX_DEFAULT_ENABLED}" ]]; then
        log_info "Removing default Nginx site..."
        rm -f "${NGINX_DEFAULT_ENABLED}"
        log_success "Default site removed"
    fi
}

# Enable site
enable_site() {
    log_info "Enabling site..."
    ln -sf "${NGINX_AVAILABLE}" "${NGINX_ENABLED}"
    log_success "Site enabled"
}

# Set correct permissions
set_permissions() {
    log_info "Setting correct permissions..."
    chown -R www-data:www-data "${WEB_ROOT}"
    find "${DOC_ROOT}" -type f -exec chmod 644 {} \; 2>/dev/null || true
    find "${DOC_ROOT}" -type d -exec chmod 755 {} \; 2>/dev/null || true
    log_success "Permissions set correctly"
}

# Test Nginx configuration
test_nginx_config() {
    log_info "Testing Nginx configuration..."
    if nginx -t 2>&1 | grep -q "successful"; then
        log_success "Nginx configuration is valid"
        return 0
    else
        log_error "Nginx configuration test failed"
        nginx -t
        return 1
    fi
}

# Reload Nginx
reload_nginx() {
    log_info "Reloading Nginx..."
    systemctl reload nginx
    log_success "Nginx reloaded"
}

# Enable Nginx to start on boot
enable_nginx_service() {
    log_info "Enabling Nginx service..."
    systemctl enable nginx
    systemctl start nginx
    log_success "Nginx service enabled and started"
}

# Configure firewall if UFW is installed
configure_firewall() {
    if command -v ufw &> /dev/null; then
        log_info "Configuring firewall..."
        ufw allow 'Nginx HTTP' 2>/dev/null || ufw allow 80/tcp
        log_success "Firewall configured to allow HTTP traffic"
    fi
}

# Display summary
display_summary() {
    local server_ip
    server_ip=$(hostname -I | awk '{print $1}')

    echo ""
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║                  SETUP COMPLETED SUCCESSFULLY                  ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""
    log_success "Your website is now accessible!"
    echo ""
    echo "Access Methods:"
    echo "  • IP Address:    http://${server_ip}"
    echo "  • Domain:        http://devhub.sbs (when DNS is configured)"
    echo ""
    echo "File Locations:"
    echo "  • Website files: ${DOC_ROOT}"
    echo "  • Nginx config:  ${NGINX_AVAILABLE}"
    echo "  • Access log:    /var/log/nginx/devhub-access.log"
    echo "  • Error log:     /var/log/nginx/devhub-error.log"
    echo ""
    echo "Useful Commands:"
    echo "  • Test config:   sudo nginx -t"
    echo "  • Reload Nginx:  sudo systemctl reload nginx"
    echo "  • View logs:     sudo tail -f /var/log/nginx/devhub-access.log"
    echo "  • Check status:  sudo systemctl status nginx"
    echo ""
}

# Main execution
main() {
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║              DevHub.sbs - Nginx Setup Script                   ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""

    check_root

    # Install Nginx if not present
    if ! check_nginx; then
        install_nginx
    else
        log_info "Nginx is already installed"
    fi

    # Verify prerequisites
    verify_doc_root

    # Configure Nginx
    remove_default_site
    create_nginx_config
    enable_site

    # Set permissions
    set_permissions

    # Test configuration
    if ! test_nginx_config; then
        log_error "Setup failed due to invalid Nginx configuration"
        exit 1
    fi

    # Start/reload Nginx
    enable_nginx_service
    reload_nginx

    # Configure firewall
    configure_firewall

    # Display summary
    display_summary
}

# Run main function
main "$@"
