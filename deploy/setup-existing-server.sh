#!/bin/bash

###############################################################################
# DevHub.sbs - Quick Setup for Existing Server
#
# Use this if you already have the files at /var/www/devhub.sbs/
# and just need to configure Nginx
#
# Run with: sudo bash deploy/setup-existing-server.sh
###############################################################################

set -e  # Exit on error

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
WEB_ROOT="/var/www/devhub.sbs"
NGINX_AVAILABLE="/etc/nginx/sites-available/devhub"
NGINX_ENABLED="/etc/nginx/sites-enabled/devhub"

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check root
if [[ $EUID -ne 0 ]]; then
    print_error "This script must be run as root (use sudo)"
    exit 1
fi

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║          DevHub.sbs - Quick Nginx Configuration               ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Step 1: Verify files exist
print_status "Checking if website files exist..."
if [ ! -d "$WEB_ROOT/docs" ]; then
    print_error "Website files not found at $WEB_ROOT/docs"
    print_status "Please ensure files are checked out to $WEB_ROOT"
    exit 1
fi
print_success "Website files found at $WEB_ROOT/docs"

# Step 2: Install Nginx if not installed
if ! command -v nginx &> /dev/null; then
    print_status "Nginx not found. Installing..."
    apt update
    apt install -y nginx
    print_success "Nginx installed"
else
    print_status "Nginx is already installed"
fi

# Step 3: Remove default Nginx configuration
if [ -L /etc/nginx/sites-enabled/default ]; then
    print_status "Removing default Nginx site..."
    rm /etc/nginx/sites-enabled/default
    print_success "Default site removed"
fi

# Step 4: Copy Nginx configuration
print_status "Installing Nginx configuration..."
if [ -f "$WEB_ROOT/deploy/nginx.conf" ]; then
    cp "$WEB_ROOT/deploy/nginx.conf" "$NGINX_AVAILABLE"
    print_success "Nginx configuration copied"
else
    print_error "nginx.conf not found in $WEB_ROOT/deploy/"
    exit 1
fi

# Step 5: Enable site
print_status "Enabling site..."
ln -sf "$NGINX_AVAILABLE" "$NGINX_ENABLED"
print_success "Site enabled"

# Step 6: Set correct permissions
print_status "Setting file permissions..."
chown -R www-data:www-data "$WEB_ROOT"
find "$WEB_ROOT/docs" -type f -exec chmod 644 {} \; 2>/dev/null
find "$WEB_ROOT/docs" -type d -exec chmod 755 {} \; 2>/dev/null
print_success "Permissions set"

# Step 7: Test Nginx configuration
print_status "Testing Nginx configuration..."
if nginx -t 2>&1; then
    print_success "Nginx configuration is valid"
else
    print_error "Nginx configuration test failed"
    exit 1
fi

# Step 8: Configure firewall (if UFW is installed)
if command -v ufw &> /dev/null; then
    print_status "Configuring firewall..."
    ufw allow 'Nginx HTTP' 2>/dev/null || ufw allow 80/tcp
    print_success "Firewall configured to allow HTTP traffic"
fi

# Step 9: Restart Nginx
print_status "Restarting Nginx..."
systemctl restart nginx
systemctl enable nginx
print_success "Nginx restarted and enabled"

# Get server IP
SERVER_IP=$(hostname -I | awk '{print $1}')

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                    SETUP COMPLETED!                            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
print_success "Website is now accessible!"
echo ""
echo "Access your website at:"
echo "  ${GREEN}http://$SERVER_IP${NC}"
echo ""
echo "If you have a domain configured:"
echo "  ${GREEN}http://devhub.sbs${NC}"
echo ""
echo "Nginx Status:"
systemctl status nginx --no-pager -l | head -5
echo ""
echo "Useful commands:"
echo "  View access logs:  sudo tail -f /var/log/nginx/devhub.sbs-access.log"
echo "  View error logs:   sudo tail -f /var/log/nginx/devhub.sbs-error.log"
echo "  Restart Nginx:     sudo systemctl restart nginx"
echo "  Test config:       sudo nginx -t"
echo ""
echo "Files location:"
echo "  Website:           $WEB_ROOT/docs/"
echo "  Nginx config:      $NGINX_AVAILABLE"
echo "  Logs:              /var/log/nginx/"
echo ""
