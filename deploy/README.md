# Deployment Scripts

This directory contains all the scripts needed to deploy and maintain DevHub.sbs on an Ubuntu server.

## Quick Start

### 1. Initial Server Setup
Run this once on a fresh Ubuntu server:
```bash
sudo bash deploy/setup-server.sh
```

### 2. Deploy Website
Deploy or redeploy the website:
```bash
sudo bash deploy/deploy.sh
```

### 3. Setup SSL Certificate
Get a free SSL certificate:
```bash
sudo certbot --nginx -d devhub.sbs -d www.devhub.sbs
```

## Available Scripts

### `setup-server.sh`
**Purpose**: Prepare a fresh Ubuntu server for hosting DevHub.sbs

**What it does**:
- Updates system packages
- Installs Nginx, Git, Certbot, and other dependencies
- Configures firewall (UFW)
- Optimizes Nginx configuration
- Installs and configures fail2ban for security
- Sets up log rotation
- Enables automatic security updates

**Usage**:
```bash
sudo bash deploy/setup-server.sh
```

**Run this**: Once, on a new server

---

### `deploy.sh`
**Purpose**: Deploy or update the website

**What it does**:
- Clones or pulls latest code from Git repository
- Creates backup before updating
- Sets correct file permissions
- Installs Nginx configuration
- Tests and reloads Nginx

**Usage**:
```bash
sudo bash deploy/deploy.sh
```

**Run this**:
- Once after `setup-server.sh`
- Anytime you want to deploy updates

---

### `update.sh`
**Purpose**: Quick update script for pulling latest changes

**What it does**:
- Creates backup before updating
- Shows what changes will be applied
- Pulls latest code from Git
- Updates permissions
- Tests and reloads Nginx
- Cleans up old backups (keeps last 5)

**Usage**:
```bash
# Update to latest version
sudo bash deploy/update.sh

# Rollback to previous version
sudo bash deploy/update.sh --rollback
```

**Run this**: Anytime you want to quickly update the website

---

### `nginx.conf`
**Purpose**: Nginx configuration file for DevHub.sbs

**Features**:
- HTTP/2 support
- Gzip compression
- Security headers
- Static asset caching
- SSL/TLS configuration (activated after certbot)
- Redirects www to non-www
- Custom error pages

**Installation**:
Automatically installed by `deploy.sh`

**Manual installation**:
```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/devhub.sbs
sudo ln -s /etc/nginx/sites-available/devhub.sbs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Common Tasks

### View Logs
```bash
# Access logs
sudo tail -f /var/log/nginx/devhub.sbs-access.log

# Error logs
sudo tail -f /var/log/nginx/devhub.sbs-error.log
```

### Check Status
```bash
# Nginx status
sudo systemctl status nginx

# Test Nginx configuration
sudo nginx -t
```

### Manual Backup
```bash
# Backup website files
sudo tar -czf ~/devhub-backup-$(date +%Y%m%d).tar.gz /var/www/devhub.sbs/docs

# Backup Nginx configuration
sudo tar -czf ~/nginx-backup-$(date +%Y%m%d).tar.gz /etc/nginx
```

### Restore from Backup
```bash
# List available backups
ls -lh /var/backups/devhub.sbs/

# Restore specific backup
sudo cp -r /var/backups/devhub.sbs/backup-YYYYMMDD-HHMMSS/docs /var/www/devhub.sbs/
sudo systemctl reload nginx
```

### SSL Certificate Management
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Test renewal process
sudo certbot renew --dry-run
```

## Deployment Workflow

### For Regular Updates
1. Commit and push changes to GitHub
2. SSH into server
3. Run: `sudo bash deploy/update.sh`

### For Major Changes
1. Test locally first
2. Commit and push to GitHub
3. SSH into server
4. Run: `sudo bash deploy/deploy.sh`

### Automated Deployment (Future)
Consider setting up GitHub Actions or webhooks for automatic deployment on push.

## Troubleshooting

### Website Not Loading
1. Check Nginx is running: `sudo systemctl status nginx`
2. Check configuration: `sudo nginx -t`
3. Check error logs: `sudo tail -f /var/log/nginx/devhub.sbs-error.log`
4. Check firewall: `sudo ufw status`

### Permission Issues
```bash
sudo chown -R www-data:www-data /var/www/devhub.sbs
sudo find /var/www/devhub.sbs/docs -type f -exec chmod 644 {} \;
sudo find /var/www/devhub.sbs/docs -type d -exec chmod 755 {} \;
```

### SSL Certificate Issues
```bash
# Check certificate
sudo certbot certificates

# Renew if needed
sudo certbot renew --force-renewal
```

### Rollback After Failed Update
```bash
sudo bash deploy/update.sh --rollback
```

## Security Best Practices

1. **Keep system updated**: `sudo apt update && sudo apt upgrade`
2. **Monitor logs regularly**: Check for suspicious activity
3. **Backup regularly**: Automated backups are created on each update
4. **Use strong SSH keys**: Disable password authentication
5. **Enable fail2ban**: Already configured by setup script
6. **Keep SSL certificates renewed**: Automatic with certbot

## Performance Tips

1. **Enable caching**: Already configured in nginx.conf
2. **Use CDN**: Consider Cloudflare for global distribution
3. **Optimize images**: Compress images before uploading
4. **Monitor resources**: Use `htop` or `glances`
5. **Regular maintenance**: Clean up old logs and backups

## Directory Structure on Server

```
/var/www/devhub.sbs/          # Web root
├── docs/                      # Website files (served by Nginx)
├── deploy/                    # Deployment scripts
└── .git/                      # Git repository

/etc/nginx/                    # Nginx configuration
├── sites-available/
│   └── devhub.sbs            # Site configuration
└── sites-enabled/
    └── devhub.sbs            # Symlink to sites-available

/var/backups/devhub.sbs/      # Automatic backups
└── backup-YYYYMMDD-HHMMSS/   # Timestamped backups

/var/log/nginx/               # Nginx logs
├── devhub.sbs-access.log     # Access logs
└── devhub.sbs-error.log      # Error logs
```

## Support

For issues or questions:
- Check main deployment guide: `../DEPLOYMENT.md`
- Nginx documentation: https://nginx.org/en/docs/
- Certbot documentation: https://certbot.eff.org/docs/
- Ubuntu server guide: https://ubuntu.com/server/docs

## Useful Commands Reference

```bash
# System
sudo systemctl status nginx        # Check Nginx status
sudo systemctl reload nginx        # Reload Nginx
sudo systemctl restart nginx       # Restart Nginx
sudo nginx -t                      # Test Nginx configuration

# Logs
sudo tail -f /var/log/nginx/devhub.sbs-access.log
sudo tail -f /var/log/nginx/devhub.sbs-error.log
sudo journalctl -u nginx -f        # Follow Nginx service logs

# SSL
sudo certbot certificates          # List certificates
sudo certbot renew                 # Renew certificates
sudo certbot delete                # Delete certificate

# Firewall
sudo ufw status                    # Check firewall status
sudo ufw allow 80/tcp              # Allow HTTP
sudo ufw allow 443/tcp             # Allow HTTPS

# Git
cd /var/www/devhub.sbs
git status                         # Check status
git log --oneline -10              # View recent commits
git pull origin main               # Pull latest changes

# Permissions
sudo chown -R www-data:www-data /var/www/devhub.sbs
sudo chmod -R 755 /var/www/devhub.sbs/docs
```
