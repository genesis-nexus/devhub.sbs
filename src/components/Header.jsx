import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, Search, Code2 } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Header({ toggleSidebar }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 w-full bg-[var(--bg-primary)]/80 backdrop-blur-sm border-b border-[var(--border-color)]">
            <div className="flex items-center justify-between px-4 h-16 max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden p-2 -ml-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        aria-label="Toggle Menu"
                    >
                        <Menu size={24} />
                    </button>

                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[var(--text-primary)]">
                        <span className="text-[var(--accent-primary)]"><Code2 size={28} /></span>
                        <span>DevHub</span>
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        className="p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] rounded-full transition-colors"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
