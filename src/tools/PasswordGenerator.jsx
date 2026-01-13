import React, { useState } from 'react';
import { RefreshCw, Copy, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export default function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [options, setOptions] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    });
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const generatePassword = () => {
        let charset = '';
        if (options.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (options.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (options.numbers) charset += '0123456789';
        if (options.symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        if (charset === '') {
            showNotification('Please select at least one character type', 'error');
            return;
        }

        let result = '';
        const array = new Uint32Array(length);
        crypto.getRandomValues(array);
        for (let i = 0; i < length; i++) {
            result += charset[array[i] % charset.length];
        }
        setPassword(result);
        showNotification('Password generated!', 'success');
    };

    const copyPassword = () => {
        if (!password) {
            showNotification('Generate a password first', 'error');
            return;
        }
        navigator.clipboard.writeText(password).then(() => {
            showNotification('Password copied!', 'success');
        });
    };

    const getStrength = () => {
        if (!password) return { label: 'None', color: 'gray', width: '0%' };
        let score = 0;
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        if (password.length >= 16) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        if (score <= 2) return { label: 'Weak', color: 'red', width: '25%' };
        if (score <= 4) return { label: 'Fair', color: 'yellow', width: '50%' };
        if (score <= 5) return { label: 'Good', color: 'blue', width: '75%' };
        return { label: 'Strong', color: 'green', width: '100%' };
    };

    const strength = getStrength();

    return (
        <div className="space-y-6">
            {/* Password Display */}
            <div className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        className="flex-1 p-4 font-mono text-lg bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg"
                        placeholder="Click Generate to create a password"
                    />
                    <button onClick={copyPassword} className="p-3 text-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] rounded-lg">
                        <Copy size={20} />
                    </button>
                </div>
                {password && (
                    <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                            <span>Strength:</span>
                            <span className={`font-medium text-${strength.color}-500`}>{strength.label}</span>
                        </div>
                        <div className="w-full h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-${strength.color}-500 transition-all`}
                                style={{ width: strength.width, backgroundColor: strength.color === 'green' ? '#22c55e' : strength.color === 'blue' ? '#3b82f6' : strength.color === 'yellow' ? '#eab308' : '#ef4444' }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Options */}
            <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Password Length: {length}</label>
                    <input
                        type="range"
                        min="8"
                        max="64"
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-[var(--text-muted)]">
                        <span>8</span>
                        <span>64</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { key: 'uppercase', label: 'Uppercase (A-Z)' },
                        { key: 'lowercase', label: 'Lowercase (a-z)' },
                        { key: 'numbers', label: 'Numbers (0-9)' },
                        { key: 'symbols', label: 'Symbols (!@#$)' },
                    ].map(opt => (
                        <label key={opt.key} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={options[opt.key]}
                                onChange={() => setOptions(prev => ({ ...prev, [opt.key]: !prev[opt.key] }))}
                                className="rounded"
                            />
                            <span className="text-sm">{opt.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button onClick={generatePassword} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors font-medium">
                <RefreshCw size={18} /> Generate Password
            </button>

            {notification && (
                <div className={clsx(
                    "p-4 rounded-md flex items-center gap-2",
                    notification.type === 'success' ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                )}>
                    {notification.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    {notification.message}
                </div>
            )}
        </div>
    );
}
