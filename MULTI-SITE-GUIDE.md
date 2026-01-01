# Multi-Site Nginx Reverse Proxy Guide

This guide explains how to configure and manage multiple websites using the Nginx multi-site architecture.

## Overview

This setup transforms Nginx into a flexible multi-site reverse proxy that can:
- Host multiple static websites on different domains
- Proxy traffic to backend applications (Node.js, Python, etc.)
- Support SSL/TLS with Let's Encrypt
- Manage sites with simple commands

## Architecture

```
                    ┌─────────────────────────────────────────┐
                    │           Nginx Reverse Proxy           │
                    │                                         │
                    │  ┌─────────────────────────────────┐   │
Internet ──────────►│  │   00-default.conf (catch-all)   │   │
                    │  └─────────────────────────────────┘   │
                    │                                         │
                    │  ┌─────────────────────────────────┐   │
site1.com ─────────►│  │        site1.conf               │───►│ /var/www/site1/
                    │  └─────────────────────────────────┘   │
                    │                                         │
                    │  ┌─────────────────────────────────┐   │
site2.com ─────────►│  │        site2.conf               │───►│ /var/www/site2/
                    │  └─────────────────────────────────┘   │
                    │                                         │
                    │  ┌─────────────────────────────────┐   │
api.site.com ──────►│  │        api.conf (proxy)         │───►│ 127.0.0.1:3000
                    │  └─────────────────────────────────┘   │
                    └─────────────────────────────────────────┘
```

## Quick Start

### Initial Setup

```bash
# 1. Clone or copy the repository to your server
scp -r /path/to/devhub.sbs user@server:/var/www/devhub.sbs

# 2. SSH to your server
ssh user@your-server

# 3. Run the setup script
cd /var/www/devhub.sbs
sudo ./scripts/setup-nginx.sh
```

### Adding a New Static Site

```bash
# Add a static website
sudo manage-site add myblog --domain blog.example.com --type static

# The script will:
# - Create /var/www/myblog/ with placeholder index.html
# - Generate Nginx configuration
# - Enable the site
# - Reload Nginx
```

### Adding a Reverse Proxy

```bash
# Proxy traffic to a Node.js app running on port 3000
sudo manage-site add api --domain api.example.com --type proxy --upstream 127.0.0.1:3000
```

### Adding with SSL

```bash
# First, get SSL certificate
sudo certbot certonly --nginx -d secure.example.com

# Then add site with SSL
sudo manage-site add secure --domain secure.example.com --type static --ssl
```

## Directory Structure

After setup, the server will have this structure:

```
/etc/nginx/
├── nginx.conf                    # Main config (global settings)
├── sites-available/              # All site configurations
│   ├── 00-default.conf          # Default/catch-all server
│   ├── devhub.conf              # DevHub.sbs configuration
│   ├── myblog.conf              # Your blog
│   └── api.conf                 # API proxy
├── sites-enabled/                # Enabled sites (symlinks)
│   ├── 00-default.conf → ../sites-available/00-default.conf
│   ├── devhub.conf → ../sites-available/devhub.conf
│   └── ...
└── templates/                    # Configuration templates
    ├── site-static.conf.template
    ├── site-static-ssl.conf.template
    ├── site-proxy.conf.template
    └── site-proxy-ssl.conf.template

/var/www/
├── default/                      # Default site root
├── devhub.sbs/docs/             # DevHub website files
├── myblog/                       # Your blog files
└── certbot/                      # Let's Encrypt challenges

/var/log/nginx/
├── access.log                    # Global access log
├── error.log                     # Global error log
├── devhub-access.log            # Per-site logs
├── devhub-error.log
├── myblog-access.log
└── myblog-error.log
```

## Management Commands

### List All Sites

```bash
sudo manage-site list
```

Output:
```
╔════════════════════════════════════════════════════════════════╗
║                     Configured Sites                           ║
╚════════════════════════════════════════════════════════════════╝

  00-default           ENABLED    _
  devhub               ENABLED    devhub.sbs
  myblog               ENABLED    blog.example.com
  api                  DISABLED   api.example.com
```

### Add a Site

```bash
# Static site with default document root (/var/www/sitename)
sudo manage-site add myblog --domain blog.example.com

# Static site with custom document root
sudo manage-site add myblog --domain blog.example.com --doc-root /home/user/blog/public

# Static site with domain aliases
sudo manage-site add myblog --domain blog.example.com --aliases "www.blog.example.com"

# Reverse proxy
sudo manage-site add api --domain api.example.com --type proxy --upstream 127.0.0.1:3000

# With SSL (certificate must exist)
sudo manage-site add secure --domain secure.example.com --ssl

# Create but don't enable
sudo manage-site add staging --domain staging.example.com --no-enable
```

### Remove a Site

```bash
sudo manage-site remove myblog
# Note: This removes the Nginx config but NOT the website files
```

### Enable/Disable Sites

```bash
# Disable a site (keeps config, stops serving)
sudo manage-site disable myblog

# Re-enable a site
sudo manage-site enable myblog
```

### Check Site Status

```bash
sudo manage-site status myblog
```

Output:
```
╔════════════════════════════════════════════════════════════════╗
║                     Site Status: myblog
╚════════════════════════════════════════════════════════════════╝

  Status:      ENABLED
  Domain(s):   blog.example.com www.blog.example.com
  Document Root: /var/www/myblog
  Root Exists: Yes
  SSL:         Disabled

  Config File: /etc/nginx/sites-available/myblog.conf
  Access Log:  /var/log/nginx/myblog-access.log
  Error Log:   /var/log/nginx/myblog-error.log
```

## Configuration Templates

### Static Site Template

The `site-static.conf.template` creates configurations for static websites with:
- SPA routing support (fallback to index.html)
- Static asset caching (1 year)
- Security headers
- Hidden file protection

### Proxy Site Template

The `site-proxy.conf.template` creates configurations for reverse proxies with:
- WebSocket support
- Proper header forwarding (X-Real-IP, X-Forwarded-For, etc.)
- Connection keepalive
- Configurable timeouts

### SSL Templates

Both static and proxy templates have SSL variants that include:
- HTTP to HTTPS redirect
- Modern TLS configuration (TLS 1.2+)
- OCSP stapling
- HSTS header
- Let's Encrypt integration

## Adding a New Website (Step by Step)

### Example: Adding a Blog

1. **Prepare your website files**
   ```bash
   # Option A: Let the script create the directory
   sudo manage-site add blog --domain blog.example.com
   # Then copy your files to /var/www/blog/

   # Option B: Specify existing directory
   sudo manage-site add blog --domain blog.example.com --doc-root /home/user/my-blog/dist
   ```

2. **Configure DNS**
   - Point `blog.example.com` to your server's IP address
   - Wait for DNS propagation (can take up to 48 hours)

3. **Add SSL (optional but recommended)**
   ```bash
   # Get certificate
   sudo certbot certonly --nginx -d blog.example.com

   # Recreate config with SSL
   sudo manage-site remove blog
   sudo manage-site add blog --domain blog.example.com --ssl
   ```

4. **Verify**
   ```bash
   curl -I https://blog.example.com
   ```

### Example: Adding an API Proxy

1. **Start your backend application**
   ```bash
   # Example: Node.js app
   cd /var/www/myapp
   npm start  # Runs on port 3000
   ```

2. **Add the proxy configuration**
   ```bash
   sudo manage-site add myapi --domain api.example.com --type proxy --upstream 127.0.0.1:3000
   ```

3. **Configure DNS and SSL**
   ```bash
   # Point api.example.com to your server
   # Then add SSL
   sudo certbot certonly --nginx -d api.example.com
   sudo manage-site remove myapi
   sudo manage-site add myapi --domain api.example.com --type proxy --upstream 127.0.0.1:3000 --ssl
   ```

## Manual Configuration

If you need custom configuration beyond what the templates provide:

1. **Copy a template**
   ```bash
   sudo cp /etc/nginx/templates/site-static.conf.template /etc/nginx/sites-available/custom.conf
   ```

2. **Edit the configuration**
   ```bash
   sudo nano /etc/nginx/sites-available/custom.conf
   # Replace {{SITE_NAME}}, {{DOMAIN}}, {{DOC_ROOT}} with actual values
   ```

3. **Enable the site**
   ```bash
   sudo ln -sf /etc/nginx/sites-available/custom.conf /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## SSL/TLS with Let's Encrypt

### Getting a Certificate

```bash
# For a single domain
sudo certbot certonly --nginx -d example.com

# For multiple domains
sudo certbot certonly --nginx -d example.com -d www.example.com

# Wildcard certificate (requires DNS validation)
sudo certbot certonly --manual --preferred-challenges=dns -d *.example.com
```

### Auto-Renewal

Certbot sets up automatic renewal. Test it with:

```bash
sudo certbot renew --dry-run
```

### Using SSL with Sites

After obtaining a certificate, use the `--ssl` flag when adding sites:

```bash
sudo manage-site add mysite --domain example.com --ssl
```

## Troubleshooting

### Site Not Loading

1. Check Nginx status:
   ```bash
   sudo systemctl status nginx
   ```

2. Test configuration:
   ```bash
   sudo nginx -t
   ```

3. Check logs:
   ```bash
   sudo tail -50 /var/log/nginx/error.log
   sudo tail -50 /var/log/nginx/mysite-error.log
   ```

### 502 Bad Gateway (for proxies)

1. Verify backend is running:
   ```bash
   curl http://127.0.0.1:3000  # or your upstream port
   ```

2. Check proxy configuration:
   ```bash
   cat /etc/nginx/sites-available/mysite.conf
   ```

### SSL Certificate Issues

1. Verify certificate exists:
   ```bash
   ls -la /etc/letsencrypt/live/example.com/
   ```

2. Check certificate validity:
   ```bash
   sudo certbot certificates
   ```

3. Renew if needed:
   ```bash
   sudo certbot renew
   ```

### DNS Not Resolving

1. Check DNS propagation:
   ```bash
   dig example.com
   # Or use: https://www.whatsmydns.net/
   ```

2. Verify server IP:
   ```bash
   hostname -I
   ```

## Best Practices

1. **Always test configuration before reloading**
   ```bash
   sudo nginx -t && sudo systemctl reload nginx
   ```

2. **Use specific domain names** instead of catch-all (`_`) for production sites

3. **Enable SSL** for all production sites

4. **Monitor logs** regularly
   ```bash
   sudo tail -f /var/log/nginx/access.log
   ```

5. **Keep Nginx updated**
   ```bash
   sudo apt update && sudo apt upgrade nginx
   ```

6. **Backup configurations** before major changes
   ```bash
   sudo cp -r /etc/nginx /etc/nginx.backup.$(date +%Y%m%d)
   ```

## Common Nginx Commands

```bash
# Test configuration
sudo nginx -t

# Reload (graceful - no downtime)
sudo systemctl reload nginx

# Restart (full restart)
sudo systemctl restart nginx

# View status
sudo systemctl status nginx

# View access logs
sudo tail -f /var/log/nginx/access.log

# View error logs
sudo tail -f /var/log/nginx/error.log

# Check which sites are enabled
ls -la /etc/nginx/sites-enabled/
```

## Migrating from Single-Site Setup

If you have an existing single-site Nginx configuration:

1. **Backup current configuration**
   ```bash
   sudo cp -r /etc/nginx /etc/nginx.backup
   ```

2. **Run the setup script**
   ```bash
   sudo ./scripts/setup-nginx.sh --skip-devhub
   ```

3. **Re-add your site with specific domain**
   ```bash
   sudo manage-site add mysite --domain mysite.com --doc-root /var/www/mysite
   ```

4. **Remove the old default configuration** if still present
   ```bash
   sudo rm /etc/nginx/sites-enabled/default
   sudo systemctl reload nginx
   ```
