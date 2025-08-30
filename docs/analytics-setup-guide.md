# Google Analytics Setup Guide for DevHub Tools Tracking

This guide will help you set up Google Analytics to track detailed user interactions with the developer tools on DevHub.

## Overview

The analytics system tracks:
- **Tool Interactions**: Which tools users access and how they use them
- **Performance Metrics**: Processing time, input sizes, success rates
- **User Behavior**: Navigation patterns, search queries, category preferences
- **Error Tracking**: Tool errors, validation failures, processing issues
- **Engagement Metrics**: Scroll depth, keyboard shortcuts, theme changes

## Google Analytics 4 Configuration

### 1. Custom Dimensions

Set up these custom dimensions in GA4:

| Dimension Name | Scope | Description |
|----------------|-------|-------------|
| `tool_id` | Event | The specific tool being used (jwt, base64, url, oidc, hash) |
| `tool_action` | Event | The action performed (usage, error, navigation, copy, etc.) |
| `tool_category` | Event | Tool category (Authentication, Productivity) |
| `tool_type` | Event | Tool type (internal, external) |
| `operation` | Event | Specific operation (encode, decode, generate, verify) |
| `input_size` | Event | Size of input data in characters/bytes |
| `processing_time_ms` | Event | Time taken to process the operation |
| `success` | Event | Whether the operation succeeded (true/false) |
| `error_type` | Event | Type of error if operation failed |
| `hash_types` | Event | Types of hashes generated |
| `output_format` | Event | Output format (hex, base64, binary) |
| `file_type` | Event | Type of file being processed |
| `file_size` | Event | Size of file in bytes |
| `provider` | Event | OIDC provider (auth0, google, microsoft, okta) |

### 2. Custom Metrics

Set up these custom metrics in GA4:

| Metric Name | Unit | Description |
|-------------|------|-------------|
| `tool_usage_count` | Count | Number of tool usage events |
| `error_count` | Count | Number of error events |
| `processing_time_total` | Time | Total processing time across all operations |
| `input_size_total` | Count | Total input size processed |
| `copy_operations` | Count | Number of copy operations |
| `file_operations` | Count | Number of file operations |

### 3. Event Configuration

#### Core Tool Events

**Event Name**: `tool_interaction`
- **Category**: Tool Interaction
- **Parameters**:
  - `tool_id` (string)
  - `tool_action` (string)
  - `tool_category` (string)
  - `tool_type` (string)
  - `timestamp` (string)

**Event Name**: `tool_usage`
- **Category**: Tool Usage
- **Parameters**:
  - `tool_id` (string)
  - `operation` (string)
  - `input_size` (number)
  - `processing_time_ms` (number)
  - `success` (boolean)

**Event Name**: `tool_error`
- **Category**: Tool Error
- **Parameters**:
  - `tool_id` (string)
  - `error_type` (string)
  - `error_message` (string)
  - `error_context` (object)

#### Navigation Events

**Event Name**: `tool_navigation`
- **Category**: Navigation
- **Parameters**:
  - `tool_id` (string)
  - `source` (string)
  - `destination` (string)

**Event Name**: `category_filter`
- **Category**: Navigation
- **Parameters**:
  - `category` (string)

#### Search Events

**Event Name**: `search`
- **Category**: Search
- **Parameters**:
  - `search_term` (string)
  - `category` (string)
  - `results_count` (number)

#### External Tool Events

**Event Name**: `external_tool_click`
- **Category**: External Tool
- **Parameters**:
  - `tool_name` (string)
  - `tool_url` (string)
  - `tool_category` (string)

#### Engagement Events

**Event Name**: `user_engagement`
- **Category**: Engagement
- **Parameters**:
  - `metric` (string)
  - `value` (number)

**Event Name**: `session_start`
- **Category**: User Session

## Google Analytics Setup Steps

### Step 1: Access GA4 Admin

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Click the gear icon (⚙️) for Admin
4. In the Property column, click "Custom definitions"

### Step 2: Create Custom Dimensions

1. Click "Create custom dimensions"
2. For each dimension:
   - **Dimension name**: Use the names from the table above
   - **Scope**: Select "Event"
   - **Description**: Add a brief description
   - **Event parameter**: Use the parameter name from the table

### Step 3: Create Custom Metrics

1. Click "Create custom metrics"
2. For each metric:
   - **Metric name**: Use the names from the table above
   - **Unit of measurement**: Select appropriate unit
   - **Description**: Add a brief description
   - **Event parameter**: Use the parameter name from the table

### Step 4: Configure Events

1. In Admin → Property → Events
2. Click "Create event"
3. Configure each event type with the parameters listed above

## Reports and Dashboards

### 1. Tool Usage Dashboard

Create a custom dashboard with these widgets:

- **Tool Popularity**: Bar chart showing tool usage by `tool_id`
- **Operation Success Rate**: Gauge showing success rate by tool
- **Processing Performance**: Line chart showing `processing_time_ms` over time
- **Error Analysis**: Pie chart showing errors by `error_type`

### 2. User Behavior Analysis

- **Navigation Flow**: User flow from tool access to completion
- **Search Patterns**: Top search queries and categories
- **Engagement Metrics**: Scroll depth, session duration, tool interactions per session

### 3. Performance Monitoring

- **Tool Performance**: Average processing time by tool and operation
- **Error Tracking**: Error rates and types by tool
- **Input Size Analysis**: Distribution of input sizes across tools

## Sample Queries for Analysis

### Most Popular Tools
```sql
SELECT 
  tool_id,
  COUNT(*) as usage_count,
  AVG(processing_time_ms) as avg_processing_time
FROM events 
WHERE event_name = 'tool_usage'
GROUP BY tool_id
ORDER BY usage_count DESC
```

### Error Analysis
```sql
SELECT 
  tool_id,
  error_type,
  COUNT(*) as error_count
FROM events 
WHERE event_name = 'tool_error'
GROUP BY tool_id, error_type
ORDER BY error_count DESC
```

### User Engagement by Tool
```sql
SELECT 
  tool_id,
  COUNT(DISTINCT user_pseudo_id) as unique_users,
  COUNT(*) as total_interactions,
  COUNT(*) / COUNT(DISTINCT user_pseudo_id) as interactions_per_user
FROM events 
WHERE event_name = 'tool_interaction'
GROUP BY tool_id
ORDER BY unique_users DESC
```

## Troubleshooting

### Common Issues

1. **Events not appearing**: Check if gtag is loaded and AnalyticsTracker is working
2. **Custom dimensions not populating**: Ensure dimensions are created before events are sent
3. **Data delays**: GA4 can take 24-48 hours to process custom dimensions

### Debug Mode

Enable debug mode in the browser console:
```javascript
// Check if analytics is working
console.log('gtag available:', typeof gtag !== 'undefined');
console.log('AnalyticsTracker available:', typeof AnalyticsTracker !== 'undefined');

// Test event tracking
AnalyticsTracker.trackToolInteraction('test', 'test_action', { test: true });
```

### Validation

Use Google Analytics Debugger extension or GA4 DebugView to verify events are being sent correctly.

## Advanced Configuration

### Enhanced Ecommerce (if applicable)

If you plan to monetize tools in the future, consider setting up enhanced ecommerce tracking for premium features.

### User Properties

Set custom user properties for:
- User type (developer, student, professional)
- Preferred tool categories
- Experience level

### Conversion Tracking

Set up conversion goals for:
- Tool completion rates
- User registration (if added later)
- Tool sharing/social engagement

## Maintenance

### Regular Monitoring

- Check custom dimension data quality weekly
- Monitor error rates and performance metrics
- Review user engagement patterns monthly

### Updates

- Update custom dimensions when adding new tools
- Modify tracking parameters based on user feedback
- Optimize performance tracking based on usage patterns

---

This setup will give you comprehensive insights into how users interact with your developer tools, helping you optimize the user experience and identify opportunities for improvement.
