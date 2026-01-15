import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { getToolByPath } from '../data/tools';
import { toolContent } from '../data/toolContent';

// Dynamic imports for tools
const JsonValidator = React.lazy(() => import('../tools/JsonValidator'));
const Base64Tool = React.lazy(() => import('../tools/Base64Tool'));
const JWTVerifier = React.lazy(() => import('../tools/JWTVerifier'));
const URLEncoder = React.lazy(() => import('../tools/URLEncoder'));
const HashGenerator = React.lazy(() => import('../tools/HashGenerator'));
const WordCounter = React.lazy(() => import('../tools/WordCounter'));
const PasswordGenerator = React.lazy(() => import('../tools/PasswordGenerator'));
const LoremIpsumGenerator = React.lazy(() => import('../tools/LoremIpsumGenerator'));
const QRGenerator = React.lazy(() => import('../tools/QRGenerator'));
const TipCalculator = React.lazy(() => import('../tools/TipCalculator'));
const LoanCalculator = React.lazy(() => import('../tools/LoanCalculator'));
const BMICalculator = React.lazy(() => import('../tools/BMICalculator'));
const OIDCTester = React.lazy(() => import('../tools/OIDCTester'));
const UnitConverter = React.lazy(() => import('../tools/UnitConverter'));

export default function ToolPage() {
    const { toolId } = useParams();
    const tool = getToolByPath(`/tool/${toolId}`);
    const richContent = toolContent[toolId];

    if (!tool) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">Tool Not Found</h2>
                <p className="text-[var(--text-secondary)]">The tool you are looking for does not exist.</p>
            </div>
        );
    }

    // Component mapping
    const toolComponents = {
        'json': JsonValidator,
        'base64': Base64Tool,
        'jwt': JWTVerifier,
        'url': URLEncoder,
        'hash': HashGenerator,
        'word-counter': WordCounter,
        'password-generator': PasswordGenerator,
        'lorem-ipsum': LoremIpsumGenerator,
        'qr-generator': QRGenerator,
        'tip-calculator': TipCalculator,
        'loan-calculator': LoanCalculator,
        'bmi-calculator': BMICalculator,
        'oidc': OIDCTester,
        'unit-converter': UnitConverter,
    };

    const ToolComponent = toolComponents[toolId] || (() => (
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] p-8 text-center">
            <div className="text-4xl mb-4">{tool.logo || '🛠️'}</div>
            <h2 className="text-2xl font-bold mb-2">{tool.name}</h2>
            <p className="text-[var(--text-secondary)] mb-6 max-w-md">{tool.description}</p>
            <div className="p-4 bg-[var(--bg-tertiary)] rounded-lg text-sm text-[var(--text-muted)]">
                <p>This tool is currently being migrated to the new version.</p>
                <p className="font-mono mt-2">ID: {toolId}</p>
            </div>
        </div>
    ));

    return (
        <>
            <Helmet>
                <title>{`${tool.name} - Free Online Tool | DevHub`}</title>
                <meta name="description" content={tool.description} />
                <meta name="keywords" content={tool.tags ? tool.tags.join(', ') + ', developer tools, free tools' : 'developer tools, free tools'} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://devhub360.com${tool.url}`} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://devhub360.com${tool.url}`} />
                <meta property="og:title" content={`${tool.name} - Free Online Tool | DevHub`} />
                <meta property="og:description" content={tool.description} />
                <meta property="og:image" content="https://devhub360.com/favicon-192x192.png" />
                <meta property="og:site_name" content="DevHub" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={`https://devhub360.com${tool.url}`} />
                <meta name="twitter:title" content={`${tool.name} - Free Online Tool | DevHub`} />
                <meta name="twitter:description" content={tool.description} />
                <meta name="twitter:image" content="https://devhub360.com/favicon-192x192.png" />

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "${tool.name}",
                            "description": "${tool.description}",
                            "applicationCategory": "DeveloperApplication",
                            "operatingSystem": "Web Browser",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            }
                        }
                    `}
                </script>
            </Helmet>

            <div className="max-w-6xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
                    <p className="text-[var(--text-secondary)]">{tool.description}</p>
                </div>

                <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-6 shadow-sm">
                    <Suspense fallback={<div className="text-center py-10">Loading tool...</div>}>
                        <ToolComponent />
                    </Suspense>
                </div>

                <section className="mt-12 pt-8 border-t border-[var(--border-color)]">
                    {richContent ? (
                        <div className="prose dark:prose-invert max-w-none text-[var(--text-secondary)]">
                            <ReactMarkdown>{richContent.content}</ReactMarkdown>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-xl font-bold mb-4">About this Tool</h3>
                            <div className="prose dark:prose-invert max-w-none text-[var(--text-secondary)]">
                                <p>
                                    {tool.name} is a free online utility that allows you to {tool.description.toLowerCase()}
                                    It runs entirely in your browser, ensuring your data remains private and secure.
                                </p>
                                {tool.tags && (
                                    <div className="flex gap-2 mt-4">
                                        {tool.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-[var(--bg-tertiary)] rounded-md text-sm text-[var(--text-secondary)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </section>
            </div>
        </>
    );
}
