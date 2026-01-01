# DNS Setup Guide - Hostinger Domain to Ubuntu Server

Complete step-by-step guide to point your devhub.sbs domain (purchased from Hostinger) to your Ubuntu server.

## Prerequisites

- Domain name: devhub.sbs (purchased from Hostinger)
- Ubuntu server with website deployed
- Server IP address
- Hostinger account access

---

## Step 1: Get Your Server IP Address

On your Ubuntu server, run:

```bash
hostname -I | awk '{print $1}'
```

Or get your public IP:

```bash
curl -4 ifconfig.me
```

**Note this IP address** - you'll need it for DNS configuration.

Example: `45.123.45.67`

---

## Step 2: Log into Hostinger

1. Go to: https://hpanel.hostinger.com/
2. Log in with your Hostinger credentials
3. You should see your dashboard

---

## Step 3: Access DNS Zone Settings

### Option A: Via Domain Management

1. From Hostinger dashboard, click **"Domains"** in the left menu
2. Find **devhub.sbs** in your domain list
3. Click **"Manage"** next to devhub.sbs
4. Click on **"DNS / Name Servers"** tab
5. Scroll down to **"DNS Zone Editor"** or **"Manage DNS records"**

### Option B: Direct Access

1. In Hostinger dashboard, look for **"DNS Zone"** or **"DNS Management"**
2. Select **devhub.sbs** from the domain dropdown

---

## Step 4: Configure DNS Record

You need to create one A record to point your domain to your server.

### Add Root Domain Record

**Delete existing A record for @ if present, then add:**

```
Type:     A
Name:     @ (or leave blank, or use devhub.sbs)
Points to: YOUR_SERVER_IP
TTL:      3600 (or 1 hour)
```

Example:
```
Type:     A
Name:     @
Points to: 45.123.45.67
TTL:      3600
```

### What This Record Does

- **@ record**: Makes `devhub.sbs` point to your server

**Note**: You only need this one A record. No www subdomain is needed for devhub.sbs.

---

## Step 5: Remove Conflicting Records (Important!)

Check for and **DELETE** these record types if they exist for `@`:

- **CNAME records**
- **AAAA records** (IPv6, unless you need them)
- **Parking page records**
- **Any other A records** pointing elsewhere

**Keep only:**
- Your A record for @ (pointing to your server)
- MX records (if you use email)
- TXT records (for verification, SPF, etc.)

---

## Step 6: Check Name Servers

Ensure your domain is using Hostinger's name servers:

1. In the DNS settings page, look for **"Name Servers"** section
2. They should be set to Hostinger's name servers (usually):
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```
   Or:
   ```
   ns1.hostinger.com
   ns2.hostinger.com
   ```

If they're pointing elsewhere, change them back to Hostinger's name servers.

**Warning**: If you change name servers, DNS propagation can take 24-48 hours.

---

## Step 7: Save DNS Changes

1. Click **"Save"** or **"Add Record"** for each DNS entry
2. Hostinger will confirm the changes
3. DNS changes typically take **15 minutes to 24 hours** to propagate

---

## Step 8: Wait for DNS Propagation

DNS changes don't happen instantly. Typical propagation times:

- **Hostinger DNS**: 15-30 minutes (usually fast)
- **Full global propagation**: Up to 24-48 hours
- **Most locations**: 2-6 hours

### Check DNS Propagation Status

Use these tools to check if DNS has propagated:

1. **DNS Checker**: https://dnschecker.org/
   - Enter: `devhub.sbs`
   - Select: A record
   - Click "Search"
   - Should show your server IP

2. **What's My DNS**: https://www.whatsmydns.net/
   - Enter: `devhub.sbs`
   - Select: A
   - Check worldwide propagation

3. **Command Line** (from your local machine):
   ```bash
   # Check A record
   dig devhub.sbs +short

   # Or use nslookup
   nslookup devhub.sbs

   # Should return your server IP
   ```

---

## Step 9: Test Domain Access

Once DNS has propagated (wait at least 15-30 minutes):

### A. Test in Browser

Open your browser and try:
- http://devhub.sbs

Should show your website.

### B. Test from Command Line

```bash
# Test HTTP response
curl -I http://devhub.sbs

# Should return:
# HTTP/1.1 200 OK
```

### C. Test DNS Resolution

```bash
# Should return your server IP
ping devhub.sbs

# Check DNS
dig devhub.sbs
nslookup devhub.sbs
```

---

## Step 10: Update Nginx Configuration (Optional)

If you want Nginx to specifically recognize your domain (optional, since we're using `server_name _;`):

1. SSH to your server:
   ```bash
   ssh user@your-server
   ```

2. Edit Nginx config:
   ```bash
   sudo nano /etc/nginx/sites-available/devhub.conf
   ```

3. Update server_name line (optional):
   ```nginx
   # Current (works with any domain/IP):
   server_name _;

   # Or make it specific (optional):
   server_name devhub.sbs;
   ```

4. Test and reload:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

**Note**: With `server_name _;`, both IP and domain work. This is fine for most cases.

---

## Step 11: Setup HTTPS/SSL (Recommended)

Once your domain is working with HTTP, add HTTPS:

1. SSH to your server
2. Install Certbot:
   ```bash
   sudo apt update
   sudo apt install certbot python3-certbot-nginx
   ```

3. Get SSL certificate:
   ```bash
   sudo certbot --nginx -d devhub.sbs
   ```

4. Follow prompts:
   - Enter email address
   - Agree to terms
   - Choose redirect HTTP to HTTPS (recommended)

5. Test auto-renewal:
   ```bash
   sudo certbot renew --dry-run
   ```

Certbot will automatically renew certificates before expiration.

---

## Troubleshooting

### Issue 1: DNS Not Propagating

**Check:**
```bash
dig devhub.sbs +short
```

**If shows wrong IP:**
- Wait longer (can take 24-48 hours)
- Clear your DNS cache:
  - **Windows**: `ipconfig /flushdns`
  - **Mac**: `sudo dscacheutil -flushcache`
  - **Linux**: `sudo systemd-resolve --flush-caches`

### Issue 2: Domain Shows "Site Can't Be Reached"

**Possible causes:**
1. DNS not propagated yet (wait)
2. Server firewall blocking port 80
3. Nginx not running

**Fix:**
```bash
# Check Nginx
sudo systemctl status nginx

# Check firewall
sudo ufw status
sudo ufw allow 80/tcp

# Test locally on server
curl -I http://localhost
```

### Issue 3: "This site can't provide a secure connection"

**Cause**: Trying HTTPS before SSL is configured

**Fix**:
- Use `http://` (not `https://`) until SSL is setup
- Then follow Step 11 to add SSL

### Issue 4: Shows Different Website

**Cause**: DNS cached or pointing elsewhere

**Fix:**
1. Check DNS records in Hostinger
2. Verify A records point to your server IP
3. Remove any CNAME or parking records
4. Wait for propagation

### Issue 5: "Domain Not Found" or NXDOMAIN

**Cause**: Name servers not set correctly

**Fix:**
1. Check name servers in Hostinger
2. Ensure using Hostinger's name servers
3. Wait 24-48 hours if you just changed them

---

## Complete DNS Configuration Checklist

Use this checklist to verify everything:

- [ ] Got server IP address
- [ ] Logged into Hostinger
- [ ] Found DNS Zone Editor for devhub.sbs
- [ ] Added A record for @ pointing to server IP
- [ ] Deleted conflicting CNAME/A records
- [ ] Using correct name servers (Hostinger's)
- [ ] Saved all changes
- [ ] Waited 15-30 minutes minimum
- [ ] Checked DNS propagation (dnschecker.org)
- [ ] Tested http://devhub.sbs in browser
- [ ] (Optional) Updated Nginx server_name
- [ ] (Optional) Setup SSL with Certbot

---

## Visual DNS Configuration Example

```
┌─────────────────────────────────────────────────────────────┐
│ Hostinger DNS Zone Editor for devhub.sbs                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Type    Name    Points To           TTL                    │
│ ─────────────────────────────────────────────────────────  │
│ A       @       45.123.45.67        3600    [Delete] [Edit]│
│ MX      @       mail.hostinger.com  3600    [Delete] [Edit]│
│ TXT     @       "v=spf1..."         3600    [Delete] [Edit]│
│                                                             │
│                                      [+ Add Record]         │
└─────────────────────────────────────────────────────────────┘
```

---

## Timeline Expectations

```
Immediate:      Configure DNS in Hostinger
↓
15-30 mins:     DNS starts propagating
↓
1-2 hours:      Most locations can access via domain
↓
6-12 hours:     Worldwide propagation mostly complete
↓
24-48 hours:    Full global propagation guaranteed
```

---

## Quick Reference Commands

```bash
# Get server IP
hostname -I

# Check if domain resolves to your IP
dig devhub.sbs +short

# Test website response
curl -I http://devhub.sbs

# Check DNS propagation
nslookup devhub.sbs

# Flush local DNS cache (if domain not working)
# Mac:
sudo dscacheutil -flushcache
# Linux:
sudo systemd-resolve --flush-caches
```

---

## Support Resources

- **Hostinger DNS Guide**: https://support.hostinger.com/en/articles/1583227-how-to-manage-dns-records
- **DNS Checker**: https://dnschecker.org/
- **What's My DNS**: https://www.whatsmydns.net/
- **Let's Encrypt (SSL)**: https://certbot.eff.org/

---

## Summary

1. Get your server IP
2. Log into Hostinger
3. Add one A record: @ pointing to your server IP
4. Remove conflicting records
5. Save and wait 15-30 minutes
6. Test: http://devhub.sbs
7. Add SSL with Certbot

**That's it!** Your domain will point to your server and your website will be accessible at devhub.sbs.

---

**Note**: Keep this guide handy. DNS configuration is a one-time setup, but useful to reference if you ever change servers or need to troubleshoot.
