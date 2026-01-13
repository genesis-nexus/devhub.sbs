import React, { useState } from 'react';
import { Shield, ExternalLink, Copy, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export default function OIDCTester() {
    const [discoveryUrl, setDiscoveryUrl] = useState('');
    const [clientId, setClientId] = useState('');
    const [scope, setScope] = useState('openid profile email');
    const [responseType, setResponseType] = useState('code');
    const [discoveryResult, setDiscoveryResult] = useState(null);
    const [authUrl, setAuthUrl] = useState('');
    const [notification, setNotification] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const redirectUri = typeof window !== 'undefined' ? `${window.location.origin}/oidc-callback` : 'https://devhub.sbs/oidc-callback';

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleDiscover = async () => {
        if (!discoveryUrl.trim()) {
            showNotification('Please enter a discovery endpoint URL', 'error');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(discoveryUrl);
            if (!response.ok) throw new Error('Failed to fetch discovery document');
            const data = await response.json();
            setDiscoveryResult(data);
            showNotification('Discovery document fetched successfully', 'success');
        } catch (error) {
            showNotification('Error: ' + error.message, 'error');
            setDiscoveryResult(null);
        } finally {
            setIsLoading(false);
        }
    };

    const generateAuthUrl = () => {
        if (!discoveryResult?.authorization_endpoint) {
            showNotification('Please discover endpoints first', 'error');
            return;
        }
        if (!clientId.trim()) {
            showNotification('Please enter a Client ID', 'error');
            return;
        }

        const state = crypto.randomUUID();
        const nonce = crypto.randomUUID();

        const params = new URLSearchParams({
            client_id: clientId,
            redirect_uri: redirectUri,
            response_type: responseType,
            scope: scope,
            state: state,
            nonce: nonce
        });

        const url = `${discoveryResult.authorization_endpoint}?${params.toString()}`;
        setAuthUrl(url);
        showNotification('Authorization URL generated', 'success');
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!', 'success');
        });
    };

    return (
        <div className="space-y-6">
            {/* Configuration */}
            <div className="space-y-4 p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Discovery Endpoint</label>
                    <input
                        type="url"
                        value={discoveryUrl}
                        onChange={(e) => setDiscoveryUrl(e.target.value)}
                        placeholder="https://your-provider/.well-known/openid-configuration"
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)]"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Client ID</label>
                    <input
                        type="text"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                        placeholder="Your OIDC Client ID"
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)]"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Redirect URI (configure in your provider)</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={redirectUri}
                            readOnly
                            className="flex-1 p-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-[var(--text-muted)]"
                        />
                        <button onClick={() => copyToClipboard(redirectUri)} className="px-3 text-[var(--accent-primary)]">
                            <Copy size={18} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Scope</label>
                        <input
                            type="text"
                            value={scope}
                            onChange={(e) => setScope(e.target.value)}
                            className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Response Type</label>
                        <select
                            value={responseType}
                            onChange={(e) => setResponseType(e.target.value)}
                            className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg"
                        >
                            <option value="code">Authorization Code (code)</option>
                            <option value="token">Implicit (token)</option>
                            <option value="id_token">ID Token (id_token)</option>
                            <option value="code token">Hybrid (code token)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
                <button onClick={handleDiscover} disabled={isLoading} className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white rounded-md hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50">
                    <Shield size={16} /> {isLoading ? 'Discovering...' : 'Discover Endpoints'}
                </button>
                <button onClick={generateAuthUrl} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    Generate Auth URL
                </button>
            </div>

            {/* Notification */}
            {notification && (
                <div className={clsx(
                    "p-4 rounded-md flex items-center gap-2",
                    notification.type === 'success' ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                )}>
                    {notification.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    {notification.message}
                </div>
            )}

            {/* Discovery Results */}
            {discoveryResult && (
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Discovery Document</h4>
                    <pre className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg overflow-auto text-xs max-h-64">
                        {JSON.stringify(discoveryResult, null, 2)}
                    </pre>
                </div>
            )}

            {/* Generated Auth URL */}
            {authUrl && (
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Authorization URL</h4>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={authUrl}
                            readOnly
                            className="flex-1 p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-sm font-mono"
                        />
                        <button onClick={() => copyToClipboard(authUrl)} className="px-3 text-[var(--accent-primary)]">
                            <Copy size={18} />
                        </button>
                        <a href={authUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-[var(--accent-primary)] text-white rounded-md flex items-center gap-1">
                            <ExternalLink size={16} /> Open
                        </a>
                    </div>
                </div>
            )}

            {/* Instructions */}
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                <strong>Instructions:</strong>
                <ol className="list-decimal ml-4 mt-2 space-y-1">
                    <li>Configure <code>{redirectUri}</code> as a redirect URI in your OIDC provider</li>
                    <li>Enter the discovery endpoint URL and click "Discover Endpoints"</li>
                    <li>Enter your Client ID and configure scope/response type</li>
                    <li>Click "Generate Auth URL" and use it to test authentication</li>
                </ol>
            </div>
        </div>
    );
}
