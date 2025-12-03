# 🛡️ Complete OIDC Testing Guide

## Overview

DevHub now provides a **complete end-to-end OIDC (OpenID Connect) testing solution** that allows you to test the full OAuth 2.0 / OIDC authentication flow with any provider.

## 🔧 What's New

### ✅ **Complete OIDC Flow Testing**
- **Authorization URL generation** with all standard parameters
- **Dedicated callback handler** at `https://devhub.sbs/oidc-callback.html`
- **Token exchange** for authorization code flow
- **Token validation** and claims decoding
- **Support for multiple flow types** (Authorization Code, Implicit, Hybrid)

### ✅ **Enhanced Features**
- **Provider presets** for Auth0, Google, Microsoft, Okta
- **Automatic discovery** endpoint processing
- **Session storage** for flow continuity
- **Complete error handling** with detailed messages
- **Mobile-responsive** design

## 🚀 How to Use

### **Step 1: Configure Your OIDC Provider**

1. **Add Redirect URI**: Configure `https://devhub.sbs/oidc-callback.html` as an allowed redirect URI in your OIDC provider
2. **Note your Client ID**: You'll need this for testing

### **Step 2: Access the OIDC Tester**

1. Go to [DevHub.sbs](https://devhub.sbs)
2. Click **"OIDC Tester"** from the hero section or Authentication category
3. The OIDC testing modal will open

### **Step 3: Configure the Test**

#### **Quick Setup with Presets**
Click one of the provider preset buttons:
- 🔐 **Auth0**: Auto-fills Auth0 discovery endpoint format
- 🔍 **Google**: Sets Google's OIDC discovery endpoint
- 🔷 **Microsoft**: Configures Azure AD v2.0 endpoint
- 🏢 **Okta**: Sets Okta discovery endpoint format

#### **Manual Configuration**
Fill in these fields:
- **Discovery Endpoint**: Your OIDC provider's `.well-known/openid_configuration` URL
- **Client ID**: Your registered client identifier
- **Redirect URI**: Pre-filled with `https://devhub.sbs/oidc-callback.html` (read-only)
- **Scope**: Space-separated scopes (default: `openid profile email`)
- **Response Type**: Choose your OAuth flow type

### **Step 4: Test the Flow**

1. **Click "Discover Endpoints"**: Fetches and validates your OIDC provider configuration
2. **Click "Generate Auth URL"**: Creates the authorization URL with proper parameters
3. **Click "Test Full Flow"**: Opens the auth URL in a new window
4. **Complete the login**: Authenticate with your OIDC provider
5. **Return to callback**: You'll be redirected to the callback handler

### **Step 5: Exchange and Validate Tokens**

The callback handler will:

#### **Process Authorization Response**
- Extract authorization code and state parameter
- Display the received parameters
- Pre-fill token exchange configuration

#### **Exchange for Tokens** (Authorization Code Flow)
1. Fill in the **Token Endpoint** (auto-filled from discovery)
2. Add **Client ID** and optionally **Client Secret**
3. Click **"Exchange for Tokens"**
4. View the received access token, ID token, and refresh token

#### **Decode Token Claims**
1. Click **"Decode Tokens"** to see the JWT payload
2. View detailed claims for both access and ID tokens
3. Inspect token headers, payload, and signature information

## 🔍 Supported Flow Types

### **Authorization Code Flow** (Recommended)
- **Response Type**: `code`
- **Security**: Highest - tokens exchanged server-side
- **Use Case**: Web applications, mobile apps

### **Implicit Flow**
- **Response Type**: `token` or `id_token`
- **Security**: Lower - tokens in URL fragment
- **Use Case**: Single-page applications (legacy)

### **Hybrid Flows**
- **Response Type**: `code token`, `code id_token`
- **Security**: Medium - combines both approaches
- **Use Case**: Complex applications with multiple components

## 🌐 Popular OIDC Providers

### **Auth0**
- **Discovery**: `https://YOUR_DOMAIN.auth0.com/.well-known/openid_configuration`
- **Setup**: Replace `YOUR_DOMAIN` with your Auth0 domain

### **Google**
- **Discovery**: `https://accounts.google.com/.well-known/openid_configuration`
- **Setup**: Get Client ID from [Google Cloud Console](https://console.cloud.google.com/)

### **Microsoft Azure AD**
- **Discovery**: `https://login.microsoftonline.com/common/v2.0/.well-known/openid_configuration`
- **Setup**: Get Client ID from [Azure Portal](https://portal.azure.com/)

### **Okta**
- **Discovery**: `https://YOUR_DOMAIN.okta.com/.well-known/openid_configuration`
- **Setup**: Replace `YOUR_DOMAIN` with your Okta domain

## 🛠️ Technical Details

### **Callback URL Configuration**
Always use: `https://devhub.sbs/oidc-callback.html`

This URL must be:
- ✅ Added to your OIDC provider's allowed redirect URIs
- ✅ Configured with HTTPS (required by OAuth 2.0 spec)
- ✅ Accessible publicly (not localhost)

### **Security Features**
- **State parameter validation** prevents CSRF attacks
- **PKCE support** for enhanced security (coming soon)
- **Token validation** ensures JWT integrity
- **Secure session storage** for flow continuity

### **Error Handling**
The tool handles and displays:
- Invalid discovery endpoints
- Network connectivity issues
- Malformed tokens
- Provider-specific errors
- Invalid client configurations

## 📱 Mobile Support

The OIDC tester is fully responsive:
- **Touch-friendly** interface
- **Optimized layouts** for mobile screens
- **Copy buttons** for easy credential sharing
- **Readable token displays** on small screens

## 🔧 Troubleshooting

### **Common Issues**

#### **"Discovery failed"**
- ✅ Check discovery endpoint URL format
- ✅ Verify CORS policy allows requests
- ✅ Ensure endpoint returns valid JSON

#### **"Token exchange failed"**
- ✅ Verify client ID is correct
- ✅ Check if client secret is required
- ✅ Confirm redirect URI matches exactly

#### **"Callback not received"**
- ✅ Verify redirect URI is configured in provider
- ✅ Check popup blocker settings
- ✅ Ensure HTTPS is used (not HTTP)

### **CORS Issues**
Some providers may block cross-origin requests. This is normal for security. The tool handles this gracefully and provides alternative approaches.

## 🎯 Use Cases

### **Developer Testing**
- Test OIDC integration before production
- Validate token claims and structure
- Debug authentication flows
- Verify provider configuration

### **Security Auditing**
- Inspect token contents
- Validate security parameters
- Test different flow types
- Verify redirect URI security

### **Learning & Education**
- Understand OAuth 2.0 / OIDC flows
- See real token structures
- Practice with different providers
- Explore security parameters

## 🚀 Coming Soon

- **PKCE (Proof Key for Code Exchange)** support
- **JWT signature verification** with public keys
- **Refresh token testing**
- **Multi-tenant provider support**
- **Token introspection** endpoint testing

---

**💡 Pro Tip**: Always test your OIDC configuration with this tool before deploying to production. It can catch common misconfigurations early!

For questions or issues, visit [DevHub.sbs](https://devhub.sbs) or check our other developer tools.

