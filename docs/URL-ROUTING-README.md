# URL Routing for Individual Tools

## Overview
DevHub now supports direct URL access to individual tools, allowing users to bookmark specific tools and improving SEO for search engines.

## Supported Tool URLs

### JSON Tools
- **URL**: `https://devhub.sbs/json`
- **Tool**: JSON Validator & Beautifier
- **SEO**: Optimized meta tags and structured data

### JWT Tools
- **URL**: `https://devhub.sbs/jwt`
- **Tool**: JWT Token Verifier
- **SEO**: Optimized meta tags and structured data

### Base64 Tools
- **URL**: `https://devhub.sbs/base64`
- **Tool**: Base64 Encoder/Decoder
- **SEO**: Optimized meta tags and structured data

### URL Tools
- **URL**: `https://devhub.sbs/url`
- **Tool**: URL Encoder/Decoder
- **SEO**: Optimized meta tags and structured data

### OIDC Tools
- **URL**: `https://devhub.sbs/oidc`
- **Tool**: OIDC Playground & Testing Tool
- **SEO**: Optimized meta tags and structured data

### Hash Tools
- **URL**: `https://devhub.sbs/hash`
- **Tool**: Hash Generator Tool
- **SEO**: Optimized meta tags and structured data

## Features

### URL Routing
- Direct access to tools via clean URLs
- Browser back/forward button support
- History state management
- No page reloads

### SEO Optimization
- Dynamic meta tag updates
- Tool-specific page titles
- Tool-specific descriptions
- Open Graph and Twitter Card support
- Structured data for each tool

### User Experience
- Breadcrumb navigation
- Keyboard shortcuts (Escape to close)
- Smooth transitions
- Maintains tool state

## Technical Implementation

### JavaScript Functions
- `initializeURLRouting()` - Sets up URL routing system
- `handleRouteChange(path)` - Handles URL changes
- `updateURLForTool(toolId)` - Updates URL when tool opens
- `updatePageMetaForTool(toolName)` - Updates SEO meta tags
- `updateBreadcrumb(toolId)` - Updates breadcrumb navigation
- `restoreOriginalPageMeta()` - Restores original meta tags

### URL Structure
- Home: `/`
- JSON Tool: `/json`
- JWT Tool: `/jwt`
- Base64 Tool: `/base64`
- URL Tool: `/url`
- OIDC Tool: `/oidc`
- Hash Tool: `/hash`

### Browser Support
- Modern browsers with History API support
- Fallback to standard navigation for older browsers
- Progressive enhancement approach

## SEO Benefits

### Search Engine Optimization
- Individual tool pages are indexable
- Tool-specific meta descriptions
- Tool-specific keywords
- Structured data markup
- Clean, semantic URLs

### Social Media
- Open Graph meta tags
- Twitter Card support
- Tool-specific social sharing
- Rich previews

### Analytics
- Track individual tool usage
- Monitor tool-specific traffic
- Analyze user behavior per tool
- Conversion tracking per tool

## Usage Examples

### Direct Tool Access
```javascript
// Navigate directly to JSON tool
window.location.href = 'https://devhub.sbs/json';

// Navigate directly to JWT tool
window.location.href = 'https://devhub.sbs/jwt';
```

### Programmatic Tool Opening
```javascript
// Open tool and update URL
openInternalTool('json');

// Open tool without URL update
openToolModal('json');
```

### URL State Management
```javascript
// Check current tool
const currentTool = window.history.state?.tool;

// Navigate back to home
window.history.pushState({}, '', '/');
```

## Future Enhancements

### Planned Features
- Tool-specific analytics tracking
- Deep linking to specific tool states
- Tool sharing via URL parameters
- Tool history and favorites
- Custom tool configurations

### SEO Improvements
- Tool-specific sitemaps
- Tool-specific robots.txt rules
- Tool-specific canonical URLs
- Tool-specific schema markup
- Tool-specific social media cards

## Maintenance

### Regular Updates
- Update tool meta descriptions quarterly
- Refresh structured data annually
- Monitor URL routing performance
- Update sitemaps monthly

### Testing
- Test URL routing functionality
- Verify meta tag updates
- Check browser compatibility
- Validate structured data
- Test social media sharing

## Support

For issues or questions about URL routing:
1. Check browser console for errors
2. Verify JavaScript is enabled
3. Test with different browsers
4. Check network tab for failed requests
5. Review browser compatibility

## Changelog

### Version 1.0.0 (2025-01-27)
- Initial URL routing implementation
- Tool-specific meta tags
- Breadcrumb navigation
- Browser history support
- SEO optimization
- Structured data markup


