import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Trash2, Copy, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export default function Base64Tool() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleEncode = () => {
        if (!input.trim()) {
            showNotification('Please enter text to encode', 'error');
            return;
        }
        try {
            const encoded = btoa(unescape(encodeURIComponent(input)));
            setOutput(encoded);
            showNotification('Text encoded to Base64', 'success');
        } catch (error) {
            showNotification('Encoding failed: ' + error.message, 'error');
        }
    };

    const handleDecode = () => {
        if (!input.trim()) {
            showNotification('Please enter Base64 to decode', 'error');
            return;
        }
        try {
            const decoded = decodeURIComponent(escape(atob(input)));
            setOutput(decoded);
            showNotification('Base64 decoded successfully', 'success');
        } catch (error) {
            showNotification('Invalid Base64 format', 'error');
        }
    };

    const handleClear = () => {
        setInput('');
        setOutput('');
        setNotification(null);
    };

    const handleCopy = () => {
        if (!output) {
            showNotification('No output to copy', 'error');
            return;
        }
        navigator.clipboard.writeText(output).then(() => {
            showNotification('Copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Failed to copy', 'error');
        });
    };

    return (
        <div className="space-y-6">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                <button onClick={handleEncode} className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white rounded-md hover:bg-[var(--accent-hover)] transition-colors">
                    <ArrowRight size={16} /> Encode
                </button>
                <button onClick={handleDecode} className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white rounded-md hover:bg-[var(--accent-hover)] transition-colors">
                    <ArrowLeft size={16} /> Decode
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

            {/* Editors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--text-secondary)]">Input</label>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full h-[300px] p-4 font-mono text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent resize-y"
                        placeholder="Enter text to encode or Base64 to decode..."
                        spellCheck="false"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--text-secondary)] flex justify-between">
                        <span>Output</span>
                        <button onClick={handleCopy} className="text-[var(--accent-primary)] hover:text-[var(--accent-hover)] p-1" title="Copy">
                            <Copy size={16} />
                        </button>
                    </label>
                    <textarea
                        value={output}
                        readOnly
                        className="w-full h-[300px] p-4 font-mono text-sm bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg"
                        placeholder="Result will appear here..."
                    />
                </div>
            </div>
        </div>
    );
}
