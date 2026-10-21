export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceSubtext: string;
  badge: string;
  badgeStyle: "lavender" | "gradient" | "dark";
  isPopular?: boolean;
  deliverables: string[];
  estimatedDelivery: string;
  disclaimer: string;
  contactTierParam: string;
  contactBudgetParam: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  iconName: string;
}

export interface PackageIdealClient {
  title: string;
  description: string;
}

export interface PackageDeliverableDomain {
  category: string;
  iconName: string;
  items: string[];
}

export interface PackageMilestone {
  phase: string;
  timeline: string;
  title: string;
  description: string;
  deliverables: string[];
  paymentCheckpoint: string;
}

export interface PackageTechStackItem {
  name: string;
  role: string;
  badge: string;
}

export interface PackageScopeBoundaries {
  included: string[];
  outOfScope: string[];
  addOns: { title: string; price: string }[];
}

export interface PackageFaq {
  question: string;
  answer: string;
}

export interface PackageDetail {
  slug: "essential" | "professional" | "enterprise";
  name: string;
  tierNumber: string;
  heroHeadline: string;
  tagline: string;
  price: string;
  priceSubtext: string;
  deliveryTime: string;
  investmentSummary: string;
  paymentTranches: string;
  badge: string;
  badgeStyle: "lavender" | "gradient" | "dark";
  isPopular?: boolean;
  contactTierParam: string;
  contactBudgetParam: string;
  idealFor: PackageIdealClient[];
  domainDeliverables: PackageDeliverableDomain[];
  milestones: PackageMilestone[];
  techStack: PackageTechStackItem[];
  scopeBoundaries: PackageScopeBoundaries;
  faqs: PackageFaq[];
}

export const packageDetailsMap: Record<string, PackageDetail> = {
  essential: {
    slug: "essential",
    name: "ESSENTIAL",
    tierNumber: "01",
    heroHeadline: "Essential Digital Foundation & Fast-Track MVP",
    tagline:
      "Rapidly launch your business presence or validate a new product concept with high-conversion UI/UX, mobile-first design, and clean Next.js engineering.",
    price: "৳50,000 – 70,000",
    priceSubtext: "(Project Based)",
    deliveryTime: "2 – 4 weeks",
    investmentSummary: "৳50,000 – ৳70,000 (Fixed Project Scope)",
    paymentTranches:
      "40% Project Kickoff • 40% Staging Approval • 20% Production Handover",
    badge: "Ideal for Simple & Focused Projects",
    badgeStyle: "lavender",
    isPopular: false,
    contactTierParam: "Essential Package",
    contactBudgetParam: "৳50,000 – ৳1,50,000",
    idealFor: [
      {
        title: "Early-Stage Startups & MVPs",
        description:
          "Validate a product value proposition or launch a minimum viable landing page without heavy infrastructure overhead.",
      },
      {
        title: "Local Businesses & Consultancies",
        description:
          "Establish a credible, high-converting digital storefront with responsive mobile layouts and fast lead capture.",
      },
      {
        title: "Product Launch Campaigns",
        description:
          "Single-product showcase or marketing campaign landing pages requiring fast turnaround and sub-second load times.",
      },
      {
        title: "Modern Brand Refresh",
        description:
          "Replace an outdated, slow legacy website with a modern Jamstack architecture powered by Next.js and Tailwind CSS.",
      },
    ],
    domainDeliverables: [
      {
        category: "UI/UX & Brand Identity",
        iconName: "Palette",
        items: [
          "Custom responsive design in Figma tailored to your branding",
          "Mobile-first responsive layouts for smartphone, tablet & desktop",
          "Brand typography, color palette, and asset optimization",
          "Conversion-centered call-to-action layout architecture",
        ],
      },
      {
        category: "Frontend Engineering",
        iconName: "Code2",
        items: [
          "Built with Next.js 15+ App Router and React 19",
          "Clean, typed TypeScript codebase with zero unnecessary dependencies",
          "Tailwind CSS styling with responsive breakpoints and micro-interactions",
          "SEO metadata, OpenGraph cards, and schema markup integration",
        ],
      },
      {
        category: "Form & API Integrations",
        iconName: "Database",
        items: [
          "Interactive contact & lead capture form with client-side validation",
          "Automated email delivery via Resend API",
          "Supabase lead storage with timestamps and contact logs",
          "Bot protection via Cloudflare Turnstile CAPTCHA",
        ],
      },
      {
        category: "DevOps & Production Handover",
        iconName: "Rocket",
        items: [
          "Global edge CDN deployment on Vercel with SSL/TLS certificate",
          "Full source code handover to client GitHub repository",
          "DNS & domain routing assistance for your custom domain",
          "14 days post-launch warranty for bug fixes and assistance",
        ],
      },
    ],
    milestones: [
      {
        phase: "Phase 1",
        timeline: "Week 1",
        title: "Discovery & Wireframing",
        description:
          "We analyze your target audience, define key messaging, and produce low-fidelity wireframes.",
        deliverables: [
          "Requirements specification document",
          "Wireframe concepts & layout approval",
        ],
        paymentCheckpoint: "40% Kickoff Deposit",
      },
      {
        phase: "Phase 2",
        timeline: "Week 2",
        title: "Visual Design & Prototyping",
        description:
          "Creation of full-fidelity Figma prototypes with typography, colors, and interactive states.",
        deliverables: [
          "Interactive Figma prototype",
          "Asset and image preparation",
        ],
        paymentCheckpoint: "Design Sign-off",
      },
      {
        phase: "Phase 3",
        timeline: "Week 3",
        title: "Development & Integrations",
        description:
          "Transforming approved designs into clean, responsive Next.js and Tailwind code with forms.",
        deliverables: [
          "Next.js code implementation",
          "Form and email API integration",
        ],
        paymentCheckpoint: "40% Milestone Tranche",
      },
      {
        phase: "Phase 4",
        timeline: "Week 4",
        title: "QA, Launch & Handover",
        description:
          "Cross-device responsiveness testing, SEO checks, domain linking, and repo transfer.",
        deliverables: [
          "Production deployment on Vercel",
          "GitHub repository transfer",
          "Admin walkthrough",
        ],
        paymentCheckpoint: "20% Final Handover",
      },
    ],
    techStack: [
      { name: "Next.js 15+", role: "Frontend Framework", badge: "React 19" },
      { name: "TypeScript", role: "Type Safety", badge: "Strict Mode" },
      { name: "Tailwind CSS", role: "Styling Engine", badge: "Utility-First" },
      { name: "Supabase", role: "Lead Database", badge: "PostgreSQL" },
      { name: "Resend", role: "Email Notification", badge: "API" },
      { name: "Cloudflare", role: "Bot & Edge Security", badge: "Turnstile" },
      { name: "Vercel", role: "Edge Hosting", badge: "Global CDN" },
    ],
    scopeBoundaries: {
      included: [
        "Up to 5 custom-designed page sections / views",
        "Responsive contact form with spam protection & email alerts",
        "Mobile-optimized responsive layouts",
        "Full source code ownership",
        "14-day post-launch warranty",
      ],
      outOfScope: [
        "User login/authentication or membership portals",
        "Custom eCommerce payment checkout gateways",
        "Complex multi-table relational database structures",
        "Third-party paid API subscription fees",
      ],
      addOns: [
        { title: "Dynamic Blog / Article Engine (CMS)", price: "+৳15,000" },
        {
          title: "Local Payment Gateway (bKash/Nagad/SSLCommerz)",
          price: "+৳20,000",
        },
        { title: "Multi-Language Support (English + Bengali)", price: "+৳12,000" },
        { title: "Additional Custom Pages (per page)", price: "+৳6,000" },
      ],
    },
    faqs: [
      {
        question: "Do I own the full source code and design files?",
        answer:
          "Yes, 100%. Upon final project handover and invoice settlement, all Figma files, GitHub repository rights, and deployment credentials are fully transferred to you.",
      },
      {
        question: "How does the payment milestone work?",
        answer:
          "Payments are split into transparent, milestone-driven installments: 40% upfront deposit to begin research and wireframes, 40% upon staging build presentation, and the remaining 20% upon final domain deployment and repo transfer.",
      },
      {
        question: "Can I upgrade to the Professional tier later?",
        answer:
          "Absolutely. All our code is built on clean, modular Next.js architecture, which makes it straightforward to add user authentication, complex databases, or custom dashboards in the future without starting from scratch.",
      },
      {
        question: "What is included in the 14-day warranty?",
        answer:
          "During the 14 days after launch, our team fixes any bugs, layout defects, or integration errors free of charge to guarantee smooth operation.",
      },
    ],
  },

  professional: {
    slug: "professional",
    name: "PROFESSIONAL",
    tierNumber: "02",
    heroHeadline: "Full-Stack Custom Web Application & Product Architecture",
    tagline:
      "A complete, production-ready digital application designed for scaling businesses needing custom database workflows, secure authentication, and seamless third-party APIs.",
    price: "৳120,000",
    priceSubtext: "(Project Based)",
    deliveryTime: "5 – 8 weeks",
    investmentSummary: "৳120,000 (Project Based)",
    paymentTranches:
      "40% Project Kickoff • 40% Core Functional Staging • 20% Production Deployment",
    badge: "Complete & Balanced Solution",
    badgeStyle: "gradient",
    isPopular: true,
    contactTierParam: "Professional Package",
    contactBudgetParam: "৳50,000 – ৳1,50,000",
    idealFor: [
      {
        title: "Growing SaaS & Product Teams",
        description:
          "Launch a production-grade beta application with secure authentication, multi-role dashboards, and database models.",
      },
      {
        title: "Service & Operational Businesses",
        description:
          "Digitize manual operations, appointment bookings, order tracking, and client self-service portals.",
      },
      {
        title: "E-Commerce & Digital Marketplaces",
        description:
          "Build custom digital product storefronts with automated checkout workflows and order management.",
      },
      {
        title: "High-Traffic Content Platforms",
        description:
          "Deploy high-performance web systems with dynamic content management, search indexing, and real-time data.",
      },
    ],
    domainDeliverables: [
      {
        category: "Product Strategy & UI/UX System",
        iconName: "Palette",
        items: [
          "End-to-end user journey mapping and wireframe architecture",
          "Complete interactive Figma design system with components and design tokens",
          "Custom iconography, data visualization layouts, and state management",
          "Accessibility compliance (WCAG 2.1) and responsive mobile-first views",
        ],
      },
      {
        category: "Full-Stack Engineering",
        iconName: "Code2",
        items: [
          "Next.js 15+ App Router with server components and React 19 actions",
          "TypeScript strict typing across all models, handlers, and components",
          "Modular frontend component hierarchy with Tailwind CSS",
          "Server-side rendering (SSR) and static generation for peak performance",
        ],
      },
      {
        category: "Database & Backend Architecture",
        iconName: "Database",
        items: [
          "PostgreSQL database architecture hosted on Supabase",
          "Row-Level Security (RLS) policies protecting client data",
          "RESTful / tRPC API endpoints for high-throughput data processing",
          "Automated transactional email workflows and webhook notifications",
        ],
      },
      {
        category: "Cloud Infrastructure & Security",
        iconName: "ShieldCheck",
        items: [
          "Zero Trust architecture with Cloudflare WAF, rate limiting, and Turnstile",
          "Secure environment variable isolation and secret credential hygiene",
          "Automated daily database backups and point-in-time recovery",
          "Performance optimization targeting 90+ Lighthouse mobile metrics",
        ],
      },
      {
        category: "Handover, Training & Warranty",
        iconName: "Rocket",
        items: [
          "Comprehensive technical documentation and API documentation",
          "Live administrative video walkthrough and team onboarding",
          "Full GitHub repository ownership transfer",
          "30 days post-launch priority bug-fix warranty",
        ],
      },
    ],
    milestones: [
      {
        phase: "Phase 1",
        timeline: "Weeks 1–2",
        title: "Discovery & System Architecture",
        description:
          "Deep requirement analysis, entity-relationship diagrams (ERD), API specifications, and wireframes.",
        deliverables: [
          "System architecture document",
          "Database ERD schema",
          "Low-fidelity wireframes",
        ],
        paymentCheckpoint: "40% Kickoff Deposit",
      },
      {
        phase: "Phase 2",
        timeline: "Weeks 3–4",
        title: "UI/UX & Design System",
        description:
          "Creating high-fidelity interactive Figma prototypes and design token libraries.",
        deliverables: [
          "Interactive Figma prototype",
          "Component design system",
          "Client design sign-off",
        ],
        paymentCheckpoint: "Design Approval",
      },
      {
        phase: "Phase 3",
        timeline: "Weeks 5–6",
        title: "Full-Stack Implementation",
        description:
          "Coding database models, user authentication, APIs, and responsive frontend screens.",
        deliverables: [
          "Staging environment URL",
          "Auth & database integration",
          "Admin dashboard demo",
        ],
        paymentCheckpoint: "40% Beta Staging Tranche",
      },
      {
        phase: "Phase 4",
        timeline: "Week 7",
        title: "Testing, QA & Security Audit",
        description:
          "End-to-end testing, cross-browser validation, rate limiting checks, and security verification.",
        deliverables: [
          "QA audit report",
          "Performance optimization score",
          "User acceptance testing (UAT)",
        ],
        paymentCheckpoint: "UAT Sign-off",
      },
      {
        phase: "Phase 5",
        timeline: "Week 8",
        title: "Production Deployment & Handover",
        description:
          "Live DNS cutover, SSL provisioning, repository transfer, and administrator onboarding.",
        deliverables: [
          "Production launch",
          "GitHub repository transfer",
          "Admin documentation & video call",
        ],
        paymentCheckpoint: "20% Final Handover",
      },
    ],
    techStack: [
      { name: "Next.js 15+", role: "Application Framework", badge: "App Router" },
      {
        name: "TypeScript",
        role: "Programming Language",
        badge: "Strict Type Safety",
      },
      {
        name: "Supabase",
        role: "PostgreSQL Database & Auth",
        badge: "RLS & Edge",
      },
      { name: "Tailwind CSS", role: "Design System", badge: "Responsive" },
      { name: "Cloudflare", role: "Security & WAF", badge: "Zero Trust" },
      { name: "Resend", role: "Email & Webhooks", badge: "Transactional" },
      { name: "Vercel", role: "Hosting & Serverless", badge: "Global Edge" },
    ],
    scopeBoundaries: {
      included: [
        "Up to 12 custom application screens / views",
        "Secure user authentication (OAuth / Magic Link / Passwords)",
        "Relational PostgreSQL database with RLS policies",
        "Custom administrative dashboard and management tools",
        "30-day dedicated warranty and live team walkthrough",
      ],
      outOfScope: [
        "Native iOS/Android Swift/Kotlin apps (available as companion add-on)",
        "Legacy enterprise on-premise hardware server configurations",
        "Third-party vendor API subscription fees (e.g. OpenAI, SMS gateway)",
      ],
      addOns: [
        {
          title: "React Native Mobile App (iOS & Android companion)",
          price: "+৳75,000",
        },
        {
          title: "AI Automation & LLM Workflow Integration",
          price: "+৳35,000",
        },
        {
          title: "Automated SMS Gateway (Bangladeshi SMS aggregators)",
          price: "+৳15,000",
        },
        {
          title: "Ongoing Monthly Maintenance & DevOps Retainer",
          price: "+৳18,000/mo",
        },
      ],
    },
    faqs: [
      {
        question: "Can the application handle thousands of active users?",
        answer:
          "Yes. By building on Next.js serverless edge execution and Supabase PostgreSQL with connection pooling, the application scales effortlessly to thousands of concurrent users with sub-100ms response times.",
      },
      {
        question: "What authentication methods are supported?",
        answer:
          "We support secure email/password auth, email magic links, and OAuth providers (Google, GitHub, Microsoft) with session tokens and role-based access control.",
      },
      {
        question: "How is our sensitive data protected?",
        answer:
          "We enforce PostgreSQL Row-Level Security (RLS), Cloudflare WAF protection against DDoS and bot scraping, Turnstile bot verification, and encrypted HTTPS/TLS 1.3 transit.",
      },
      {
        question: "What is your revision and testing policy during development?",
        answer:
          "We follow an agile milestone process. Each phase (Design, Staging, QA) has dedicated review cycles where we refine the deliverables until you sign off before advancing to the next step.",
      },
    ],
  },

  enterprise: {
    slug: "enterprise",
    name: "ENTERPRISE",
    tierNumber: "03",
    heroHeadline: "Mission-Critical Enterprise Systems & Bespoke Software",
    tagline:
      "Engineered for organizations demanding multi-tenant scalability, custom API microservices, high-concurrency resilience, and strict SLA compliance.",
    price: "৳200,000+",
    priceSubtext: "(Project Based)",
    deliveryTime: "8 – 16+ weeks",
    investmentSummary: "৳200,000+ (Custom Scope Quotation)",
    paymentTranches:
      "Milestone-driven tranches (e.g., 30% / 30% / 25% / 15%)",
    badge: "Custom & Scalable Solution",
    badgeStyle: "dark",
    isPopular: false,
    contactTierParam: "Enterprise Package",
    contactBudgetParam: "৳1,50,000 – ৳5,00,000",
    idealFor: [
      {
        title: "Multi-Branch Enterprises & Corporations",
        description:
          "Custom ERPs, centralized inventory management, HRMS, and multi-location business operations.",
      },
      {
        title: "High-Volume SaaS & Fintech Platforms",
        description:
          "Financial ledgers, real-time analytics dashboards, automated multi-tier subscription billing systems.",
      },
      {
        title: "Supply Chain & Logistics Systems",
        description:
          "Real-time fleet tracking, barcode/QR warehouse dispatching, automated shipment reconciliation.",
      },
      {
        title: "Legacy System Digital Transformation",
        description:
          "Modernizing legacy desktop/ASP/PHP monolithic applications into secure cloud-native architectures.",
      },
    ],
    domainDeliverables: [
      {
        category: "Enterprise Architecture & Strategy",
        iconName: "Layers",
        items: [
          "Domain-driven design (DDD) and distributed microservices architecture",
          "Multi-tenant data isolation with database partitioning",
          "Comprehensive technical specification and data dictionary documentation",
          "Disaster recovery, high availability, and failover strategy planning",
        ],
      },
      {
        category: "Bespoke Full-Stack Engineering",
        iconName: "Code2",
        items: [
          "High-performance Next.js and Node.js / Go backend services",
          "Real-time communication using WebSockets and event-driven architecture",
          "Complex role-based access control (RBAC) with granular permissions",
          "Extensive RESTful and GraphQL API design with OpenAPI documentation",
        ],
      },
      {
        category: "Data Management & Scalability",
        iconName: "Database",
        items: [
          "Clustered PostgreSQL database with Redis caching layer",
          "Object storage architecture with CDN media optimization",
          "Automated background job queues and worker services",
          "Audit logging for every critical user action and financial transaction",
        ],
      },
      {
        category: "Enterprise Security & SLA",
        iconName: "ShieldCheck",
        items: [
          "Zero Trust architecture with Cloudflare Enterprise security rules",
          "Automated penetration testing validation and vulnerability scans",
          "99.9% uptime Service Level Agreement (SLA)",
          "Compliance with data privacy standards and encrypted data at rest",
        ],
      },
      {
        category: "CI/CD & DevOps Automation",
        iconName: "Rocket",
        items: [
          "Automated GitHub Actions CI/CD pipelines for staging and production",
          "Infrastructure as Code (IaC) configuration and containerization",
          "90 days dedicated post-launch support and warranty",
          "Hands-on team training workshops and comprehensive runbooks",
        ],
      },
    ],
    milestones: [
      {
        phase: "Phase 1",
        timeline: "Weeks 1–3",
        title: "Enterprise Architecture & Domain Modeling",
        description:
          "Deep-dive workshops with stakeholders, business logic modeling, and database architecture.",
        deliverables: [
          "Architecture blueprint",
          "Database schema specification",
          "Milestone timeline & SLA agreement",
        ],
        paymentCheckpoint: "30% Kickoff Deposit",
      },
      {
        phase: "Phase 2",
        timeline: "Weeks 4–6",
        title: "Design System & Stakeholder Validation",
        description:
          "Full UX research, multi-role wireframes, interactive prototypes, and design approval.",
        deliverables: [
          "Design system & tokens",
          "Multi-role prototype",
          "Stakeholder approval",
        ],
        paymentCheckpoint: "Design Sign-off",
      },
      {
        phase: "Phase 3",
        timeline: "Weeks 7–11",
        title: "Core Architecture & Module Sprints",
        description:
          "Iterative two-week sprints implementing database clusters, core business logic, and security.",
        deliverables: [
          "Sprint 1–3 staging demos",
          "RBAC security implementation",
          "API microservices",
        ],
        paymentCheckpoint: "30% Core Sprint Tranche",
      },
      {
        phase: "Phase 4",
        timeline: "Weeks 12–14",
        title: "Integrations, Pen-Testing & Load Testing",
        description:
          "Simulating high concurrency, security audits, third-party ERP/banking integrations.",
        deliverables: [
          "Security audit report",
          "Load test benchmark (10k+ req/min)",
          "End-to-end integration pass",
        ],
        paymentCheckpoint: "25% Beta Tranche",
      },
      {
        phase: "Phase 5",
        timeline: "Weeks 15–16+",
        title: "Production Deployment & SLA Onboarding",
        description:
          "Zero-downtime cutover, team training workshops, runbook delivery, and 90-day SLA activation.",
        deliverables: [
          "Live enterprise deployment",
          "Runbooks & documentation",
          "90-day SLA activation",
        ],
        paymentCheckpoint: "15% Final Handover",
      },
    ],
    techStack: [
      {
        name: "Next.js & Node.js",
        role: "Full-Stack Architecture",
        badge: "Microservices",
      },
      {
        name: "TypeScript / Go",
        role: "High-Concurrency Backend",
        badge: "Typed Systems",
      },
      {
        name: "PostgreSQL & Redis",
        role: "Clustered Database & Cache",
        badge: "High Availability",
      },
      {
        name: "Cloudflare Pro/Ent",
        role: "Edge Security & DDoS Shield",
        badge: "Zero Trust",
      },
      {
        name: "Docker & CI/CD",
        role: "DevOps & Pipeline",
        badge: "Automated",
      },
      {
        name: "AWS / Vercel",
        role: "Cloud Infrastructure",
        badge: "Enterprise",
      },
      {
        name: "Resend",
        role: "Transactional Email & Inbound",
        badge: "Enterprise",
      },
    ],
    scopeBoundaries: {
      included: [
        "Unlimited custom application views within agreed enterprise scope",
        "Multi-tenant architecture with fine-grained RBAC permissions",
        "Comprehensive API documentation with OpenAPI/Swagger specs",
        "Automated CI/CD pipelines and disaster recovery protocols",
        "90-day dedicated warranty and priority SLA response times",
      ],
      outOfScope: [
        "Third-party cloud infrastructure and server hosting fees (billed directly to client)",
        "Third-party proprietary software licensing costs",
      ],
      addOns: [
        {
          title: "24/7 Dedicated Emergency On-Call Support Retainer",
          price: "Custom Quote",
        },
        {
          title: "Custom On-Premises Air-Gapped Deployment",
          price: "Custom Quote",
        },
        {
          title: "Legacy Database Data Migration & Cleansing Pipeline",
          price: "Custom Quote",
        },
      ],
    },
    faqs: [
      {
        question: "Can you sign our corporate Non-Disclosure Agreement (NDA)?",
        answer:
          "Yes, absolutely. We routinely sign comprehensive mutual NDAs before reviewing proprietary workflows, sensitive business data, or technical architecture.",
      },
      {
        question: "How do you guarantee 99.9% uptime?",
        answer:
          "We architect enterprise solutions with redundant multi-region edge servers, database connection pooling, automated failover, and Cloudflare DDoS protection.",
      },
      {
        question:
          "Can you integrate with our legacy ERP or existing internal database?",
        answer:
          "Yes. Our senior engineers specialize in building custom middleware connectors, REST/SOAP APIs, and ETL pipelines to seamlessly sync data between your existing systems and the new application.",
      },
      {
        question: "What is included in the 90-day enterprise warranty?",
        answer:
          "Our senior engineering team provides dedicated priority bug fixing, performance monitoring, infrastructure tuning, and support tickets with guaranteed 2-hour response times.",
      },
    ],
  },
};

export function getPackageDetailBySlug(
  slug: string
): PackageDetail | undefined {
  return packageDetailsMap[slug];
}

export function getAllPackageSlugs(): string[] {
  return Object.keys(packageDetailsMap);
}

export const portfolioPricingData = {
  headerCategories: ["WEB", "APP", "SOFTWARE", "DESIGN", "MARKETING", "MORE"],

  hero: {
    eyebrow: "DIGITAL SOLUTIONS FOR EVERY BUSINESS",
    titlePrefix: "Turn Your Ideas Into",
    titleMiddle: "Powerful Digital",
    titleAccent: "Solutions.",
    description:
      "We're a full-service digital agency, offering everything from software and web to mobile apps, UI/UX design, branding, marketing materials and more — all under one roof.",
    pillars: [
      { label: "Creative", highlight: "Design" },
      { label: "Reliable", highlight: "Development" },
      { label: "Business", highlight: "Focused" },
    ],
  },

  pricingTiers: [
    {
      id: "essential",
      name: "ESSENTIAL",
      subtitle:
        "Perfect for startups and small businesses looking for core digital presence and essential features.",
      price: "৳50,000 – 70,000",
      priceSubtext: "(Project Based)",
      badge: "Ideal for simple and focused projects",
      badgeStyle: "lavender",
      isPopular: false,
      deliverables: [
        "Basic website or landing page design and development",
        "Logo and basic brand identity",
        "Social media creatives and marketing designs",
        "UI/UX design for a simple product",
        "Basic frontend or backend development",
        "Project deployment and handover",
      ],
      estimatedDelivery: "2 – 4 weeks",
      disclaimer:
        "This package covers essential features. Advanced functionality, integrations and ongoing support are not included.",
      contactTierParam: "Essential Package",
      contactBudgetParam: "৳50,000 – ৳1,50,000",
    },
    {
      id: "professional",
      name: "PROFESSIONAL",
      subtitle:
        "Ideal for growing businesses that need a complete digital solution with better functionality, design and support.",
      price: "৳120,000",
      priceSubtext: "(Project Based)",
      badge: "Complete & Balanced Solution",
      badgeStyle: "gradient",
      isPopular: true,
      deliverables: [
        "Custom website or web application",
        "Responsive UI/UX design",
        "Frontend & backend development",
        "Database and API integration",
        "Branding and marketing design assets",
        "System testing and quality assurance",
        "Deployment, documentation and handover",
      ],
      estimatedDelivery: "5 – 8 weeks",
      disclaimer:
        "Recommended for businesses seeking a reliable, end-to-end solution with better functionality and support.",
      contactTierParam: "Professional Package",
      contactBudgetParam: "৳50,000 – ৳1,50,000",
    },
    {
      id: "enterprise",
      name: "ENTERPRISE",
      subtitle:
        "Best for established businesses or complex projects that require advanced features, scalability and long-term support.",
      price: "৳200,000+",
      priceSubtext: "(Project Based)",
      badge: "Custom & Scalable Solution",
      badgeStyle: "dark",
      isPopular: false,
      deliverables: [
        "Advanced web and mobile app development",
        "Custom software and business systems",
        "Complex integrations and API services",
        "Advanced UI/UX, branding and design",
        "Marketing campaigns and digital assets",
        "Scalability, performance optimization",
        "Extended support and maintenance options",
      ],
      estimatedDelivery: "8 – 16+ weeks",
      disclaimer:
        "Pricing depends on project complexity, features and integrations. A detailed quotation will be provided after the requirement analysis.",
      contactTierParam: "Enterprise Package",
      contactBudgetParam: "৳1,50,000 – ৳5,00,000",
    },
  ] as PricingTier[],

  servicesSection: {
    eyebrow: "WHAT WE OFFER",
    title: "Our Services",
    subtitle: "End-to-end digital solutions, tailored to your needs.",
    services: [
      {
        id: "web-dev",
        title: "Web Development",
        description: "Business websites, e-commerce, web apps, custom solutions.",
        iconName: "Globe",
        category: "Engineering",
      },
      {
        id: "mobile-dev",
        title: "Mobile App Development",
        description: "iOS & Android apps, product design, dashboards.",
        iconName: "Smartphone",
        category: "Engineering",
      },
      {
        id: "ui-ux",
        title: "UI/UX Design",
        description: "User research, wireframes, prototypes, interfaces.",
        iconName: "Palette",
        category: "Design",
      },
      {
        id: "branding",
        title: "Branding & Logo Design",
        description: "Logos, brand identity, style guides.",
        iconName: "PenTool",
        category: "Creative",
      },
      {
        id: "marketing",
        title: "Marketing Design",
        description: "Social media posts, posters, banners, creatives.",
        iconName: "Megaphone",
        category: "Marketing",
      },
      {
        id: "frontend",
        title: "Frontend Development",
        description: "Modern, responsive and fast interfaces.",
        iconName: "Code2",
        category: "Engineering",
      },
      {
        id: "backend",
        title: "Backend Development",
        description: "APIs, databases, system architecture.",
        iconName: "Database",
        category: "Engineering",
      },
      {
        id: "more-solutions",
        title: "More Solutions",
        description: "Automation, consulting, maintenance and more.",
        iconName: "PlusCircle",
        category: "Enterprise",
      },
    ] as ServiceItem[],
  },

  howWeWork: {
    title: "How We Work",
    subtitle: "A simple process. A smooth experience.",
    steps: [
      {
        number: "01",
        title: "Discover Your Needs",
        iconName: "MessageSquare",
      },
      {
        number: "02",
        title: "Plan & Design",
        iconName: "PenTool",
      },
      {
        number: "03",
        title: "Develop",
        iconName: "Code2",
      },
      {
        number: "04",
        title: "Test & Refine",
        iconName: "CheckCircle2",
      },
      {
        number: "05",
        title: "Launch & Support",
        iconName: "Rocket",
      },
    ] as ProcessStepItem[],
  },

  ctaBanner: {
    eyebrow: "GET STARTED",
    headline: "Let's Build Something Great Together.",
    description:
      "Share your idea with us and we'll get back to you with a tailored plan and quotation.",
    buttonText: "Contact Us",
    buttonHref: "/contact",
    email: "sales@solutionstudio.bd",
    website: "www.solutionstudio.bd",
    location: "Gazipur, Dhaka, Bangladesh",
  },

  footer: {
    tagline: "We don't just build software. We create business value.",
    copyright: "Your Digital Partner / Solution Studio / 2026",
  },
};
