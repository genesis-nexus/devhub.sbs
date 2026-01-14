import React from 'react';
import { Link } from 'react-router-dom';
import { toolsDatabase } from '../data/tools';
import ToolCard from '../components/ui/ToolCard';
import { Helmet } from 'react-helmet-async';

// Quick access tools - prioritized list
const quickTools = [
    { name: 'JSON Validator', logo: '📋', path: '/tool/json', description: 'Validate and beautify JSON' },
    { name: 'Base64 Encoder', logo: '🔢', path: '/tool/base64', description: 'Encode/decode Base64' },
    { name: 'JWT Verifier', logo: '🔑', path: '/tool/jwt', description: 'Decode JWT tokens' },
    { name: 'URL Encoder', logo: '🔗', path: '/tool/url', description: 'Encode/decode URLs' },
    { name: 'QR Generator', logo: '📱', path: '/tool/qr-generator', description: 'Generate QR codes' },
    { name: 'Password Generator', logo: '🔐', path: '/tool/password-generator', description: 'Create secure passwords' },
    { name: 'Lorem Ipsum', logo: '📃', path: '/tool/lorem-ipsum', description: 'Generate placeholder text' },
    { name: 'Hash Generator', logo: '🔒', path: '/tool/hash', description: 'MD5, SHA-256, SHA-512' },
    { name: 'Unit Converter', logo: '📏', path: '/tool/unit-converter', description: 'Length, weight, temperature' },
    { name: 'Tip Calculator', logo: '🧾', path: '/tool/tip-calculator', description: 'Calculate tips and split bills' },
    { name: 'Loan Calculator', logo: '💰', path: '/tool/loan-calculator', description: 'Calculate loan payments' },
    { name: 'BMI Calculator', logo: '⚕️', path: '/tool/bmi-calculator', description: 'Body Mass Index calculator' },
    { name: 'Word Counter', logo: '📝', path: '/tool/word-counter', description: 'Count words and characters' },
    { name: 'OIDC Tester', logo: '🛡️', path: '/tool/oidc', description: 'Test OpenID Connect flows' },
];

export default function Home() {
    // Extract all featured tools across categories
    const featuredTools = Object.values(toolsDatabase)
        .flat()
        .filter(tool => tool.featured)
        .slice(0, 8); // Top 8 featured

    return (
        <>
            <Helmet>
                <title>DevHub - Free Developer Tools, Calculators & Utilities</title>
                <meta name="description" content="DevHub: The ultimate free developer toolkit. Base64, JSON validator, JWT debugger, QR code generator, and 50+ essential tools for modern engineering. No signup required." />
                <meta name="keywords" content="devhub, developer tools, base64 encode, json validator, jwt verification, qr code generator, url encode, hash generator, free online tools, productivity tools" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://devhub360.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://devhub360.com/" />
                <meta property="og:title" content="DevHub - Free Developer Tools, JSON Validator, JWT Verifier" />
                <meta property="og:description" content="Free online Base64 encode/decode, JSON validator, JWT verification, URL encoder, hash generator, plus calculators and 50+ tools for developers." />
                <meta property="og:image" content="https://devhub360.com/favicon-192x192.png" />
                <meta property="og:site_name" content="DevHub" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://devhub360.com/" />
                <meta name="twitter:title" content="DevHub - Free Developer Tools, JSON Validator, JWT Verifier" />
                <meta name="twitter:description" content="Free online Base64 encode/decode, JSON validator, JWT verification, URL encoder, hash generator, plus calculators and 50+ tools for developers." />
                <meta name="twitter:image" content="https://devhub360.com/favicon-192x192.png" />

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "DevHub",
                            "url": "https://devhub360.com",
                            "description": "DevHub: The ultimate free developer toolkit. Base64, JSON validator, JWT debugger, and 50+ essential tools.",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://devhub360.com/?search={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        }
                    `}
                </script>
            </Helmet>

            <section className="text-center py-12 mb-12 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] rounded-3xl border border-[var(--border-color)]">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent-primary)]">
                    Developer Tools <br />Made Simple
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
                    A curated collection of over 100+ free developer tools, calculators, and resources. No signup required.
                </p>
            </section>

            {/* Quick Tools Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-[var(--accent-primary)]">⚡</span> Quick Tools
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {quickTools.map((tool, index) => (
                        <Link
                            key={index}
                            to={tool.path}
                            className="flex flex-col items-center p-4 bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] rounded-xl border border-[var(--border-color)] transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <span className="text-3xl mb-2">{tool.logo}</span>
                            <span className="text-sm font-medium text-center">{tool.name}</span>
                            <span className="text-xs text-[var(--text-muted)] text-center mt-1 line-clamp-2">{tool.description}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-[var(--accent-primary)]">✨</span> Featured Tools
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredTools.map((tool, index) => (
                        <ToolCard key={`featured-${index}`} tool={tool} />
                    ))}
                </div>
            </section>

            {/* Categories Sections */}
            {Object.entries(toolsDatabase).map(([category, tools]) => (
                <section key={category} id={category} className="mb-12 scroll-mt-20">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold capitalize text-[var(--text-primary)]">
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {tools.map((tool, index) => (
                            <ToolCard key={`${category}-${index}`} tool={tool} />
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
}
