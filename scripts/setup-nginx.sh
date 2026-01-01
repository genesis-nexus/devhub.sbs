#!/bin/bash

###############################################################################
# Multi-Site Nginx Setup Script
#
# Sets up Nginx as a multi-site reverse proxy/static file server.
# This script installs and configures Nginx with the multi-site architecture,
# then optionally adds the initial site (devhub.sbs).
#
# Prerequisites:
#   - Ubuntu/Debian-based system
#   - Run as root or with sudo
#
# Usage:
#   sudo ./setup-nginx.sh [options]
#
# Options:
#   --skip-devhub    Don't add devhub.sbs as initial site
#   --domain <name>  Primary domain for devhub site (default: devhub.sbs)
#   --help           Show this help message
###############################################################################

set -euo pipefail

# Configuration
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
readonly NGINX_CONF_SRC="${PROJECT_DIR}/nginx/nginx.conf"
readonly DEFAULT_CONF_SRC="${PROJECT_DIR}/nginx/default.conf"
readonly TEMPLATE_DIR="${PROJECT_DIR}/nginx/templates"

readonly NGINX_CONF_DEST="/etc/nginx/nginx.conf"
readonly NGINX_AVAILABLE="/etc/nginx/sites-available"
readonly NGINX_ENABLED="/etc/nginx/sites-enabled"
readonly DEFAULT_WEB_ROOT="/var/www"

# Default site configuration
DEVHUB_DOMAIN="devhub.sbs"
DEVHUB_DOC_ROOT="${PROJECT_DIR}/docs"
SKIP_DEVHUB=false

# Colors for output
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly CYAN='\033[0;36m'
readonly NC='\033[0m'

# Logging functions
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

show_usage() {
    cat << 'EOF'
Multi-Site Nginx Setup Script

Usage:
  sudo ./setup-nginx.sh [options]

Options:
  --skip-devhub      Don't add devhub.sbs as the initial site
  --domain <name>    Primary domain for devhub site (default: devhub.sbs)
  --help             Show this help message

This script will:
  1. Install Nginx if not present
  2. Install the multi-site nginx.conf
  3. Set up the default server configuration
  4. Install configuration templates
  5. Optionally add devhub.sbs as the first site
  6. Configure firewall rules

After setup, use manage-site.sh to add more sites:
  sudo ./manage-site.sh add mysite --domain mysite.com --type static

EOF
}

# Parse arguments
parse_args() {
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --skip-devhub)
                SKIP_DEVHUB=true
                shift
                ;;
            --domain)
                DEVHUB_DOMAIN="$2"
                shift 2
                ;;
            --help|-h)
                show_usage
                exit 0
                ;;
            *)
                log_error "Unknown option: $1"
                show_usage
                exit 1
                ;;
        esac
    done
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
    command -v nginx &> /dev/null
}

# Install Nginx
install_nginx() {
    log_info "Installing Nginx..."
    apt-get update -qq
    apt-get install -y nginx
    log_success "Nginx installed successfully"
}

# Backup existing configuration
backup_config() {
    local timestamp
    timestamp=$(date +%Y%m%d_%H%M%S)
    local backup_dir="/etc/nginx/backup_${timestamp}"

    if [[ -f "$NGINX_CONF_DEST" ]]; then
        log_info "Backing up existing configuration to ${backup_dir}..."
        mkdir -p "$backup_dir"
        cp "$NGINX_CONF_DEST" "${backup_dir}/nginx.conf"

        if [[ -d "$NGINX_AVAILABLE" ]]; then
            cp -r "$NGINX_AVAILABLE" "${backup_dir}/sites-available"
        fi
        if [[ -d "$NGINX_ENABLED" ]]; then
            cp -r "$NGINX_ENABLED" "${backup_dir}/sites-enabled"
        fi

        log_success "Backup created at ${backup_dir}"
    fi
}

# Install main nginx.conf
install_nginx_conf() {
    log_info "Installing multi-site nginx.conf..."

    if [[ ! -f "$NGINX_CONF_SRC" ]]; then
        log_error "nginx.conf not found at ${NGINX_CONF_SRC}"
        exit 1
    fi

    cp "$NGINX_CONF_SRC" "$NGINX_CONF_DEST"
    log_success "Installed nginx.conf"
}

# Create directory structure
create_directories() {
    log_info "Creating directory structure..."

    # Ensure sites-available and sites-enabled exist
    mkdir -p "$NGINX_AVAILABLE"
    mkdir -p "$NGINX_ENABLED"

    # Create default web root
    mkdir -p "${DEFAULT_WEB_ROOT}/default"

    # Create certbot directory for Let's Encrypt
    mkdir -p /var/www/certbot

    # Create template directory in /etc/nginx for reference
    mkdir -p /etc/nginx/templates

    log_success "Directory structure created"
}

# Install default server configuration (but don't enable it yet)
install_default_conf() {
    log_info "Preparing default server configuration (for multi-site use)..."

    if [[ ! -f "$DEFAULT_CONF_SRC" ]]; then
        log_warning "default.conf not found at ${DEFAULT_CONF_SRC}, skipping"
        return
    fi

    # Install to sites-available but DON'T enable
    # This will be enabled when user adds a second site
    cp "$DEFAULT_CONF_SRC" "${NGINX_AVAILABLE}/00-default.conf"
    # Note: NOT creating symlink to sites-enabled

    # Create default page directory and content (for future use)
    mkdir -p "${DEFAULT_WEB_ROOT}/default"
    cat > "${DEFAULT_WEB_ROOT}/default/index.html" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Ready</title>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        p { font-size: 1.2rem; opacity: 0.9; }
        code {
            background: rgba(255,255,255,0.2);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Server Ready</h1>
        <p>This server is configured but no site matches this domain.</p>
        <p>Add a site using: <code>manage-site.sh add</code></p>
    </div>
</body>
</html>
EOF

    chown -R www-data:www-data "${DEFAULT_WEB_ROOT}/default"
    log_success "Default server configuration prepared (not enabled - devhub.sbs handles default)"
}

# Install templates
install_templates() {
    log_info "Installing configuration templates..."

    if [[ -d "$TEMPLATE_DIR" ]]; then
        cp -r "${TEMPLATE_DIR}"/* /etc/nginx/templates/ 2>/dev/null || true
        log_success "Templates installed to /etc/nginx/templates/"
    else
        log_warning "Template directory not found, skipping template installation"
    fi
}

# Remove old default site
remove_old_defaults() {
    log_info "Removing old default configurations..."

    # Remove Ubuntu's default site
    rm -f "${NGINX_ENABLED}/default"
    rm -f "${NGINX_AVAILABLE}/default"

    log_success "Old defaults removed"
}

# Add devhub.sbs site
add_devhub_site() {
    log_info "Adding devhub.sbs site..."

    local devhub_conf_src="${PROJECT_DIR}/nginx/devhub.conf"
    local config_file="${NGINX_AVAILABLE}/devhub.conf"

    # Check if docs directory exists
    if [[ ! -d "$DEVHUB_DOC_ROOT" ]]; then
        log_error "Document root not found: ${DEVHUB_DOC_ROOT}"
        log_info "Ensure your website files are at this location"
        exit 1
    fi

    # Use the pre-configured devhub.conf (includes default_server for single-site setup)
    if [[ -f "$devhub_conf_src" ]]; then
        # Copy and adjust the document root path
        sed "s|root /var/www/devhub.sbs/docs;|root ${DEVHUB_DOC_ROOT};|g" "$devhub_conf_src" > "$config_file"
        log_info "Using devhub.conf with default_server (works with IP and domain access)"
    else
        # Fallback: generate from template
        log_warning "devhub.conf not found, generating from template..."
        local template="${TEMPLATE_DIR}/site-static.conf.template"
        if [[ ! -f "$template" ]]; then
            log_error "Static site template not found"
            exit 1
        fi
        local config
        config=$(cat "$template")
        config="${config//\{\{SITE_NAME\}\}/devhub}"
        config="${config//\{\{DOMAIN\}\}/${DEVHUB_DOMAIN}}"
        config="${config//\{\{DOMAIN_ALIASES\}\}/www.${DEVHUB_DOMAIN}}"
        config="${config//\{\{DOC_ROOT\}\}/${DEVHUB_DOC_ROOT}}"
        echo "$config" > "$config_file"
    fi

    # Enable the site
    ln -sf "$config_file" "${NGINX_ENABLED}/devhub.conf"

    # Set permissions
    chown -R www-data:www-data "$DEVHUB_DOC_ROOT"
    find "$DEVHUB_DOC_ROOT" -type f -exec chmod 644 {} \; 2>/dev/null || true
    find "$DEVHUB_DOC_ROOT" -type d -exec chmod 755 {} \; 2>/dev/null || true

    log_success "devhub.sbs site added (with default_server - accessible via IP and domain)"
}

# Install management script
install_management_script() {
    log_info "Installing site management script..."

    local manage_script="${SCRIPT_DIR}/manage-site.sh"

    if [[ -f "$manage_script" ]]; then
        chmod +x "$manage_script"
        # Create a symlink in /usr/local/bin for easy access
        ln -sf "$manage_script" /usr/local/bin/manage-site
        log_success "Management script installed. Use 'manage-site' from anywhere."
    else
        log_warning "manage-site.sh not found"
    fi
}

# Test Nginx configuration
test_nginx_config() {
    log_info "Testing Nginx configuration..."

    if nginx -t 2>&1 | grep -q "successful"; then
        log_success "Nginx configuration is valid"
        return 0
    else
        log_error "Nginx configuration test failed!"
        nginx -t
        return 1
    fi
}

# Enable and start Nginx
start_nginx() {
    log_info "Starting Nginx..."
    systemctl enable nginx
    systemctl restart nginx
    log_success "Nginx started"
}

# Configure firewall
configure_firewall() {
    if command -v ufw &> /dev/null; then
        log_info "Configuring firewall..."
        ufw allow 'Nginx Full' 2>/dev/null || {
            ufw allow 80/tcp
            ufw allow 443/tcp
        }
        log_success "Firewall configured for HTTP and HTTPS"
    fi
}

# Display summary
display_summary() {
    local server_ip
    server_ip=$(hostname -I 2>/dev/null | awk '{print $1}' || echo "unknown")

    echo ""
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║           MULTI-SITE NGINX SETUP COMPLETED                     ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""

    log_success "Nginx is configured as a multi-site reverse proxy!"
    echo ""
    echo "Server IP: ${server_ip}"
    echo ""

    if ! $SKIP_DEVHUB; then
        echo "Configured Sites:"
        echo "  • devhub: http://${DEVHUB_DOMAIN}"
        echo "    Document root: ${DEVHUB_DOC_ROOT}"
        echo ""
    fi

    echo "Key Locations:"
    echo "  • Main config:    /etc/nginx/nginx.conf"
    echo "  • Site configs:   /etc/nginx/sites-available/"
    echo "  • Enabled sites:  /etc/nginx/sites-enabled/"
    echo "  • Templates:      /etc/nginx/templates/"
    echo "  • Logs:           /var/log/nginx/"
    echo ""
    echo "Management Commands:"
    echo "  • Add a site:     manage-site add <name> --domain <domain> [options]"
    echo "  • Remove a site:  manage-site remove <name>"
    echo "  • List sites:     manage-site list"
    echo "  • Site status:    manage-site status <name>"
    echo "  • Enable site:    manage-site enable <name>"
    echo "  • Disable site:   manage-site disable <name>"
    echo ""
    echo "Examples:"
    echo "  manage-site add blog --domain blog.example.com --type static"
    echo "  manage-site add api --domain api.example.com --type proxy --upstream 127.0.0.1:3000"
    echo "  manage-site add secure --domain secure.example.com --ssl"
    echo ""
    echo "Useful Nginx Commands:"
    echo "  • Test config:    sudo nginx -t"
    echo "  • Reload:         sudo systemctl reload nginx"
    echo "  • Status:         sudo systemctl status nginx"
    echo "  • View logs:      sudo tail -f /var/log/nginx/<site>-access.log"
    echo ""
}

# Main execution
main() {
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║           Multi-Site Nginx Setup Script                        ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""

    parse_args "$@"
    check_root

    # Install Nginx if not present
    if ! check_nginx; then
        install_nginx
    else
        log_info "Nginx is already installed"
    fi

    # Backup existing configuration
    backup_config

    # Create directory structure
    create_directories

    # Remove old defaults
    remove_old_defaults

    # Install configurations
    install_nginx_conf
    install_default_conf
    install_templates

    # Add devhub site if not skipped
    if ! $SKIP_DEVHUB; then
        add_devhub_site
    fi

    # Install management script
    install_management_script

    # Test configuration
    if ! test_nginx_config; then
        log_error "Setup failed due to invalid configuration"
        exit 1
    fi

    # Start Nginx
    start_nginx

    # Configure firewall
    configure_firewall

    # Display summary
    display_summary
}

main "$@"
