import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Shield, Zap, Globe } from 'lucide-react';

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us - DevHub</title>
                <meta name="description" content="About DevHub - Our mission to provide free, secure, and fast developer tools." />
            </Helmet>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">About DevHub</h1>
                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                        We are building the web's most comprehensive, privacy-focused collection of developer utilities.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)]">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Shield className="text-[var(--accent-primary)]" />
                            Privacy First
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            We believe developer tools shouldn't compromise your data. That's why all our tools run entirely in your browser. Detailed data like JWT tokens, JSON payloads, or uploaded images never leave your device.
                        </p>
                    </div>
                    <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-color)]">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Zap className="text-[var(--accent-primary)]" />
                            Built for Speed
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            No logins, no paywalls, no unnecessary bloat. Our tools are optimized for instant loading and immediate utility, helping you get back to coding faster.
                        </p>
                    </div>
                </div>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                    <div className="prose dark:prose-invert max-w-none text-[var(--text-secondary)]">
                        <p>
                            DevHub started with a simple frustration: finding a quick, clean JSON validator or Base64 encoder often meant wading through ads, slow-loading pages, or worrying about where pasted data was being sent.
                        </p>
                        <p>
                            We set out to create a sanctuary for developers. A single place where you can find trusted implementations of standard utilities. Whether you need to debug a JWT, format awkward JSON, or quickly generate a hash, DevHub is designed to be your reliable Swiss Army knife.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
