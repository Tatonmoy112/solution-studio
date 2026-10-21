import {
  NavItem,
  StatItem,
  ValuePillar,
  ProcessStep,
  Testimonial,
  FounderBio,
  CompanyInfo,
} from "@/types/company";

export const navigationItems: NavItem[] = [
  { label: "Services", href: "/services" },
  // Temporarily hidden: Case Studies
  // { label: "Case Studies", href: "/projects" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  headline: "Engineering Custom Software That Drives Real Business Growth.",
  subheadline:
    "Solution Studio partners with ambitious startups, growing SMEs, and enterprise leaders to architect high-throughput web platforms, custom ERPs, and resilient mobile applications — engineered from first principles.",
  primaryCta: {
    label: "Initiate Project Inquiry",
    href: "/contact",
  },
  secondaryCta: {
    label: "Explore Capabilities",
    href: "/services",
  },
};

export const companyStats: StatItem[] = [
  { value: "20+", label: "Systems Delivered", subtext: "From ERPs to multi-tenant SaaS" },
  { value: "15+", label: "Enterprise & SME Clients", subtext: "Long-term engineering partnerships" },
  { value: "99.9%", label: "System Reliability", subtext: "High-uptime production standards" },
  { value: "100%", label: "In-House Architecture", subtext: "Zero outsourced code quality risk" },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Business-First, Not Tech-First",
    description:
      "We unpack your operating bottlenecks and financial objectives before writing a line of code. Software is an investment that must yield measurable return.",
  },
  {
    title: "Precision Engineering & Architecture",
    description:
      "No fragile shortcuts or copy-paste templates. We design maintainable domain models, strictly-typed schemas, and testable codebases built to scale.",
  },
  {
    title: "Radical Transparency & Predictability",
    description:
      "Direct communication with senior engineers. Detailed sprint roadmaps, visible pull requests, and predictable release cadences with zero surprises.",
  },
  {
    title: "Long-Term Operational Partnership",
    description:
      "Our engagement doesn't end at deployment. We ensure seamless team onboarding, comprehensive documentation, and proactive infrastructure support.",
  },
];

export const engineeringProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Domain Discovery & Problem Analysis",
    tagline: "We listen, dissect workflows, and define the real problem.",
    description:
      "We interview key stakeholders, map out existing manual friction points, analyze data flows, and establish clear technical and business success metrics.",
    deliverables: ["Product Requirements Document", "Technical Scope & Feasibility Report", "Sprint Delivery Plan"],
  },
  {
    step: "02",
    title: "System Architecture & Data Modeling",
    tagline: "Building the foundation for scalability and security.",
    description:
      "We design the complete relational database schema, API contracts, infrastructure topology, and security policies before interface prototyping begins.",
    deliverables: ["Entity-Relationship (ER) Diagrams", "API Specifications", "Cloud Infrastructure Blueprint"],
  },
  {
    step: "03",
    title: "Iterative Engineering & Quality Assurance",
    tagline: "Strict type safety, clean code, and automated CI/CD.",
    description:
      "We build in two-week milestone sprints with automated tests, continuous preview deployments, and direct stakeholder feedback loops.",
    deliverables: ["Live Staging Environments", "Automated Test Suites", "Progress Demos"],
  },
  {
    step: "04",
    title: "Production Deployment & Handover",
    tagline: "Zero-downtime release with telemetry and training.",
    description:
      "We orchestrate production migrations, configure WAF firewalls and error telemetry, and deliver comprehensive operational runbooks and team training.",
    deliverables: ["Production Release", "Source Code & Repository Handover", "Operational Runbooks"],
  },
];

export const clientTestimonials: Testimonial[] = [
  {
    quote:
      "Solution Studio took our chaotic factory planning process and turned it into an automated ERP. Our inventory errors dropped by nearly half within the first three months of operation.",
    clientName: "Executive Leadership",
    clientRole: "Managing Director",
    company: "Giant BD Footwear Ltd.",
    verified: true,
  },
  {
    quote:
      "The engineering depth of Solution Studio is exceptional. Their work on our OTA platform gave our agents a fast, reliable tool that handles complex airline booking workflows effortlessly.",
    clientName: "Operations Head",
    clientRole: "Head of Digital Operations",
    company: "Finger Flight Travel",
    verified: true,
  },
  {
    quote:
      "Unlike conventional agencies who just hand over visual templates, Solution Studio acted as our real technical partner, architecting a Flutter and Supabase system that runs seamlessly in the field.",
    clientName: "Product Founder",
    clientRole: "Co-Founder & CEO",
    company: "MalaMal Network",
    verified: true,
  },
];

export const founderBio: FounderBio = {
  name: "Tanvir Ahmed Tonmoy",
  role: "Founder, Solution Studio",
  statement: [
    "I founded Solution Studio with a simple conviction: businesses don't need more generic websites or bloated software packages — they need real solutions to hard operational problems.",
    "Too many agencies deliver code that looks decent on surface level but breaks the moment edge cases and scale arrive. We approach every engagement as engineers first, designing architectures that stand the test of time, protect your business data, and drive measurable enterprise value.",
  ],
  imagePath: "/images/founder.jpg",
  socials: {
    facebook: "https://www.facebook.com/share/1bmLnLLAY6/?mibextid=wwXIfr",
    linkedin: "https://linkedin.com/company/solution-studio-bd",
  },
};

export const companyInfo: CompanyInfo = {
  name: "Solution Studio",
  tagline: "Enterprise Software Engineering & Custom Architectures",
  email: "hello@solutionstudio.bd",
  phone: "+880 1316-571406",
  address: [
    "House # 55, Road # Hazi Askor Ali Road",
    "Khapara, Tongi, Gazipur - 1712",
    "Bangladesh",
  ],
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/share/1bmLnLLAY6/?mibextid=wwXIfr" },
    { name: "LinkedIn", href: "https://linkedin.com/company/solution-studio-bd" },
  ],
};

