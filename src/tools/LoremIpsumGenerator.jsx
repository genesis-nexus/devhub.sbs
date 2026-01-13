import React, { useState } from 'react';
import { FileText, Copy, RefreshCw, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

const LOREM_WORDS = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
    'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
    'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
    'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
    'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
];

export default function LoremIpsumGenerator() {
    const [output, setOutput] = useState('');
    const [type, setType] = useState('paragraphs');
    const [count, setCount] = useState(3);
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const generateWord = () => LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];

    const generateSentence = (wordCount = null) => {
        const len = wordCount || Math.floor(Math.random() * 10) + 5;
        let sentence = '';
        for (let i = 0; i < len; i++) {
            sentence += (i === 0 ? '' : ' ') + generateWord();
        }
        return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
    };

    const generateParagraph = () => {
        const sentenceCount = Math.floor(Math.random() * 4) + 4;
        let paragraph = '';
        for (let i = 0; i < sentenceCount; i++) {
            paragraph += (i === 0 ? '' : ' ') + generateSentence();
        }
        return paragraph;
    };

    const generate = () => {
        let result = '';
        if (type === 'words') {
            const words = [];
            for (let i = 0; i < count; i++) {
                words.push(generateWord());
            }
            result = words.join(' ');
        } else if (type === 'sentences') {
            const sentences = [];
            for (let i = 0; i < count; i++) {
                sentences.push(generateSentence());
            }
            result = sentences.join(' ');
        } else {
            const paragraphs = [];
            for (let i = 0; i < count; i++) {
                paragraphs.push(generateParagraph());
            }
            result = paragraphs.join('\n\n');
        }
        // Start with "Lorem ipsum" for authenticity
        if (result.length > 11) {
            result = 'Lorem ipsum ' + result.slice(result.indexOf(' ', 12) + 1);
        }
        setOutput(result);
        showNotification('Lorem Ipsum generated!', 'success');
    };

    const copyOutput = () => {
        if (!output) {
            showNotification('Generate text first', 'error');
            return;
        }
        navigator.clipboard.writeText(output).then(() => {
            showNotification('Copied to clipboard!', 'success');
        });
    };

    return (
        <div className="space-y-6">
            {/* Options */}
            <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] flex flex-wrap items-end gap-4">
                <div className="flex-1 min-w-[150px]">
                    <label className="block text-sm font-medium mb-2">Generate</label>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={count}
                        onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full p-2 border border-[var(--border-color)] rounded-md bg-[var(--bg-primary)]"
                    />
                </div>
                <div className="flex-1 min-w-[150px]">
                    <label className="block text-sm font-medium mb-2">Type</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full p-2 border border-[var(--border-color)] rounded-md bg-[var(--bg-primary)]"
                    >
                        <option value="paragraphs">Paragraphs</option>
                        <option value="sentences">Sentences</option>
                        <option value="words">Words</option>
                    </select>
                </div>
                <button onClick={generate} className="flex items-center gap-2 px-6 py-2 bg-[var(--accent-primary)] text-white rounded-md hover:bg-[var(--accent-hover)] transition-colors">
                    <RefreshCw size={16} /> Generate
                </button>
            </div>

            {/* Output */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium text-[var(--text-secondary)]">Generated Text</label>
                    <button onClick={copyOutput} className="text-[var(--accent-primary)] hover:text-[var(--accent-hover)] p-1" title="Copy">
                        <Copy size={16} />
                    </button>
                </div>
                <textarea
                    value={output}
                    readOnly
                    className="w-full h-64 p-4 text-sm bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg"
                    placeholder="Click Generate to create Lorem Ipsum text..."
                />
            </div>

            {notification && (
                <div className={clsx(
                    "p-4 rounded-md flex items-center gap-2",
                    notification.type === 'success' ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                )}>
                    <CheckCircle size={20} />
                    {notification.message}
                </div>
            )}
        </div>
    );
}
