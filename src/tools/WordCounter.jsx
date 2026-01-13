import React, { useState, useEffect } from 'react';
import { FileText, Trash2, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function WordCounter() {
    const [text, setText] = useState('');
    const [stats, setStats] = useState({
        characters: 0,
        charactersNoSpaces: 0,
        words: 0,
        sentences: 0,
        paragraphs: 0,
        readingTime: '0 min'
    });

    useEffect(() => {
        const chars = text.length;
        const charsNoSpaces = text.replace(/\s/g, '').length;
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
        const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
        const readingTime = Math.max(1, Math.ceil(words / 200));

        setStats({
            characters: chars,
            charactersNoSpaces: charsNoSpaces,
            words,
            sentences,
            paragraphs,
            readingTime: `${readingTime} min`
        });
    }, [text]);

    const handleClear = () => setText('');

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-[var(--text-secondary)]">Enter your text</label>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-64 p-4 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent resize-y"
                    placeholder="Start typing or paste your text here..."
                />
            </div>

            <div className="flex gap-2">
                <button onClick={handleClear} className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-md transition-colors">
                    <Trash2 size={16} /> Clear
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                    { label: 'Characters', value: stats.characters },
                    { label: 'Characters (no spaces)', value: stats.charactersNoSpaces },
                    { label: 'Words', value: stats.words },
                    { label: 'Sentences', value: stats.sentences },
                    { label: 'Paragraphs', value: stats.paragraphs },
                    { label: 'Reading Time', value: stats.readingTime },
                ].map(stat => (
                    <div key={stat.label} className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] text-center">
                        <div className="text-2xl font-bold text-[var(--accent-primary)]">{stat.value}</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
