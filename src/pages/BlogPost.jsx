import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <div className="text-center py-20">Post not found</div>;
    }

    return (
        <>
            <Helmet>
                <title>{`${post.title} - DevHub Blog`}</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <article className="max-w-3xl mx-auto py-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-primary)] mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Blog
                </Link>

                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
                    <div className="flex items-center gap-6 text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-6">
                        <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                        <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
                    </div>
                </header>

                <div
                    className="prose dark:prose-invert prose-lg max-w-none text-[var(--text-primary)]"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
                    <p className="text-[var(--text-secondary)] italic">
                        Tags: {post.tags.join(', ')}
                    </p>
                </div>
            </article>
        </>
    );
}
