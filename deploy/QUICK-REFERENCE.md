# DevHub.sbs Deployment - Quick Reference Card

## 🚀 Initial Setup (One Time)

```bash
# 1. SSH into your Ubuntu server
ssh user@your-server-ip

# 2. Run server setup
sudo bash deploy/setup-server.sh

# 3. Deploy website
sudo bash deploy/deploy.sh

# 4. Setup SSL certificate
sudo certbot --nginx -d devhub.sbs -d www.devhub.sbs
```

## 🔄 Regular Updates

```bash
# Quick update (recommended)
sudo bash deploy/update.sh

# Full deployment
sudo bash deploy/deploy.sh

# Rollback if something goes wrong
sudo bash deploy/update.sh --rollback
```

## 📊 Monitoring

```bash
# Check Nginx status
sudo systemctl status nginx

# View access logs (live)
sudo tail -f /var/log/nginx/devhub.sbs-access.log

# View error logs (live)
sudo tail -f /var/log/nginx/devhub.sbs-error.log

# Test Nginx configuration
sudo nginx -t

# Reload Nginx (after config changes)
sudo systemctl reload nginx
```

## 🔐 SSL Certificate

```bash
# Check certificate status
sudo certbot certificates

# Renew certificates (automatic via cron)
sudo certbot renew

# Test auto-renewal
sudo certbot renew --dry-run

# Force renewal
sudo certbot renew --force-renewal
```

## 🛡️ Security

```bash
# Check firewall status
sudo ufw status

# View fail2ban status
sudo fail2ban-client status

# View fail2ban nginx jail
sudo fail2ban-client status nginx-http-auth

# Unban an IP
sudo fail2ban-client set nginx-http-auth unbanip <IP>
```

## 💾 Backups

```bash
# List automatic backups
ls -lh /var/backups/devhub.sbs/

# Create manual backup
sudo tar -czf ~/backup-$(date +%Y%m%d).tar.gz /var/www/devhub.sbs/docs

# Restore from backup
sudo cp -r /var/backups/devhub.sbs/backup-YYYYMMDD-HHMMSS/docs /var/www/devhub.sbs/
sudo systemctl reload nginx
```

## 🔧 Troubleshooting

```bash
# Website not loading?
sudo systemctl status nginx
sudo nginx -t
sudo tail -50 /var/log/nginx/devhub.sbs-error.log

# Fix permissions
sudo chown -R www-data:www-data /var/www/devhub.sbs
sudo chmod -R 755 /var/www/devhub.sbs/docs

# Restart Nginx
sudo systemctl restart nginx

# Check disk space
df -h

# Check memory usage
free -h

# View system load
htop
```

## 📝 Useful File Locations

| Item | Location |
|------|----------|
| Website files | `/var/www/devhub.sbs/docs/` |
| Nginx config | `/etc/nginx/sites-available/devhub.sbs` |
| Access logs | `/var/log/nginx/devhub.sbs-access.log` |
| Error logs | `/var/log/nginx/devhub.sbs-error.log` |
| SSL certificates | `/etc/letsencrypt/live/devhub.sbs/` |
| Backups | `/var/backups/devhub.sbs/` |

## 🎯 Common Commands

```bash
# System updates
sudo apt update && sudo apt upgrade -y

# Check which ports are listening
sudo netstat -tulpn

# Check website response
curl -I http://devhub.sbs
curl -I https://devhub.sbs

# View Nginx config
sudo cat /etc/nginx/sites-available/devhub.sbs

# Edit Nginx config
sudo nano /etc/nginx/sites-available/devhub.sbs

# Test SSL certificate
curl -vI https://devhub.sbs 2>&1 | grep -i ssl
```

## 🚨 Emergency Procedures

### Website Down
```bash
# 1. Check if Nginx is running
sudo systemctl status nginx

# 2. If not running, start it
sudo systemctl start nginx

# 3. If still down, check logs
sudo tail -50 /var/log/nginx/error.log

# 4. Test configuration
sudo nginx -t

# 5. Restart if needed
sudo systemctl restart nginx
```

### SSL Certificate Expired
```bash
# 1. Check certificate
sudo certbot certificates

# 2. Renew
sudo certbot renew --force-renewal

# 3. Reload Nginx
sudo systemctl reload nginx
```

### Bad Deployment
```bash
# Rollback immediately
sudo bash deploy/update.sh --rollback
```

### Disk Space Full
```bash
# 1. Check disk usage
df -h

# 2. Find large files
sudo du -sh /var/* | sort -rh | head -10

# 3. Clean logs
sudo journalctl --vacuum-time=7d
sudo find /var/log -type f -name "*.gz" -delete

# 4. Clean old backups
sudo rm -rf /var/backups/devhub.sbs/backup-OLD-DATES
```

## 📞 Support Resources

- **Main Deployment Guide**: `../DEPLOYMENT.md`
- **Scripts README**: `./README.md`
- **Nginx Docs**: https://nginx.org/en/docs/
- **Certbot Docs**: https://certbot.eff.org/docs/
- **Ubuntu Server Guide**: https://ubuntu.com/server/docs

## 💡 Performance Tips

```bash
# Enable caching (already configured)
# Check nginx.conf for cache settings

# Monitor real-time connections
watch -n 1 'netstat -an | grep :80 | wc -l'

# Test website speed
curl -o /dev/null -s -w "Time: %{time_total}s\n" https://devhub.sbs

# Check Nginx worker processes
ps aux | grep nginx

# View Nginx status
sudo systemctl show nginx --property=MainPID,ActiveState,SubState
```

## 🎨 Deployment Workflow

```
Local Development
       ↓
   Git Commit
       ↓
   Git Push to GitHub
       ↓
   SSH to Server
       ↓
   Run update.sh
       ↓
   Verify Website
```

## 📱 Mobile Access

Set up SSH key authentication for easier access:

```bash
# On your local machine
ssh-keygen -t ed25519 -C "your-email@example.com"
ssh-copy-id user@your-server-ip

# Now you can SSH without password
ssh user@your-server-ip
```

## 🔄 Automated Deployment (Optional)

See `.github/workflows/deploy.yml` for GitHub Actions setup.

Required secrets in GitHub:
- `SERVER_HOST` - Your server IP
- `SERVER_USERNAME` - SSH username
- `SERVER_SSH_KEY` - Private SSH key
- `SERVER_PORT` - SSH port (optional, default: 22)

---

**Last Updated**: $(date +%Y-%m-%d)
**Version**: 1.0.0
