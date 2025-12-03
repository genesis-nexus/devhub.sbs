# DevHub.sbs - Setup Guide for Your Server

## Your Current Situation

✅ **Files are already on server at**: `/var/www/devhub.sbs/`
✅ **You want to access via**: `http://YOUR_SERVER_IP`
✅ **Nginx document root should be**: `/var/www/devhub.sbs/docs/`

---

## 🎯 Super Quick Setup (30 seconds)

### Step 1: Run This Command

On your Ubuntu server:

```bash
cd /var/www/devhub.sbs && sudo bash deploy/setup-existing-server.sh
```

### Step 2: Get Your IP

```bash
hostname -I | awk '{print $1}'
```

### Step 3: Open Browser

Go to: `http://YOUR_SERVER_IP`

**Done!** 🎉

---

## 📋 What the Script Does

The `setup-existing-server.sh` script will:

1. ✅ Check that your files exist at `/var/www/devhub.sbs/docs/`
2. ✅ Install Nginx (if not already installed)
3. ✅ Remove default Nginx configuration
4. ✅ Install custom Nginx configuration for DevHub
5. ✅ Enable the site
6. ✅ Set correct file permissions (`www-data:www-data`)
7. ✅ Configure firewall (UFW) to allow HTTP (port 80)
8. ✅ Restart Nginx
9. ✅ Display your server IP address

---

## 🔧 Key Configuration Changes

### Nginx Configuration

**File**: `/etc/nginx/sites-available/devhub`

**Key settings**:
```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name devhub.sbs www.devhub.sbs _;
    root /var/www/devhub.sbs/docs;
    index index.html;
}
```

**Important**:
- `default_server` = Accept all connections on port 80
- `_` in server_name = Match any hostname (enables IP access)
- `root` = Points to your docs directory

### Firewall

Port 80 (HTTP) will be opened automatically:
```bash
sudo ufw allow 80/tcp
```

---

## ✅ Verification Steps

After running the setup script:

### 1. Check Nginx is Running
```bash
sudo systemctl status nginx
# Should show: active (running) in green
```

### 2. Test Nginx Configuration
```bash
sudo nginx -t
# Should show: test is successful
```

### 3. Check Port 80 is Open
```bash
sudo netstat -tulpn | grep :80
# Should show nginx listening on port 80
```

### 4. Test from Server
```bash
curl -I http://localhost
# Should return: HTTP/1.1 200 OK
```

### 5. Check Logs
```bash
sudo tail -f /var/log/nginx/devhub.sbs-access.log
```

---

## 🌐 Access Methods

Your site will be accessible via:

1. **IP Address**: `http://YOUR_SERVER_IP`
2. **Domain** (when DNS configured): `http://devhub.sbs`
3. **www** (when DNS configured): `http://www.devhub.sbs`

---

## ⚠️ Important - Cloud Provider Firewall

**If you're using a cloud provider (AWS, DigitalOcean, etc.), you MUST also configure their firewall!**

The UFW firewall on Ubuntu only controls the server itself. Cloud providers have an additional firewall layer.

### AWS EC2

1. Go to EC2 Dashboard
2. Select your instance
3. Click "Security Groups"
4. Edit "Inbound Rules"
5. Add rule:
   - Type: HTTP
   - Port: 80
   - Source: 0.0.0.0/0 (Anywhere IPv4)

### DigitalOcean

1. Go to Networking → Firewalls
2. Select or create a firewall
3. Add Inbound Rule:
   - Type: HTTP
   - Port: 80
   - Source: All IPv4, All IPv6

### Google Cloud

1. Go to VPC Network → Firewall
2. Create firewall rule:
   - Direction: Ingress
   - Targets: All instances
   - Source: 0.0.0.0/0
   - Protocol: tcp
   - Port: 80

### Azure

1. Go to Network Security Groups
2. Select your NSG
3. Add Inbound Security Rule:
   - Service: HTTP
   - Port: 80
   - Source: Any
   - Action: Allow

---

## 🔍 Troubleshooting

### Problem: "Connection Refused"

**Solution**:
```bash
# 1. Check if Nginx is running
sudo systemctl status nginx

# 2. Start Nginx if stopped
sudo systemctl start nginx

# 3. Check firewall on Ubuntu
sudo ufw allow 80/tcp
sudo ufw status

# 4. Check cloud provider firewall (see above)
```

### Problem: "403 Forbidden"

**Solution**:
```bash
# Fix permissions
cd /var/www/devhub.sbs
sudo chown -R www-data:www-data .
sudo find docs -type f -exec chmod 644 {} \;
sudo find docs -type d -exec chmod 755 {} \;
sudo systemctl restart nginx
```

### Problem: "502 Bad Gateway"

**Solution**:
```bash
# Check Nginx configuration
sudo nginx -t

# Check error logs
sudo tail -50 /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

### Problem: Can't Access from Outside

**Checklist**:
- [ ] Nginx is running: `sudo systemctl status nginx`
- [ ] Ubuntu firewall allows port 80: `sudo ufw status`
- [ ] Cloud provider firewall allows port 80 (check console)
- [ ] Port 80 is listening: `sudo netstat -tulpn | grep :80`
- [ ] Can access from server: `curl http://localhost`

---

## 📁 File Locations Reference

| What | Where |
|------|-------|
| Website files | `/var/www/devhub.sbs/docs/` |
| Nginx config | `/etc/nginx/sites-available/devhub` |
| Enabled config (symlink) | `/etc/nginx/sites-enabled/devhub` |
| Access logs | `/var/log/nginx/devhub.sbs-access.log` |
| Error logs | `/var/log/nginx/devhub.sbs-error.log` |
| Deployment scripts | `/var/www/devhub.sbs/deploy/` |

---

## 🛠️ Useful Commands

```bash
# View real-time access logs
sudo tail -f /var/log/nginx/devhub.sbs-access.log

# View real-time error logs
sudo tail -f /var/log/nginx/devhub.sbs-error.log

# Restart Nginx
sudo systemctl restart nginx

# Reload Nginx (graceful, no downtime)
sudo systemctl reload nginx

# Test Nginx configuration
sudo nginx -t

# Check Nginx status
sudo systemctl status nginx

# Check which ports are listening
sudo netstat -tulpn | grep LISTEN

# Get your server IP
hostname -I | awk '{print $1}'

# Get your public IP (if behind NAT)
curl -4 icanhazip.com

# Test website from command line
curl -I http://localhost
```

---

## 📝 Making Changes to Your Website

### Editing HTML/CSS/JS Files

```bash
# Edit files in /var/www/devhub.sbs/docs/
cd /var/www/devhub.sbs/docs
nano index.html  # or use your preferred editor

# No need to restart Nginx for static file changes!
# Just refresh your browser
```

### If You Modify Nginx Configuration

```bash
# Edit the config
sudo nano /etc/nginx/sites-available/devhub

# Test the config
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx
```

---

## 📊 Monitoring

### Built-in Dashboard

```bash
cd /var/www/devhub.sbs
bash deploy/monitor.sh
```

Shows:
- System resources
- Nginx status
- Website health
- Recent logs
- SSL status
- Traffic stats

### Live Logs

```bash
# Watch access logs in real-time
sudo tail -f /var/log/nginx/devhub.sbs-access.log

# Watch error logs in real-time
sudo tail -f /var/log/nginx/devhub.sbs-error.log

# Both at once (in split screen)
# Terminal 1:
sudo tail -f /var/log/nginx/devhub.sbs-access.log
# Terminal 2:
sudo tail -f /var/log/nginx/devhub.sbs-error.log
```

---

## 🚀 Next Steps (Optional)

### 1. Enable HTTPS (SSL)

When you're ready to enable HTTPS:

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d devhub.sbs -d www.devhub.sbs
```

### 2. Setup Automatic Updates

```bash
# Use the update script
cd /var/www/devhub.sbs
sudo bash deploy/update.sh
```

### 3. Configure Monitoring

Setup external monitoring:
- **UptimeRobot** (free): https://uptimerobot.com
- **Google Search Console**: https://search.google.com/search-console

---

## 📚 Additional Documentation

- **[INSTALL-NOW.md](INSTALL-NOW.md)** - Ultra-quick installation
- **[QUICK-START-IP-ACCESS.md](QUICK-START-IP-ACCESS.md)** - Detailed IP access guide
- **[DEPLOYMENT-SUMMARY.md](DEPLOYMENT-SUMMARY.md)** - Complete deployment overview
- **[deploy/QUICK-REFERENCE.md](deploy/QUICK-REFERENCE.md)** - Command reference

---

## 🎯 Summary

**Your setup**:
- Files: `/var/www/devhub.sbs/docs/`
- Config: IP address access enabled
- Nginx: Configured and optimized

**To deploy**:
```bash
cd /var/www/devhub.sbs
sudo bash deploy/setup-existing-server.sh
```

**To access**:
```
http://YOUR_SERVER_IP
```

**To update files**:
```bash
# Just edit files in /var/www/devhub.sbs/docs/
# No restart needed for static files
```

**That's it!** Simple and straightforward. 🚀

---

## 💬 Need Help?

1. Check error logs: `sudo tail -50 /var/log/nginx/error.log`
2. Test config: `sudo nginx -t`
3. Restart Nginx: `sudo systemctl restart nginx`
4. Check firewall: `sudo ufw status` AND cloud provider console
5. Test locally: `curl http://localhost`

**All files are ready. Just run the setup script and you're live!** ✅
