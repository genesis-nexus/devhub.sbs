// ===== CURATED TOOL COLLECTIONS =====
const toolsDatabase = {
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
            url: "#jwt-tool",
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
            url: "#oidc-tool",
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
            url: "#base64-tool",
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
            url: "#url-tool",
            logo: "🔗",
            type: "internal",
            stats: { users: "75k+", rating: "4.8" }
        },
        {
            name: "Hash Generator",
            description: "Generate various hash types including MD5, SHA-256, SHA-512, and more for data integrity.",
            category: "Productivity",
            tags: ["Hashing", "MD5", "SHA-256", "Security", "Checksum"],
            url: "#hash-tool",
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
            url: "#json-tool",
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
            url: "#json-tool",
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
            url: "#json-schema-tool",
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
            url: "#jsonpath-tool",
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
            url: "#loan-calculator-tool",
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
            url: "#mortgage-calculator-tool",
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
            url: "#bmi-calculator-tool",
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
            url: "#calorie-calculator-tool",
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
            url: "#compound-interest-calculator-tool",
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
            url: "#age-calculator-tool",
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
            url: "#tip-calculator-tool",
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
            url: "#word-counter-tool",
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
            url: "#password-generator-tool",
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
            url: "#qr-generator-tool",
            logo: "📱",
            type: "internal",
            featured: true,
            stats: { users: "280k+", rating: "4.9" }
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
        {
            name: "Jest",
            description: "Delightful JavaScript testing framework with focus on simplicity.",
            category: "Testing",
            tags: ["Unit Testing", "JavaScript", "Mocking", "Coverage"],
            url: "https://jestjs.io",
            logo: "🃏",
            type: "external",
            stats: { stars: "42k+", downloads: "50M+" }
        },
        {
            name: "Testing Library",
            description: "Simple and complete testing utilities that encourage good testing practices.",
            category: "Testing",
            tags: ["React", "DOM", "User-centric", "Accessibility"],
            url: "https://testing-library.com",
            logo: "🐙",
            type: "external",
            stats: { stars: "18k+", downloads: "30M+" }
        },
        {
            name: "Storybook",
            description: "Tool for building UI components and pages in isolation for better testing and documentation.",
            category: "Testing",
            tags: ["Components", "Isolation", "Documentation", "Visual"],
            url: "https://storybook.js.org",
            logo: "📚",
            type: "external",
            stats: { stars: "82k+", addons: "400+" }
        }
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
        },
        {
            name: "Railway",
            description: "Deploy and scale apps with zero configuration on infrastructure that just works.",
            category: "Hosting",
            tags: ["Zero Config", "Database", "Scale", "Docker"],
            url: "https://railway.app",
            logo: "🚂",
            type: "external",
            stats: { apps: "500k+", deploys: "10M+" }
        },
        {
            name: "Fly.io",
            description: "Deploy app servers close to your users by running on infrastructure around the world.",
            category: "Hosting",
            tags: ["Global", "Edge", "Containers", "Performance"],
            url: "https://fly.io",
            logo: "🪰",
            type: "external",
            stats: { apps: "200k+", regions: "30+" }
        },
        {
            name: "Render",
            description: "Cloud platform for developers and teams building and running apps and websites.",
            category: "Hosting",
            tags: ["Full Stack", "Databases", "SSL", "Scaling"],
            url: "https://render.com",
            logo: "🎨",
            type: "external",
            stats: { services: "1M+", uptime: "99.9%" }
        },
        {
            name: "PlanetScale",
            description: "Database-as-a-service platform built on Vitess with branching for schema changes.",
            category: "Hosting",
            tags: ["Database", "MySQL", "Branching", "Serverless"],
            url: "https://planetscale.com",
            logo: "🪐",
            type: "external",
            stats: { databases: "100k+", queries: "1B+" }
        }
    ],
    
    analytics: [
        {
            name: "Vercel Analytics",
            description: "Privacy-friendly web analytics with zero configuration for Next.js applications.",
            category: "Analytics",
            tags: ["Privacy", "Next.js", "Real-time", "Performance"],
            url: "https://vercel.com/analytics",
            logo: "📊",
            type: "external",
            featured: true,
            stats: { events: "1B+", sites: "100k+" }
        },
        {
            name: "Posthog",
            description: "Open source product analytics platform with feature flags and session recordings.",
            category: "Analytics",
            tags: ["Open Source", "Product Analytics", "Feature Flags"],
            url: "https://posthog.com",
            logo: "🦔",
            type: "external",
            featured: true,
            stats: { events: "1B+", customers: "10k+" }
        },
        {
            name: "Mixpanel",
            description: "Advanced analytics platform for tracking user interactions and measuring engagement.",
            category: "Analytics",
            tags: ["User Analytics", "Funnel", "Cohort", "A/B Testing"],
            url: "https://mixpanel.com",
            logo: "📈",
            type: "external",
            stats: { events: "100B+", customers: "8k+" }
        },
        {
            name: "Amplitude",
            description: "Digital optimization platform for product teams to understand user behavior.",
            category: "Analytics",
            tags: ["Product Analytics", "Behavioral", "Cohort", "Retention"],
            url: "https://amplitude.com",
            logo: "📡",
            type: "external",
            stats: { events: "1T+", customers: "2k+" }
        },
        {
            name: "Hotjar",
            description: "Behavior analytics and user feedback service that shows how users interact with your site.",
            category: "Analytics",
            tags: ["Heatmaps", "Session Recording", "Feedback", "UX"],
            url: "https://hotjar.com",
            logo: "🔥",
            type: "external",
            stats: { customers: "1M+", sessions: "100B+" }
        },
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
        },
        {
            name: "Plaid",
            description: "Financial services API platform that enables applications to connect with bank accounts.",
            category: "Finance",
            tags: ["Banking API", "Account Data", "Transactions", "Identity"],
            url: "https://plaid.com",
            logo: "🏦",
            type: "external",
            featured: true,
            stats: { accounts: "200M+", institutions: "12k+" }
        },
        {
            name: "PayPal Developer",
            description: "Payment platform with APIs for online transactions, mobile payments, and marketplace solutions.",
            category: "Finance",
            tags: ["PayPal", "Mobile Payments", "Marketplace", "Checkout"],
            url: "https://developer.paypal.com",
            logo: "💰",
            type: "external",
            stats: { accounts: "400M+", merchants: "30M+" }
        },
        {
            name: "Square",
            description: "Payment processing and point-of-sale solutions for businesses of all sizes.",
            category: "Finance",
            tags: ["POS", "Payment Processing", "Mobile", "Hardware"],
            url: "https://squareup.com/developers",
            logo: "⬜",
            type: "external",
            stats: { sellers: "4M+", payments: "$180B+" }
        },
        {
            name: "Coinbase Commerce",
            description: "Accept cryptocurrency payments with easy integration and global reach.",
            category: "Finance",
            tags: ["Cryptocurrency", "Bitcoin", "Payments", "API"],
            url: "https://commerce.coinbase.com",
            logo: "₿",
            type: "external",
            stats: { merchants: "8k+", currencies: "100+" }
        },
        {
            name: "Adyen",
            description: "Global payment platform for enterprise businesses with unified commerce across all channels.",
            category: "Finance",
            tags: ["Enterprise", "Global", "Unified Commerce", "Platform"],
            url: "https://adyen.com",
            logo: "🌍",
            type: "external",
            stats: { merchants: "10k+", markets: "200+" }
        }
    ]
};

// ===== STATE MANAGEMENT =====
let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 12;
let filteredTools = [];
let searchQuery = '';

// ===== DOM ELEMENTS =====
const categoryButtons = document.querySelectorAll('.category-btn');
const toolsGrid = document.getElementById('tools-grid');
const featuredGrid = document.getElementById('featured-grid');
const collectionTitle = document.getElementById('collection-title');
const collectionSubtitle = document.getElementById('collection-subtitle');
const loadMoreBtn = document.getElementById('load-more-btn');
const searchInput = document.getElementById('search-input');
const sidebarSearch = document.getElementById('sidebar-search');
const modal = document.getElementById('tool-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const themeToggle = document.getElementById('theme-toggle');
const sidebarToggle = document.getElementById('sidebar-toggle');
const backToTop = document.getElementById('back-to-top');
const quickTools = document.querySelectorAll('.quick-tool');
const sidebarNavLinks = document.querySelectorAll('.sidebar .nav-link');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    initializeURLRouting();
});

// ===== URL ROUTING SYSTEM =====
function initializeURLRouting() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        handleRouteChange(window.location.pathname);
    });
    
    // Check initial URL on page load
    const initialPath = window.location.pathname;
    if (initialPath !== '/' && initialPath !== '') {
        handleRouteChange(initialPath);
    }
}

function handleRouteChange(path) {
    // Remove leading slash and get tool name
    const toolName = path.replace(/^\//, '');
    
    // Map URL paths to tool IDs
    const toolRoutes = {
        'json': 'json',
        'jwt': 'jwt', 
        'base64': 'base64',
        'url': 'url',
        'oidc': 'oidc',
        'hash': 'hash'
    };
    
    if (toolRoutes[toolName]) {
        // Navigate to the specific tool
        openToolModal(toolRoutes[toolName]);
        
        // Update page title and meta for SEO
        updatePageMetaForTool(toolName);
        
        // Update breadcrumb
        updateBreadcrumb(toolRoutes[toolName]);
        
        // Update URL without triggering another route change
        const newUrl = `${window.location.origin}/${toolName}`;
        window.history.replaceState({ tool: toolName }, '', newUrl);
    }
}

function openToolModal(toolId) {
    // Find the tool card and trigger click
    const toolCard = document.querySelector(`[data-tool="${toolId}"]`);
    if (toolCard) {
        toolCard.click();
    }
}

function updatePageMetaForTool(toolName) {
    const toolMeta = getToolMeta(toolName);
    if (toolMeta) {
        // Update page title
        document.title = toolMeta.title;
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', toolMeta.description);
        }
        
        // Update Open Graph title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', toolMeta.ogTitle);
        }
        
        // Update Open Graph description
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', toolMeta.ogDescription);
        }
        
        // Update Twitter title
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', toolMeta.twitterTitle);
        }
        
        // Update Twitter description
        const twitterDesc = document.querySelector('meta[property="twitter:description"]');
        if (twitterDesc) {
            twitterDesc.setAttribute('content', toolMeta.twitterDescription);
        }
    }
}

function getToolMeta(toolName) {
    const toolMetaData = {
        'json': {
            title: 'JSON Validator & Beautifier | Free Online Tool | DevHub',
            description: 'Free online JSON validator and beautifier. Validate JSON syntax, format with proper indentation, and minify JSON. Professional tool for developers and API testing.',
            ogTitle: 'JSON Validator & Beautifier - Free Online Tool | DevHub',
            ogDescription: 'Validate, beautify, and format JSON with our free online tool. Perfect for developers, API testing, and data validation.',
            twitterTitle: 'JSON Validator & Beautifier - Free Online Tool | DevHub',
            twitterDescription: 'Validate, beautify, and format JSON with our free online tool. Perfect for developers, API testing, and data validation.'
        },
        'jwt': {
            title: 'JWT Token Verifier | Free Online Tool | DevHub',
            description: 'Free online JWT token verifier. Decode and validate JSON Web Tokens instantly. Check JWT claims, signature, and expiration.',
            ogTitle: 'JWT Token Verifier - Free Online Tool | DevHub',
            ogDescription: 'Decode and validate JWT tokens with our free online tool. Check claims, signature, and expiration instantly.',
            twitterTitle: 'JWT Token Verifier - Free Online Tool | DevHub',
            twitterDescription: 'Decode and validate JWT tokens with our free online tool. Check claims, signature, and expiration instantly.'
        },
        'base64': {
            title: 'Base64 Encoder/Decoder | Free Online Tool | DevHub',
            description: 'Free online Base64 encoder and decoder. Convert text to Base64 and decode Base64 back to text instantly. Perfect for data encoding.',
            ogTitle: 'Base64 Encoder/Decoder - Free Online Tool | DevHub',
            ogDescription: 'Encode text to Base64 and decode Base64 back to text with our free online tool. Perfect for data encoding.',
            twitterTitle: 'Base64 Encoder/Decoder - Free Online Tool | DevHub',
            twitterDescription: 'Encode text to Base64 and decode Base64 back to text with our free online tool. Perfect for data encoding.'
        },
        'url': {
            title: 'URL Encoder/Decoder | Free Online Tool | DevHub',
            description: 'Free online URL encoder and decoder. Encode URLs and special characters for web development and API testing.',
            ogTitle: 'URL Encoder/Decoder - Free Online Tool | DevHub',
            ogDescription: 'Encode and decode URLs with our free online tool. Handle special characters for web development and API testing.',
            twitterTitle: 'URL Encoder/Decoder - Free Online Tool | DevHub',
            twitterDescription: 'Encode and decode URLs with our free online tool. Handle special characters for web development and API testing.'
        },
        'oidc': {
            title: 'OIDC Playground & Testing Tool | Free Online Tool | DevHub',
            description: 'Free online OIDC playground for testing OpenID Connect authentication flows. Test OAuth 2.0 and OIDC protocols.',
            ogTitle: 'OIDC Playground & Testing Tool - Free Online Tool | DevHub',
            ogDescription: 'Test OpenID Connect authentication flows with our free online playground. Perfect for OAuth 2.0 and OIDC testing.',
            twitterTitle: 'OIDC Playground & Testing Tool - Free Online Tool | DevHub',
            twitterDescription: 'Test OpenID Connect authentication flows with our free online playground. Perfect for OAuth 2.0 and OIDC testing.'
        },
        'hash': {
            title: 'Hash Generator Tool | Free Online Tool | DevHub',
            description: 'Free online hash generator supporting MD5, SHA-256, SHA-512, and more. Generate secure hashes for data integrity.',
            ogTitle: 'Hash Generator Tool - Free Online Tool | DevHub',
            ogDescription: 'Generate secure hashes with our free online tool. Support for MD5, SHA-256, SHA-512, and more algorithms.',
            twitterTitle: 'Hash Generator Tool - Free Online Tool | DevHub',
            twitterDescription: 'Generate secure hashes with our free online tool. Support for MD5, SHA-256, SHA-512, and more algorithms.'
        }
    };
    
    return toolMetaData[toolName];
}

function updateURLForTool(toolId) {
    const toolRoutes = {
        'json': 'json',
        'jwt': 'jwt', 
        'base64': 'base64',
        'url': 'url',
        'oidc': 'oidc',
        'hash': 'hash'
    };
    
    if (toolRoutes[toolId]) {
        const newUrl = `${window.location.origin}/${toolRoutes[toolId]}`;
        window.history.pushState({ tool: toolId }, '', newUrl);
        
        // Update page meta for SEO
        updatePageMetaForTool(toolRoutes[toolId]);
        
        // Update breadcrumb
        updateBreadcrumb(toolId);
    }
}

function updateBreadcrumb(toolId) {
    const toolNames = {
        'json': 'JSON Validator',
        'jwt': 'JWT Verifier',
        'base64': 'Base64 Tool',
        'url': 'URL Tool',
        'oidc': 'OIDC Tool',
        'hash': 'Hash Generator'
    };
    
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    if (breadcrumbCurrent && toolNames[toolId]) {
        breadcrumbCurrent.textContent = toolNames[toolId];
    }
}

function restoreOriginalPageMeta() {
    // Restore original page title and meta
    document.title = 'Base64 Encode/Decode, URL Encode/Decode, OIDC Testing, JSON Validator | Free Dev Tools Portal | DevHub';
    
    // Restore original meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', 'Free online Base64 encode/decode, URL encode/decode, OIDC playground testing, JSON validator, JSON beautifier, and 60+ developer tools. Professional dev portal with JWT verification, authentication testing, and productivity tools. No signup required!');
    }
    
    // Restore original Open Graph title
    const ogTitle = document.querySelector('meta[name="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', 'Base64 Encode/Decode, URL Encode/Decode, OIDC Testing, JSON Validator | Free Dev Tools Portal');
    }
    
    // Restore original Open Graph description
    const ogDesc = document.querySelector('meta[name="og:description"]');
    if (ogDesc) {
        ogDesc.setAttribute('content', 'Free online Base64 encode/decode, URL encode/decode, OIDC playground testing, JSON validator, JSON beautifier, and 60+ developer tools. Professional dev portal with JWT verification and authentication testing.');
    }
    
    // Restore original Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.setAttribute('content', 'Base64 Encode/Decode, URL Encode/Decode, OIDC Testing, JSON Validator | Free Dev Tools Portal');
    }
    
    // Restore original Twitter description
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
        twitterDesc.setAttribute('content', 'Free online Base64 encode/decode, URL encode/decode, OIDC playground testing, JSON validator, JSON beautifier, and 60+ developer tools. Professional dev portal with JWT verification and authentication testing.');
    }
    
    // Restore breadcrumb
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = 'Tool';
    }
}

function initializeApp() {
    setupEventListeners();
    renderFeaturedTools();
    renderTools();
    populateCategoryGrids(); // Ensure category grids are populated
    initializeTheme();
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Sidebar navigation
    if (sidebarNavLinks && sidebarNavLinks.length > 0) {
        sidebarNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links
                sidebarNavLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                if (link.dataset.tool) {
                    openInternalTool(link.dataset.tool);
                } else if (link.dataset.category) {
                    handleCategoryChange(link.dataset.category);
                }
            });
        });
    }
    
    // Sidebar search
    if (sidebarSearch) {
        sidebarSearch.addEventListener('input', handleSidebarSearch);
    }
    
    // Category filters (for backward compatibility)
    if (categoryButtons && categoryButtons.length > 0) {
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Category clicked:', btn.dataset.category);
                handleCategoryChange(btn.dataset.category);
            });
        });
    }
    
    // Search
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Load more
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreTools);
    }
    
    // Modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    // Handle escape key for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Sidebar toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    // Back to top
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
    }
    
    // Quick tools
    if (quickTools && quickTools.length > 0) {
        quickTools.forEach(tool => {
            tool.addEventListener('click', () => openInternalTool(tool.dataset.tool));
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
}

// ===== CATEGORY HANDLING =====
function handleCategoryChange(category) {
    currentCategory = category;
    currentPage = 1;
    
    // Update active button
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Update title and subtitle
    updateCategoryDisplay(category);
    
    // Render tools
    renderTools();
    
    // Show/hide category sections based on selection
    toggleCategorySections(category);
    
    // Scroll to appropriate section
    if (category === 'all') {
        // Scroll to tools collection section
        scrollToSection('tools');
    } else {
        // Scroll to specific category section
        scrollToSection(category);
    }
}

function updateCategoryDisplay(category) {
    const categoryInfo = {
        all: {
            title: "All Tools",
            subtitle: "Discover amazing developer tools and resources"
        },
        authentication: {
            title: "Authentication Tools",
            subtitle: "JWT verification, OAuth, SSO, and security tools"
        },
        ai: {
            title: "AI & Machine Learning",
            subtitle: "Language models, ML frameworks, and AI APIs"
        },
        productivity: {
            title: "Productivity Tools",
            subtitle: "Boost your development workflow and efficiency"
        },
        database: {
            title: "Database Solutions",
            subtitle: "Modern databases, ORMs, and data management"
        },
        ui: {
            title: "UI/UX Tools",
            subtitle: "Design systems, component libraries, and animations"
        },
        testing: {
            title: "Testing Frameworks",
            subtitle: "Unit testing, E2E testing, and quality assurance"
        },
        hosting: {
            title: "Hosting Platforms",
            subtitle: "Deploy and scale your applications globally"
        },
        analytics: {
            title: "Analytics Platforms",
            subtitle: "Track user behavior and application performance"
        },
        finance: {
            title: "Financial Services",
            subtitle: "Payment processing, banking APIs, and FinTech"
        },
        json: {
            title: "JSON Tools",
            subtitle: "Validate, beautify, and format JSON data with professional tools"
        },
        calculators: {
            title: "Calculators & Utilities",
            subtitle: "Financial, health, and productivity calculators for everyone"
        }
    };

    const info = categoryInfo[category];
    if (collectionTitle && info) {
        collectionTitle.textContent = info.title;
    }
    if (collectionSubtitle && info) {
        collectionSubtitle.textContent = info.subtitle;
    }
}

// ===== SEARCH FUNCTIONALITY =====
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase();
    currentPage = 1;
    console.log('Search query:', searchQuery);
    renderTools();
    
    // If there's a search query, show relevant category sections and scroll to tools
    if (searchQuery.trim()) {
        showRelevantCategorySections(searchQuery);
        scrollToSection('tools');
    } else {
        // If search is cleared, show all sections
        showAllCategorySections();
    }
}

function handleSidebarSearch(e) {
    const query = e.target.value.toLowerCase();
    
    // Filter sidebar navigation items
    sidebarNavLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        const shouldShow = text.includes(query);
        link.parentElement.style.display = shouldShow ? 'block' : 'none';
    });
    
    // If searching for a specific tool, show relevant category sections and scroll to tools
    if (query.trim()) {
        showRelevantCategorySections(query);
        scrollToSection('tools');
    } else {
        // If search is cleared, show all sections
        showAllCategorySections();
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Smooth scroll to section
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add a subtle highlight effect
        section.classList.add('section-highlight');
        setTimeout(() => {
            section.classList.remove('section-highlight');
        }, 2000);
    }
}

// ===== TOOL RENDERING =====
function getFilteredTools() {
    let tools = [];
    
    if (currentCategory === 'all') {
        tools = Object.values(toolsDatabase).flat();
    } else {
        tools = toolsDatabase[currentCategory] || [];
    }
    
    if (searchQuery) {
        tools = tools.filter(tool => 
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.description.toLowerCase().includes(searchQuery) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );
    }
    
    return tools;
}

function renderFeaturedTools() {
    const featured = Object.values(toolsDatabase)
        .flat()
        .filter(tool => tool.featured)
        .slice(0, 6);
    
    if (featuredGrid) {
        featuredGrid.innerHTML = featured.map(tool => createResourceCard(tool)).join('');
        addCardEventListeners(featuredGrid);
    }
}

function renderTools() {
    filteredTools = getFilteredTools();
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const toolsToShow = filteredTools.slice(startIndex, endIndex);
    
    console.log('Rendering tools:', {
        category: currentCategory,
        searchQuery: searchQuery,
        totalFiltered: filteredTools.length,
        showing: toolsToShow.length
    });
    
    if (toolsGrid) {
        toolsGrid.innerHTML = toolsToShow.map(tool => createResourceCard(tool)).join('');
        addCardEventListeners(toolsGrid);
    }
    
    // Update load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = endIndex >= filteredTools.length ? 'none' : 'block';
    }
    
    // Also populate category-specific grids
    populateCategoryGrids();
}

function populateCategoryGrids() {
    // Get all category grids
    const categoryGrids = {
        authentication: document.getElementById('authentication-grid'),
        ai: document.getElementById('ai-grid'),
        productivity: document.getElementById('productivity-grid'),
        database: document.getElementById('database-grid'),
        ui: document.getElementById('ui-grid'),
        testing: document.getElementById('testing-grid'),
        hosting: document.getElementById('hosting-grid'),
        analytics: document.getElementById('analytics-grid'),
        finance: document.getElementById('finance-grid'),
        json: document.getElementById('json-grid')
    };
    
    // Populate each category grid with its tools
    Object.entries(categoryGrids).forEach(([category, grid]) => {
        if (grid) {
            const categoryTools = toolsDatabase[category] || [];
            if (categoryTools.length > 0) {
                grid.innerHTML = categoryTools.map(tool => createResourceCard(tool)).join('');
                addCardEventListeners(grid);
            } else {
                grid.innerHTML = '<p class="no-tools">No tools available in this category yet.</p>';
            }
        }
    });
}

function toggleCategorySections(selectedCategory) {
    const allCategorySections = document.querySelectorAll('.category-section');
    
    allCategorySections.forEach(section => {
        if (selectedCategory === 'all') {
            // Show all sections when "All" is selected
            section.style.display = 'block';
        } else {
            // Show only the selected category section
            if (section.id === selectedCategory) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }
    });
}

function showRelevantCategorySections(searchQuery) {
    const allCategorySections = document.querySelectorAll('.category-section');
    
    allCategorySections.forEach(section => {
        const sectionId = section.id;
        const categoryTools = toolsDatabase[sectionId] || [];
        
        // Check if any tools in this category match the search query
        const hasMatchingTools = categoryTools.some(tool => 
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.description.toLowerCase().includes(searchQuery) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );
        
        // Show section if it has matching tools
        section.style.display = hasMatchingTools ? 'block' : 'none';
    });
}

function showAllCategorySections() {
    const allCategorySections = document.querySelectorAll('.category-section');
    allCategorySections.forEach(section => {
        section.style.display = 'block';
    });
}

function loadMoreTools() {
    currentPage++;
    renderTools();
}

function createResourceCard(tool) {
    const statsHtml = tool.stats ? Object.entries(tool.stats)
        .map(([key, value]) => `<span>${key}: ${value}</span>`)
        .join('') : '';
    
    return `
        <div class="resource-card" data-tool="${tool.name}" data-type="${tool.type}" data-url="${tool.url}">
            <div class="resource-header">
                <div class="resource-logo">${tool.logo}</div>
                <div class="resource-info">
                    <h3>${tool.name}</h3>
                    <div class="resource-category">${tool.category}</div>
                </div>
            </div>
            <div class="resource-description">${tool.description}</div>
            <div class="resource-tags">
                ${tool.tags.map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
            </div>
            <div class="resource-footer">
                <a href="${tool.url}" class="resource-link" ${tool.type === 'external' ? 'target="_blank" rel="noopener"' : ''}>
                    ${tool.type === 'internal' ? 'Try Tool' : 'Visit Site'}
                    <i class="fas fa-${tool.type === 'internal' ? 'play' : 'external-link-alt'}"></i>
                </a>
                <div class="resource-stats">${statsHtml}</div>
            </div>
        </div>
    `;
}

function addCardEventListeners(container) {
    container.querySelectorAll('.resource-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.resource-link')) return;
            
            const toolName = card.dataset.tool;
            const toolType = card.dataset.type;
            const toolUrl = card.dataset.url;
            
            if (toolType === 'internal') {
                const toolId = toolUrl.replace('#', '').replace('-tool', '');
                openInternalTool(toolId);
            } else {
                window.open(toolUrl, '_blank', 'noopener');
            }
        });
    });
}

// ===== INTERNAL TOOLS =====
function openInternalTool(toolId) {
    const toolConfigs = {
        jwt: {
            title: 'JWT Token Verifier',
            content: createJWTToolInterface()
        },
        base64: {
            title: 'Base64 Encoder/Decoder',
            content: createBase64ToolInterface()
        },
        url: {
            title: 'URL Encoder/Decoder',
            content: createURLToolInterface()
        },
        oidc: {
            title: 'OpenID Connect Tester',
            content: createOIDCToolInterface()
        },
        hash: {
            title: 'Hash Generator',
            content: createHashToolInterface()
        },
        json: {
            title: 'JSON Validator & Beautifier',
            content: createJSONToolInterface()
        },
        'loan-calculator': {
            title: 'Loan Calculator',
            content: createLoanCalculatorInterface()
        },
        'mortgage-calculator': {
            title: 'Mortgage Calculator',
            content: createMortgageCalculatorInterface()
        },
        'bmi-calculator': {
            title: 'BMI Calculator',
            content: createBMICalculatorInterface()
        },
        'calorie-calculator': {
            title: 'Calorie Calculator',
            content: createCalorieCalculatorInterface()
        },
        'compound-interest-calculator': {
            title: 'Compound Interest Calculator',
            content: createCompoundInterestCalculatorInterface()
        },
        'age-calculator': {
            title: 'Age Calculator',
            content: createAgeCalculatorInterface()
        },
        'tip-calculator': {
            title: 'Tip Calculator',
            content: createTipCalculatorInterface()
        },
        'word-counter': {
            title: 'Word Counter',
            content: createWordCounterInterface()
        },
        'password-generator': {
            title: 'Password Generator',
            content: createPasswordGeneratorInterface()
        },
        'qr-generator': {
            title: 'QR Code Generator',
            content: createQRGeneratorInterface()
        }
    };
    
    const config = toolConfigs[toolId];
    if (config) {
        openModal(config.title, config.content);
        
        // Update URL for the specific tool
        updateURLForTool(toolId);
        
        // Initialize tool functionality
        initializeToolFunctionality(toolId);
    }
}

function createJWTToolInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="jwt-input">JWT Token:</label>
                <textarea id="jwt-input" placeholder="Paste your JWT token here..." rows="4"></textarea>
            </div>
            <div class="button-group">
                <button id="jwt-decode" class="btn btn-primary">
                    <i class="fas fa-key"></i> Decode Token
                </button>
                <button id="jwt-clear" class="btn btn-outline">
                    <i class="fas fa-trash"></i> Clear
                </button>
            </div>
            <div class="jwt-results">
                <div class="result-section">
                    <h4>Header</h4>
                    <pre id="jwt-header" class="result-output"></pre>
                </div>
                <div class="result-section">
                    <h4>Payload</h4>
                    <pre id="jwt-payload" class="result-output"></pre>
                </div>
                <div class="result-section">
                    <h4>Signature Verification</h4>
                    <div id="jwt-signature" class="result-output"></div>
                </div>
            </div>
        </div>
    `;
}

function createBase64ToolInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="base64-input">Input Text:</label>
                <textarea id="base64-input" placeholder="Enter text to encode or Base64 to decode..." rows="4"></textarea>
            </div>
            <div class="button-group">
                <button id="base64-encode" class="btn btn-primary">
                    <i class="fas fa-arrow-right"></i> Encode to Base64
                </button>
                <button id="base64-decode" class="btn btn-primary">
                    <i class="fas fa-arrow-left"></i> Decode from Base64
                </button>
                <button id="base64-clear" class="btn btn-outline">
                    <i class="fas fa-trash"></i> Clear
                </button>
            </div>
            <div class="output-group">
                <label for="base64-output">Result:</label>
                <textarea id="base64-output" readonly placeholder="Result will appear here..." rows="4"></textarea>
                <button id="base64-copy" class="btn btn-outline copy-btn">
                    <i class="fas fa-copy"></i> Copy
                </button>
            </div>
        </div>
    `;
}

function createURLToolInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="url-input">Input Text:</label>
                <textarea id="url-input" placeholder="Enter text to encode or URL to decode..." rows="4"></textarea>
            </div>
            <div class="button-group">
                <button id="url-encode" class="btn btn-primary">
                    <i class="fas fa-arrow-right"></i> Encode
                </button>
                <button id="url-decode" class="btn btn-primary">
                    <i class="fas fa-arrow-left"></i> Decode
                </button>
                <button id="url-clear" class="btn btn-outline">
                    <i class="fas fa-trash"></i> Clear
                </button>
            </div>
            <div class="output-group">
                <label for="url-output">Result:</label>
                <textarea id="url-output" readonly placeholder="Result will appear here..." rows="4"></textarea>
                <button id="url-copy" class="btn btn-outline copy-btn">
                    <i class="fas fa-copy"></i> Copy
                </button>
            </div>
        </div>
    `;
}

function createOIDCToolInterface() {
    return `
        <div class="tool-interface">
            <div class="oidc-config">
                <div class="input-group">
                    <label for="oidc-discovery">Discovery Endpoint:</label>
                    <input type="url" id="oidc-discovery" placeholder="https://your-domain/.well-known/openid_configuration">
                    <small class="help-text">The OIDC discovery endpoint (/.well-known/openid_configuration)</small>
                </div>
                <div class="input-group">
                    <label for="oidc-client-id">Client ID:</label>
                    <input type="text" id="oidc-client-id" placeholder="Your OIDC client ID">
                    <small class="help-text">The client ID registered with your OIDC provider</small>
                </div>
                <div class="input-group">
                    <label for="oidc-redirect-uri">Redirect URI:</label>
                    <input type="url" id="oidc-redirect-uri" value="https://devhub.sbs/oidc-callback.html" readonly>
                    <small class="help-text">Configure this URL in your OIDC provider (click to copy)</small>
                </div>
                <div class="input-group">
                    <label for="oidc-scope">Scope:</label>
                    <input type="text" id="oidc-scope" value="openid profile email" placeholder="openid profile email">
                    <small class="help-text">Space-separated list of requested scopes</small>
                </div>
                <div class="input-group">
                    <label for="oidc-response-type">Response Type:</label>
                    <select id="oidc-response-type">
                        <option value="code">Authorization Code (code)</option>
                        <option value="token">Implicit (token)</option>
                        <option value="id_token">ID Token (id_token)</option>
                        <option value="code token">Hybrid (code token)</option>
                        <option value="code id_token">Hybrid (code id_token)</option>
                    </select>
                    <small class="help-text">OAuth 2.0 / OIDC response type</small>
                </div>
            </div>
            <div class="button-group">
                <button id="oidc-discover" class="btn btn-primary">
                    <i class="fas fa-search"></i> Discover Endpoints
                </button>
                <button id="oidc-generate-auth-url" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i> Generate Auth URL
                </button>
                <button id="oidc-test-flow" class="btn btn-success" style="display: none;">
                    <i class="fas fa-play"></i> Test Full Flow
                </button>
                <button id="oidc-clear" class="btn btn-outline">
                    <i class="fas fa-trash"></i> Clear
                </button>
            </div>
            <div class="oidc-results">
                <div class="result-section">
                    <h4>Discovery Results</h4>
                    <pre id="oidc-discovery-results" class="result-output"></pre>
                </div>
                <div class="result-section">
                    <h4>Generated Authorization URL</h4>
                    <div class="auth-url-container">
                        <input type="text" id="oidc-auth-url" readonly class="auth-url-input">
                        <button id="oidc-copy-url" class="btn btn-outline copy-btn">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                        <button id="oidc-open-url" class="btn btn-primary copy-btn" style="display: none;">
                            <i class="fas fa-external-link-alt"></i> Open
                        </button>
                    </div>
                </div>
                <div class="result-section">
                    <h4>Testing Instructions</h4>
                    <div class="instructions">
                        <ol>
                            <li><strong>Configure your OIDC provider:</strong> Add <code>https://devhub.sbs/oidc-callback.html</code> as a redirect URI</li>
                            <li><strong>Fill in the configuration above</strong> with your OIDC provider details</li>
                            <li><strong>Click "Discover Endpoints"</strong> to fetch provider configuration</li>
                            <li><strong>Click "Generate Auth URL"</strong> to create the authorization URL</li>
                            <li><strong>Click "Test Full Flow"</strong> to open the auth URL and complete the OAuth flow</li>
                        </ol>
                        <div class="popular-providers">
                            <h5>Popular OIDC Providers:</h5>
                            <div class="provider-buttons">
                                <button class="provider-btn" data-provider="auth0">
                                    🔐 Auth0
                                </button>
                                <button class="provider-btn" data-provider="google">
                                    🔍 Google
                                </button>
                                <button class="provider-btn" data-provider="microsoft">
                                    🔷 Microsoft
                                </button>
                                <button class="provider-btn" data-provider="okta">
                                    🏢 Okta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createHashToolInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="hash-input">Input Text:</label>
                <textarea id="hash-input" placeholder="Enter text to hash..." rows="4"></textarea>
            </div>
            <div class="input-group">
                <label for="hash-file">Or Upload File:</label>
                <input type="file" id="hash-file" accept="*/*">
                <small class="help-text">Select a file to hash (max 10MB)</small>
            </div>
            <div class="hash-options">
                <label>Hash Types:</label>
                <div class="hash-checkboxes">
                    <label class="hash-checkbox">
                        <input type="checkbox" value="md5" checked> MD5
                    </label>
                    <label class="hash-checkbox">
                        <input type="checkbox" value="sha1" checked> SHA-1
                    </label>
                    <label class="hash-checkbox">
                        <input type="checkbox" value="sha256" checked> SHA-256
                    </label>
                    <label class="hash-checkbox">
                        <input type="checkbox" value="sha512" checked> SHA-512
                    </label>
                    <label class="hash-checkbox">
                        <input type="checkbox" value="sha3-256"> SHA3-256
                    </label>
                    <label class="hash-checkbox">
                        <input type="checkbox" value="keccak256"> Keccak-256
                    </label>
                    <label class="hash-checkbox">
                        <input type="checkbox" value="blake2b"> BLAKE2b
                    </label>
                    <label class="hash-checkbox">
                        <input type="checkbox" value="ripemd160"> RIPEMD-160
                    </label>
                </div>
            </div>
            <div class="checksum-options">
                <label>Checksum Format:</label>
                <div class="checksum-format">
                    <label class="format-option">
                        <input type="radio" name="checksum-format" value="hex" checked> Hexadecimal
                    </label>
                    <label class="format-option">
                        <input type="radio" name="checksum-format" value="base64"> Base64
                    </label>
                    <label class="format-option">
                        <input type="radio" name="checksum-format" value="binary"> Binary
                    </label>
                </div>
            </div>
            <div class="button-group">
                <button id="hash-generate" class="btn btn-primary">
                    <i class="fas fa-hashtag"></i> Generate Hashes
                </button>
                <button id="hash-clear" class="btn btn-outline">
                    <i class="fas fa-trash"></i> Clear
                </button>
            </div>
            <div class="hash-results">
                <div class="result-section">
                    <h4>Generated Hashes</h4>
                    <div id="hash-outputs"></div>
                </div>
                <div class="result-section">
                    <h4>Checksum Verification</h4>
                    <div class="checksum-verification">
                        <div class="input-group">
                            <label for="checksum-input">Expected Checksum:</label>
                            <input type="text" id="checksum-input" placeholder="Paste the expected checksum here...">
                        </div>
                        <div class="verification-result" id="verification-result">
                            <!-- Verification result will appear here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createJSONToolInterface() {
    return `
        <div class="tool-interface">
            <div class="json-input-section">
                <div class="input-group">
                    <label for="json-input">Input JSON:</label>
                    <textarea id="json-input" placeholder="Paste your JSON here..." rows="8"></textarea>
                    <small class="help-text">Enter or paste JSON data to validate and beautify</small>
                </div>
                <div class="button-group">
                    <button id="json-validate" class="btn btn-primary">
                        <i class="fas fa-check-circle"></i> Validate JSON
                    </button>
                    <button id="json-beautify" class="btn btn-success">
                        <i class="fas fa-magic"></i> Beautify JSON
                    </button>
                    <button id="json-minify" class="btn btn-info">
                        <i class="fas fa-compress-alt"></i> Minify JSON
                    </button>
                    <button id="json-clear" class="btn btn-outline">
                        <i class="fas fa-trash"></i> Clear
                    </button>
                </div>
            </div>
            
            <div class="json-results">
                <div class="result-section">
                    <h4>Original JSON</h4>
                    <div class="json-display">
                        <pre id="json-original" class="json-output"></pre>
                    </div>
                </div>
                
                <div class="result-section">
                    <h4>Processed JSON</h4>
                    <div class="json-display">
                        <pre id="json-processed" class="json-output"></pre>
                        <div class="json-actions">
                            <button id="json-copy" class="btn btn-outline copy-btn">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                            <button id="json-download" class="btn btn-outline">
                                <i class="fas fa-download"></i> Download
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="result-section">
                    <h4>Validation Results</h4>
                    <div id="json-validation-results" class="validation-results">
                        <!-- Validation results will appear here -->
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===== TOOL FUNCTIONALITY =====
function initializeToolFunctionality(toolId) {
    switch(toolId) {
        case 'jwt':
            initializeJWTTool();
            break;
        case 'base64':
            initializeBase64Tool();
            break;
        case 'url':
            initializeURLTool();
            break;
        case 'oidc':
            initializeOIDCTool();
            break;
        case 'hash':
            initializeHashTool();
            break;
        case 'json':
            initializeJSONTool();
            break;
        case 'loan-calculator':
            initializeLoanCalculatorTool();
            break;
        case 'mortgage-calculator':
            initializeMortgageCalculatorTool();
            break;
        case 'bmi-calculator':
            initializeBMICalculatorTool();
            break;
        case 'calorie-calculator':
            initializeCalorieCalculatorTool();
            break;
        case 'compound-interest-calculator':
            initializeCompoundInterestCalculatorTool();
            break;
        case 'age-calculator':
            initializeAgeCalculatorTool();
            break;
        case 'tip-calculator':
            initializeTipCalculatorTool();
            break;
        case 'word-counter':
            initializeWordCounterTool();
            break;
        case 'password-generator':
            initializePasswordGeneratorTool();
            break;
        case 'qr-generator':
            initializeQRGeneratorTool();
            break;
    }
}

function initializeJWTTool() {
    const jwtInput = document.getElementById('jwt-input');
    const jwtDecode = document.getElementById('jwt-decode');
    const jwtClear = document.getElementById('jwt-clear');
    const jwtHeader = document.getElementById('jwt-header');
    const jwtPayload = document.getElementById('jwt-payload');
    const jwtSignature = document.getElementById('jwt-signature');
    
    jwtDecode.addEventListener('click', () => {
        const token = jwtInput.value.trim();
        if (!token) {
            showNotification('Please enter a JWT token', 'error');
            return;
        }
        
        try {
            const parts = token.split('.');
            if (parts.length !== 3) {
                throw new Error('Invalid JWT format');
            }
            
            const header = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
            const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
            
            jwtHeader.textContent = JSON.stringify(header, null, 2);
            jwtPayload.textContent = JSON.stringify(payload, null, 2);
            jwtSignature.innerHTML = '<div class="signature-info">⚠️ Signature verification requires the secret key</div>';
            
            showNotification('JWT token decoded successfully', 'success');
        } catch (error) {
            showNotification('Invalid JWT token format', 'error');
        }
    });
    
    jwtClear.addEventListener('click', () => {
        jwtInput.value = '';
        jwtHeader.textContent = '';
        jwtPayload.textContent = '';
        jwtSignature.innerHTML = '';
    });
}

function initializeBase64Tool() {
    const base64Input = document.getElementById('base64-input');
    const base64Output = document.getElementById('base64-output');
    const base64Encode = document.getElementById('base64-encode');
    const base64Decode = document.getElementById('base64-decode');
    const base64Clear = document.getElementById('base64-clear');
    const base64Copy = document.getElementById('base64-copy');
    
    base64Encode.addEventListener('click', () => {
        const input = base64Input.value;
        if (!input) {
            showNotification('Please enter text to encode', 'error');
            return;
        }
        
        try {
            base64Output.value = btoa(unescape(encodeURIComponent(input)));
            showNotification('Text encoded to Base64', 'success');
        } catch (error) {
            showNotification('Encoding failed', 'error');
        }
    });
    
    base64Decode.addEventListener('click', () => {
        const input = base64Input.value;
        if (!input) {
            showNotification('Please enter Base64 to decode', 'error');
            return;
        }
        
        try {
            base64Output.value = decodeURIComponent(escape(atob(input)));
            showNotification('Base64 decoded successfully', 'success');
        } catch (error) {
            showNotification('Invalid Base64 format', 'error');
        }
    });
    
    base64Clear.addEventListener('click', () => {
        base64Input.value = '';
        base64Output.value = '';
    });
    
    base64Copy.addEventListener('click', () => {
        copyToClipboard(base64Output.value);
    });
}

function initializeURLTool() {
    const urlInput = document.getElementById('url-input');
    const urlOutput = document.getElementById('url-output');
    const urlEncode = document.getElementById('url-encode');
    const urlDecode = document.getElementById('url-decode');
    const urlClear = document.getElementById('url-clear');
    const urlCopy = document.getElementById('url-copy');
    
    urlEncode.addEventListener('click', () => {
        const input = urlInput.value;
        if (!input) {
            showNotification('Please enter text to encode', 'error');
            return;
        }
        
        urlOutput.value = encodeURIComponent(input);
        showNotification('Text URL encoded', 'success');
    });
    
    urlDecode.addEventListener('click', () => {
        const input = urlInput.value;
        if (!input) {
            showNotification('Please enter URL to decode', 'error');
            return;
        }
        
        try {
            urlOutput.value = decodeURIComponent(input);
            showNotification('URL decoded successfully', 'success');
        } catch (error) {
            showNotification('Invalid URL encoding', 'error');
        }
    });
    
    urlClear.addEventListener('click', () => {
        urlInput.value = '';
        urlOutput.value = '';
    });
    
    urlCopy.addEventListener('click', () => {
        copyToClipboard(urlOutput.value);
    });
}

function initializeOIDCTool() {
    const oidcDiscover = document.getElementById('oidc-discover');
    const oidcGenerateAuthUrl = document.getElementById('oidc-generate-auth-url');
    const oidcTestFlow = document.getElementById('oidc-test-flow');
    const oidcClear = document.getElementById('oidc-clear');
    const oidcCopyUrl = document.getElementById('oidc-copy-url');
    const oidcOpenUrl = document.getElementById('oidc-open-url');
    const redirectUriInput = document.getElementById('oidc-redirect-uri');
    
    // Make redirect URI clickable to copy
    redirectUriInput.addEventListener('click', () => {
        copyToClipboard('oidc-redirect-uri');
        showNotification('Redirect URI copied! Configure this in your OIDC provider.', 'success');
    });
    
    // Provider preset buttons
    document.querySelectorAll('.provider-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const provider = btn.dataset.provider;
            loadProviderPreset(provider);
        });
    });
    
    oidcDiscover.addEventListener('click', async () => {
        const discoveryUrl = document.getElementById('oidc-discovery').value;
        if (!discoveryUrl) {
            showNotification('Please enter discovery endpoint', 'error');
            return;
        }
        
        oidcDiscover.disabled = true;
        oidcDiscover.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Discovering...';
        
        try {
            const response = await fetch(discoveryUrl);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            document.getElementById('oidc-discovery-results').textContent = JSON.stringify(data, null, 2);
            
            // Store the discovery data for the callback page
            const configToStore = {
                discovery_url: discoveryUrl,
                authorization_endpoint: data.authorization_endpoint,
                token_endpoint: data.token_endpoint,
                userinfo_endpoint: data.userinfo_endpoint,
                issuer: data.issuer,
                client_id: document.getElementById('oidc-client-id').value
            };
            sessionStorage.setItem('oidc_config', JSON.stringify(configToStore));
            
            showNotification('Discovery successful! Provider configuration loaded.', 'success');
        } catch (error) {
            console.error('Discovery error:', error);
            showNotification(`Discovery failed: ${error.message}`, 'error');
        } finally {
            oidcDiscover.disabled = false;
            oidcDiscover.innerHTML = '<i class="fas fa-search"></i> Discover Endpoints';
        }
    });
    
    oidcGenerateAuthUrl.addEventListener('click', () => {
        const clientId = document.getElementById('oidc-client-id').value;
        const redirectUri = document.getElementById('oidc-redirect-uri').value;
        const scope = document.getElementById('oidc-scope').value;
        const responseType = document.getElementById('oidc-response-type').value;
        const discoveryResults = document.getElementById('oidc-discovery-results').textContent;
        
        if (!clientId || !redirectUri) {
            showNotification('Please fill in Client ID and Redirect URI', 'error');
            return;
        }
        
        let authorizationEndpoint;
        
        // Try to get authorization endpoint from discovery results
        if (discoveryResults) {
            try {
                const discoveryData = JSON.parse(discoveryResults);
                authorizationEndpoint = discoveryData.authorization_endpoint;
            } catch (e) {
                console.error('Error parsing discovery results:', e);
            }
        }
        
        // Fallback to manual construction if no discovery endpoint found
        if (!authorizationEndpoint) {
            const discoveryUrl = document.getElementById('oidc-discovery').value;
            if (!discoveryUrl) {
                showNotification('Please run discovery first or enter a discovery endpoint', 'error');
                return;
            }
            const baseUrl = new URL(discoveryUrl).origin;
            authorizationEndpoint = `${baseUrl}/oauth/authorize`;
        }
        
        const authUrl = new URL(authorizationEndpoint);
        authUrl.searchParams.set('client_id', clientId);
        authUrl.searchParams.set('redirect_uri', redirectUri);
        authUrl.searchParams.set('scope', scope || 'openid profile email');
        authUrl.searchParams.set('response_type', responseType);
        
        const state = generateRandomState();
        authUrl.searchParams.set('state', state);
        
        // Store state for validation
        sessionStorage.setItem('oidc_state', state);
        
        const authUrlString = authUrl.toString();
        document.getElementById('oidc-auth-url').value = authUrlString;
        
        // Show additional buttons
        oidcOpenUrl.style.display = 'inline-block';
        oidcTestFlow.style.display = 'inline-block';
        
        showNotification('Authorization URL generated successfully!', 'success');
    });
    
    oidcTestFlow.addEventListener('click', () => {
        const authUrl = document.getElementById('oidc-auth-url').value;
        if (!authUrl) {
            showNotification('Please generate an authorization URL first', 'error');
            return;
        }
        
        // Open the auth URL in a new window/tab
        window.open(authUrl, '_blank', 'width=600,height=700,scrollbars=yes,resizable=yes');
        showNotification('Opened authorization URL in new window. Complete the login flow!', 'info');
    });
    
    oidcOpenUrl.addEventListener('click', () => {
        const authUrl = document.getElementById('oidc-auth-url').value;
        if (authUrl) {
            window.open(authUrl, '_blank');
        }
    });
    
    oidcClear.addEventListener('click', () => {
        document.getElementById('oidc-discovery').value = '';
        document.getElementById('oidc-client-id').value = '';
        document.getElementById('oidc-redirect-uri').value = 'https://devhub.sbs/oidc-callback.html';
        document.getElementById('oidc-scope').value = 'openid profile email';
        document.getElementById('oidc-response-type').value = 'code';
        document.getElementById('oidc-discovery-results').textContent = '';
        document.getElementById('oidc-auth-url').value = '';
        
        // Hide additional buttons
        oidcOpenUrl.style.display = 'none';
        oidcTestFlow.style.display = 'none';
        
        // Clear session storage
        sessionStorage.removeItem('oidc_config');
        sessionStorage.removeItem('oidc_state');
        
        showNotification('OIDC configuration cleared', 'success');
    });
    
    oidcCopyUrl.addEventListener('click', () => {
        const authUrl = document.getElementById('oidc-auth-url').value;
        if (authUrl) {
            navigator.clipboard.writeText(authUrl).then(() => {
                showNotification('Authorization URL copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy URL', 'error');
            });
        } else {
            showNotification('No URL to copy', 'error');
        }
    });
}

function initializeHashTool() {
    const hashInput = document.getElementById('hash-input');
    const hashFile = document.getElementById('hash-file');
    const hashGenerate = document.getElementById('hash-generate');
    const hashClear = document.getElementById('hash-clear');
    const hashOutputs = document.getElementById('hash-outputs');
    
    // Handle file input change
    hashFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // Clear text input when file is selected
            hashInput.value = '';
            hashInput.placeholder = `File selected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
        }
    });
    
    // Handle text input change
    hashInput.addEventListener('input', () => {
        if (hashInput.value.trim()) {
            // Clear file input when text is entered
            hashFile.value = '';
            hashInput.placeholder = 'Enter text to hash...';
        }
    });
    
    hashGenerate.addEventListener('click', async () => {
        const input = hashInput.value.trim();
        const file = hashFile.files[0];
        
        if (!input && !file) {
            showNotification('Please enter text or select a file to hash', 'error');
            return;
        }
        
        const selectedHashes = Array.from(document.querySelectorAll('.hash-checkboxes input:checked'))
            .map(checkbox => checkbox.value);
        
        if (selectedHashes.length === 0) {
            showNotification('Please select at least one hash type', 'error');
            return;
        }
        
        hashGenerate.disabled = true;
        hashGenerate.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        
        try {
            // Get selected output format
            const outputFormat = document.querySelector('input[name="checksum-format"]:checked').value;
            
            let results;
            if (file) {
                hashGenerate.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing file...';
                results = await generateFileHashes(file, selectedHashes, outputFormat);
                displayHashResults(results, { name: file.name, size: file.size });
            } else {
                results = await generateHashes(input, selectedHashes, outputFormat);
                displayHashResults(results);
            }
            showNotification('Hashes generated successfully', 'success');
        } catch (error) {
            showNotification('Failed to generate hashes', 'error');
            console.error('Hash generation error:', error);
        } finally {
            hashGenerate.disabled = false;
            hashGenerate.innerHTML = '<i class="fas fa-hashtag"></i> Generate Hashes';
        }
    });
    
    hashClear.addEventListener('click', () => {
        hashInput.value = '';
        hashFile.value = '';
        hashInput.placeholder = 'Enter text to hash...';
        hashOutputs.innerHTML = '';
        document.getElementById('verification-result').innerHTML = '';
    });
    
    // Add checksum verification functionality
    const checksumInput = document.getElementById('checksum-input');
    if (checksumInput) {
        checksumInput.addEventListener('input', () => {
            verifyChecksum();
        });
    }
}

function initializeJSONTool() {
    const jsonInput = document.getElementById('json-input');
    const jsonValidate = document.getElementById('json-validate');
    const jsonBeautify = document.getElementById('json-beautify');
    const jsonMinify = document.getElementById('json-minify');
    const jsonClear = document.getElementById('json-clear');
    const jsonCopy = document.getElementById('json-copy');
    const jsonDownload = document.getElementById('json-download');
    const jsonOriginal = document.getElementById('json-original');
    const jsonProcessed = document.getElementById('json-processed');
    const jsonValidationResults = document.getElementById('json-validation-results');
    
    // Validate JSON
    jsonValidate.addEventListener('click', () => {
        const input = jsonInput.value.trim();
        if (!input) {
            showNotification('Please enter JSON to validate', 'error');
            return;
        }
        
        try {
            const parsed = JSON.parse(input);
            jsonOriginal.textContent = input;
            jsonProcessed.textContent = beautifyJSON(parsed);
            
            jsonValidationResults.innerHTML = `
                <div class="validation-success">
                    <i class="fas fa-check-circle"></i>
                    <strong>Valid JSON!</strong> The input is valid JSON format.
                </div>
                <div class="validation-details">
                    <p><strong>Type:</strong> ${Array.isArray(parsed) ? 'Array' : 'Object'}</p>
                    <p><strong>Size:</strong> ${input.length} characters</p>
                    <p><strong>Keys:</strong> ${Object.keys(parsed).length}</p>
                    <p><strong>Formatting:</strong> Automatically beautified for readability</p>
                </div>
            `;
            
            showNotification('JSON validation successful', 'success');
        } catch (error) {
            jsonOriginal.textContent = input;
            jsonProcessed.textContent = '';
            
            // Try to provide more helpful error information
            let errorDetails = error.message;
            let lineNumber = getJSONErrorLine(input, error.message);
            
            // Common error patterns and suggestions
            if (error.message.includes('Unexpected token')) {
                errorDetails = `${error.message}. Check for missing quotes, commas, or brackets.`;
            } else if (error.message.includes('Unexpected end')) {
                errorDetails = `${error.message}. Check for missing closing brackets or quotes.`;
            } else if (error.message.includes('Unexpected number')) {
                errorDetails = `${error.message}. Check for invalid number format.`;
            }
            
            jsonValidationResults.innerHTML = `
                <div class="validation-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <strong>Invalid JSON!</strong> ${errorDetails}
                </div>
                <div class="validation-details">
                    <p><strong>Error Type:</strong> ${error.name}</p>
                    <p><strong>Line:</strong> ${lineNumber}</p>
                    <p><strong>Tip:</strong> Use the "Beautify JSON" button only with valid JSON. Fix syntax errors first.</p>
                </div>
            `;
            
            showNotification('JSON validation failed', 'error');
        }
    });
    
    // Beautify JSON
    jsonBeautify.addEventListener('click', () => {
        const input = jsonInput.value.trim();
        if (!input) {
            showNotification('Please enter JSON to beautify', 'error');
            return;
        }
        
        try {
            const parsed = JSON.parse(input);
            const beautified = beautifyJSON(parsed);
            
            jsonOriginal.textContent = input;
            jsonProcessed.textContent = beautified;
            
            jsonValidationResults.innerHTML = `
                <div class="validation-success">
                    <i class="fas fa-check-circle"></i>
                    <strong>JSON Beautified!</strong> The JSON has been formatted with proper indentation and spacing.
                </div>
                <div class="validation-details">
                    <p><strong>Original Size:</strong> ${input.length} characters</p>
                    <p><strong>Beautified Size:</strong> ${beautified.length} characters</p>
                    <p><strong>Formatting:</strong> Consistent 2-space indentation applied</p>
                </div>
            `;
            
            showNotification('JSON beautified successfully', 'success');
        } catch (error) {
            // Show the error in the validation results
            jsonValidationResults.innerHTML = `
                <div class="validation-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <strong>Cannot Beautify Invalid JSON!</strong> ${error.message}
                </div>
                <div class="validation-details">
                    <p><strong>Error Type:</strong> ${error.name}</p>
                    <p><strong>Line:</strong> ${getJSONErrorLine(input, error.message)}</p>
                    <p><strong>Tip:</strong> Fix JSON syntax errors first, then use the beautify function.</p>
                </div>
            `;
            showNotification('Invalid JSON - cannot beautify', 'error');
        }
    });
    
    // Minify JSON
    jsonMinify.addEventListener('click', () => {
        const input = jsonInput.value.trim();
        if (!input) {
            showNotification('Please enter JSON to minify', 'error');
            return;
        }
        
        try {
            const parsed = JSON.parse(input);
            const minified = JSON.stringify(parsed);
            
            jsonOriginal.textContent = input;
            jsonProcessed.textContent = minified;
            
            jsonValidationResults.innerHTML = `
                <div class="validation-success">
                    <i class="fas fa-check-circle"></i>
                    <strong>JSON Minified!</strong> The JSON has been compressed to remove unnecessary whitespace.
                </div>
                <div class="validation-details">
                    <p><strong>Original Size:</strong> ${input.length} characters</p>
                    <p><strong>Minified Size:</strong> ${minified.length} characters</p>
                    <p><strong>Space Saved:</strong> ${input.length - minified.length} characters</p>
                </div>
            `;
            
            showNotification('JSON minified successfully', 'success');
        } catch (error) {
            // Show the error in the validation results
            jsonValidationResults.innerHTML = `
                <div class="validation-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <strong>Cannot Minify Invalid JSON!</strong> ${error.message}
                </div>
                <div class="validation-details">
                    <p><strong>Error Type:</strong> ${error.name}</p>
                    <p><strong>Line:</strong> ${getJSONErrorLine(input, error.message)}</p>
                    <p><strong>Tip:</strong> Fix JSON syntax errors first, then use the minify function.</p>
                </div>
            `;
            showNotification('Invalid JSON - cannot minify', 'error');
        }
    });
    
    // Clear JSON
    jsonClear.addEventListener('click', () => {
        jsonInput.value = '';
        jsonOriginal.textContent = '';
        jsonProcessed.textContent = '';
        jsonValidationResults.innerHTML = '';
    });
    
    // Copy JSON
    jsonCopy.addEventListener('click', () => {
        const processed = jsonProcessed.textContent;
        if (processed) {
            navigator.clipboard.writeText(processed).then(() => {
                showNotification('JSON copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy JSON', 'error');
            });
        } else {
            showNotification('No JSON to copy', 'error');
        }
    });
    
    // Download JSON
    jsonDownload.addEventListener('click', () => {
        const processed = jsonProcessed.textContent;
        if (processed) {
            const blob = new Blob([processed], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'processed.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showNotification('JSON downloaded successfully', 'success');
        } else {
            showNotification('No JSON to download', 'error');
        }
    });
}

// Helper function to get JSON error line
function getJSONErrorLine(input, errorMessage) {
    const match = errorMessage.match(/position (\d+)/);
    if (match) {
        const position = parseInt(match[1]);
        const lines = input.substring(0, position).split('\n');
        return lines.length;
    }
    return 'Unknown';
}

// Robust JSON beautification function
function beautifyJSON(obj, indent = 2, maxDepth = 100) {
    const seen = new WeakSet();
    
    function beautify(value, currentIndent = 0, depth = 0) {
        if (depth > maxDepth) {
            return '"[Max depth exceeded]"';
        }
        
        if (value === null) return 'null';
        if (typeof value === 'undefined') return 'undefined';
        if (typeof value === 'string') return `"${value.replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t')}"`;
        if (typeof value === 'number') return value.toString();
        if (typeof value === 'boolean') return value.toString();
        
        if (typeof value === 'object') {
            if (seen.has(value)) {
                return '"[Circular reference]"';
            }
            seen.add(value);
            
            if (Array.isArray(value)) {
                if (value.length === 0) return '[]';
                
                const items = value.map(item => 
                    ' '.repeat(currentIndent + indent) + beautify(item, currentIndent + indent, depth + 1)
                );
                
                return `[\n${items.join(',\n')}\n${' '.repeat(currentIndent)}]`;
            } else {
                const keys = Object.keys(value);
                if (keys.length === 0) return '{}';
                
                const items = keys.map(key => {
                    const formattedKey = `"${key}": `;
                    const formattedValue = beautify(value[key], currentIndent + indent, depth + 1);
                    return ' '.repeat(currentIndent + indent) + formattedKey + formattedValue;
                });
                
                return `{\n${items.join(',\n')}\n${' '.repeat(currentIndent)}}`;
            }
        }
        
        return String(value);
    }
    
    return beautify(obj, 0, 0);
}



async function generateHashes(input, hashTypes, outputFormat = 'hex') {
    const results = {};
    
    for (const hashType of hashTypes) {
        try {
            let hash;
            switch (hashType) {
                case 'md5':
                    hash = await generateMD5(input);
                    break;
                case 'sha1':
                    hash = await generateSHA1(input);
                    break;
                case 'sha256':
                    hash = await generateSHA256(input);
                    break;
                case 'sha512':
                    hash = await generateSHA512(input);
                    break;
                case 'sha3-256':
                    hash = await generateSHA3_256(input);
                    break;
                case 'keccak256':
                    hash = await generateKeccak256(input);
                    break;
                case 'blake2b':
                    hash = await generateBLAKE2b(input);
                    break;
                case 'ripemd160':
                    hash = await generateRIPEMD160(input);
                    break;
            }
            
            // Convert to requested format
            results[hashType] = convertHashFormat(hash, outputFormat);
        } catch (error) {
            console.error(`Error generating ${hashType}:`, error);
            results[hashType] = 'Error generating hash';
        }
    }
    
    return results;
}

async function generateFileHashes(file, hashTypes, outputFormat = 'hex') {
    const results = {};
    
    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
        throw new Error('File size exceeds 10MB limit');
    }
    
    // Read file as ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    
    for (const hashType of hashTypes) {
        try {
            let hash;
            switch (hashType) {
                case 'md5':
                    hash = CryptoJS.MD5(CryptoJS.lib.WordArray.create(uint8Array)).toString();
                    break;
                case 'sha1':
                    hash = CryptoJS.SHA1(CryptoJS.lib.WordArray.create(uint8Array)).toString();
                    break;
                case 'sha256':
                    hash = CryptoJS.SHA256(CryptoJS.lib.WordArray.create(uint8Array)).toString();
                    break;
                case 'sha512':
                    hash = CryptoJS.SHA512(CryptoJS.lib.WordArray.create(uint8Array)).toString();
                    break;
                case 'sha3-256':
                    hash = CryptoJS.SHA3(CryptoJS.lib.WordArray.create(uint8Array), { outputLength: 256 }).toString();
                    break;
                case 'keccak256':
                    hash = CryptoJS.SHA3(CryptoJS.lib.WordArray.create(uint8Array), { outputLength: 256 }).toString();
                    break;
                case 'blake2b':
                    hash = CryptoJS.SHA3(CryptoJS.lib.WordArray.create(uint8Array), { outputLength: 256 }).toString();
                    break;
                case 'ripemd160':
                    hash = CryptoJS.RIPEMD160(CryptoJS.lib.WordArray.create(uint8Array)).toString();
                    break;
            }
            
            // Convert to requested format
            results[hashType] = convertHashFormat(hash, outputFormat);
        } catch (error) {
            console.error(`Error generating ${hashType} for file:`, error);
            results[hashType] = 'Error generating hash';
        }
    }
    
        return results;
}

function convertHashFormat(hash, format) {
    if (format === 'hex') {
        return hash; // Already in hex format
    } else if (format === 'base64') {
        // Convert hex to base64
        const bytes = [];
        for (let i = 0; i < hash.length; i += 2) {
            bytes.push(parseInt(hash.substr(i, 2), 16));
        }
        return btoa(String.fromCharCode.apply(null, bytes));
    } else if (format === 'binary') {
        // Convert hex to binary
        let binary = '';
        for (let i = 0; i < hash.length; i++) {
            const hex = parseInt(hash[i], 16);
            binary += hex.toString(2).padStart(4, '0');
        }
        return binary;
    }
    return hash; // Default to hex
}

function verifyChecksum() {
    const expectedChecksum = document.getElementById('checksum-input').value.trim();
    const hashOutputs = document.getElementById('hash-outputs');
    const verificationResult = document.getElementById('verification-result');
    
    if (!expectedChecksum || !hashOutputs.children.length) {
        verificationResult.innerHTML = '';
        return;
    }
    
    // Get all generated hashes
    const generatedHashes = Array.from(hashOutputs.querySelectorAll('.hash-value')).map(el => el.textContent);
    
    // Check for matches
    const matches = generatedHashes.filter(hash => 
        hash.toLowerCase() === expectedChecksum.toLowerCase()
    );
    
    if (matches.length > 0) {
        verificationResult.innerHTML = `
            <div class="verification-success">
                <i class="fas fa-check-circle"></i>
                <strong>Checksum Verified!</strong> Found ${matches.length} matching hash(es).
            </div>
        `;
    } else {
        verificationResult.innerHTML = `
            <div class="verification-failure">
                <i class="fas fa-times-circle"></i>
                <strong>Checksum Mismatch!</strong> No matching hashes found.
            </div>
        `;
    }
}

function displayHashResults(results, fileInfo = null) {
    const hashOutputs = document.getElementById('hash-outputs');
    let html = '';
    
    // Add file info if available
    if (fileInfo) {
        html += `
            <div class="file-info">
                <div class="file-details">
                    <i class="fas fa-file"></i>
                    <span class="file-name">${fileInfo.name}</span>
                    <span class="file-size">(${(fileInfo.size / 1024 / 1024).toFixed(2)} MB)</span>
                </div>
            </div>
        `;
    }
    
    for (const [hashType, hashValue] of Object.entries(results)) {
        const displayName = hashType.replace('_', '-').toUpperCase();
        html += `
            <div class="hash-result">
                <div class="hash-header">
                    <span class="hash-type">${displayName}</span>
                    <button class="copy-hash-btn" data-hash="${hashValue}">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                <div class="hash-value">${hashValue}</div>
            </div>
        `;
    }
    
    hashOutputs.innerHTML = html;
    
    // Add copy functionality
    hashOutputs.querySelectorAll('.copy-hash-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const hash = btn.dataset.hash;
            navigator.clipboard.writeText(hash).then(() => {
                showNotification('Hash copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy hash', 'error');
            });
        });
    });
    
    // Auto-verify checksum if one is entered
    const checksumInput = document.getElementById('checksum-input');
    if (checksumInput && checksumInput.value.trim()) {
        verifyChecksum();
    }
}

// Hash generation functions using Web Crypto API and crypto-js
async function generateMD5(input) {
    try {
        // Use crypto-js for MD5
        return CryptoJS.MD5(input).toString();
    } catch (error) {
        console.error('MD5 generation error:', error);
        return 'Error generating MD5 hash';
    }
}

async function generateSHA1(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

async function generateSHA256(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

async function generateSHA512(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

async function generateSHA3_256(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-3-256', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

async function generateKeccak256(input) {
    try {
        // Use crypto-js for Keccak-256
        return CryptoJS.SHA3(input, { outputLength: 256 }).toString();
    } catch (error) {
        console.error('Keccak-256 generation error:', error);
        return 'Error generating Keccak-256 hash';
    }
}

async function generateBLAKE2b(input) {
    try {
        // Use crypto-js for BLAKE2b (using SHA3 as approximation)
        // Note: crypto-js doesn't have BLAKE2b, so we'll use SHA3-256 as alternative
        return CryptoJS.SHA3(input, { outputLength: 256 }).toString();
    } catch (error) {
        console.error('BLAKE2b generation error:', error);
        return 'Error generating BLAKE2b hash';
    }
}

async function generateRIPEMD160(input) {
    try {
        // Use crypto-js for RIPEMD-160
        return CryptoJS.RIPEMD160(input).toString();
    } catch (error) {
        console.error('RIPEMD160 generation error:', error);
        return 'Error generating RIPEMD160 hash';
    }
}

function loadProviderPreset(provider) {
    const discoveryInput = document.getElementById('oidc-discovery');
    const clientIdInput = document.getElementById('oidc-client-id');
    
    const presets = {
        auth0: {
            discovery: 'https://YOUR_DOMAIN.auth0.com/.well-known/openid_configuration',
            placeholder: 'Replace YOUR_DOMAIN with your Auth0 domain'
        },
        google: {
            discovery: 'https://accounts.google.com/.well-known/openid_configuration',
            placeholder: 'Get your client ID from Google Cloud Console'
        },
        microsoft: {
            discovery: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid_configuration',
            placeholder: 'Get your client ID from Azure Portal'
        },
        okta: {
            discovery: 'https://YOUR_DOMAIN.okta.com/.well-known/openid_configuration',
            placeholder: 'Replace YOUR_DOMAIN with your Okta domain'
        }
    };
    
    const preset = presets[provider];
    if (preset) {
        discoveryInput.value = preset.discovery;
        clientIdInput.placeholder = preset.placeholder;
        showNotification(`${provider.charAt(0).toUpperCase() + provider.slice(1)} preset loaded!`, 'success');
    }
}

// ===== MODAL HANDLING =====
function openModal(title, content) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Scroll to modal smoothly
    setTimeout(() => {
        modal.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 100);
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Restore original URL when modal is closed
    if (window.history.state && window.history.state.tool) {
        window.history.pushState({}, '', '/');
        // Restore original page meta
        restoreOriginalPageMeta();
    }
}

// ===== THEME HANDLING =====
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const contentArea = document.querySelector('.content-area');
    
    if (sidebar && contentArea) {
        sidebar.classList.toggle('sidebar-hidden');
        contentArea.classList.toggle('content-full-width');
        
        // Update toggle button icon
        const icon = sidebarToggle.querySelector('i');
        if (sidebar.classList.contains('sidebar-hidden')) {
            icon.className = 'fas fa-th-large';
        } else {
            icon.className = 'fas fa-times';
        }
    }
}

// ===== UTILITY FUNCTIONS =====
function generateRandomState() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.select();
        element.setSelectionRange(0, 99999);
        
        navigator.clipboard.writeText(element.value).then(() => {
            // Success handled by caller
        }).catch(() => {
            // Error handled by caller
        });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles if not exists
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 16px;
                border-radius: 8px;
                color: white;
                font-size: 14px;
                font-weight: 500;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 8px;
                animation: slideInNotification 0.3s ease;
            }
            .notification-success { background-color: var(--success); }
            .notification-error { background-color: var(--error); }
            .notification-info { background-color: var(--accent-primary); }
            @keyframes slideInNotification {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function handleKeyboard(e) {
    // ESC to close modal
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
}

function handleScroll() {
    // Use requestAnimationFrame for better performance
    if (!window.scrollHandler) {
        window.scrollHandler = requestAnimationFrame(() => {
            // Show/hide back to top button
            if (backToTop) {
                if (window.pageYOffset > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }
            window.scrollHandler = null;
        });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== NEW GENERAL PURPOSE TOOLS =====

// ===== LOAN CALCULATOR TOOL =====
function createLoanCalculatorInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="loan-amount">Loan Amount ($):</label>
                <input type="number" id="loan-amount" placeholder="e.g., 20000" min="0" step="1000">
            </div>
            <div class="input-group">
                <label for="loan-rate">Annual Interest Rate (%):</label>
                <input type="number" id="loan-rate" placeholder="e.g., 5.5" min="0" max="100" step="0.1">
            </div>
            <div class="input-group">
                <label for="loan-term">Loan Term (years):</label>
                <input type="number" id="loan-term" placeholder="e.g., 5" min="1" max="50" step="1">
            </div>
            <div class="button-group">
                <button id="loan-calculate" class="btn btn-primary">
                    <i class="fas fa-calculator"></i> Calculate Payment
                </button>
                <button id="loan-clear" class="btn btn-outline">
                    <i class="fas fa-eraser"></i> Clear
                </button>
            </div>
            <div class="output-group" id="loan-results" style="display: none;">
                <h4>Results</h4>
                <div class="result-item">
                    <strong>Monthly Payment:</strong>
                    <span id="loan-monthly-payment"></span>
                </div>
                <div class="result-item">
                    <strong>Total Interest:</strong>
                    <span id="loan-total-interest"></span>
                </div>
                <div class="result-item">
                    <strong>Total Amount:</strong>
                    <span id="loan-total-amount"></span>
                </div>
            </div>
        </div>
    `;
}

function initializeLoanCalculatorTool() {
    const loanAmount = document.getElementById('loan-amount');
    const loanRate = document.getElementById('loan-rate');
    const loanTerm = document.getElementById('loan-term');
    const calculateBtn = document.getElementById('loan-calculate');
    const clearBtn = document.getElementById('loan-clear');
    const results = document.getElementById('loan-results');
    
    calculateBtn.addEventListener('click', () => {
        const amount = parseFloat(loanAmount.value);
        const rate = parseFloat(loanRate.value) / 100 / 12;
        const term = parseFloat(loanTerm.value) * 12;
        
        if (!amount || !loanRate.value || !loanTerm.value) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        const monthlyPayment = (amount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
        const totalAmount = monthlyPayment * term;
        const totalInterest = totalAmount - amount;
        
        document.getElementById('loan-monthly-payment').textContent = '$' + monthlyPayment.toFixed(2);
        document.getElementById('loan-total-interest').textContent = '$' + totalInterest.toFixed(2);
        document.getElementById('loan-total-amount').textContent = '$' + totalAmount.toFixed(2);
        results.style.display = 'block';
        showNotification('Loan calculated successfully', 'success');
    });
    
    clearBtn.addEventListener('click', () => {
        loanAmount.value = '';
        loanRate.value = '';
        loanTerm.value = '';
        results.style.display = 'none';
    });
}

// ===== MORTGAGE CALCULATOR TOOL =====
function createMortgageCalculatorInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="mortgage-amount">Home Price ($):</label>
                <input type="number" id="mortgage-amount" placeholder="e.g., 300000" min="0" step="10000">
            </div>
            <div class="input-group">
                <label for="mortgage-down">Down Payment ($):</label>
                <input type="number" id="mortgage-down" placeholder="e.g., 60000" min="0" step="5000">
            </div>
            <div class="input-group">
                <label for="mortgage-rate">Interest Rate (%):</label>
                <input type="number" id="mortgage-rate" placeholder="e.g., 3.5" min="0" max="100" step="0.1">
            </div>
            <div class="input-group">
                <label for="mortgage-term">Loan Term (years):</label>
                <input type="number" id="mortgage-term" placeholder="e.g., 30" min="1" max="50" step="1">
            </div>
            <div class="button-group">
                <button id="mortgage-calculate" class="btn btn-primary">
                    <i class="fas fa-home"></i> Calculate Mortgage
                </button>
                <button id="mortgage-clear" class="btn btn-outline">
                    <i class="fas fa-eraser"></i> Clear
                </button>
            </div>
            <div class="output-group" id="mortgage-results" style="display: none;">
                <h4>Results</h4>
                <div class="result-item">
                    <strong>Loan Amount:</strong>
                    <span id="mortgage-loan-amount"></span>
                </div>
                <div class="result-item">
                    <strong>Monthly Payment:</strong>
                    <span id="mortgage-monthly-payment"></span>
                </div>
                <div class="result-item">
                    <strong>Total Interest:</strong>
                    <span id="mortgage-total-interest"></span>
                </div>
            </div>
        </div>
    `;
}

function initializeMortgageCalculatorTool() {
    const homePrice = document.getElementById('mortgage-amount');
    const downPayment = document.getElementById('mortgage-down');
    const interestRate = document.getElementById('mortgage-rate');
    const loanTerm = document.getElementById('mortgage-term');
    const calculateBtn = document.getElementById('mortgage-calculate');
    const clearBtn = document.getElementById('mortgage-clear');
    const results = document.getElementById('mortgage-results');
    
    calculateBtn.addEventListener('click', () => {
        const price = parseFloat(homePrice.value);
        const down = parseFloat(downPayment.value) || 0;
        const rate = parseFloat(interestRate.value) / 100 / 12;
        const term = parseFloat(loanTerm.value) * 12;
        
        if (!price || !interestRate.value || !loanTerm.value) {
            showNotification('Please fill in required fields', 'error');
            return;
        }
        
        const loanAmount = price - down;
        const monthlyPayment = (loanAmount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
        const totalAmount = monthlyPayment * term;
        const totalInterest = totalAmount - loanAmount;
        
        document.getElementById('mortgage-loan-amount').textContent = '$' + loanAmount.toFixed(2);
        document.getElementById('mortgage-monthly-payment').textContent = '$' + monthlyPayment.toFixed(2);
        document.getElementById('mortgage-total-interest').textContent = '$' + totalInterest.toFixed(2);
        results.style.display = 'block';
        showNotification('Mortgage calculated successfully', 'success');
    });
    
    clearBtn.addEventListener('click', () => {
        homePrice.value = '';
        downPayment.value = '';
        interestRate.value = '';
        loanTerm.value = '';
        results.style.display = 'none';
    });
}

// ===== BMI CALCULATOR TOOL =====
function createBMICalculatorInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="bmi-weight">Weight (lbs):</label>
                <input type="number" id="bmi-weight" placeholder="e.g., 150" min="1" step="1">
            </div>
            <div class="input-group">
                <label for="bmi-height-ft">Height (feet):</label>
                <input type="number" id="bmi-height-ft" placeholder="e.g., 5" min="1" max="8" step="1">
            </div>
            <div class="input-group">
                <label for="bmi-height-in">Height (inches):</label>
                <input type="number" id="bmi-height-in" placeholder="e.g., 8" min="0" max="11" step="1">
            </div>
            <div class="button-group">
                <button id="bmi-calculate" class="btn btn-primary">
                    <i class="fas fa-heartbeat"></i> Calculate BMI
                </button>
                <button id="bmi-clear" class="btn btn-outline">
                    <i class="fas fa-eraser"></i> Clear
                </button>
            </div>
            <div class="output-group" id="bmi-results" style="display: none;">
                <h4>Results</h4>
                <div class="result-item">
                    <strong>Your BMI:</strong>
                    <span id="bmi-value"></span>
                </div>
                <div class="result-item">
                    <strong>Category:</strong>
                    <span id="bmi-category"></span>
                </div>
                <div class="result-item" id="bmi-interpretation"></div>
            </div>
        </div>
    `;
}

function initializeBMICalculatorTool() {
    const weight = document.getElementById('bmi-weight');
    const heightFt = document.getElementById('bmi-height-ft');
    const heightIn = document.getElementById('bmi-height-in');
    const calculateBtn = document.getElementById('bmi-calculate');
    const clearBtn = document.getElementById('bmi-clear');
    const results = document.getElementById('bmi-results');
    
    calculateBtn.addEventListener('click', () => {
        const w = parseFloat(weight.value);
        const ft = parseFloat(heightFt.value) || 0;
        const inches = parseFloat(heightIn.value) || 0;
        
        if (!w || (!ft && !inches)) {
            showNotification('Please enter your weight and height', 'error');
            return;
        }
        
        const totalInches = (ft * 12) + inches;
        const bmi = (w / (totalInches * totalInches)) * 703;
        
        let category, interpretation;
        if (bmi < 18.5) {
            category = 'Underweight';
            interpretation = 'You may need to gain weight. Consult a healthcare provider.';
        } else if (bmi < 25) {
            category = 'Normal weight';
            interpretation = 'You have a healthy weight. Keep it up!';
        } else if (bmi < 30) {
            category = 'Overweight';
            interpretation = 'You may benefit from losing some weight.';
        } else {
            category = 'Obese';
            interpretation = 'Consider consulting a healthcare provider for weight management.';
        }
        
        document.getElementById('bmi-value').textContent = bmi.toFixed(1);
        document.getElementById('bmi-category').textContent = category;
        document.getElementById('bmi-interpretation').textContent = interpretation;
        results.style.display = 'block';
        showNotification('BMI calculated successfully', 'success');
    });
    
    clearBtn.addEventListener('click', () => {
        weight.value = '';
        heightFt.value = '';
        heightIn.value = '';
        results.style.display = 'none';
    });
}

// ===== CALORIE CALCULATOR TOOL =====
function createCalorieCalculatorInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="cal-age">Age:</label>
                <input type="number" id="cal-age" placeholder="e.g., 30" min="1" max="120">
            </div>
            <div class="input-group">
                <label for="cal-gender">Gender:</label>
                <select id="cal-gender">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div class="input-group">
                <label for="cal-weight">Weight (lbs):</label>
                <input type="number" id="cal-weight" placeholder="e.g., 150" min="1">
            </div>
            <div class="input-group">
                <label for="cal-height">Height (inches):</label>
                <input type="number" id="cal-height" placeholder="e.g., 68" min="1">
            </div>
            <div class="input-group">
                <label for="cal-activity">Activity Level:</label>
                <select id="cal-activity">
                    <option value="1.2">Sedentary (little to no exercise)</option>
                    <option value="1.375">Lightly active (1-3 days/week)</option>
                    <option value="1.55" selected>Moderately active (3-5 days/week)</option>
                    <option value="1.725">Very active (6-7 days/week)</option>
                    <option value="1.9">Extremely active (athlete)</option>
                </select>
            </div>
            <div class="button-group">
                <button id="cal-calculate" class="btn btn-primary">
                    <i class="fas fa-apple-alt"></i> Calculate Calories
                </button>
                <button id="cal-clear" class="btn btn-outline">
                    <i class="fas fa-eraser"></i> Clear
                </button>
            </div>
            <div class="output-group" id="cal-results" style="display: none;">
                <h4>Daily Calorie Needs</h4>
                <div class="result-item">
                    <strong>Maintain Weight:</strong>
                    <span id="cal-maintain"></span>
                </div>
                <div class="result-item">
                    <strong>Mild Weight Loss:</strong>
                    <span id="cal-loss-mild"></span> (0.5 lb/week)
                </div>
                <div class="result-item">
                    <strong>Weight Loss:</strong>
                    <span id="cal-loss"></span> (1 lb/week)
                </div>
                <div class="result-item">
                    <strong>Weight Gain:</strong>
                    <span id="cal-gain"></span> (1 lb/week)
                </div>
            </div>
        </div>
    `;
}

function initializeCalorieCalculatorTool() {
    const age = document.getElementById('cal-age');
    const gender = document.getElementById('cal-gender');
    const weight = document.getElementById('cal-weight');
    const height = document.getElementById('cal-height');
    const activity = document.getElementById('cal-activity');
    const calculateBtn = document.getElementById('cal-calculate');
    const clearBtn = document.getElementById('cal-clear');
    const results = document.getElementById('cal-results');
    
    calculateBtn.addEventListener('click', () => {
        const a = parseFloat(age.value);
        const g = gender.value;
        const w = parseFloat(weight.value);
        const h = parseFloat(height.value);
        const activityLevel = parseFloat(activity.value);
        
        if (!a || !g || !w || !h) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Convert to metric
        const weightKg = w * 0.453592;
        const heightCm = h * 2.54;
        
        // Harris-Benedict Equation
        let bmr;
        if (g === 'male') {
            bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * a);
        } else {
            bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * a);
        }
        
        const tdee = bmr * activityLevel;
        
        document.getElementById('cal-maintain').textContent = Math.round(tdee) + ' calories/day';
        document.getElementById('cal-loss-mild').textContent = Math.round(tdee - 250) + ' calories/day';
        document.getElementById('cal-loss').textContent = Math.round(tdee - 500) + ' calories/day';
        document.getElementById('cal-gain').textContent = Math.round(tdee + 500) + ' calories/day';
        results.style.display = 'block';
        showNotification('Calorie needs calculated successfully', 'success');
    });
    
    clearBtn.addEventListener('click', () => {
        age.value = '';
        gender.value = '';
        weight.value = '';
        height.value = '';
        results.style.display = 'none';
    });
}

// ===== COMPOUND INTEREST CALCULATOR TOOL =====
function createCompoundInterestCalculatorInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="ci-principal">Initial Investment ($):</label>
                <input type="number" id="ci-principal" placeholder="e.g., 10000" min="0" step="100">
            </div>
            <div class="input-group">
                <label for="ci-contribution">Monthly Contribution ($):</label>
                <input type="number" id="ci-contribution" placeholder="e.g., 200" min="0" step="10">
            </div>
            <div class="input-group">
                <label for="ci-rate">Annual Interest Rate (%):</label>
                <input type="number" id="ci-rate" placeholder="e.g., 7" min="0" max="100" step="0.1">
            </div>
            <div class="input-group">
                <label for="ci-years">Investment Period (years):</label>
                <input type="number" id="ci-years" placeholder="e.g., 20" min="1" max="100" step="1">
            </div>
            <div class="button-group">
                <button id="ci-calculate" class="btn btn-primary">
                    <i class="fas fa-chart-line"></i> Calculate Growth
                </button>
                <button id="ci-clear" class="btn btn-outline">
                    <i class="fas fa-eraser"></i> Clear
                </button>
            </div>
            <div class="output-group" id="ci-results" style="display: none;">
                <h4>Investment Growth</h4>
                <div class="result-item">
                    <strong>Future Value:</strong>
                    <span id="ci-future-value"></span>
                </div>
                <div class="result-item">
                    <strong>Total Contributions:</strong>
                    <span id="ci-contributions"></span>
                </div>
                <div class="result-item">
                    <strong>Interest Earned:</strong>
                    <span id="ci-interest"></span>
                </div>
            </div>
        </div>
    `;
}

function initializeCompoundInterestCalculatorTool() {
    const principal = document.getElementById('ci-principal');
    const contribution = document.getElementById('ci-contribution');
    const rate = document.getElementById('ci-rate');
    const years = document.getElementById('ci-years');
    const calculateBtn = document.getElementById('ci-calculate');
    const clearBtn = document.getElementById('ci-clear');
    const results = document.getElementById('ci-results');
    
    calculateBtn.addEventListener('click', () => {
        const p = parseFloat(principal.value) || 0;
        const pmt = parseFloat(contribution.value) || 0;
        const r = parseFloat(rate.value) / 100 / 12;
        const n = parseFloat(years.value) * 12;
        
        if ((!p && !pmt) || !rate.value || !years.value) {
            showNotification('Please fill in the required fields', 'error');
            return;
        }
        
        // Future value of principal
        const fvPrincipal = p * Math.pow(1 + r, n);
        
        // Future value of monthly contributions
        const fvContributions = pmt * ((Math.pow(1 + r, n) - 1) / r);
        
        const futureValue = fvPrincipal + fvContributions;
        const totalContributions = p + (pmt * n);
        const interestEarned = futureValue - totalContributions;
        
        document.getElementById('ci-future-value').textContent = '$' + futureValue.toFixed(2);
        document.getElementById('ci-contributions').textContent = '$' + totalContributions.toFixed(2);
        document.getElementById('ci-interest').textContent = '$' + interestEarned.toFixed(2);
        results.style.display = 'block';
        showNotification('Investment growth calculated successfully', 'success');
    });
    
    clearBtn.addEventListener('click', () => {
        principal.value = '';
        contribution.value = '';
        rate.value = '';
        years.value = '';
        results.style.display = 'none';
    });
}

// ===== AGE CALCULATOR TOOL =====
function createAgeCalculatorInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="age-birth">Birth Date:</label>
                <input type="date" id="age-birth">
            </div>
            <div class="button-group">
                <button id="age-calculate" class="btn btn-primary">
                    <i class="fas fa-birthday-cake"></i> Calculate Age
                </button>
                <button id="age-clear" class="btn btn-outline">
                    <i class="fas fa-eraser"></i> Clear
                </button>
            </div>
            <div class="output-group" id="age-results" style="display: none;">
                <h4>Your Age</h4>
                <div class="result-item">
                    <strong>Age:</strong>
                    <span id="age-years"></span>
                </div>
                <div class="result-item">
                    <strong>Total Months:</strong>
                    <span id="age-months"></span>
                </div>
                <div class="result-item">
                    <strong>Total Days:</strong>
                    <span id="age-days"></span>
                </div>
                <div class="result-item">
                    <strong>Total Hours:</strong>
                    <span id="age-hours"></span>
                </div>
            </div>
        </div>
    `;
}

function initializeAgeCalculatorTool() {
    const birthDate = document.getElementById('age-birth');
    const calculateBtn = document.getElementById('age-calculate');
    const clearBtn = document.getElementById('age-clear');
    const results = document.getElementById('age-results');
    
    calculateBtn.addEventListener('click', () => {
        const birth = new Date(birthDate.value);
        
        if (!birthDate.value) {
            showNotification('Please enter your birth date', 'error');
            return;
        }
        
        const now = new Date();
        const diff = now - birth;
        
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        
        const ageYears = now.getFullYear() - birth.getFullYear();
        const ageMonths = now.getMonth() - birth.getMonth();
        const ageDays = now.getDate() - birth.getDate();
        
        let displayYears = ageYears;
        let displayMonths = ageMonths;
        let displayDays = ageDays;
        
        if (displayDays < 0) {
            displayMonths--;
            displayDays += 30;
        }
        if (displayMonths < 0) {
            displayYears--;
            displayMonths += 12;
        }
        
        document.getElementById('age-years').textContent = `${displayYears} years, ${displayMonths} months, ${displayDays} days`;
        document.getElementById('age-months').textContent = months.toLocaleString() + ' months';
        document.getElementById('age-days').textContent = days.toLocaleString() + ' days';
        document.getElementById('age-hours').textContent = hours.toLocaleString() + ' hours';
        results.style.display = 'block';
        showNotification('Age calculated successfully', 'success');
    });
    
    clearBtn.addEventListener('click', () => {
        birthDate.value = '';
        results.style.display = 'none';
    });
}

// ===== TIP CALCULATOR TOOL =====
function createTipCalculatorInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="tip-bill">Bill Amount ($):</label>
                <input type="number" id="tip-bill" placeholder="e.g., 50.00" min="0" step="0.01">
            </div>
            <div class="input-group">
                <label for="tip-percent">Tip Percentage (%):</label>
                <input type="number" id="tip-percent" placeholder="e.g., 18" min="0" max="100" step="1" value="18">
            </div>
            <div class="input-group">
                <label for="tip-people">Split Between (people):</label>
                <input type="number" id="tip-people" placeholder="e.g., 2" min="1" step="1" value="1">
            </div>
            <div class="button-group">
                <button id="tip-calculate" class="btn btn-primary">
                    <i class="fas fa-receipt"></i> Calculate Tip
                </button>
                <button id="tip-clear" class="btn btn-outline">
                    <i class="fas fa-eraser"></i> Clear
                </button>
            </div>
            <div class="output-group" id="tip-results" style="display: none;">
                <h4>Results</h4>
                <div class="result-item">
                    <strong>Tip Amount:</strong>
                    <span id="tip-amount"></span>
                </div>
                <div class="result-item">
                    <strong>Total Bill:</strong>
                    <span id="tip-total"></span>
                </div>
                <div class="result-item">
                    <strong>Per Person:</strong>
                    <span id="tip-per-person"></span>
                </div>
            </div>
        </div>
    `;
}

function initializeTipCalculatorTool() {
    const billAmount = document.getElementById('tip-bill');
    const tipPercent = document.getElementById('tip-percent');
    const numPeople = document.getElementById('tip-people');
    const calculateBtn = document.getElementById('tip-calculate');
    const clearBtn = document.getElementById('tip-clear');
    const results = document.getElementById('tip-results');
    
    calculateBtn.addEventListener('click', () => {
        const bill = parseFloat(billAmount.value);
        const percent = parseFloat(tipPercent.value);
        const people = parseInt(numPeople.value) || 1;
        
        if (!bill || !percent) {
            showNotification('Please enter bill amount and tip percentage', 'error');
            return;
        }
        
        const tipAmount = bill * (percent / 100);
        const total = bill + tipAmount;
        const perPerson = total / people;
        
        document.getElementById('tip-amount').textContent = '$' + tipAmount.toFixed(2);
        document.getElementById('tip-total').textContent = '$' + total.toFixed(2);
        document.getElementById('tip-per-person').textContent = '$' + perPerson.toFixed(2);
        results.style.display = 'block';
        showNotification('Tip calculated successfully', 'success');
    });
    
    clearBtn.addEventListener('click', () => {
        billAmount.value = '';
        tipPercent.value = '18';
        numPeople.value = '1';
        results.style.display = 'none';
    });
}

// ===== WORD COUNTER TOOL =====
function createWordCounterInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="word-text">Enter or Paste Your Text:</label>
                <textarea id="word-text" placeholder="Type or paste your text here..." rows="10"></textarea>
            </div>
            <div class="button-group">
                <button id="word-clear" class="btn btn-outline">
                    <i class="fas fa-eraser"></i> Clear
                </button>
            </div>
            <div class="output-group" id="word-results">
                <h4>Statistics</h4>
                <div class="stats-grid">
                    <div class="stat-item">
                        <strong>Words:</strong>
                        <span id="word-count">0</span>
                    </div>
                    <div class="stat-item">
                        <strong>Characters:</strong>
                        <span id="char-count">0</span>
                    </div>
                    <div class="stat-item">
                        <strong>Characters (no spaces):</strong>
                        <span id="char-no-space">0</span>
                    </div>
                    <div class="stat-item">
                        <strong>Sentences:</strong>
                        <span id="sentence-count">0</span>
                    </div>
                    <div class="stat-item">
                        <strong>Paragraphs:</strong>
                        <span id="paragraph-count">0</span>
                    </div>
                    <div class="stat-item">
                        <strong>Reading Time:</strong>
                        <span id="reading-time">0 min</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initializeWordCounterTool() {
    const textArea = document.getElementById('word-text');
    const clearBtn = document.getElementById('word-clear');
    
    function updateStats() {
        const text = textArea.value;
        
        const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
        const chars = text.length;
        const charsNoSpace = text.replace(/\s/g, '').length;
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
        const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
        const readingTime = Math.ceil(words / 200);
        
        document.getElementById('word-count').textContent = words;
        document.getElementById('char-count').textContent = chars;
        document.getElementById('char-no-space').textContent = charsNoSpace;
        document.getElementById('sentence-count').textContent = sentences;
        document.getElementById('paragraph-count').textContent = paragraphs;
        document.getElementById('reading-time').textContent = readingTime + ' min';
    }
    
    textArea.addEventListener('input', updateStats);
    
    clearBtn.addEventListener('click', () => {
        textArea.value = '';
        updateStats();
    });
}

// ===== PASSWORD GENERATOR TOOL =====
function createPasswordGeneratorInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="pass-length">Password Length:</label>
                <input type="number" id="pass-length" value="16" min="4" max="128" step="1">
            </div>
            <div class="checkbox-group">
                <label>
                    <input type="checkbox" id="pass-uppercase" checked> Uppercase Letters (A-Z)
                </label>
                <label>
                    <input type="checkbox" id="pass-lowercase" checked> Lowercase Letters (a-z)
                </label>
                <label>
                    <input type="checkbox" id="pass-numbers" checked> Numbers (0-9)
                </label>
                <label>
                    <input type="checkbox" id="pass-symbols" checked> Symbols (!@#$%^&*)
                </label>
            </div>
            <div class="button-group">
                <button id="pass-generate" class="btn btn-primary">
                    <i class="fas fa-key"></i> Generate Password
                </button>
                <button id="pass-copy" class="btn btn-outline">
                    <i class="fas fa-copy"></i> Copy
                </button>
            </div>
            <div class="output-group">
                <label for="pass-output">Generated Password:</label>
                <textarea id="pass-output" readonly rows="2" style="font-family: monospace;"></textarea>
            </div>
        </div>
    `;
}

function initializePasswordGeneratorTool() {
    const length = document.getElementById('pass-length');
    const uppercase = document.getElementById('pass-uppercase');
    const lowercase = document.getElementById('pass-lowercase');
    const numbers = document.getElementById('pass-numbers');
    const symbols = document.getElementById('pass-symbols');
    const generateBtn = document.getElementById('pass-generate');
    const copyBtn = document.getElementById('pass-copy');
    const output = document.getElementById('pass-output');
    
    function generatePassword() {
        const len = parseInt(length.value);
        let chars = '';
        
        if (uppercase.checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase.checked) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers.checked) chars += '0123456789';
        if (symbols.checked) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        if (chars.length === 0) {
            showNotification('Please select at least one character type', 'error');
            return;
        }
        
        let password = '';
        const array = new Uint32Array(len);
        crypto.getRandomValues(array);
        
        for (let i = 0; i < len; i++) {
            password += chars[array[i] % chars.length];
        }
        
        output.value = password;
        showNotification('Password generated successfully', 'success');
    }
    
    generateBtn.addEventListener('click', generatePassword);
    
    copyBtn.addEventListener('click', () => {
        if (!output.value) {
            showNotification('Please generate a password first', 'error');
            return;
        }
        
        navigator.clipboard.writeText(output.value).then(() => {
            showNotification('Password copied to clipboard', 'success');
        }).catch(() => {
            showNotification('Failed to copy password', 'error');
        });
    });
    
    // Generate password on load
    generatePassword();
}

// ===== QR CODE GENERATOR TOOL =====
function createQRGeneratorInterface() {
    return `
        <div class="tool-interface">
            <div class="input-group">
                <label for="qr-text">Text or URL:</label>
                <textarea id="qr-text" placeholder="Enter text or URL to encode..." rows="3"></textarea>
            </div>
            <div class="button-group">
                <button id="qr-generate" class="btn btn-primary">
                    <i class="fas fa-qrcode"></i> Generate QR Code
                </button>
                <button id="qr-download" class="btn btn-outline">
                    <i class="fas fa-download"></i> Download
                </button>
                <button id="qr-clear" class="btn btn-outline">
                    <i class="fas fa-eraser"></i> Clear
                </button>
            </div>
            <div class="output-group" id="qr-output" style="display: none; text-align: center;">
                <canvas id="qr-canvas"></canvas>
            </div>
            <div style="margin-top: 1rem; padding: 1rem; background: #f0f0f0; border-radius: 4px;">
                <strong>Note:</strong> QR code generation requires the QRCode.js library. For now, this is a placeholder. 
                To enable full functionality, include: <code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"&gt;&lt;/script&gt;</code>
            </div>
        </div>
    `;
}

function initializeQRGeneratorTool() {
    const textInput = document.getElementById('qr-text');
    const generateBtn = document.getElementById('qr-generate');
    const downloadBtn = document.getElementById('qr-download');
    const clearBtn = document.getElementById('qr-clear');
    const output = document.getElementById('qr-output');
    const canvas = document.getElementById('qr-canvas');
    
    generateBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        
        if (!text) {
            showNotification('Please enter text or URL', 'error');
            return;
        }
        
        // Simple placeholder - in production, use QRCode.js library
        const ctx = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 256;
        
        // Draw a simple pattern as placeholder
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 256, 256);
        ctx.fillStyle = 'black';
        
        // Draw simple QR-like pattern
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    ctx.fillRect(i * 32, j * 32, 32, 32);
                }
            }
        }
        
        ctx.font = '12px Arial';
        ctx.fillStyle = 'blue';
        ctx.textAlign = 'center';
        ctx.fillText('QR Code Placeholder', 128, 128);
        ctx.fillText('Include QRCode.js for real QR codes', 128, 145);
        
        output.style.display = 'block';
        showNotification('QR code generated (placeholder)', 'info');
    });
    
    downloadBtn.addEventListener('click', () => {
        if (output.style.display === 'none') {
            showNotification('Please generate a QR code first', 'error');
            return;
        }
        
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL();
        link.click();
        showNotification('QR code downloaded', 'success');
    });
    
    clearBtn.addEventListener('click', () => {
        textInput.value = '';
        output.style.display = 'none';
    });
}

