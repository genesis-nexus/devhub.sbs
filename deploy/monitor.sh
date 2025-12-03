#!/bin/bash

###############################################################################
# DevHub.sbs Monitoring Script
#
# Quick health check and monitoring dashboard
# Run with: bash deploy/monitor.sh
###############################################################################

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

DOMAIN="devhub.sbs"

clear

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║           DevHub.sbs - Server Monitoring Dashboard            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# System Information
echo -e "${BLUE}━━━ SYSTEM INFORMATION ━━━${NC}"
echo "Hostname:     $(hostname)"
echo "Uptime:       $(uptime -p)"
echo "Date:         $(date)"
echo "Users:        $(who | wc -l) logged in"
echo ""

# Resource Usage
echo -e "${BLUE}━━━ RESOURCE USAGE ━━━${NC}"
echo "CPU Load:     $(uptime | awk -F'load average:' '{print $2}')"
echo "Memory:       $(free -h | awk 'NR==2{printf "%s / %s (%.2f%%)", $3, $2, $3*100/$2}')"
echo "Disk:         $(df -h / | awk 'NR==2{printf "%s / %s (%s)", $3, $2, $5}')"
echo "Swap:         $(free -h | awk 'NR==3{printf "%s / %s", $3, $2}')"
echo ""

# Nginx Status
echo -e "${BLUE}━━━ NGINX STATUS ━━━${NC}"
if systemctl is-active --quiet nginx; then
    echo -e "Status:       ${GREEN}● Running${NC}"
    echo "Version:      $(nginx -v 2>&1 | cut -d'/' -f2)"
    echo "Config Test:  $(sudo nginx -t 2>&1 | tail -1)"
    echo "PID:          $(systemctl show nginx --property=MainPID --value)"

    # Connection stats
    CONNECTIONS=$(netstat -an | grep ':80\|:443' | wc -l)
    echo "Connections:  $CONNECTIONS active"
else
    echo -e "Status:       ${RED}● Stopped${NC}"
fi
echo ""

# Website Health Check
echo -e "${BLUE}━━━ WEBSITE HEALTH ━━━${NC}"

# Check HTTP
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost 2>/dev/null)
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo -e "HTTP:         ${GREEN}✓ Responding (${HTTP_CODE})${NC}"
else
    echo -e "HTTP:         ${RED}✗ Not responding (${HTTP_CODE})${NC}"
fi

# Check HTTPS if SSL is configured
if [ -d "/etc/letsencrypt/live/$DOMAIN" ]; then
    HTTPS_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://localhost 2>/dev/null)
    if [ "$HTTPS_CODE" = "200" ]; then
        echo -e "HTTPS:        ${GREEN}✓ Responding (${HTTPS_CODE})${NC}"
    else
        echo -e "HTTPS:        ${YELLOW}⚠ Check SSL configuration${NC}"
    fi

    # SSL Certificate expiry
    CERT_DAYS=$(echo | openssl s_client -servername $DOMAIN -connect localhost:443 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)
    if [ ! -z "$CERT_DAYS" ]; then
        DAYS_LEFT=$(( ( $(date -d "$CERT_DAYS" +%s) - $(date +%s) ) / 86400 ))
        if [ $DAYS_LEFT -gt 30 ]; then
            echo -e "SSL Cert:     ${GREEN}✓ Valid for ${DAYS_LEFT} days${NC}"
        elif [ $DAYS_LEFT -gt 0 ]; then
            echo -e "SSL Cert:     ${YELLOW}⚠ Expires in ${DAYS_LEFT} days${NC}"
        else
            echo -e "SSL Cert:     ${RED}✗ Expired${NC}"
        fi
    fi
else
    echo -e "HTTPS:        ${YELLOW}⚠ SSL not configured${NC}"
fi

# Response time
RESPONSE_TIME=$(curl -s -o /dev/null -w "%{time_total}" http://localhost 2>/dev/null)
echo "Response:     ${RESPONSE_TIME}s"
echo ""

# Recent Logs
echo -e "${BLUE}━━━ RECENT ACCESS (Last 5) ━━━${NC}"
if [ -f /var/log/nginx/devhub.sbs-access.log ]; then
    tail -5 /var/log/nginx/devhub.sbs-access.log | while read line; do
        echo "  $(echo $line | cut -d' ' -f1,4,6,7 | sed 's/\[//g')"
    done
else
    echo "  No access logs found"
fi
echo ""

# Recent Errors
echo -e "${BLUE}━━━ RECENT ERRORS (Last 5) ━━━${NC}"
if [ -f /var/log/nginx/devhub.sbs-error.log ]; then
    ERROR_COUNT=$(wc -l < /var/log/nginx/devhub.sbs-error.log)
    if [ $ERROR_COUNT -gt 0 ]; then
        echo -e "${RED}  Found $ERROR_COUNT error(s)${NC}"
        tail -5 /var/log/nginx/devhub.sbs-error.log | sed 's/^/  /'
    else
        echo -e "${GREEN}  No errors${NC}"
    fi
else
    echo "  No error logs found"
fi
echo ""

# Firewall Status
echo -e "${BLUE}━━━ FIREWALL STATUS ━━━${NC}"
if command -v ufw &> /dev/null; then
    UFW_STATUS=$(sudo ufw status 2>/dev/null | grep Status | awk '{print $2}')
    if [ "$UFW_STATUS" = "active" ]; then
        echo -e "Status:       ${GREEN}● Active${NC}"
    else
        echo -e "Status:       ${YELLOW}● Inactive${NC}"
    fi
else
    echo "Status:       Not installed"
fi
echo ""

# Fail2ban Status
echo -e "${BLUE}━━━ FAIL2BAN STATUS ━━━${NC}"
if command -v fail2ban-client &> /dev/null; then
    if systemctl is-active --quiet fail2ban; then
        echo -e "Status:       ${GREEN}● Running${NC}"
        BANNED=$(sudo fail2ban-client status 2>/dev/null | grep "Currently banned" | awk '{print $4}')
        echo "Banned IPs:   $BANNED"
    else
        echo -e "Status:       ${RED}● Stopped${NC}"
    fi
else
    echo "Status:       Not installed"
fi
echo ""

# Git Status
echo -e "${BLUE}━━━ GIT STATUS ━━━${NC}"
if [ -d "/var/www/devhub.sbs/.git" ]; then
    cd /var/www/devhub.sbs
    BRANCH=$(git branch --show-current 2>/dev/null)
    COMMIT=$(git log -1 --oneline 2>/dev/null)
    echo "Branch:       $BRANCH"
    echo "Last Commit:  $COMMIT"

    # Check for updates
    git fetch origin 2>/dev/null
    LOCAL=$(git rev-parse @ 2>/dev/null)
    REMOTE=$(git rev-parse @{u} 2>/dev/null)
    if [ "$LOCAL" = "$REMOTE" ]; then
        echo -e "Updates:      ${GREEN}✓ Up to date${NC}"
    else
        echo -e "Updates:      ${YELLOW}⚠ Updates available${NC}"
    fi
else
    echo "Not a git repository"
fi
echo ""

# Backups
echo -e "${BLUE}━━━ BACKUP STATUS ━━━${NC}"
if [ -d "/var/backups/devhub.sbs" ]; then
    BACKUP_COUNT=$(ls -1 /var/backups/devhub.sbs | wc -l)
    LATEST_BACKUP=$(ls -t /var/backups/devhub.sbs | head -1)
    echo "Total:        $BACKUP_COUNT backups"
    echo "Latest:       $LATEST_BACKUP"
else
    echo "No backups found"
fi
echo ""

# Quick Stats
echo -e "${BLUE}━━━ TRAFFIC STATS (Today) ━━━${NC}"
if [ -f /var/log/nginx/devhub.sbs-access.log ]; then
    TODAY=$(date +%d/%b/%Y)
    REQUESTS=$(grep "$TODAY" /var/log/nginx/devhub.sbs-access.log 2>/dev/null | wc -l)
    UNIQUE_IPS=$(grep "$TODAY" /var/log/nginx/devhub.sbs-access.log 2>/dev/null | awk '{print $1}' | sort -u | wc -l)
    ERROR_CODES=$(grep "$TODAY" /var/log/nginx/devhub.sbs-access.log 2>/dev/null | grep -c " [45][0-9][0-9] ")

    echo "Requests:     $REQUESTS"
    echo "Unique IPs:   $UNIQUE_IPS"
    echo "Errors:       $ERROR_CODES"
else
    echo "No access logs available"
fi
echo ""

# Actions
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                        QUICK ACTIONS                           ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "  1. View live access logs:  sudo tail -f /var/log/nginx/devhub.sbs-access.log"
echo "  2. View live error logs:   sudo tail -f /var/log/nginx/devhub.sbs-error.log"
echo "  3. Update website:         sudo bash deploy/update.sh"
echo "  4. Restart Nginx:          sudo systemctl restart nginx"
echo "  5. Renew SSL:              sudo certbot renew"
echo ""

# Watch mode
if [ "$1" = "--watch" ]; then
    echo "Press Ctrl+C to exit watch mode..."
    sleep 3
    exec watch -n 5 -c "bash $0"
fi
