import React, { useState, useEffect } from 'react';
import { Quote, X, RefreshCw } from 'lucide-react';
import { tips, QUOTES_API_URL } from '../data/tips';

export default function TipOfTheDay() {
    const [dismissed, setDismissed] = useState(false);
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    // Get a fallback quote based on the day
    const getFallbackQuote = () => {
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 0);
        const dayOfYear = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));
        const tipIndex = dayOfYear % tips.length;
        return tips[tipIndex];
    };

    // Fetch quote from API with fallback
    const fetchQuote = async (isRefresh = false) => {
        if (isRefresh) {
            setIsRefreshing(true);
        } else {
            setLoading(true);
        }

        try {
            const response = await fetch(QUOTES_API_URL);
            if (!response.ok) throw new Error('API unavailable');

            const data = await response.json();
            setQuote({
                quote: data.quote,
                author: data.author
            });
        } catch (error) {
            // Use fallback quotes when API fails
            if (isRefresh) {
                // On refresh, get a random quote from fallback
                const randomIndex = Math.floor(Math.random() * tips.length);
                setQuote(tips[randomIndex]);
            } else {
                // On initial load, use day-based quote for consistency
                setQuote(getFallbackQuote());
            }
        } finally {
            setLoading(false);
            setIsRefreshing(false);
        }
    };

    useEffect(() => {
        // Check if dismissed today
        const dismissedDate = localStorage.getItem('devhub_quote_dismissed');
        if (dismissedDate === new Date().toDateString()) {
            setDismissed(true);
            setLoading(false);
            return;
        }

        fetchQuote();
    }, []);

    const handleDismiss = () => {
        localStorage.setItem('devhub_quote_dismissed', new Date().toDateString());
        setDismissed(true);
    };

    const handleRefresh = () => {
        if (!isRefreshing) {
            fetchQuote(true);
        }
    };

    if (dismissed || loading) return null;
    if (!quote) return null;

    return (
        <div className="mb-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative p-6 md:p-8 border border-[var(--border-color)] rounded-2xl backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-[var(--accent-primary)]/20 rounded-lg">
                            <Quote size={18} className="text-[var(--accent-primary)]" />
                        </div>
                        <span className="text-sm font-semibold text-[var(--accent-primary)] uppercase tracking-wider">
                            Daily Wisdom
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={handleRefresh}
                            disabled={isRefreshing}
                            className="p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors disabled:opacity-50"
                            aria-label="Get new quote"
                            title="Get new quote"
                        >
                            <RefreshCw
                                size={16}
                                className={`text-[var(--text-muted)] ${isRefreshing ? 'animate-spin' : ''}`}
                            />
                        </button>
                        <button
                            onClick={handleDismiss}
                            className="p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors"
                            aria-label="Dismiss"
                            title="Dismiss for today"
                        >
                            <X size={16} className="text-[var(--text-muted)]" />
                        </button>
                    </div>
                </div>

                {/* Quote */}
                <blockquote className="relative">
                    <p className="text-xl md:text-2xl font-medium text-[var(--text-primary)] leading-relaxed mb-4">
                        "{quote.quote}"
                    </p>
                    <footer className="flex items-center gap-2">
                        <div className="w-8 h-[2px] bg-[var(--accent-primary)]/50 rounded-full" />
                        <cite className="text-base font-medium text-[var(--text-secondary)] not-italic">
                            {quote.author}
                        </cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
}
