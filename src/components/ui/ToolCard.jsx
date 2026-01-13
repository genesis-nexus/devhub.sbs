import React from 'react';
import { Link } from 'react-router-dom';
import { Hash } from 'lucide-react';
import clsx from 'clsx';

export default function ToolCard({ tool }) {
    const isExternal = tool.type === 'external';

    return (
        <Link
            to={isExternal ? tool.url : tool.url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={clsx(
                "group relative flex flex-col p-6 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl transition-all duration-300 hover:border-[var(--accent-primary)] hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            )}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-primary)] to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-purple-500 flex items-center justify-center text-2xl text-white shadow-md">
                    {tool.logo || <Hash size={24} />}
                </div>
                {tool.featured && (
                    <span className="px-2 py-1 text-xs font-semibold bg-[var(--accent-light)] text-[var(--accent-primary)] rounded-full">
                        Featured
                    </span>
                )}
            </div>

            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                {tool.name}
            </h3>

            <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4 flex-grow">
                {tool.description}
            </p>

            <div className="flex flex-wrap gap-1 mt-auto">
                {tool.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
