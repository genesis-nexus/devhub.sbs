import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { Calendar, User } from 'lucide-react';

export default function BlogList() {
    return (
        <>
            <Helmet>
                <title>DevHub Blog - Developer Tutorials & Guides</title>
                <meta name="description" content="Detailed guides, tutorials, and best practices for developers. JSON, API security, and more." />
            </Helmet>

            <div className="max-w-4xl mx-auto py-8">
                <h1 className="text-4xl font-bold mb-4 text-center">DevHub Blog</h1>
                <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
                    Technical guides, tutorials, and insights to help you build better software.
                </p>

                <div className="grid gap-8">
                    {blogPosts.map(post => (
                        <article key={post.id} className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-3">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                            </div>

                            <Link to={`/blog/${post.slug}`} className="block group">
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-[var(--bg-tertiary)] rounded-md text-xs font-medium text-[var(--text-secondary)]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link to={`/blog/${post.slug}`} className="text-[var(--accent-primary)] font-medium hover:underline">
                                    Read more →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}
