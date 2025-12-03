# Quick Start - Access DevHub.sbs via IP Address

## Your Current Setup

- **Files Location**: `/var/www/devhub.sbs/`
- **Website Root**: `/var/www/devhub.sbs/docs/`
- **Access Method**: IP address (http://YOUR_SERVER_IP)

## 🚀 Quick Setup (2 Commands)

Since you already have the files on your server, just run:

```bash
# 1. Navigate to your project directory
cd /var/www/devhub.sbs

# 2. Run the setup script
sudo bash deploy/setup-existing-server.sh
```

**Done!** Your website will be accessible at `http://YOUR_SERVER_IP`

## What This Does

The script automatically:
1. ✅ Verifies website files exist at `/var/www/devhub.sbs/docs/`
2. ✅ Installs Nginx (if not already installed)
3. ✅ Removes default Nginx configuration
4. ✅ Installs DevHub Nginx configuration
5. ✅ Sets correct file permissions
6. ✅ Configures firewall to allow HTTP traffic
7. ✅ Starts and enables Nginx
8. ✅ Shows your server IP address

## Configuration Details

### Nginx Configuration

The Nginx config has been updated to accept connections from:
- ✅ **IP Address** (http://YOUR_IP)
- ✅ **Domain name** (http://devhub.sbs) - when DNS is configured
- ✅ **www subdomain** (http://www.devhub.sbs)

**Configuration highlights:**
```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name devhub.sbs www.devhub.sbs _;
    root /var/www/devhub.sbs/docs;
    index index.html;
    # ... optimizations included
}
```

The underscore `_` means "accept any hostname" - this allows IP-based access.

## Accessing Your Website

### 1. Find Your Server IP

```bash
# On your Ubuntu server, run:
hostname -I
# or
ip addr show | grep "inet " | grep -v 127.0.0.1
```

### 2. Access via Browser

Open your browser and go to:
```
http://YOUR_SERVER_IP
```

Example:
- `http://192.168.1.100` (if on local network)
- `http://45.123.45.67` (if on internet)

## Firewall Configuration

The script automatically configures UFW firewall (if installed) to allow HTTP traffic:

```bash
# Check firewall status
sudo ufw status

# Should show:
# 80/tcp                     ALLOW       Anywhere
# or
# Nginx HTTP                 ALLOW       Anywhere
```

### If Website Not Accessible

If you can't access the website, manually open the firewall:

```bash
# Enable firewall
sudo ufw enable

# Allow HTTP
sudo ufw allow 80/tcp

# Or use Nginx profile
sudo ufw allow 'Nginx HTTP'

# Check status
sudo ufw status
```

## Verify Everything is Working

### 1. Check Nginx Status
```bash
sudo systemctl status nginx
# Should show: active (running)
```

### 2. Check Nginx Configuration
```bash
sudo nginx -t
# Should show: test is successful
```

### 3. Check if Port 80 is Listening
```bash
sudo netstat -tulpn | grep :80
# or
sudo ss -tulpn | grep :80
```

### 4. Test from Server
```bash
# Test from the server itself
curl -I http://localhost
# Should return: HTTP/1.1 200 OK
```

### 5. Check Logs
```bash
# Access logs
sudo tail -f /var/log/nginx/devhub.sbs-access.log

# Error logs (in another terminal)
sudo tail -f /var/log/nginx/devhub.sbs-error.log
```

## File Locations

| Item | Location |
|------|----------|
| Website files | `/var/www/devhub.sbs/docs/` |
| Nginx config | `/etc/nginx/sites-available/devhub` |
| Enabled config | `/etc/nginx/sites-enabled/devhub` |
| Access logs | `/var/log/nginx/devhub.sbs-access.log` |
| Error logs | `/var/log/nginx/devhub.sbs-error.log` |

## Common Issues & Solutions

### Issue 1: "Connection Refused"

**Cause**: Nginx not running or firewall blocking

**Solution**:
```bash
# Start Nginx
sudo systemctl start nginx

# Check firewall
sudo ufw allow 80/tcp

# If using cloud provider (AWS, DigitalOcean, etc.)
# Also check Security Groups/Firewall in cloud console
```

### Issue 2: "403 Forbidden"

**Cause**: Permission issues

**Solution**:
```bash
cd /var/www/devhub.sbs
sudo chown -R www-data:www-data .
sudo find docs -type f -exec chmod 644 {} \;
sudo find docs -type d -exec chmod 755 {} \;
sudo systemctl restart nginx
```

### Issue 3: "502 Bad Gateway"

**Cause**: Nginx config error

**Solution**:
```bash
# Test configuration
sudo nginx -t

# Check error logs
sudo tail -50 /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

### Issue 4: Cannot Access from External Network

**Cause**: Cloud provider firewall

**Solution**:
If using cloud providers, you MUST also configure their firewall:

**AWS EC2:**
- Security Groups → Edit inbound rules
- Add rule: HTTP (80) from 0.0.0.0/0

**DigitalOcean:**
- Networking → Firewalls
- Add rule: HTTP (80) from All IPv4, All IPv6

**Google Cloud:**
- VPC Network → Firewall rules
- Create rule: tcp:80, source: 0.0.0.0/0

**Azure:**
- Network Security Groups → Inbound rules
- Add rule: HTTP (80) from Any

## Making Changes to Website

### Update Files
```bash
cd /var/www/devhub.sbs
# Edit your files in docs/
# No need to restart Nginx for static file changes
```

### If You Modify Nginx Config
```bash
# Test configuration first
sudo nginx -t

# If test passes, reload
sudo systemctl reload nginx
```

## Useful Commands

```bash
# Restart Nginx
sudo systemctl restart nginx

# Reload Nginx (graceful restart)
sudo systemctl reload nginx

# Stop Nginx
sudo systemctl stop nginx

# Start Nginx
sudo systemctl start nginx

# Check Nginx status
sudo systemctl status nginx

# Test Nginx configuration
sudo nginx -t

# View real-time access logs
sudo tail -f /var/log/nginx/devhub.sbs-access.log

# View real-time error logs
sudo tail -f /var/log/nginx/devhub.sbs-error.log

# Check open ports
sudo netstat -tulpn | grep LISTEN

# Check website from command line
curl -I http://localhost
```

## Next Steps (Optional)

### 1. Setup Domain Name (Later)

When you configure DNS to point to your server:
- Your site will work at both `http://YOUR_IP` and `http://devhub.sbs`
- No changes needed to Nginx config

### 2. Enable HTTPS (Later)

When ready for SSL:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d devhub.sbs -d www.devhub.sbs
```

### 3. Setup Monitoring

```bash
# Use the monitoring dashboard
bash deploy/monitor.sh
```

## Testing Checklist

- [ ] Nginx is running: `sudo systemctl status nginx`
- [ ] Config is valid: `sudo nginx -t`
- [ ] Port 80 is open: `sudo ufw allow 80/tcp`
- [ ] Can access from server: `curl http://localhost`
- [ ] Can access from browser: `http://YOUR_SERVER_IP`
- [ ] No errors in logs: `sudo tail /var/log/nginx/error.log`

## Getting Your Server IP

### From Ubuntu Server
```bash
# Primary IP
hostname -I | awk '{print $1}'

# All IPs
ip addr show | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | cut -d'/' -f1

# Public IP (if behind NAT)
curl -4 icanhazip.com
```

### From Cloud Console
- **AWS**: EC2 Dashboard → Instances → Public IPv4 address
- **DigitalOcean**: Droplets → Your droplet → ipv4 address
- **Google Cloud**: VM Instances → External IP
- **Azure**: Virtual Machines → Public IP address

## Support

If you encounter issues:

1. **Check logs first**:
   ```bash
   sudo tail -50 /var/log/nginx/error.log
   ```

2. **Verify Nginx is running**:
   ```bash
   sudo systemctl status nginx
   ```

3. **Test configuration**:
   ```bash
   sudo nginx -t
   ```

4. **Check firewall** (both UFW and cloud provider)

5. **Try from server itself**:
   ```bash
   curl http://localhost
   ```

## Summary

After running `sudo bash deploy/setup-existing-server.sh`, you should be able to access your website at:

```
http://YOUR_SERVER_IP
```

The configuration automatically:
- ✅ Serves files from `/var/www/devhub.sbs/docs/`
- ✅ Accepts connections via IP address
- ✅ Works with domain name (when DNS is configured)
- ✅ Includes performance optimizations (Gzip, caching)
- ✅ Has security headers configured
- ✅ Logs all access and errors

**That's it!** You're ready to go. 🚀
