import React, { useState } from 'react';
import { Key, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export default function JWTVerifier() {
    const [input, setInput] = useState('');
    const [header, setHeader] = useState('');
    const [payload, setPayload] = useState('');
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleDecode = () => {
        if (!input.trim()) {
            showNotification('Please enter a JWT token', 'error');
            return;
        }
        try {
            const parts = input.trim().split('.');
            if (parts.length !== 3) {
                throw new Error('Invalid JWT format: must have 3 parts');
            }
            const decodedHeader = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
            const decodedPayload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));

            setHeader(JSON.stringify(decodedHeader, null, 2));
            setPayload(JSON.stringify(decodedPayload, null, 2));
            showNotification('JWT decoded successfully', 'success');
        } catch (error) {
            showNotification('Invalid JWT: ' + error.message, 'error');
            setHeader('');
            setPayload('');
        }
    };

    const handleClear = () => {
        setInput('');
        setHeader('');
        setPayload('');
        setNotification(null);
    };

    return (
        <div className="space-y-6">
            {/* Input Section */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-[var(--text-secondary)]">JWT Token</label>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full h-32 p-4 font-mono text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent resize-y"
                    placeholder="Paste your JWT token here (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)"
                    spellCheck="false"
                />
            </div>

            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                <button onClick={handleDecode} className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white rounded-md hover:bg-[var(--accent-hover)] transition-colors">
                    <Key size={16} /> Decode Token
                </button>
                <button onClick={handleClear} className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-md transition-colors ml-auto">
                    <Trash2 size={16} /> Clear
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

            {/* Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-[var(--text-primary)]">Header</h4>
                    <pre className="w-full min-h-[150px] p-4 font-mono text-sm bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg overflow-auto whitespace-pre-wrap">
                        {header || 'Decoded header will appear here...'}
                    </pre>
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-[var(--text-primary)]">Payload</h4>
                    <pre className="w-full min-h-[150px] p-4 font-mono text-sm bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg overflow-auto whitespace-pre-wrap">
                        {payload || 'Decoded payload will appear here...'}
                    </pre>
                </div>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                <strong>Note:</strong> Signature verification requires the secret key and is not performed client-side for security reasons.
            </div>
        </div>
    );
}
