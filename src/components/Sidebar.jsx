import React, { useState, useMemo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronRight, Hash, X, Zap, Star } from 'lucide-react';
import { toolsDatabase, getToolByPath } from '../data/tools';
import { usePreferences } from '../contexts/PreferencesContext';
import clsx from 'clsx';

// Quick access tools - same as Home page
const quickTools = [
    { name: 'JSON Validator', logo: '📋', path: '/tool/json' },
    { name: 'Base64 Encoder', logo: '🔢', path: '/tool/base64' },
    { name: 'JWT Verifier', logo: '🔑', path: '/tool/jwt' },
    { name: 'URL Encoder', logo: '🔗', path: '/tool/url' },
    { name: 'QR Generator', logo: '📱', path: '/tool/qr-generator' },
    { name: 'Password Generator', logo: '🔐', path: '/tool/password-generator' },
    { name: 'Lorem Ipsum', logo: '📃', path: '/tool/lorem-ipsum' },
    { name: 'Hash Generator', logo: '🔒', path: '/tool/hash' },
    { name: 'Unit Converter', logo: '📏', path: '/tool/unit-converter' },
    { name: 'Tip Calculator', logo: '🧾', path: '/tool/tip-calculator' },
    { name: 'Loan Calculator', logo: '💰', path: '/tool/loan-calculator' },
    { name: 'BMI Calculator', logo: '⚕️', path: '/tool/bmi-calculator' },
    { name: 'Word Counter', logo: '📝', path: '/tool/word-counter' },
    { name: 'OIDC Tester', logo: '🛡️', path: '/tool/oidc' },
];

export default function Sidebar({ isOpen, onClose }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCategories, setExpandedCategories] = useState({
        favorites: true,
        quickTools: true,
        ...Object.keys(toolsDatabase).reduce((acc, key) => ({ ...acc, [key]: false }), {})
    });
    const { favorites } = usePreferences();

    // Resolve favorites to full tool data
    const favoritedTools = useMemo(() => {
        return favorites
            .map(toolId => {
                const tool = getToolByPath(`/tool/${toolId}`);
                return tool ? { ...tool, toolId } : null;
            })
            .filter(Boolean);
    }, [favorites]);

    const toggleCategory = (category) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const filteredTools = useMemo(() => {
        if (!searchQuery.trim()) return toolsDatabase;
        const lowerQuery = searchQuery.toLowerCase();

        const activeResults = {};
        Object.entries(toolsDatabase).forEach(([category, tools]) => {
            const MATCHING = tools.filter(tool =>
                tool.name.toLowerCase().includes(lowerQuery) ||
                tool.description.toLowerCase().includes(lowerQuery) ||
                tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
            );
            if (MATCHING.length > 0) {
                activeResults[category] = MATCHING;
            }
        });

        return activeResults;
    }, [searchQuery]);

    const filteredQuickTools = useMemo(() => {
        if (!searchQuery.trim()) return quickTools;
        const lowerQuery = searchQuery.toLowerCase();
        return quickTools.filter(tool => tool.name.toLowerCase().includes(lowerQuery));
    }, [searchQuery]);

    return (
        <aside
            className={clsx(
                "fixed inset-y-0 left-0 z-50 w-72 bg-[var(--bg-secondary)] border-r border-[var(--border-color)] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-[calc(100vh-65px)] lg:top-[65px] flex flex-col",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}
        >
            <div className="p-4 border-b border-[var(--border-color)] lg:hidden flex justify-between items-center">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={onClose} className="p-1 rounded-md hover:bg-[var(--bg-tertiary)]">
                    <X size={20} />
                </button>
            </div>

            <div className="p-4 border-b border-[var(--border-color)]">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]" size={16} />
                    <input
                        type="text"
                        placeholder="Search tools..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <nav className="space-y-1">
                    <NavLink
                        to="/"
                        className={({ isActive }) => clsx(
                            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            isActive ? "bg-[var(--accent-primary)] text-white" : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                        )}
                        onClick={() => onClose && window.innerWidth < 1024 && onClose()}
                    >
                        All Tools
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) => clsx(
                            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            isActive ? "bg-[var(--accent-primary)] text-white" : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                        )}
                        onClick={() => onClose && window.innerWidth < 1024 && onClose()}
                    >
                        Blog
                    </NavLink>
                </nav>

                {/* Favorites Section */}
                {favoritedTools.length > 0 && (
                    <div className="space-y-1">
                        <button
                            onClick={() => toggleCategory('favorites')}
                            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-yellow-500 uppercase tracking-wider hover:text-yellow-400 transition-colors"
                        >
                            <span className="flex items-center gap-1">
                                <Star size={12} className="fill-current" /> Your Favorites
                            </span>
                            {expandedCategories.favorites ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </button>

                        {expandedCategories.favorites && (
                            <div className="space-y-1 pl-1">
                                {favoritedTools.map((tool) => (
                                    <NavLink
                                        key={tool.url}
                                        to={tool.url}
                                        className={({ isActive }) => clsx(
                                            "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                            isActive
                                                ? "bg-yellow-500/10 text-yellow-500"
                                                : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                                        )}
                                        onClick={() => onClose && window.innerWidth < 1024 && onClose()}
                                    >
                                        <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">{tool.logo}</span>
                                        <span className="truncate">{tool.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Quick Tools Section */}
                {filteredQuickTools.length > 0 && (
                    <div className="space-y-1">
                        <button
                            onClick={() => toggleCategory('quickTools')}
                            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider hover:text-[var(--accent-hover)] transition-colors"
                        >
                            <span className="flex items-center gap-1">
                                <Zap size={12} /> Quick Tools
                            </span>
                            {expandedCategories.quickTools || searchQuery ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </button>

                        {(expandedCategories.quickTools || searchQuery) && (
                            <div className="space-y-1 pl-1">
                                {filteredQuickTools.map((tool) => (
                                    <NavLink
                                        key={tool.path}
                                        to={tool.path}
                                        className={({ isActive }) => clsx(
                                            "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                            isActive
                                                ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                                                : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                                        )}
                                        onClick={() => onClose && window.innerWidth < 1024 && onClose()}
                                    >
                                        <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">{tool.logo}</span>
                                        <span className="truncate">{tool.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Category Sections */}
                {Object.entries(filteredTools).map(([category, tools]) => (
                    <div key={category} className="space-y-1">
                        <button
                            onClick={() => toggleCategory(category)}
                            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider hover:text-[var(--text-primary)] transition-colors"
                        >
                            {category}
                            {expandedCategories[category] || searchQuery ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </button>

                        {(expandedCategories[category] || searchQuery) && (
                            <div className="space-y-1 pl-1">
                                {tools.map((tool) => (
                                    <Link
                                        key={tool.name}
                                        to={tool.type === 'internal' ? tool.url : tool.url}
                                        target={tool.type === 'external' ? '_blank' : undefined}
                                        rel={tool.type === 'external' ? 'noopener noreferrer' : undefined}
                                        className={clsx(
                                            "group flex items-center px-3 py-2 text-sm font-medium rounded-md text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                                        )}
                                        onClick={() => onClose && window.innerWidth < 1024 && onClose()}
                                    >
                                        <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">{tool.logo || <Hash size={14} />}</span>
                                        <span className="truncate">{tool.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {Object.keys(filteredTools).length === 0 && filteredQuickTools.length === 0 && (
                    <div className="text-center py-4 text-[var(--text-muted)] text-sm">
                        No tools found via search.
                    </div>
                )}
            </div>
        </aside>
    );
}
