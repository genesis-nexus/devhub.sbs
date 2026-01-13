import React, { useState, useRef, useEffect } from 'react';
import { QrCode, Download, Copy, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export default function QRGenerator() {
    const [text, setText] = useState('');
    const [qrDataUrl, setQrDataUrl] = useState('');
    const [notification, setNotification] = useState(null);
    const [size, setSize] = useState(256);
    const canvasRef = useRef(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    // Simple QR code generation using a canvas-based approach
    // For production, consider using a library like 'qrcode'
    const generateQR = async () => {
        if (!text.trim()) {
            showNotification('Please enter text or URL', 'error');
            return;
        }

        try {
            // Use Google Charts API for QR generation (simple approach)
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
            setQrDataUrl(url);
            showNotification('QR Code generated!', 'success');
        } catch (error) {
            showNotification('Failed to generate QR code', 'error');
        }
    };

    const downloadQR = () => {
        if (!qrDataUrl) {
            showNotification('Generate a QR code first', 'error');
            return;
        }

        const link = document.createElement('a');
        link.href = qrDataUrl;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showNotification('QR Code downloaded!', 'success');
    };

    return (
        <div className="space-y-6">
            {/* Input Section */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-[var(--text-secondary)]">Enter URL or Text</label>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-24 p-4 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent resize-y"
                    placeholder="https://example.com or any text..."
                />
            </div>

            {/* Options */}
            <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                <label className="block text-sm font-medium mb-2">QR Code Size: {size}px</label>
                <input
                    type="range"
                    min="128"
                    max="512"
                    step="64"
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value))}
                    className="w-full"
                />
                <div className="flex justify-between text-xs text-[var(--text-muted)]">
                    <span>128px</span>
                    <span>512px</span>
                </div>
            </div>

            <button onClick={generateQR} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors font-medium">
                <QrCode size={18} /> Generate QR Code
            </button>

            {/* QR Output */}
            {qrDataUrl && (
                <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-[var(--border-color)]">
                    <img src={qrDataUrl} alt="QR Code" className="mb-4" style={{ width: size, height: size }} />
                    <button onClick={downloadQR} className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white rounded-md hover:bg-[var(--accent-hover)] transition-colors">
                        <Download size={16} /> Download PNG
                    </button>
                </div>
            )}

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
