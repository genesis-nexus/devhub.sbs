# Install DevHub.sbs on Your Server - NOW!

## For Your Current Setup (Files Already on Server)

Since your files are already at `/var/www/devhub.sbs/`, run this **ONE COMMAND**:

```bash
cd /var/www/devhub.sbs && sudo bash deploy/setup-existing-server.sh
```

**That's it!**

After it completes, access your website at `http://YOUR_SERVER_IP`

---

## What Happens

1. ✅ Installs/configures Nginx
2. ✅ Sets up your website configuration
3. ✅ Opens firewall port 80
4. ✅ Sets correct permissions
5. ✅ Shows your server IP

**Time**: ~30 seconds

---

## Find Your Server IP

On your Ubuntu server, run:
```bash
hostname -I | awk '{print $1}'
```

Then open browser to: `http://YOUR_IP`

---

## Verify It's Working

```bash
# Check Nginx status
sudo systemctl status nginx

# Test from server
curl http://localhost

# View logs
sudo tail -f /var/log/nginx/devhub.sbs-access.log
```

---

## If Website Doesn't Load

### 1. Check Firewall on Cloud Provider

**Important**: If using AWS, DigitalOcean, Google Cloud, etc., you MUST also open port 80 in their firewall/security groups!

**AWS EC2:**
```
EC2 Dashboard → Security Groups → Edit Inbound Rules
Add: Type: HTTP, Port: 80, Source: 0.0.0.0/0
```

**DigitalOcean:**
```
Networking → Firewalls → Edit Rules
Add: HTTP on port 80 from All IPv4 and All IPv6
```

**Google Cloud:**
```
VPC Network → Firewall Rules → Create Rule
Port: tcp:80, Source: 0.0.0.0/0
```

### 2. Check Ubuntu Firewall

```bash
sudo ufw status
sudo ufw allow 80/tcp
```

### 3. Restart Nginx

```bash
sudo systemctl restart nginx
```

---

## Quick Troubleshooting

```bash
# Is Nginx running?
sudo systemctl status nginx

# Is config valid?
sudo nginx -t

# Is port 80 open?
sudo netstat -tulpn | grep :80

# Any errors?
sudo tail -20 /var/log/nginx/error.log

# Restart everything
sudo systemctl restart nginx
```

---

## Complete Guide

For detailed information, see:
- [QUICK-START-IP-ACCESS.md](QUICK-START-IP-ACCESS.md) - Complete IP access guide
- [DEPLOYMENT-SUMMARY.md](DEPLOYMENT-SUMMARY.md) - Full deployment info

---

## TL;DR

```bash
# On your Ubuntu server:
cd /var/www/devhub.sbs
sudo bash deploy/setup-existing-server.sh

# Get your IP:
hostname -I

# Open browser:
http://YOUR_IP
```

**Done!** 🎉
