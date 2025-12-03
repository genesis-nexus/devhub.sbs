# DevHub.sbs - Static Website Deployment

Professional Nginx deployment for DevHub.sbs static website following industry best practices.

## Quick Start

### Prerequisites
- Ubuntu Server 20.04+
- Website files at `/var/www/devhub.sbs/docs/`
- Root/sudo access

### Deploy in 3 Steps

1. **Copy setup script to server:**
   ```bash
   scp scripts/setup-nginx.sh user@your-server:/tmp/
   ```

2. **SSH and run setup:**
   ```bash
   ssh user@your-server
   sudo bash /tmp/setup-nginx.sh
   ```

3. **Access your website:**
   ```
   http://YOUR_SERVER_IP
   ```

## Project Structure

```
devhub.sbs/
├── nginx/
│   └── devhub.conf          # Standard Nginx configuration
├── scripts/
│   └── setup-nginx.sh       # Automated setup script
├── docs/                     # Your website files (deploy to /var/www/devhub.sbs/docs/)
├── DEPLOYMENT.txt           # Complete deployment guide
└── README.md               # This file
```

## What Gets Deployed

### On Server

```
/etc/nginx/
├── sites-available/
│   └── devhub.conf          # Your site config
└── sites-enabled/
    └── devhub.conf          # Symlink (active)

/var/www/devhub.sbs/
└── docs/                    # Your static files
    ├── index.html
    ├── styles.css
    └── ...

/var/log/nginx/
├── devhub-access.log        # Access logs
└── devhub-error.log         # Error logs
```

## Configuration Highlights

The Nginx configuration (`nginx/devhub.conf`) includes:

- ✅ **IP Address Access**: `server_name _;` catches all requests
- ✅ **Default Server**: Responds to IP address and domain names
- ✅ **Gzip Compression**: Enabled for faster loading
- ✅ **Static Caching**: 1-year cache for assets
- ✅ **Security Headers**: X-Frame-Options, CSP, etc.
- ✅ **Clean URLs**: SPA-friendly routing

## Access Methods

Your site will be accessible via:

- **IP Address**: `http://YOUR_SERVER_IP`
- **Domain**: `http://devhub.sbs` (when DNS configured)
- **Any hostname** pointing to your server

## Manual Setup

If you prefer manual configuration, see [DEPLOYMENT.txt](DEPLOYMENT.txt) for step-by-step instructions.

## Useful Commands

```bash
# Test Nginx configuration
sudo nginx -t

# Reload Nginx (after config changes)
sudo systemctl reload nginx

# Check Nginx status
sudo systemctl status nginx

# View access logs
sudo tail -f /var/log/nginx/devhub-access.log

# View error logs
sudo tail -f /var/log/nginx/devhub-error.log

# Get server IP
hostname -I | awk '{print $1}'
```

## Updating Website

To update your website content:

1. Upload new files to `/var/www/devhub.sbs/docs/`
2. Ensure proper permissions (www-data:www-data)
3. No Nginx restart needed (static files)

## Firewall Configuration

### Ubuntu (UFW)
```bash
sudo ufw allow 80/tcp
```

### Cloud Providers
If using AWS, DigitalOcean, Google Cloud, or Azure, also configure their firewall/security groups to allow port 80.

## Troubleshooting

### Website not accessible
```bash
# Check Nginx status
sudo systemctl status nginx

# Check firewall
sudo ufw status

# Test locally
curl -I http://localhost
```

### 403 Forbidden
```bash
# Fix permissions
sudo chown -R www-data:www-data /var/www/devhub.sbs
sudo chmod -R 755 /var/www/devhub.sbs/docs
```

See [DEPLOYMENT.txt](DEPLOYMENT.txt) for more troubleshooting steps.

## Adding HTTPS (Optional)

To enable HTTPS with Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d devhub.sbs -d www.devhub.sbs
```

## Documentation

- **[DEPLOYMENT.txt](DEPLOYMENT.txt)** - Complete deployment guide
- **[nginx/devhub.conf](nginx/devhub.conf)** - Nginx configuration with comments
- **[scripts/setup-nginx.sh](scripts/setup-nginx.sh)** - Automated setup script

## Best Practices

This setup follows Nginx best practices:

- ✅ Standard directory structure (`sites-available`/`sites-enabled`)
- ✅ Proper file permissions (www-data:www-data, 644/755)
- ✅ Separate configuration files
- ✅ Comprehensive logging
- ✅ Security headers
- ✅ Performance optimization (gzip, caching)
- ✅ Systemd service management

## License

MIT

## Support

For issues or questions, refer to:
- [DEPLOYMENT.txt](DEPLOYMENT.txt) for detailed guide
- Nginx documentation: https://nginx.org/en/docs/
