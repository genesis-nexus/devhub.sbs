#!/bin/bash

###############################################################################
# DevHub.sbs Update Script
#
# Quick update script for pulling latest changes and reloading Nginx
# Run with: sudo bash deploy/update.sh
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

# Main update process
main() {
    print_status "Quick update for $DOMAIN"
    echo "============================================"

    check_root

    if [ ! -d "$WEB_ROOT" ]; then
        print_error "Website directory not found: $WEB_ROOT"
        print_status "Run deploy.sh first to setup the website"
        exit 1
    fi

    cd "$WEB_ROOT"

    # Show current status
    print_status "Current status:"
    echo "  Branch: $(git branch --show-current)"
    echo "  Last commit: $(git log -1 --oneline)"
    echo ""

    # Check for uncommitted changes
    if [[ -n $(git status -s) ]]; then
        print_warning "Found uncommitted changes:"
        git status -s
        echo ""
        read -p "Continue and discard local changes? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_status "Update cancelled"
            exit 0
        fi
    fi

    # Create backup before update
    print_status "Creating backup..."
    BACKUP_DIR="/var/backups/devhub.sbs/backup-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$BACKUP_DIR"
    cp -r docs "$BACKUP_DIR/" 2>/dev/null || true
    print_success "Backup created at $BACKUP_DIR"

    # Fetch latest changes
    print_status "Fetching latest changes..."
    git fetch origin

    # Show what will be updated
    print_status "Changes to be applied:"
    git log --oneline HEAD..origin/$(git branch --show-current) || git log --oneline HEAD..origin/main
    echo ""

    # Pull latest changes
    print_status "Pulling latest changes..."
    CURRENT_BRANCH=$(git branch --show-current)
    if [ -z "$CURRENT_BRANCH" ]; then
        CURRENT_BRANCH="main"
    fi
    git reset --hard origin/$CURRENT_BRANCH || git reset --hard origin/main
    print_success "Repository updated"

    # Update permissions
    print_status "Updating permissions..."
    chown -R www-data:www-data "$WEB_ROOT"
    find "$WEB_ROOT/docs" -type f -exec chmod 644 {} \;
    find "$WEB_ROOT/docs" -type d -exec chmod 755 {} \;
    print_success "Permissions updated"

    # Test Nginx configuration
    print_status "Testing Nginx configuration..."
    if nginx -t 2>&1; then
        print_success "Nginx configuration is valid"
    else
        print_error "Nginx configuration test failed"
        print_warning "Restoring from backup..."
        rm -rf "$WEB_ROOT/docs"
        cp -r "$BACKUP_DIR/docs" "$WEB_ROOT/"
        print_status "Backup restored. Please check the configuration"
        exit 1
    fi

    # Reload Nginx
    print_status "Reloading Nginx..."
    systemctl reload nginx
    print_success "Nginx reloaded"

    # Clear cache if needed (for future enhancements)
    if command -v redis-cli &> /dev/null; then
        print_status "Clearing Redis cache..."
        redis-cli FLUSHALL > /dev/null 2>&1 || true
        print_success "Cache cleared"
    fi

    # Display status
    echo ""
    echo "============================================"
    print_success "Update completed successfully!"
    echo "============================================"
    echo ""
    echo "Updated to:"
    git log -1 --pretty=format:"  Commit: %h%n  Author: %an%n  Date:   %ar%n  Message: %s%n"
    echo ""
    echo "Website is live at: http://$DOMAIN"
    echo ""

    # Check website is responding
    print_status "Testing website response..."
    if curl -s -o /dev/null -w "%{http_code}" "http://localhost" | grep -q "200\|301\|302"; then
        print_success "Website is responding"
    else
        print_warning "Website may not be responding correctly"
        print_status "Check logs: sudo tail -f /var/log/nginx/devhub.sbs-error.log"
    fi

    # Cleanup old backups (keep last 5)
    print_status "Cleaning up old backups..."
    cd /var/backups/devhub.sbs
    ls -t | tail -n +6 | xargs -r rm -rf
    print_success "Old backups cleaned up"

    echo ""
    print_status "Monitoring logs (Ctrl+C to exit):"
    echo "  Access logs: sudo tail -f /var/log/nginx/devhub.sbs-access.log"
    echo "  Error logs:  sudo tail -f /var/log/nginx/devhub.sbs-error.log"
    echo ""
}

# Rollback function
rollback() {
    print_warning "Rolling back to previous version..."

    cd "$WEB_ROOT"

    # Find latest backup
    LATEST_BACKUP=$(ls -t /var/backups/devhub.sbs/ | head -n 1)

    if [ -z "$LATEST_BACKUP" ]; then
        print_error "No backup found"
        exit 1
    fi

    print_status "Rolling back to: $LATEST_BACKUP"

    # Restore backup
    rm -rf "$WEB_ROOT/docs"
    cp -r "/var/backups/devhub.sbs/$LATEST_BACKUP/docs" "$WEB_ROOT/"

    # Update permissions
    chown -R www-data:www-data "$WEB_ROOT"
    find "$WEB_ROOT/docs" -type f -exec chmod 644 {} \;
    find "$WEB_ROOT/docs" -type d -exec chmod 755 {} \;

    # Reload Nginx
    systemctl reload nginx

    print_success "Rollback completed"
}

# Handle command line arguments
case "${1:-}" in
    --rollback)
        rollback
        ;;
    --help)
        echo "Usage: sudo bash update.sh [OPTIONS]"
        echo ""
        echo "Options:"
        echo "  (none)      Update to latest version"
        echo "  --rollback  Rollback to previous version"
        echo "  --help      Show this help message"
        echo ""
        ;;
    *)
        main "$@"
        ;;
esac
