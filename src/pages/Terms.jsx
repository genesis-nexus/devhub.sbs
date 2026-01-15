import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Terms() {
    return (
        <>
            <Helmet>
                <title>Terms of Service - DevHub</title>
                <meta name="description" content="Terms of Service for DevHub. Usage rules and guidelines." />
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
                <div className="prose dark:prose-invert max-w-none text-[var(--text-secondary)]">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
                    <p>By accessing our website at devhub360.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on DevHub's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                    <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by DevHub at any time.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">3. Disclaimer</h2>
                    <p>The materials on DevHub's website are provided on an 'as is' basis. DevHub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    <p>Further, DevHub does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">4. Limitations</h2>
                    <p>In no event shall DevHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevHub's website.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">5. Revisions</h2>
                    <p>The materials appearing on DevHub's website could include technical, typographical, or photographic errors. DevHub does not warrant that any of the materials on its website are accurate, complete or current. DevHub may make changes to the materials contained on its website at any time without notice.</p>
                </div>
            </div>
        </>
    );
}
