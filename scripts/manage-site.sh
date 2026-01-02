#!/bin/bash

###############################################################################
# Multi-Site Management Script
#
# Manages Nginx site configurations for multiple websites.
# Add, remove, enable, disable, and list sites with ease.
#
# Usage:
#   sudo ./manage-site.sh add <site-name> --domain <domain> [options]
#   sudo ./manage-site.sh remove <site-name>
#   sudo ./manage-site.sh enable <site-name>
#   sudo ./manage-site.sh disable <site-name>
#   sudo ./manage-site.sh list
#   sudo ./manage-site.sh status <site-name>
#
# Examples:
#   sudo ./manage-site.sh add mysite --domain mysite.com --type static --doc-root /var/www/mysite
#   sudo ./manage-site.sh add api --domain api.mysite.com --type proxy --upstream 127.0.0.1:3000
#   sudo ./manage-site.sh add mysite --domain mysite.com --type static --ssl
###############################################################################

set -euo pipefail

# Configuration
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly TEMPLATE_DIR="${SCRIPT_DIR}/../nginx/templates"
readonly NGINX_AVAILABLE="/etc/nginx/sites-available"
readonly NGINX_ENABLED="/etc/nginx/sites-enabled"
readonly DEFAULT_WEB_ROOT="/var/www"

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

# Check if running as root
check_root() {
    if [[ "${EUID}" -ne 0 ]]; then
        log_error "This script must be run as root or with sudo"
        exit 1
    fi
}

# Show usage
show_usage() {
    cat << 'EOF'
Multi-Site Management Script

Usage:
  manage-site.sh <command> [options]

Commands:
  add <site-name>     Add a new site
  remove <site-name>  Remove a site (config only, keeps files)
  enable <site-name>  Enable a disabled site
  disable <site-name> Disable a site (without removing)
  list                List all sites and their status
  status <site-name>  Show detailed status of a site

Options for 'add' command:
  --domain <domain>       Primary domain name (required)
  --aliases <domains>     Additional domain aliases (space-separated, quoted)
  --type <static|proxy>   Site type (default: static)
  --doc-root <path>       Document root for static sites
  --upstream <host:port>  Upstream server for proxy sites
  --ssl                   Enable SSL (requires certbot)
  --no-enable            Don't enable the site after creating

Examples:
  # Add a static website
  manage-site.sh add blog --domain blog.example.com --doc-root /var/www/blog

  # Add a static site with domain aliases
  manage-site.sh add mysite --domain example.com --aliases "www.example.com"

  # Add a reverse proxy
  manage-site.sh add api --domain api.example.com --type proxy --upstream 127.0.0.1:3000

  # Add with SSL
  manage-site.sh add secure --domain secure.example.com --type static --ssl

  # List all sites
  manage-site.sh list

EOF
}

# Validate site name
validate_site_name() {
    local name="$1"
    if [[ ! "$name" =~ ^[a-zA-Z0-9][a-zA-Z0-9_-]*$ ]]; then
        log_error "Invalid site name. Use alphanumeric characters, hyphens, and underscores only."
        exit 1
    fi
}

# Check if site exists
site_exists() {
    local name="$1"
    [[ -f "${NGINX_AVAILABLE}/${name}.conf" ]]
}

# Check if site is enabled
site_enabled() {
    local name="$1"
    [[ -L "${NGINX_ENABLED}/${name}.conf" ]]
}

# Check if this is the first additional site (transition to multi-site)
check_multisite_transition() {
    local devhub_conf="${NGINX_AVAILABLE}/devhub.conf"
    local default_conf="${NGINX_AVAILABLE}/00-default.conf"
    local default_enabled="${NGINX_ENABLED}/00-default.conf"

    # Check if devhub.conf has default_server (single-site mode)
    if [[ -f "$devhub_conf" ]] && grep -q "default_server" "$devhub_conf"; then
        log_info "Transitioning to multi-site mode..."

        # 1. Enable the default server config if it exists
        if [[ -f "$default_conf" ]] && [[ ! -L "$default_enabled" ]]; then
            ln -sf "$default_conf" "$default_enabled"
            log_success "Enabled 00-default.conf as catch-all server"
        fi

        # 2. Remove default_server and catch-all from devhub.conf
        sed -i.bak \
            -e 's/listen 80 default_server;/listen 80;/' \
            -e 's/listen \[::\]:80 default_server;/listen [::]:80;/' \
            -e 's/server_name devhub.sbs www.devhub.sbs _;/server_name devhub.sbs www.devhub.sbs;/' \
            "$devhub_conf"
        rm -f "${devhub_conf}.bak"

        log_success "Updated devhub.conf for multi-site mode (removed default_server)"
        log_info "devhub.sbs now responds only to its specific domain"
    fi
}

# Generate config from template
generate_config() {
    local template="$1"
    local output="$2"
    local site_name="$3"
    local domain="$4"
    local aliases="${5:-}"
    local doc_root="${6:-}"
    local upstream_host="${7:-}"
    local upstream_port="${8:-}"

    if [[ ! -f "$template" ]]; then
        log_error "Template not found: $template"
        exit 1
    fi

    # Read template and replace variables
    local config
    config=$(cat "$template")

    config="${config//\{\{SITE_NAME\}\}/$site_name}"
    config="${config//\{\{DOMAIN\}\}/$domain}"
    config="${config//\{\{DOMAIN_ALIASES\}\}/$aliases}"
    config="${config//\{\{DOC_ROOT\}\}/$doc_root}"
    config="${config//\{\{UPSTREAM_HOST\}\}/$upstream_host}"
    config="${config//\{\{UPSTREAM_PORT\}\}/$upstream_port}"

    echo "$config" > "$output"
}

# Add a new site
cmd_add() {
    local site_name=""
    local domain=""
    local aliases=""
    local site_type="static"
    local doc_root=""
    local upstream=""
    local enable_ssl=false
    local auto_enable=true

    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --domain)
                domain="$2"
                shift 2
                ;;
            --aliases)
                aliases="$2"
                shift 2
                ;;
            --type)
                site_type="$2"
                shift 2
                ;;
            --doc-root)
                doc_root="$2"
                shift 2
                ;;
            --upstream)
                upstream="$2"
                shift 2
                ;;
            --ssl)
                enable_ssl=true
                shift
                ;;
            --no-enable)
                auto_enable=false
                shift
                ;;
            -*)
                log_error "Unknown option: $1"
                show_usage
                exit 1
                ;;
            *)
                if [[ -z "$site_name" ]]; then
                    site_name="$1"
                fi
                shift
                ;;
        esac
    done

    # Validate inputs
    if [[ -z "$site_name" ]]; then
        log_error "Site name is required"
        show_usage
        exit 1
    fi

    validate_site_name "$site_name"

    if [[ -z "$domain" ]]; then
        log_error "--domain is required"
        exit 1
    fi

    if site_exists "$site_name"; then
        log_error "Site '$site_name' already exists"
        exit 1
    fi

    # Set defaults and validate by type
    case "$site_type" in
        static)
            if [[ -z "$doc_root" ]]; then
                doc_root="${DEFAULT_WEB_ROOT}/${site_name}"
            fi

            if $enable_ssl; then
                template="${TEMPLATE_DIR}/site-static-ssl.conf.template"
            else
                template="${TEMPLATE_DIR}/site-static.conf.template"
            fi
            ;;
        proxy)
            if [[ -z "$upstream" ]]; then
                log_error "--upstream is required for proxy type"
                exit 1
            fi

            # Parse upstream host:port
            local upstream_host upstream_port
            upstream_host="${upstream%:*}"
            upstream_port="${upstream#*:}"

            if [[ "$upstream_host" == "$upstream_port" ]]; then
                log_error "Invalid upstream format. Use host:port (e.g., 127.0.0.1:3000)"
                exit 1
            fi

            if $enable_ssl; then
                template="${TEMPLATE_DIR}/site-proxy-ssl.conf.template"
            else
                template="${TEMPLATE_DIR}/site-proxy.conf.template"
            fi
            ;;
        *)
            log_error "Unknown site type: $site_type. Use 'static' or 'proxy'"
            exit 1
            ;;
    esac

    log_info "Adding site: $site_name"
    log_info "  Domain: $domain"
    [[ -n "$aliases" ]] && log_info "  Aliases: $aliases"
    log_info "  Type: $site_type"

    # Check if we need to transition to multi-site mode
    check_multisite_transition

    # Create document root for static sites
    if [[ "$site_type" == "static" ]]; then
        log_info "  Document root: $doc_root"
        if [[ ! -d "$doc_root" ]]; then
            log_info "Creating document root directory..."
            mkdir -p "$doc_root"
            chown -R www-data:www-data "$doc_root"
            chmod 755 "$doc_root"

            # Create a placeholder index.html
            cat > "${doc_root}/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to ${domain}</title>
    <style>
        body { font-family: system-ui, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
        h1 { color: #333; }
        p { color: #666; line-height: 1.6; }
    </style>
</head>
<body>
    <h1>Welcome to ${domain}</h1>
    <p>This site is successfully configured but has no content yet.</p>
    <p>Replace this file at: <code>${doc_root}/index.html</code></p>
</body>
</html>
EOF
            chown www-data:www-data "${doc_root}/index.html"
            log_success "Created document root with placeholder page"
        fi
    else
        log_info "  Upstream: $upstream"
    fi

    # Generate configuration
    local config_file="${NGINX_AVAILABLE}/${site_name}.conf"

    if [[ "$site_type" == "static" ]]; then
        generate_config "$template" "$config_file" "$site_name" "$domain" "$aliases" "$doc_root" "" ""
    else
        generate_config "$template" "$config_file" "$site_name" "$domain" "$aliases" "" "$upstream_host" "$upstream_port"
    fi

    log_success "Configuration created: $config_file"

    # Handle SSL
    if $enable_ssl; then
        log_info "SSL enabled - ensure you have certificates at /etc/letsencrypt/live/${domain}/"
        log_info "Run: sudo certbot certonly --nginx -d ${domain}"
    fi

    # Enable site
    if $auto_enable; then
        ln -sf "$config_file" "${NGINX_ENABLED}/${site_name}.conf"
        log_success "Site enabled"

        # Test and reload nginx
        if nginx -t 2>&1 | grep -q "successful"; then
            systemctl reload nginx
            log_success "Nginx reloaded"
        else
            log_error "Nginx configuration test failed!"
            nginx -t
            rm -f "${NGINX_ENABLED}/${site_name}.conf"
            log_warning "Site disabled due to configuration error"
            exit 1
        fi
    else
        log_info "Site created but not enabled. Run: manage-site.sh enable $site_name"
    fi

    echo ""
    log_success "Site '$site_name' added successfully!"
    echo "  URL: http://${domain}"
    if $enable_ssl; then
        echo "  URL (SSL): https://${domain}"
    fi
}

# Remove a site
cmd_remove() {
    local site_name="$1"

    if [[ -z "$site_name" ]]; then
        log_error "Site name is required"
        exit 1
    fi

    if ! site_exists "$site_name"; then
        log_error "Site '$site_name' does not exist"
        exit 1
    fi

    log_warning "This will remove the Nginx configuration for '$site_name'"
    log_warning "Website files will NOT be deleted"
    read -p "Are you sure? (y/N): " confirm

    if [[ "${confirm,,}" != "y" ]]; then
        log_info "Cancelled"
        exit 0
    fi

    # Disable first if enabled
    if site_enabled "$site_name"; then
        rm -f "${NGINX_ENABLED}/${site_name}.conf"
        log_info "Site disabled"
    fi

    # Remove config
    rm -f "${NGINX_AVAILABLE}/${site_name}.conf"
    log_success "Configuration removed"

    # Reload nginx
    if nginx -t 2>&1 | grep -q "successful"; then
        systemctl reload nginx
        log_success "Nginx reloaded"
    fi

    log_success "Site '$site_name' removed"
}

# Enable a site
cmd_enable() {
    local site_name="$1"

    if [[ -z "$site_name" ]]; then
        log_error "Site name is required"
        exit 1
    fi

    if ! site_exists "$site_name"; then
        log_error "Site '$site_name' does not exist"
        exit 1
    fi

    if site_enabled "$site_name"; then
        log_warning "Site '$site_name' is already enabled"
        exit 0
    fi

    ln -sf "${NGINX_AVAILABLE}/${site_name}.conf" "${NGINX_ENABLED}/${site_name}.conf"

    if nginx -t 2>&1 | grep -q "successful"; then
        systemctl reload nginx
        log_success "Site '$site_name' enabled and Nginx reloaded"
    else
        log_error "Nginx configuration test failed!"
        nginx -t
        rm -f "${NGINX_ENABLED}/${site_name}.conf"
        exit 1
    fi
}

# Disable a site
cmd_disable() {
    local site_name="$1"

    if [[ -z "$site_name" ]]; then
        log_error "Site name is required"
        exit 1
    fi

    if ! site_exists "$site_name"; then
        log_error "Site '$site_name' does not exist"
        exit 1
    fi

    if ! site_enabled "$site_name"; then
        log_warning "Site '$site_name' is already disabled"
        exit 0
    fi

    rm -f "${NGINX_ENABLED}/${site_name}.conf"

    if nginx -t 2>&1 | grep -q "successful"; then
        systemctl reload nginx
        log_success "Site '$site_name' disabled and Nginx reloaded"
    fi
}

# List all sites
cmd_list() {
    echo ""
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║                     Configured Sites                           ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""

    local has_sites=false

    for conf in "${NGINX_AVAILABLE}"/*.conf; do
        if [[ -f "$conf" ]]; then
            has_sites=true
            local name
            name=$(basename "$conf" .conf)

            local status_color status_text
            if site_enabled "$name"; then
                status_color="${GREEN}"
                status_text="ENABLED"
            else
                status_color="${YELLOW}"
                status_text="DISABLED"
            fi

            # Extract domain from config
            local domain
            domain=$(grep -m1 "server_name" "$conf" 2>/dev/null | awk '{print $2}' | tr -d ';' || echo "unknown")

            printf "  ${CYAN}%-20s${NC} ${status_color}%-10s${NC} %s\n" "$name" "$status_text" "$domain"
        fi
    done

    if ! $has_sites; then
        echo "  No sites configured"
    fi

    echo ""
}

# Show site status
cmd_status() {
    local site_name="$1"

    if [[ -z "$site_name" ]]; then
        log_error "Site name is required"
        exit 1
    fi

    if ! site_exists "$site_name"; then
        log_error "Site '$site_name' does not exist"
        exit 1
    fi

    local config_file="${NGINX_AVAILABLE}/${site_name}.conf"

    echo ""
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║                     Site Status: ${site_name}"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""

    # Status
    if site_enabled "$site_name"; then
        echo -e "  Status:      ${GREEN}ENABLED${NC}"
    else
        echo -e "  Status:      ${YELLOW}DISABLED${NC}"
    fi

    # Extract info from config
    local domain root upstream

    domain=$(grep -m1 "server_name" "$config_file" 2>/dev/null | sed 's/.*server_name\s*//' | tr -d ';' || echo "")
    echo "  Domain(s):   $domain"

    root=$(grep -m1 "^\s*root" "$config_file" 2>/dev/null | awk '{print $2}' | tr -d ';' || echo "")
    if [[ -n "$root" ]]; then
        echo "  Document Root: $root"
        if [[ -d "$root" ]]; then
            echo -e "  Root Exists: ${GREEN}Yes${NC}"
        else
            echo -e "  Root Exists: ${RED}No${NC}"
        fi
    fi

    upstream=$(grep -m1 "proxy_pass" "$config_file" 2>/dev/null | awk '{print $2}' | tr -d ';' || echo "")
    if [[ -n "$upstream" ]]; then
        echo "  Upstream:    $upstream"
    fi

    # SSL
    if grep -q "listen 443 ssl" "$config_file" 2>/dev/null; then
        echo -e "  SSL:         ${GREEN}Enabled${NC}"
    else
        echo -e "  SSL:         ${YELLOW}Disabled${NC}"
    fi

    echo ""
    echo "  Config File: $config_file"
    echo "  Access Log:  /var/log/nginx/${site_name}-access.log"
    echo "  Error Log:   /var/log/nginx/${site_name}-error.log"
    echo ""
}

# Main function
main() {
    if [[ $# -eq 0 ]]; then
        show_usage
        exit 0
    fi

    local command="$1"
    shift

    case "$command" in
        add)
            check_root
            cmd_add "$@"
            ;;
        remove|rm|delete)
            check_root
            cmd_remove "$@"
            ;;
        enable)
            check_root
            cmd_enable "$@"
            ;;
        disable)
            check_root
            cmd_disable "$@"
            ;;
        list|ls)
            cmd_list
            ;;
        status)
            cmd_status "$@"
            ;;
        help|--help|-h)
            show_usage
            ;;
        *)
            log_error "Unknown command: $command"
            show_usage
            exit 1
            ;;
    esac
}

main "$@"
