import { ServiceOffering } from "@/types/service";

export const services: ServiceOffering[] = [
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Enterprise Custom Software",
    shortDescription:
      "Engineered from first principles to solve intricate domain challenges, streamline operations, and support multi-tenant scale.",
    fullDescription:
      "We build mission-critical business platforms engineered specifically for your operating reality. Whether replacing cumbersome legacy monoliths or building new domain engines from scratch, we focus on high throughput, strict security, and maintainable software architectures.",
    iconName: "Code2",
    keyDeliverables: [
      "Custom domain & business rule engine development",
      "Scalable multi-tenant databases with strict isolation",
      "High-throughput REST & GraphQL API architectures",
      "Role-Based Access Control (RBAC) & enterprise SSO",
      "Comprehensive test coverage (Unit, Integration & E2E)",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "Docker"],
    useCases: [
      "Replacing spreadsheets with centralized digital workflow systems",
      "Mission-critical transaction backbones for fintech and logistics",
      "Custom data pipelines and automation microservices",
    ],
  },
  {
    id: "erp-systems",
    slug: "erp-systems",
    title: "ERP & Internal Operations Systems",
    shortDescription:
      "Centralize planning, manufacturing, inventory, supply chain, and financials into a single real-time source of truth.",
    fullDescription:
      "Off-the-shelf ERP platforms are often bloated, rigid, and costly. We architect custom ERP and internal management systems that mirror your exact business processes, integrating shop floors, warehouse inventories, procurement, and management reporting.",
    iconName: "Layers",
    keyDeliverables: [
      "Real-time inventory & multi-warehouse tracking",
      "Production planning & raw material requisition engines",
      "Integrated accounting, invoice generation & billing",
      "Interactive executive dashboards with drill-down analytics",
      "Barcode/QR scanner integrations for factory floors",
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "WebSocket", "Tailwind CSS"],
    useCases: [
      "Manufacturing plant tracking from raw materials to distribution",
      "Supply chain and multi-branch retail inventory synchronization",
      "Internal audit and compliance tracking systems",
    ],
  },
  {
    id: "web-platforms",
    slug: "web-platforms",
    title: "Modern Web Platforms & SaaS",
    shortDescription:
      "High-converting, sub-second web platforms designed with Next.js App Router, edge rendering, and accessible user experiences.",
    fullDescription:
      "We build customer-facing web applications that convert visitors into revenue. From complex B2B SaaS applications to high-volume multi-brand e-commerce platforms, we deliver sub-second performance, strict SEO compliance, and fluid responsive design.",
    iconName: "Globe",
    keyDeliverables: [
      "Static-first & edge-rendered Next.js web applications",
      "Sub-second Core Web Vitals optimization (LCP < 1.2s)",
      "Secure payment gateway integrations (Stripe, SSLCommerz, PayPal)",
      "Accessible, responsive UI conforming to WCAG 2.2 AA",
      "Automated SEO structured data & OpenGraph social engines",
    ],
    techStack: ["Next.js App Router", "React 19", "Tailwind CSS v4", "Supabase", "Vercel"],
    useCases: [
      "B2B SaaS product development from MVP to scale",
      "High-conversion e-commerce storefronts with custom inventory backends",
      "Client portals and self-service account management",
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Cross-Platform Mobile Apps",
    shortDescription:
      "Native-fidelity iOS and Android applications built with Flutter, real-time sync, and offline-first data capabilities.",
    fullDescription:
      "We engineer fluid, resilient cross-platform mobile apps using Flutter and native platform channels. We specialize in enterprise field apps, customer portals, and B2B wholesale applications requiring offline capability, push notifications, and hardware integrations.",
    iconName: "Smartphone",
    keyDeliverables: [
      "Cross-platform iOS and Android codebase with 60 FPS performance",
      "Offline-first synchronization with local caching engines",
      "Hardware integrations (Camera, Biometrics, Bluetooth, Geolocation)",
      "Real-time event sync via WebSockets & Supabase Realtime",
      "App Store & Google Play submission and CI/CD pipelines",
    ],
    techStack: ["Flutter", "Dart", "Supabase", "Firebase", "SQLite", "Swift", "Kotlin"],
    useCases: [
      "B2B wholesale order placement and distributor tracking",
      "Field agent routines, attendance, and dispatch workflows",
      "Direct-to-consumer lifestyle and service apps",
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps Architecture",
    shortDescription:
      "Automated CI/CD pipelines, containerization, resilient cloud infrastructure, and proactive 24/7 telemetry.",
    fullDescription:
      "Ensure your software runs reliably in production. We design secure, automated cloud environments across AWS, Vercel, and Supabase that scale gracefully, withstand traffic spikes, and protect against data loss.",
    iconName: "Server",
    keyDeliverables: [
      "Automated GitHub Actions CI/CD with preview deployments",
      "Docker containerization & infrastructure-as-code",
      "Database backup, migration strategies, and point-in-time recovery",
      "Web Application Firewall (WAF) & DDoS mitigation via Cloudflare",
      "Centralized error telemetry, uptime alerts & performance monitoring",
    ],
    techStack: ["Docker", "GitHub Actions", "Vercel", "AWS", "Supabase", "Cloudflare"],
    useCases: [
      "Zero-downtime deployment pipelines for growing engineering teams",
      "Database clustering, read-replica configuration, and failover",
      "Security hardening and automated vulnerability scanning",
    ],
  },
];

