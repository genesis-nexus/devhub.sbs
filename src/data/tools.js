export const toolsDatabase = {
    authentication: [
        {
            name: "Auth0",
            description: "Universal identity platform for developers. Secure authentication and authorization for any app.",
            category: "Authentication",
            tags: ["OAuth", "SAML", "SSO", "Multi-factor"],
            url: "https://auth0.com",
            logo: "🔐",
            type: "external",
            featured: true,
            stats: { stars: "25k+", downloads: "10M+" }
        },
        {
            name: "Firebase Auth",
            description: "Google's authentication service with support for multiple providers and easy SDK integration.",
            category: "Authentication",
            tags: ["Google", "Social Login", "Mobile", "Web"],
            url: "https://firebase.google.com/products/auth",
            logo: "🔥",
            type: "external",
            featured: true,
            stats: { stars: "15k+", downloads: "5M+" }
        },
        {
            name: "JWT Verifier",
            description: "Decode and verify JSON Web Tokens instantly with comprehensive claims validation.",
            category: "Authentication",
            tags: ["JWT", "Decode", "Verification", "Claims"],
            url: "/tool/jwt",
            logo: "🔑",
            type: "internal",
            featured: true,
            stats: { users: "50k+", rating: "4.9" }
        },
        {
            name: "Supabase Auth",
            description: "Open source Firebase alternative with built-in authentication and user management.",
            category: "Authentication",
            tags: ["Open Source", "PostgreSQL", "Real-time", "API"],
            url: "https://supabase.com/auth",
            logo: "⚡",
            type: "external",
            stats: { stars: "60k+", downloads: "2M+" }
        },
        {
            name: "OIDC Tester",
            description: "OpenID Connect workflow testing tool for debugging authentication flows.",
            category: "Authentication",
            tags: ["OIDC", "OAuth", "Testing", "Debugging"],
            url: "/tool/oidc",
            logo: "🛡️",
            type: "internal",
            stats: { users: "15k+", rating: "4.8" }
        },
        {
            name: "Clerk",
            description: "Complete user management and authentication for modern applications.",
            category: "Authentication",
            tags: ["User Management", "React", "Next.js", "API"],
            url: "https://clerk.com",
            logo: "👥",
            type: "external",
            stats: { stars: "8k+", downloads: "500k+" }
        }
    ],

    ai: [
        {
            name: "OpenAI API",
            description: "Access GPT models and other AI capabilities through a simple API.",
            category: "AI & ML",
            tags: ["GPT", "Language Model", "API", "Text Generation"],
            url: "https://openai.com/api",
            logo: "🤖",
            type: "external",
            featured: true,
            stats: { users: "2M+", models: "10+" }
        },
        {
            name: "Hugging Face",
            description: "The platform where the machine learning community collaborates on models, datasets, and applications.",
            category: "AI & ML",
            tags: ["Models", "Datasets", "Transformers", "Community"],
            url: "https://huggingface.co",
            logo: "🤗",
            type: "external",
            featured: true,
            stats: { models: "400k+", downloads: "1B+" }
        },
        {
            name: "LangChain",
            description: "Framework for developing applications powered by language models.",
            category: "AI & ML",
            tags: ["Framework", "LLM", "Python", "JavaScript"],
            url: "https://langchain.com",
            logo: "🦜",
            type: "external",
            stats: { stars: "80k+", downloads: "5M+" }
        },
        {
            name: "Replicate",
            description: "Run machine learning models in the cloud with simple API calls.",
            category: "AI & ML",
            tags: ["Model Hosting", "API", "Image Generation", "Text"],
            url: "https://replicate.com",
            logo: "🔄",
            type: "external",
            stats: { models: "50k+", runs: "100M+" }
        },
        {
            name: "Anthropic Claude",
            description: "AI assistant focused on being helpful, harmless, and honest.",
            category: "AI & ML",
            tags: ["Assistant", "Safe AI", "Conversation", "Analysis"],
            url: "https://claude.ai",
            logo: "🧠",
            type: "external",
            stats: { users: "1M+", rating: "4.7" }
        },
        {
            name: "Stability AI",
            description: "Open source generative AI models for images, language, and code.",
            category: "AI & ML",
            tags: ["Stable Diffusion", "Open Source", "Image Generation"],
            url: "https://stability.ai",
            logo: "🎨",
            type: "external",
            stats: { models: "20+", downloads: "10M+" }
        }
    ],

    productivity: [
        {
            name: "Notion",
            description: "All-in-one workspace for notes, tasks, wikis, and databases.",
            category: "Productivity",
            tags: ["Notes", "Database", "Collaboration", "Templates"],
            url: "https://notion.so",
            logo: "📝",
            type: "external",
            featured: true,
            stats: { users: "30M+", templates: "10k+" }
        },
        {
            name: "Base64 Encoder",
            description: "Fast and secure Base64 encoding and decoding tool for developers.",
            category: "Productivity",
            tags: ["Encoding", "Base64", "Developer Tool", "Conversion"],
            url: "/tool/base64",
            logo: "🔢",
            type: "internal",
            featured: true,
            stats: { users: "100k+", rating: "4.9" }
        },
        {
            name: "URL Encoder",
            description: "URL encoding and decoding tool for web developers and API testing.",
            category: "Productivity",
            tags: ["URL", "Encoding", "API", "Web Development"],
            url: "/tool/url",
            logo: "🔗",
            type: "internal",
            stats: { users: "75k+", rating: "4.8" }
        },
        {
            name: "Hash Generator",
            description: "Generate various hash types including MD5, SHA-256, SHA-512, and more for data integrity.",
            category: "Productivity",
            tags: ["Hashing", "MD5", "SHA-256", "Security", "Checksum"],
            url: "/tool/hash",
            logo: "🔒",
            type: "internal",
            featured: true,
            stats: { users: "80k+", rating: "4.9" }
        },
        {
            name: "JSON Validator & Beautifier",
            description: "Validate JSON syntax, format, and beautify JSON with proper indentation. Perfect for API development and data validation.",
            category: "Productivity",
            tags: ["JSON", "Validation", "Beautify", "Format", "API"],
            url: "/tool/json",
            logo: "📋",
            type: "internal",
            featured: true,
            stats: { users: "120k+", rating: "4.9" }
        },
        {
            name: "Linear",
            description: "Modern issue tracking and project management for software teams.",
            category: "Productivity",
            tags: ["Project Management", "Issues", "Team", "Planning"],
            url: "https://linear.app",
            logo: "📈",
            type: "external",
            stats: { teams: "10k+", issues: "5M+" }
        },
        {
            name: "Raycast",
            description: "Blazingly fast, totally extendable launcher for Mac productivity.",
            category: "Productivity",
            tags: ["Launcher", "Mac", "Extensions", "Shortcuts"],
            url: "https://raycast.com",
            logo: "⚡",
            type: "external",
            stats: { users: "500k+", extensions: "1k+" }
        },
        {
            name: "Obsidian",
            description: "Powerful knowledge base that works on top of a local folder of plain text files.",
            category: "Productivity",
            tags: ["Knowledge Base", "Notes", "Graph", "Local"],
            url: "https://obsidian.md",
            logo: "🔮",
            type: "external",
            stats: { users: "1M+", plugins: "1k+" }
        }
    ],

    database: [
        {
            name: "Supabase",
            description: "Open source Firebase alternative with PostgreSQL database and real-time subscriptions.",
            category: "Database",
            tags: ["PostgreSQL", "Real-time", "Auth", "Storage"],
            url: "https://supabase.com",
            logo: "⚡",
            type: "external",
            featured: true,
            stats: { stars: "60k+", projects: "500k+" }
        },
        {
            name: "PlanetScale",
            description: "MySQL-compatible serverless database platform with branching workflows.",
            category: "Database",
            tags: ["MySQL", "Serverless", "Branching", "Scaling"],
            url: "https://planetscale.com",
            logo: "🪐",
            type: "external",
            featured: true,
            stats: { databases: "100k+", queries: "1B+" }
        },
        {
            name: "Prisma",
            description: "Next-generation ORM that unlocks a new level of developer experience.",
            category: "Database",
            tags: ["ORM", "TypeScript", "Database", "Migration"],
            url: "https://prisma.io",
            logo: "🔷",
            type: "external",
            stats: { stars: "35k+", downloads: "10M+" }
        },
        {
            name: "FauxaDB",
            description: "Serverless, ACID transactions, multi-model database in the cloud.",
            category: "Database",
            tags: ["Serverless", "ACID", "Multi-model", "Cloud"],
            url: "https://fauna.com",
            logo: "🦕",
            type: "external",
            stats: { transactions: "1B+", developers: "100k+" }
        },
        {
            name: "MongoDB Atlas",
            description: "Fully managed cloud database service for modern applications.",
            category: "Database",
            tags: ["NoSQL", "Document", "Atlas", "Managed"],
            url: "https://mongodb.com/atlas",
            logo: "🍃",
            type: "external",
            stats: { customers: "37k+", documents: "100B+" }
        },
        {
            name: "Redis",
            description: "In-memory data structure store for caching, session management, and real-time analytics.",
            category: "Database",
            tags: ["In-memory", "Cache", "Session", "Real-time"],
            url: "https://redis.io",
            logo: "🔴",
            type: "external",
            stats: { stars: "60k+", downloads: "1B+" }
        }
    ],

    json: [
        {
            name: "JSON Validator & Beautifier",
            description: "Professional JSON validation, beautification, and formatting tools for developers and API testing.",
            category: "JSON Tools",
            tags: ["JSON", "Validation", "Beautify", "Format", "API", "Developer Tool"],
            url: "/tool/json",
            logo: "📋",
            type: "internal",
            featured: true,
            stats: { users: "120k+", rating: "4.9" }
        },
        {
            name: "JSON Schema Validator",
            description: "Validate JSON data against JSON Schema specifications with detailed error reporting.",
            category: "JSON Tools",
            tags: ["JSON Schema", "Validation", "API", "Data Quality"],
            url: "/tool/json-schema",
            logo: "🔍",
            type: "internal",
            featured: false,
            stats: { users: "45k+", rating: "4.8" }
        },
        {
            name: "JSON Path Tester",
            description: "Test and debug JSONPath expressions with real-time evaluation and result preview.",
            category: "JSON Tools",
            tags: ["JSONPath", "Testing", "Debug", "Data Extraction"],
            url: "/tool/jsonpath",
            logo: "🛤️",
            type: "internal",
            featured: false,
            stats: { users: "35k+", rating: "4.7" }
        }
    ],

    calculators: [
        {
            name: "Loan Calculator",
            description: "Calculate monthly loan payments, total interest, and amortization schedule for any loan amount and term.",
            category: "Calculators",
            tags: ["Loan", "Finance", "Payment", "Interest", "Calculator"],
            url: "/tool/loan-calculator",
            logo: "💰",
            type: "internal",
            featured: true,
            stats: { users: "250k+", rating: "4.9" }
        },
        {
            name: "Mortgage Calculator",
            description: "Calculate mortgage payments, compare rates, and see amortization schedules with taxes and insurance.",
            category: "Calculators",
            tags: ["Mortgage", "Home Loan", "Real Estate", "Finance", "Calculator"],
            url: "/tool/mortgage-calculator",
            logo: "🏠",
            type: "internal",
            featured: true,
            stats: { users: "300k+", rating: "4.9" }
        },
        {
            name: "BMI Calculator",
            description: "Calculate your Body Mass Index (BMI) and get health insights based on height and weight.",
            category: "Calculators",
            tags: ["BMI", "Health", "Fitness", "Weight", "Calculator"],
            url: "/tool/bmi-calculator",
            logo: "⚕️",
            type: "internal",
            featured: true,
            stats: { users: "500k+", rating: "4.8" }
        },
        {
            name: "Calorie Calculator",
            description: "Calculate your daily calorie needs based on age, gender, activity level, and fitness goals.",
            category: "Calculators",
            tags: ["Calorie", "Health", "Fitness", "Diet", "Calculator"],
            url: "/tool/calorie-calculator",
            logo: "🍎",
            type: "internal",
            featured: true,
            stats: { users: "450k+", rating: "4.9" }
        },
        {
            name: "Compound Interest Calculator",
            description: "Calculate compound interest and see how your investments grow over time with regular contributions.",
            category: "Calculators",
            tags: ["Interest", "Investment", "Finance", "Savings", "Calculator"],
            url: "/tool/compound-interest-calculator",
            logo: "📈",
            type: "internal",
            featured: true,
            stats: { users: "200k+", rating: "4.8" }
        },
        {
            name: "Age Calculator",
            description: "Calculate exact age in years, months, days, and even hours from your birth date.",
            category: "Calculators",
            tags: ["Age", "Date", "Time", "Birthday", "Calculator"],
            url: "/tool/age-calculator",
            logo: "🎂",
            type: "internal",
            featured: false,
            stats: { users: "350k+", rating: "4.7" }
        },
        {
            name: "Tip Calculator",
            description: "Calculate tip amount and split bills easily for restaurants and services.",
            category: "Calculators",
            tags: ["Tip", "Restaurant", "Bill", "Split", "Calculator"],
            url: "/tool/tip-calculator",
            logo: "🧾",
            type: "internal",
            featured: false,
            stats: { users: "180k+", rating: "4.8" }
        },
        {
            name: "Word Counter",
            description: "Count words, characters, sentences, and paragraphs in your text instantly with detailed statistics.",
            category: "Calculators",
            tags: ["Word Count", "Character Count", "Text", "Writing", "Tool"],
            url: "/tool/word-counter",
            logo: "📝",
            type: "internal",
            featured: true,
            stats: { users: "400k+", rating: "4.9" }
        },
        {
            name: "Password Generator",
            description: "Generate strong, secure, random passwords with customizable length and character options.",
            category: "Calculators",
            tags: ["Password", "Security", "Generator", "Random", "Tool"],
            url: "/tool/password-generator",
            logo: "🔐",
            type: "internal",
            featured: true,
            stats: { users: "220k+", rating: "4.9" }
        },
        {
            name: "QR Code Generator",
            description: "Create custom QR codes for URLs, text, WiFi, and more with instant download options.",
            category: "Calculators",
            tags: ["QR Code", "Generator", "Barcode", "Link", "Tool"],
            url: "/tool/qr-generator",
            logo: "📱",
            type: "internal",
            featured: true,
            stats: { users: "280k+", rating: "4.9" }
        },
        {
            name: "PDF Merger",
            description: "Combine multiple PDF files into a single document instantly. All processing happens in your browser - no uploads required.",
            category: "Calculators",
            tags: ["PDF", "Merge", "Combine", "Documents", "Tool"],
            url: "/tool/pdf-merger",
            logo: "📄",
            type: "internal",
            featured: true,
            stats: { users: "600k+", rating: "4.9" }
        },
        {
            name: "PDF Splitter",
            description: "Split PDF files into separate pages or extract specific pages. Fast and secure, all done locally.",
            category: "Calculators",
            tags: ["PDF", "Split", "Extract", "Pages", "Tool"],
            url: "/tool/pdf-splitter",
            logo: "✂️",
            type: "internal",
            featured: true,
            stats: { users: "500k+", rating: "4.8" }
        },
        {
            name: "Image Compressor",
            description: "Compress images to reduce file size while maintaining quality. Supports JPG, PNG, and WebP formats.",
            category: "Calculators",
            tags: ["Image", "Compress", "Optimize", "Size", "Tool"],
            url: "/tool/image-compressor",
            logo: "🖼️",
            type: "internal",
            featured: true,
            stats: { users: "700k+", rating: "4.9" }
        },
        {
            name: "Image Resizer",
            description: "Resize images to specific dimensions or percentage. Maintain aspect ratio or set custom sizes.",
            category: "Calculators",
            tags: ["Image", "Resize", "Dimensions", "Scale", "Tool"],
            url: "/tool/image-resizer",
            logo: "📐",
            type: "internal",
            featured: true,
            stats: { users: "550k+", rating: "4.8" }
        },
        {
            name: "Image Format Converter",
            description: "Convert images between JPG, PNG, WebP, and other formats instantly in your browser.",
            category: "Calculators",
            tags: ["Image", "Convert", "Format", "JPG", "PNG", "WebP", "Tool"],
            url: "/tool/image-converter",
            logo: "🔄",
            type: "internal",
            featured: true,
            stats: { users: "480k+", rating: "4.9" }
        },
        {
            name: "Text Case Converter",
            description: "Convert text between uppercase, lowercase, title case, sentence case, and more with one click.",
            category: "Calculators",
            tags: ["Text", "Case", "Convert", "Upper", "Lower", "Tool"],
            url: "/tool/text-case",
            logo: "🔤",
            type: "internal",
            featured: false,
            stats: { users: "320k+", rating: "4.7" }
        },
        {
            name: "Text Difference Checker",
            description: "Compare two text files or snippets side-by-side and see the differences highlighted instantly.",
            category: "Calculators",
            tags: ["Text", "Diff", "Compare", "Changes", "Tool"],
            url: "/tool/text-diff",
            logo: "🔍",
            type: "internal",
            featured: false,
            stats: { users: "280k+", rating: "4.8" }
        },
        {
            name: "Lorem Ipsum Generator",
            description: "Generate placeholder text for your designs and mockups with customizable paragraph, word, or character counts.",
            category: "Calculators",
            tags: ["Lorem Ipsum", "Placeholder", "Text", "Generator", "Tool"],
            url: "/tool/lorem-ipsum",
            logo: "📃",
            type: "internal",
            featured: false,
            stats: { users: "400k+", rating: "4.7" }
        },
        {
            name: "Unit Converter",
            description: "Convert between different units of measurement including length, weight, temperature, area, volume, time, and digital storage.",
            category: "Calculators",
            tags: ["Unit", "Converter", "Measurement", "Length", "Weight", "Temperature", "Tool"],
            url: "/tool/unit-converter",
            logo: "📏",
            type: "internal",
            featured: true,
            stats: { users: "350k+", rating: "4.9" }
        }
    ],

    ui: [
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework for rapidly building custom user interfaces.",
            category: "UI/UX",
            tags: ["CSS", "Utility", "Framework", "Design"],
            url: "https://tailwindcss.com",
            logo: "🎨",
            type: "external",
            featured: true,
            stats: { stars: "75k+", downloads: "20M+" }
        },
        {
            name: "Figma",
            description: "Collaborative interface design tool for teams to create, test, and ship better designs.",
            category: "UI/UX",
            tags: ["Design", "Collaboration", "Prototyping", "Vector"],
            url: "https://figma.com",
            logo: "🎯",
            type: "external",
            featured: true,
            stats: { users: "4M+", files: "100M+" }
        },
        {
            name: "Radix UI",
            description: "Low-level UI primitives with a focus on accessibility, customization and developer experience.",
            category: "UI/UX",
            tags: ["Primitives", "Accessibility", "React", "Headless"],
            url: "https://radix-ui.com",
            logo: "⚛️",
            type: "external",
            stats: { stars: "13k+", downloads: "5M+" }
        },
        {
            name: "Framer Motion",
            description: "Production-ready motion library for React applications with declarative animations.",
            category: "UI/UX",
            tags: ["Animation", "React", "Motion", "Gestures"],
            url: "https://framer.com/motion",
            logo: "🎭",
            type: "external",
            stats: { stars: "21k+", downloads: "8M+" }
        },
        {
            name: "Lucide",
            description: "Beautiful & consistent icon toolkit made by the community for developers.",
            category: "UI/UX",
            tags: ["Icons", "SVG", "Community", "Consistent"],
            url: "https://lucide.dev",
            logo: "🎪",
            type: "external",
            stats: { icons: "1k+", downloads: "3M+" }
        },
        {
            name: "Headless UI",
            description: "Completely unstyled, fully accessible UI components for React and Vue.",
            category: "UI/UX",
            tags: ["Headless", "Accessible", "React", "Vue"],
            url: "https://headlessui.com",
            logo: "👻",
            type: "external",
            stats: { stars: "23k+", downloads: "4M+" }
        }
    ],

    testing: [
        {
            name: "Playwright",
            description: "Fast, reliable end-to-end testing framework for modern web apps.",
            category: "Testing",
            tags: ["E2E", "Automation", "Browser", "Cross-platform"],
            url: "https://playwright.dev",
            logo: "🎭",
            type: "external",
            featured: true,
            stats: { stars: "60k+", downloads: "10M+" }
        },
        {
            name: "Vitest",
            description: "Blazing fast unit test framework powered by Vite with Jest compatibility.",
            category: "Testing",
            tags: ["Unit Testing", "Vite", "Fast", "Jest"],
            url: "https://vitest.dev",
            logo: "⚡",
            type: "external",
            featured: true,
            stats: { stars: "11k+", downloads: "5M+" }
        },
        {
            name: "Cypress",
            description: "JavaScript end-to-end testing framework with real-time browser testing.",
            category: "Testing",
            tags: ["E2E", "JavaScript", "Real-time", "Debugging"],
            url: "https://cypress.io",
            logo: "🌲",
            type: "external",
            stats: { stars: "45k+", tests: "1B+" }
        },
    ],
    hosting: [
        {
            name: "Vercel",
            description: "Platform for frontend frameworks and static sites, built to integrate with headless content.",
            category: "Hosting",
            tags: ["Frontend", "Static", "Serverless", "Edge"],
            url: "https://vercel.com",
            logo: "▲",
            type: "external",
            featured: true,
            stats: { deployments: "100M+", developers: "1M+" }
        },
        {
            name: "Netlify",
            description: "Platform that automates builds, deployments, and manages your JAMstack sites.",
            category: "Hosting",
            tags: ["JAMstack", "CI/CD", "Forms", "Functions"],
            url: "https://netlify.com",
            logo: "🌐",
            type: "external",
            featured: true,
            stats: { sites: "4M+", builds: "1B+" }
        }
    ],
    analytics: [
        {
            name: "Google Analytics",
            description: "Free web analytics service for tracking and reporting website traffic.",
            category: "Analytics",
            tags: ["Free", "Google", "Web Analytics", "Reporting"],
            url: "https://analytics.google.com",
            logo: "📊",
            type: "external",
            stats: { sites: "50M+", events: "1T+" }
        }
    ],
    finance: [
        {
            name: "Stripe",
            description: "Complete payments platform for internet businesses with powerful APIs and tools.",
            category: "Finance",
            tags: ["Payments", "API", "Subscriptions", "Global"],
            url: "https://stripe.com",
            logo: "💳",
            type: "external",
            featured: true,
            stats: { businesses: "4M+", countries: "46+" }
        }
    ]
};

export const getToolByPath = (path) => {
    for (const category in toolsDatabase) {
        const tool = toolsDatabase[category].find(t => t.url === path);
        if (tool) return tool;
    }
    return null;
};
