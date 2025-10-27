# Google Analytics Guide for DevHub.sbs

## Overview

Your site now tracks individual tool usage in Google Analytics! This allows you to see exactly which tools are popular, how users interact with them, and which ones drive the most traffic.

## What's Being Tracked

### 1. **Tool Page Views**
Every time a user opens a tool, a pageview event is sent to Google Analytics with:
- Tool name
- Tool category (Financial Calculators, Health Calculators, Developer Tools, etc.)
- Full URL with hash
- Timestamp

### 2. **Tool Open Events**
A custom `tool_open` event tracks when each tool is launched:
- Event Category: "Tool Usage"
- Event Label: Tool ID (e.g., "loan-calculator", "bmi-calculator")
- Tool Name: Human-readable name
- Tool Category: Type of tool

### 3. **Tool Actions** (Optional - can be implemented per tool)
Specific actions like "calculate", "encode", "decode" can be tracked using `trackToolAction()`:
- Event Category: "Tool Action"
- Action Type: What the user did
- Tool Name: Which tool they used

## How to View Analytics in Google Analytics 4

### Option 1: View Tool Pageviews

1. Log into [Google Analytics](https://analytics.google.com/)
2. Select your DevHub.sbs property (G-DGT4D663Z0)
3. Go to **Reports** → **Engagement** → **Pages and screens**
4. Look for pages with hash URLs like:
   - `/#loan-calculator-tool`
   - `/#bmi-calculator-tool`
   - `/#mortgage-calculator-tool`
   - `/#json-tool`
   - etc.

**What you'll see:**
- Total views for each tool
- Average engagement time
- Bounce rate
- User flow

### Option 2: View Custom Tool Open Events

1. Go to **Reports** → **Engagement** → **Events**
2. Look for the `tool_open` event
3. Click on it to see breakdown by:
   - `tool_name` - Which tool was opened
   - `tool_category` - Type of tool (Financial, Health, Developer, etc.)
   - `event_label` - Tool ID

**What you'll see:**
- How many times each tool was opened
- Which categories are most popular
- Time-based trends

### Option 3: Create Custom Reports

#### Most Popular Tools Report

1. Go to **Explore** → **Create new exploration**
2. Add dimension: `event_label` or `page_path`
3. Add metric: `event_count` or `Views`
4. Filter by: `event_name` = "tool_open"
5. Sort by count (descending)

**Result:** See your top 10 most-used tools instantly!

#### Tool Category Performance

1. Create exploration
2. Add dimension: `tool_category`
3. Add metrics: `event_count`, `total_users`, `average_engagement_time`
4. Filter by: `event_name` = "tool_open"

**Result:** Compare Financial vs Health vs Developer tools performance

#### Revenue Attribution (For AdSense)

1. Go to **Reports** → **Monetization** → **Overview**
2. View revenue by page
3. Match hash URLs to see which tools generate most ad revenue

## Direct Links to Tools

All tools are now accessible via direct links! Share these URLs:

### Calculator Tools

- **Loan Calculator:** `https://devhub.sbs/#loan-calculator-tool`
- **Mortgage Calculator:** `https://devhub.sbs/#mortgage-calculator-tool`
- **BMI Calculator:** `https://devhub.sbs/#bmi-calculator-tool`
- **Calorie Calculator:** `https://devhub.sbs/#calorie-calculator-tool`
- **Compound Interest:** `https://devhub.sbs/#compound-interest-calculator-tool`
- **Age Calculator:** `https://devhub.sbs/#age-calculator-tool`
- **Tip Calculator:** `https://devhub.sbs/#tip-calculator-tool`
- **Word Counter:** `https://devhub.sbs/#word-counter-tool`
- **Password Generator:** `https://devhub.sbs/#password-generator-tool`
- **QR Code Generator:** `https://devhub.sbs/#qr-generator-tool`

### Developer Tools

- **JSON Validator:** `https://devhub.sbs/#json-tool`
- **Base64 Encoder:** `https://devhub.sbs/#base64-tool`
- **URL Encoder:** `https://devhub.sbs/#url-tool`
- **JWT Verifier:** `https://devhub.sbs/#jwt-tool`
- **Hash Generator:** `https://devhub.sbs/#hash-tool`
- **OIDC Tester:** `https://devhub.sbs/#oidc-tool`

## Key Metrics to Watch

### Week 1-2: Identify Popular Tools
- Check which tools get the most opens
- See which categories perform best
- Identify traffic sources for each tool

### Week 3-4: Optimize High Performers
- Add more content around popular tools
- Create blog posts for top tools
- Improve SEO for high-traffic tools

### Month 2+: Revenue Optimization
- Compare ad revenue by tool page
- Focus on tools with high CPC
- Create more tools in profitable categories

## Expected Analytics Insights

### You'll be able to answer:

1. **Which tools are most popular?**
   - Loan Calculator vs BMI Calculator vs JSON Validator?

2. **Which categories drive traffic?**
   - Financial Calculators vs Health vs Developer Tools?

3. **Where do users come from?**
   - Google Search (organic) vs Direct vs Social?

4. **What keywords work best?**
   - Search Console integration shows search queries per tool

5. **Which tools generate revenue?**
   - Cross-reference tool pageviews with AdSense earnings

6. **User engagement per tool?**
   - How long do users spend on each tool?
   - Do they open multiple tools per session?

## Advanced: Setting Up Custom Dashboards

### Dashboard 1: Tool Performance Overview

**Widgets to add:**
1. Total tool opens (last 7 days)
2. Top 10 tools by usage
3. Tool category breakdown (pie chart)
4. Tool usage trend (line chart)

### Dashboard 2: Revenue by Tool

**Widgets to add:**
1. Ad revenue by page
2. Revenue per 1000 views (RPM) by tool
3. Top revenue-generating tools
4. Category revenue comparison

### Dashboard 3: User Acquisition

**Widgets to add:**
1. Traffic sources for each tool
2. Top landing pages (tools)
3. Search queries leading to tools
4. Geographic distribution by tool

## Setting Up Alerts

Create alerts to notify you when:
- A tool suddenly gets 10x normal traffic (viral!)
- A new tool isn't getting any traffic (needs promotion)
- Revenue drops on a specific tool category

## SEO Benefits

Each tool now has:
- ✅ Unique URL (hash-based)
- ✅ Dedicated title tag
- ✅ Dedicated meta description
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Trackable in Analytics
- ✅ Shareable direct link

## Next Steps

1. **Wait 24-48 hours** for Analytics data to populate
2. **Check "Realtime"** report to see live tool usage
3. **Create custom reports** for tool performance
4. **Set up Looker Studio** dashboard for visual reporting
5. **Export data** weekly to track trends

## Support

If you need help with Google Analytics:
1. Check [GA4 documentation](https://support.google.com/analytics/answer/9304153)
2. Watch [GA4 tutorial videos](https://www.youtube.com/playlist?list=PLI5YfMzCfRtZ8eV576YoY3vIYrHjgSz4_)
3. Use GA4 [Query Builder](https://ga-dev-tools.google/ga4/query-explorer/)

---

**Analytics Property ID:** G-DGT4D663Z0

**Last Updated:** October 27, 2025
