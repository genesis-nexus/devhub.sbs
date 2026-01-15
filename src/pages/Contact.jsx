import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Github, MessageSquare } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Us - DevHub</title>
                <meta name="description" content="Contact DevHub. Get in touch with us for support, suggestions, or feedback." />
            </Helmet>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Have a suggestion, found a bug, or just want to say hi? We'd love to hear from you.
                    </p>
                </section>

                <div className="grid md:grid-cols-3 gap-8">
                    <a href="mailto:support@devhub360.com" className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] text-center hover:border-[var(--accent-primary)] transition-colors group">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[var(--bg-tertiary)] rounded-full group-hover:text-[var(--accent-primary)] transition-colors">
                                <Mail size={32} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Us</h3>
                        <p className="text-[var(--text-secondary)] mb-4">For general inquiries and support</p>
                        <span className="text-[var(--accent-primary)] font-medium">support@devhub360.com</span>
                    </a>

                    <a href="https://github.com/genesis-nexus/devhub.sbs" target="_blank" rel="noopener noreferrer" className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] text-center hover:border-[var(--accent-primary)] transition-colors group">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[var(--bg-tertiary)] rounded-full group-hover:text-[var(--accent-primary)] transition-colors">
                                <Github size={32} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">GitHub</h3>
                        <p className="text-[var(--text-secondary)] mb-4">Report bugs or contribute code</p>
                        <span className="text-[var(--accent-primary)] font-medium">View Profile</span>
                    </a>

                    <a href="https://www.instagram.com/devhub.news/" target="_blank" rel="noopener noreferrer" className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)] text-center hover:border-[var(--accent-primary)] transition-colors group">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[var(--bg-tertiary)] rounded-full group-hover:text-[var(--accent-primary)] transition-colors">
                                <MessageSquare size={32} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Instagram</h3>
                        <p className="text-[var(--text-secondary)] mb-4">Follow us for updates</p>
                        <span className="text-[var(--accent-primary)] font-medium">@devhub.news</span>
                    </a>
                </div>
            </div>
        </>
    );
}
