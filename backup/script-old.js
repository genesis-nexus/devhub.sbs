// DevTools Hub - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // URL Encoder/Decoder functionality
    const urlInput = document.getElementById('url-input');
    const urlOutput = document.getElementById('url-output');
    const urlEncodeBtn = document.getElementById('url-encode');
    const urlDecodeBtn = document.getElementById('url-decode');
    const urlClearBtn = document.getElementById('url-clear');
    const urlCopyBtn = document.getElementById('url-copy');

    urlEncodeBtn.addEventListener('click', () => {
        try {
            const input = urlInput.value;
            if (!input.trim()) {
                showError('Please enter text to encode');
                return;
            }
            urlOutput.value = encodeURIComponent(input);
            showSuccess('URL encoded successfully!');
        } catch (error) {
            showError('Error encoding URL: ' + error.message);
        }
    });

    urlDecodeBtn.addEventListener('click', () => {
        try {
            const input = urlInput.value;
            if (!input.trim()) {
                showError('Please enter text to decode');
                return;
            }
            urlOutput.value = decodeURIComponent(input);
            showSuccess('URL decoded successfully!');
        } catch (error) {
            showError('Error decoding URL: ' + error.message);
        }
    });

    urlClearBtn.addEventListener('click', () => {
        urlInput.value = '';
        urlOutput.value = '';
    });

    urlCopyBtn.addEventListener('click', () => {
        copyToClipboard(urlOutput.value, 'URL result copied to clipboard!');
    });

    // Base64 Encoder/Decoder functionality
    const base64Input = document.getElementById('base64-input');
    const base64Output = document.getElementById('base64-output');
    const base64EncodeBtn = document.getElementById('base64-encode');
    const base64DecodeBtn = document.getElementById('base64-decode');
    const base64ClearBtn = document.getElementById('base64-clear');
    const base64CopyBtn = document.getElementById('base64-copy');

    base64EncodeBtn.addEventListener('click', () => {
        try {
            const input = base64Input.value;
            if (!input.trim()) {
                showError('Please enter text to encode');
                return;
            }
            base64Output.value = btoa(unescape(encodeURIComponent(input)));
            showSuccess('Text encoded to Base64 successfully!');
        } catch (error) {
            showError('Error encoding to Base64: ' + error.message);
        }
    });

    base64DecodeBtn.addEventListener('click', () => {
        try {
            const input = base64Input.value;
            if (!input.trim()) {
                showError('Please enter Base64 text to decode');
                return;
            }
            base64Output.value = decodeURIComponent(escape(atob(input)));
            showSuccess('Base64 decoded successfully!');
        } catch (error) {
            showError('Error decoding Base64: Invalid Base64 string');
        }
    });

    base64ClearBtn.addEventListener('click', () => {
        base64Input.value = '';
        base64Output.value = '';
    });

    base64CopyBtn.addEventListener('click', () => {
        copyToClipboard(base64Output.value, 'Base64 result copied to clipboard!');
    });

    // JWT Token Verifier functionality
    const jwtInput = document.getElementById('jwt-input');
    const jwtDecodeBtn = document.getElementById('jwt-decode');
    const jwtClearBtn = document.getElementById('jwt-clear');
    const jwtHeader = document.getElementById('jwt-header');
    const jwtPayload = document.getElementById('jwt-payload');
    const jwtSignature = document.getElementById('jwt-signature');

    jwtDecodeBtn.addEventListener('click', () => {
        try {
            const token = jwtInput.value.trim();
            if (!token) {
                showError('Please enter a JWT token');
                return;
            }

            const parts = token.split('.');
            if (parts.length !== 3) {
                showError('Invalid JWT format. JWT should have 3 parts separated by dots.');
                return;
            }

            // Decode header
            const header = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
            jwtHeader.textContent = JSON.stringify(header, null, 2);

            // Decode payload
            const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
            jwtPayload.textContent = JSON.stringify(payload, null, 2);

            // Check expiration
            let signatureInfo = 'Signature verification requires the secret key.\n\n';
            signatureInfo += `Algorithm: ${header.alg || 'Not specified'}\n`;
            signatureInfo += `Type: ${header.typ || 'Not specified'}\n\n`;

            if (payload.exp) {
                const expDate = new Date(payload.exp * 1000);
                const now = new Date();
                const isExpired = expDate < now;
                signatureInfo += `Expiration: ${expDate.toLocaleString()}\n`;
                signatureInfo += `Status: ${isExpired ? '❌ Expired' : '✅ Valid'}\n`;
            }

            if (payload.iat) {
                const iatDate = new Date(payload.iat * 1000);
                signatureInfo += `Issued at: ${iatDate.toLocaleString()}\n`;
            }

            if (payload.nbf) {
                const nbfDate = new Date(payload.nbf * 1000);
                signatureInfo += `Not before: ${nbfDate.toLocaleString()}\n`;
            }

            jwtSignature.textContent = signatureInfo;
            showSuccess('JWT token decoded successfully!');

        } catch (error) {
            showError('Error decoding JWT: ' + error.message);
            jwtHeader.textContent = '';
            jwtPayload.textContent = '';
            jwtSignature.textContent = '';
        }
    });

    jwtClearBtn.addEventListener('click', () => {
        jwtInput.value = '';
        jwtHeader.textContent = '';
        jwtPayload.textContent = '';
        jwtSignature.textContent = '';
    });

    // OIDC Workflow functionality
    const oidcDiscovery = document.getElementById('oidc-discovery');
    const oidcClientId = document.getElementById('oidc-client-id');
    const oidcRedirectUri = document.getElementById('oidc-redirect-uri');
    const oidcScope = document.getElementById('oidc-scope');
    const oidcDiscoverBtn = document.getElementById('oidc-discover');
    const oidcGenerateAuthUrlBtn = document.getElementById('oidc-generate-auth-url');
    const oidcClearBtn = document.getElementById('oidc-clear');
    const oidcDiscoveryResults = document.getElementById('oidc-discovery-results');
    const oidcAuthUrl = document.getElementById('oidc-auth-url');
    const oidcCopyUrlBtn = document.getElementById('oidc-copy-url');

    let discoveryData = null;

    oidcDiscoverBtn.addEventListener('click', async () => {
        const discoveryUrl = oidcDiscovery.value.trim();
        if (!discoveryUrl) {
            showError('Please enter a discovery endpoint URL');
            return;
        }

        try {
            setLoading(oidcDiscoverBtn, true);
            
            const response = await fetch(discoveryUrl);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            discoveryData = await response.json();
            oidcDiscoveryResults.textContent = JSON.stringify(discoveryData, null, 2);
            showSuccess('Discovery endpoint fetched successfully!');
            
        } catch (error) {
            showError('Error fetching discovery endpoint: ' + error.message);
            oidcDiscoveryResults.textContent = '';
            discoveryData = null;
        } finally {
            setLoading(oidcDiscoverBtn, false);
        }
    });

    oidcGenerateAuthUrlBtn.addEventListener('click', () => {
        const clientId = oidcClientId.value.trim();
        const redirectUri = oidcRedirectUri.value.trim();
        const scope = oidcScope.value.trim() || 'openid profile email';

        if (!clientId) {
            showError('Please enter a Client ID');
            return;
        }

        if (!redirectUri) {
            showError('Please enter a Redirect URI');
            return;
        }

        let authorizationEndpoint;
        
        if (discoveryData && discoveryData.authorization_endpoint) {
            authorizationEndpoint = discoveryData.authorization_endpoint;
        } else {
            const discoveryUrl = oidcDiscovery.value.trim();
            if (!discoveryUrl) {
                showError('Please run discovery first or manually enter the discovery endpoint');
                return;
            }
            // Try to guess the authorization endpoint
            const baseUrl = discoveryUrl.replace('/.well-known/openid_configuration', '');
            authorizationEndpoint = baseUrl + '/auth';
            showError('Using guessed authorization endpoint. Please run discovery for accurate results.');
        }

        // Generate state and nonce for security
        const state = generateRandomString(32);
        const nonce = generateRandomString(32);

        const authUrl = new URL(authorizationEndpoint);
        authUrl.searchParams.set('response_type', 'code');
        authUrl.searchParams.set('client_id', clientId);
        authUrl.searchParams.set('redirect_uri', redirectUri);
        authUrl.searchParams.set('scope', scope);
        authUrl.searchParams.set('state', state);
        authUrl.searchParams.set('nonce', nonce);

        oidcAuthUrl.value = authUrl.toString();
        showSuccess('Authorization URL generated successfully!');
    });

    oidcClearBtn.addEventListener('click', () => {
        oidcDiscovery.value = '';
        oidcClientId.value = '';
        oidcRedirectUri.value = '';
        oidcScope.value = 'openid profile email';
        oidcDiscoveryResults.textContent = '';
        oidcAuthUrl.value = '';
        discoveryData = null;
    });

    oidcCopyUrlBtn.addEventListener('click', () => {
        copyToClipboard(oidcAuthUrl.value, 'Authorization URL copied to clipboard!');
    });

    // Utility functions
    function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
        if (!text) {
            showError('Nothing to copy');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            showSuccess(successMessage);
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showSuccess(successMessage);
        });
    }

    function showSuccess(message) {
        showNotification(message, 'success');
    }

    function showError(message) {
        showNotification(message, 'error');
    }

    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 6px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        }

        notification.textContent = message;
        document.body.appendChild(notification);

        // Add slideIn animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 4000);
    }

    function setLoading(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.style.opacity = '0.6';
            button.style.cursor = 'not-allowed';
        } else {
            button.disabled = false;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        }
    }

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Add some sample data for testing
    const sampleJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    
    // Add example values on page load
    setTimeout(() => {
        // Add placeholder examples
        urlInput.placeholder = 'Example: Hello World! & Special Characters';
        base64Input.placeholder = 'Example: Hello, World!';
        jwtInput.placeholder = `Example JWT:\n${sampleJWT}`;
        oidcDiscovery.placeholder = 'Example: https://accounts.google.com/.well-known/openid_configuration';
    }, 1000);
});
