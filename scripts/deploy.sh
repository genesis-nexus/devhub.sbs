#!/bin/bash
#
# DevHub SPA - Build and Deploy Script
# =====================================
# This script builds the React SPA and deploys it to an nginx server.
#
# Usage:
#   ./deploy.sh                    # Build and deploy locally
#   ./deploy.sh --remote           # Deploy to remote server
#   ./deploy.sh --build-only       # Just build, no deploy
#
# Configuration:
#   Edit the variables below to match your environment.
#

set -e  # Exit on error

# ============================================================================
# CONFIGURATION - Customize these variables
# ============================================================================

# Remote server settings (for --remote deployment)
REMOTE_USER="root"
REMOTE_HOST="your-server-ip"
REMOTE_PATH="/var/www/devhub.sbs"

# Local paths
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BUILD_DIR="${PROJECT_DIR}/docs"
NGINX_CONF="${PROJECT_DIR}/nginx/devhub.conf"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ============================================================================
# FUNCTIONS
# ============================================================================

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
    exit 1
}

print_header() {
    echo ""
    echo "=============================================="
    echo "  DevHub SPA - Build & Deploy"
    echo "=============================================="
    echo ""
}

check_prerequisites() {
    log_info "Checking prerequisites..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed. Please install Node.js 18+ first."
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed. Please install npm first."
    fi
    
    # Check if package.json exists
    if [ ! -f "${PROJECT_DIR}/package.json" ]; then
        log_error "package.json not found. Are you in the right directory?"
    fi
    
    log_success "All prerequisites met."
}

install_dependencies() {
    log_info "Installing dependencies..."
    cd "${PROJECT_DIR}"
    npm install --legacy-peer-deps
    log_success "Dependencies installed."
}

build_app() {
    log_info "Building production bundle..."
    cd "${PROJECT_DIR}"
    npm run build
    
    if [ ! -d "${BUILD_DIR}" ]; then
        log_error "Build failed. 'docs' directory not found."
    fi
    
    log_success "Build complete. Output: ${BUILD_DIR}"
}

deploy_local() {
    log_info "Deploying to local nginx..."
    
    # Check if nginx is installed
    if ! command -v nginx &> /dev/null; then
        log_error "nginx is not installed. Please install nginx first."
    fi
    
    # Copy nginx config
    if [ -f "${NGINX_CONF}" ]; then
        log_info "Installing nginx configuration..."
        sudo cp "${NGINX_CONF}" /etc/nginx/sites-available/devhub.conf
        sudo ln -sf /etc/nginx/sites-available/devhub.conf /etc/nginx/sites-enabled/
    fi
    
    # Create web directory if it doesn't exist
    sudo mkdir -p /var/www/devhub.sbs
    
    # Copy build files
    log_info "Copying build files to /var/www/devhub.sbs/docs..."
    sudo rm -rf /var/www/devhub.sbs/docs
    sudo cp -r "${BUILD_DIR}" /var/www/devhub.sbs/
    
    # Set permissions
    log_info "Setting permissions..."
    sudo chown -R www-data:www-data /var/www/devhub.sbs
    sudo find /var/www/devhub.sbs/docs -type f -exec chmod 644 {} \;
    sudo find /var/www/devhub.sbs/docs -type d -exec chmod 755 {} \;
    
    # Test and reload nginx
    log_info "Testing nginx configuration..."
    sudo nginx -t || log_error "Nginx configuration test failed."
    
    log_info "Reloading nginx..."
    sudo systemctl reload nginx
    
    log_success "Local deployment complete!"
}

deploy_remote() {
    log_info "Deploying to remote server: ${REMOTE_USER}@${REMOTE_HOST}"
    
    # Check if ssh is available
    if ! command -v ssh &> /dev/null; then
        log_error "SSH is not installed."
    fi
    
    # Check if rsync is available
    if ! command -v rsync &> /dev/null; then
        log_error "rsync is not installed. Please install rsync first."
    fi
    
    # Sync build files
    log_info "Syncing build files..."
    rsync -avz --delete \
        -e "ssh" \
        "${BUILD_DIR}/" \
        "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/docs/"
    
    # Copy nginx config
    log_info "Updating nginx configuration..."
    rsync -avz \
        -e "ssh" \
        "${NGINX_CONF}" \
        "${REMOTE_USER}@${REMOTE_HOST}:/etc/nginx/sites-available/devhub.conf"
    
    # Set permissions and reload nginx on remote
    log_info "Setting permissions and reloading nginx..."
    ssh "${REMOTE_USER}@${REMOTE_HOST}" << 'EOF'
        # Ensure symlink exists
        ln -sf /etc/nginx/sites-available/devhub.conf /etc/nginx/sites-enabled/
        
        # Set permissions
        chown -R www-data:www-data /var/www/devhub.sbs
        find /var/www/devhub.sbs/docs -type f -exec chmod 644 {} \;
        find /var/www/devhub.sbs/docs -type d -exec chmod 755 {} \;
        
        # Test and reload nginx
        nginx -t && systemctl reload nginx
        echo "Nginx reloaded successfully."
EOF
    
    log_success "Remote deployment complete!"
}

print_summary() {
    echo ""
    echo "=============================================="
    echo "  Deployment Summary"
    echo "=============================================="
    echo ""
    echo "  Build Directory: ${BUILD_DIR}"
    echo "  Files deployed:  $(find ${BUILD_DIR} -type f | wc -l) files"
    echo "  Total size:      $(du -sh ${BUILD_DIR} | cut -f1)"
    echo ""
    
    if [ "$1" == "remote" ]; then
        echo "  Deployed to:     ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
        echo "  URL:             https://devhub360.com"
    else
        echo "  Deployed to:     /var/www/devhub.sbs/docs"
        echo "  URL:             http://localhost or https://devhub360.com"
    fi
    echo ""
    echo "=============================================="
}

show_help() {
    echo "DevHub SPA - Build & Deploy Script"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --build-only    Build the app but don't deploy"
    echo "  --remote        Deploy to remote server (configure REMOTE_* vars)"
    echo "  --skip-build    Skip build step, deploy existing build"
    echo "  --help          Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                   # Build and deploy to local nginx"
    echo "  $0 --remote          # Build and deploy to remote server"
    echo "  $0 --build-only      # Just build, don't deploy"
    echo "  $0 --skip-build      # Deploy existing build"
    echo ""
}

# ============================================================================
# MAIN
# ============================================================================

print_header

# Parse arguments
BUILD=true
DEPLOY_TYPE="local"

while [[ $# -gt 0 ]]; do
    case $1 in
        --build-only)
            DEPLOY_TYPE="none"
            shift
            ;;
        --remote)
            DEPLOY_TYPE="remote"
            shift
            ;;
        --skip-build)
            BUILD=false
            shift
            ;;
        --help|-h)
            show_help
            exit 0
            ;;
        *)
            log_error "Unknown option: $1. Use --help for usage."
            ;;
    esac
done

# Execute
check_prerequisites

if [ "$BUILD" = true ]; then
    install_dependencies
    build_app
fi

case $DEPLOY_TYPE in
    local)
        deploy_local
        print_summary "local"
        ;;
    remote)
        deploy_remote
        print_summary "remote"
        ;;
    none)
        log_success "Build complete. Skipping deployment."
        print_summary "build"
        ;;
esac

log_success "All done! 🎉"
