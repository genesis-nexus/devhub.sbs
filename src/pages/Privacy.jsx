import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy - DevHub</title>
                <meta name="description" content="Privacy Policy for DevHub. Learn how we handle your data." />
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose dark:prose-invert max-w-none text-[var(--text-secondary)]">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
                    <p>Welcome to DevHub ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (devhub360.com) and tell you about your privacy rights and how the law protects you.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">2. Data We Collect</h2>
                    <p>We do not collect any personal data from our users. Our tools run entirely in your browser (client-side), and we do not store your inputs, files, or processed data on our servers.</p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Cookies and Tracking</h3>
                    <p>We use third-party services like Google Analytics and Google AdSense which may use cookies to analyze traffic and serve personalized ads. You can choose to disable cookies through your browser settings.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">3. Third-Party Services</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li><strong>Google Analytics:</strong> We use Google Analytics to understand how our website is used. Google Analytics collects information anonymously.</li>
                        <li><strong>Google AdSense:</strong> We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-8 mb-4">4. Data Security</h2>
                    <p>Since we do not collect or store your personal data, there is no risk of your data being breached from our servers. All tool processing happens locally on your device.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">5. Contact Us</h2>
                    <p>If you have any questions about this privacy policy, please contact us via our Contact page.</p>
                </div>
            </div>
        </>
    );
}
