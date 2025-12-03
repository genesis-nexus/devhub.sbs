#!/bin/bash

###############################################################################
# DevHub.sbs Deployment Script
#
# This script deploys or updates the DevHub.sbs website
# Run with: sudo bash deploy/deploy.sh
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
NGINX_AVAILABLE="/etc/nginx/sites-available/devhub.sbs"
NGINX_ENABLED="/etc/nginx/sites-enabled/devhub.sbs"
REPO_URL="https://github.com/genesis-nexus/devhub.sbs.git"

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

check_nginx() {
    if ! command -v nginx &> /dev/null; then
        print_error "Nginx is not installed. Please run setup-server.sh first"
        exit 1
    fi
}

# Main deployment process
main() {
    print_status "Starting deployment for $DOMAIN"
    echo "============================================"

    check_root
    check_nginx

    # Step 1: Clone or update repository
    if [ -d "$WEB_ROOT" ]; then
        print_status "Updating existing repository..."
        cd "$WEB_ROOT"

        # Backup current state
        print_status "Creating backup..."
        BACKUP_DIR="/var/backups/devhub.sbs/backup-$(date +%Y%m%d-%H%M%S)"
        mkdir -p "$BACKUP_DIR"
        cp -r docs "$BACKUP_DIR/" 2>/dev/null || true
        print_success "Backup created at $BACKUP_DIR"

        # Pull latest changes
        print_status "Pulling latest changes from git..."
        git fetch origin
        git reset --hard origin/main || git reset --hard origin/master
        print_success "Repository updated"
    else
        print_status "Cloning repository..."
        mkdir -p /var/www
        git clone "$REPO_URL" "$WEB_ROOT"
        cd "$WEB_ROOT"
        print_success "Repository cloned"
    fi

    # Step 2: Set correct permissions
    print_status "Setting correct permissions..."
    chown -R www-data:www-data "$WEB_ROOT"
    find "$WEB_ROOT/docs" -type f -exec chmod 644 {} \;
    find "$WEB_ROOT/docs" -type d -exec chmod 755 {} \;
    print_success "Permissions set"

    # Step 3: Setup Nginx configuration
    if [ ! -L "$NGINX_ENABLED" ]; then
        print_status "Setting up Nginx configuration..."

        if [ -f "$WEB_ROOT/deploy/nginx.conf" ]; then
            cp "$WEB_ROOT/deploy/nginx.conf" "$NGINX_AVAILABLE"
            ln -sf "$NGINX_AVAILABLE" "$NGINX_ENABLED"
            print_success "Nginx configuration installed"
        else
            print_warning "nginx.conf not found in repository"
        fi
    else
        print_status "Nginx configuration already exists"
    fi

    # Step 4: Test Nginx configuration
    print_status "Testing Nginx configuration..."
    if nginx -t 2>&1; then
        print_success "Nginx configuration is valid"
    else
        print_error "Nginx configuration test failed"
        exit 1
    fi

    # Step 5: Reload Nginx
    print_status "Reloading Nginx..."
    systemctl reload nginx
    print_success "Nginx reloaded"

    # Step 6: Display status
    echo ""
    echo "============================================"
    print_success "Deployment completed successfully!"
    echo "============================================"
    echo ""
    echo "Website is now live at:"
    echo "  HTTP:  http://$DOMAIN"
    echo ""
    echo "Next steps:"
    echo "  1. Test the website in your browser"
    echo "  2. Setup SSL certificate: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
    echo "  3. Monitor logs: sudo tail -f /var/log/nginx/devhub.sbs-access.log"
    echo ""

    # Display recent git commits
    echo "Recent commits:"
    git log --oneline -5
    echo ""
}

# Run main function
main "$@"
