import React, { useState, useRef } from 'react';
import { Play, AlignLeft, Minimize2, Trash2, Copy, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { beautifyJSON, getJSONErrorLine } from '../utils/jsonUtils';
import clsx from 'clsx';

export default function JsonValidator() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [notification, setNotification] = useState(null);
    const [validationResult, setValidationResult] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleValidate = () => {
        if (!input.trim()) {
            showNotification('Please enter JSON to validate', 'error');
            return;
        }

        try {
            const parsed = JSON.parse(input);
            const beautified = beautifyJSON(parsed);
            setOutput(beautified);

            setValidationResult({
                isValid: true,
                type: Array.isArray(parsed) ? 'Array' : 'Object',
                size: input.length,
                keys: Object.keys(parsed).length
            });
            showNotification('JSON validation successful', 'success');
        } catch (error) {
            let errorDetails = error.message;
            if (error.message.includes('Unexpected token')) errorDetails += '. Check for missing quotes, commas, or brackets.';

            setValidationResult({
                isValid: false,
                error: errorDetails,
                line: getJSONErrorLine(input, error.message),
                type: error.name
            });
            showNotification('JSON validation failed', 'error');
        }
    };

    const handleBeautify = () => {
        if (!input.trim()) {
            showNotification('Please enter JSON to beautify', 'error');
            return;
        }
        try {
            const parsed = JSON.parse(input);
            const beautified = beautifyJSON(parsed);
            setOutput(beautified);
            setValidationResult({ isValid: true, type: 'Beautified' });
            showNotification('JSON beautified successfully', 'success');
        } catch (error) {
            showNotification('Invalid JSON - cannot beautify', 'error');
        }
    };

    const handleMinify = () => {
        if (!input.trim()) {
            showNotification('Please enter JSON to minify', 'error');
            return;
        }
        try {
            const parsed = JSON.parse(input);
            const minified = JSON.stringify(parsed);
            setOutput(minified);
            setValidationResult({
                isValid: true,
                type: 'Minified',
                saved: input.length - minified.length
            });
            showNotification('JSON minified successfully', 'success');
        } catch (error) {
            showNotification('Invalid JSON - cannot minify', 'error');
        }
    };

    const handleClear = () => {
        setInput('');
        setOutput('');
        setValidationResult(null);
        setNotification(null);
    };

    const handleCopy = () => {
        if (!output) {
            showNotification('No JSON to copy', 'error');
            return;
        }
        navigator.clipboard.writeText(output).then(() => {
            showNotification('JSON copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Failed to copy JSON', 'error');
        });
    };

    const handleDownload = () => {
        if (!output) {
            showNotification('No JSON to download', 'error');
            return;
        }
        const blob = new Blob([output], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'processed.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showNotification('JSON downloaded successfully', 'success');
    };

    return (
        <div className="space-y-6">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                <button onClick={handleValidate} className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white rounded-md hover:bg-[var(--accent-hover)] transition-colors">
                    <Play size={16} /> Validate
                </button>
                <button onClick={handleBeautify} className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md hover:bg-[var(--bg-tertiary)] transition-colors">
                    <AlignLeft size={16} /> Beautify
                </button>
                <button onClick={handleMinify} className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md hover:bg-[var(--bg-tertiary)] transition-colors">
                    <Minimize2 size={16} /> Minify
                </button>
                <div className="h-8 w-px bg-[var(--border-color)] mx-2 hidden md:block"></div>
                <button onClick={handleClear} className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-md transition-colors ml-auto md:ml-0">
                    <Trash2 size={16} /> Clear
                </button>
            </div>

            {/* Notification */}
            {notification && (
                <div className={clsx(
                    "p-4 rounded-md flex items-center gap-2 animate-fade-in",
                    notification.type === 'success' ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                )}>
                    {notification.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    {notification.message}
                </div>
            )}

            {/* Validation Result */}
            {validationResult && (
                <div className={clsx(
                    "p-4 rounded-md border",
                    validationResult.isValid ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                )}>
                    <div className="flex items-start gap-3">
                        {validationResult.isValid ? (
                            <div className="text-green-600"><CheckCircle size={24} /></div>
                        ) : (
                            <div className="text-red-600"><AlertCircle size={24} /></div>
                        )}
                        <div>
                            <h3 className={clsx("font-bold mb-1", validationResult.isValid ? "text-green-800" : "text-red-800")}>
                                {validationResult.isValid ? "Valid JSON!" : "Invalid JSON!"}
                            </h3>
                            <div className={clsx("text-sm", validationResult.isValid ? "text-green-700" : "text-red-700")}>
                                {validationResult.isValid ? (
                                    <>
                                        <p>Type: {validationResult.type}</p>
                                        {validationResult.keys && <p>Keys: {validationResult.keys}</p>}
                                        {validationResult.saved && <p>Space Saved: {validationResult.saved} chars</p>}
                                    </>
                                ) : (
                                    <>
                                        <p className="font-medium">{validationResult.error}</p>
                                        <p>Error Type: {validationResult.type}</p>
                                        <p>Line: {validationResult.line}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Editors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--text-secondary)]">Input JSON</label>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full h-[400px] p-4 font-mono text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent resize-y"
                        placeholder="Paste your JSON here..."
                        spellCheck="false"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-[var(--text-secondary)] flex justify-between">
                        <span>Output / Processed</span>
                        <div className="flex gap-2">
                            <button onClick={handleCopy} className="text-[var(--accent-primary)] hover:text-[var(--accent-hover)] p-1" title="Copy">
                                <Copy size={16} />
                            </button>
                            <button onClick={handleDownload} className="text-[var(--accent-primary)] hover:text-[var(--accent-hover)] p-1" title="Download">
                                <Download size={16} />
                            </button>
                        </div>
                    </label>
                    <textarea
                        value={output}
                        readOnly
                        className="w-full h-[400px] p-4 font-mono text-sm bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)]"
                        placeholder="Processed output will appear here..."
                    />
                </div>
            </div>
        </div>
    );
}
