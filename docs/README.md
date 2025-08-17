# DevTools Hub 🛠️

A comprehensive developer tools website with a beautiful dark theme, designed to help developers with common tasks.

## Features

### 🔗 URL Encoder/Decoder
- Encode text to URL-safe format
- Decode URL-encoded text
- Handles special characters and Unicode

### 📄 Base64 Encoder/Decoder
- Encode text to Base64 format
- Decode Base64 strings to readable text
- Supports UTF-8 encoding

### 🔑 JWT Token Verifier
- Decode JWT tokens to view header and payload
- Check token expiration status
- View token metadata (issued at, not before, etc.)
- Algorithm and type information

### 🛡️ OpenID Connect (OIDC) Workflow Tester
- Test OIDC discovery endpoints
- Generate authorization URLs for OAuth flows
- Support for custom client IDs and redirect URIs
- Visual workflow steps guide

## Getting Started

### Option 1: Simple HTTP Server (Recommended)
```bash
# Using Python (if installed)
python3 -m http.server 8000

# Using Node.js serve package
npx serve . -l 3000

# Using live-server for development
npx live-server --port=3000 --open=/index.html
```

### Option 2: Direct File Access
Simply open `index.html` in your web browser. Note that some features (like OIDC discovery) may not work due to CORS restrictions when opening files directly.

## Usage Examples

### URL Encoding/Decoding
- **Input**: `Hello World! & Special Characters`
- **Encoded**: `Hello%20World!%20%26%20Special%20Characters`

### Base64 Encoding/Decoding
- **Input**: `Hello, World!`
- **Encoded**: `SGVsbG8sIFdvcmxkIQ==`

### JWT Token Example
Try decoding this sample JWT:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### OIDC Discovery Example
Try these popular OIDC discovery endpoints:
- Google: `https://accounts.google.com/.well-known/openid_configuration`
- Microsoft: `https://login.microsoftonline.com/common/v2.0/.well-known/openid_configuration`
- Auth0: `https://your-domain.auth0.com/.well-known/openid_configuration`

## Features

- **Dark Theme**: Modern, eye-friendly dark interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Copy to Clipboard**: One-click copying of results
- **Error Handling**: Clear error messages and validation
- **Real-time Processing**: Instant encoding/decoding
- **CORS Proxy**: Built-in handling for OIDC discovery requests

## Browser Compatibility

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Security Notes

- All processing is done client-side (no data sent to servers)
- JWT signatures cannot be verified without the secret key
- OIDC discovery may require CORS proxy for some endpoints
- Always validate tokens server-side in production applications

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this for your projects.

---

**DevTools Hub** - Built with ❤️ for developers
