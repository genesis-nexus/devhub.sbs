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
const modal = document.getElementById('tool-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const themeToggle = document.getElementById('theme-toggle');
const quickTools = document.querySelectorAll('.quick-tool');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderFeaturedTools();
    renderTools();
    initializeTheme();
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Category filters
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
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Quick tools
    if (quickTools && quickTools.length > 0) {
        quickTools.forEach(tool => {
            tool.addEventListener('click', () => openInternalTool(tool.dataset.tool));
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
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
        }
    };
    
    const config = toolConfigs[toolId];
    if (config) {
        openModal(config.title, config.content);
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
    `;}
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
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
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

// ===== UTILITY FUNCTIONS =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard', 'success');
    }).catch(() => {
        showNotification('Failed to copy', 'error');
    });
}

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
