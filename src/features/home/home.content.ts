export const homeHeroContent = {
  title: {
    firstLine: "A Unified",
    gateway: "Gateway",
    secondLine: "to All Your",
    accent: "imagination",
  },
  description:
    "Imagination sparks possibility. We turn those sparks into reality. Together, we shape the future of creation.",
  cta: {
    label: "Get a Proposal",
    href: "/contact",
  },
} as const;

export const homeWhoWeAreContent = {
  eyebrow: "Who We Are",
  title: "A digital partner, built for the pace of modern brands.",
  description:
    "We don't hand off decks and disappear. Solution Studio embeds with your team to define the strategy, craft the experience, and engineer the product — then stays to help it grow. The result is work that's beautiful, fast, and built to scale.",
  values: [
    {
      icon: "target",
      title: "Outcome-obsessed",
      description: "We measure success in your metrics, not our deliverables.",
    },
    {
      icon: "flag",
      title: "Senior, always",
      description: "The people who pitch are the people who build.",
    },
    {
      icon: "code",
      title: "Design + code",
      description: "No translation loss between idea and shipped product.",
    },
    {
      icon: "blocks",
      title: "Built to scale",
      description: "Systems and infrastructure ready for global demand.",
    },
  ],
  media: {
    src: null,
    alt: "Solution Studio team collaborating in the office",
    title: "One team. End to end.",
    description: "Strategists, designers & engineers in lockstep.",
  },
} as const;

export const homeJourneyContent = {
  eyebrow: "A Partner Built For Modern Brands",
  title: "One team for the whole journey",
  cards: [
    {
      category: "Strategy",
      icon: "strategy",
      title: "We start where it matters — outcomes",
      description:
        "No decks that gather dust. We pressure-test the opportunity, define the metric that moves your business, and align every decision around it.",
      cta: {
        label: "How we plan",
        href: "/services/strategy",
      },
      image: {
        src: null,
        alt: "Strategy team collaborating around a laptop",
        position: "right",
      },
      theme: "blue",
    },
    {
      category: "Design",
      icon: "design",
      title: "Interfaces people actually love to use",
      description:
        "Research-led product and brand design with craft in every pixel — clarity that converts and identity that sticks long after launch.",
      cta: {
        label: "See the craft",
        href: "/services/design",
      },
      image: {
        src: null,
        alt: "Designer working on a digital product interface",
        position: "left",
      },
      theme: "peach",
    },
    {
      category: "Engineering",
      icon: "engineering",
      title: "Built on a modern, scalable stack",
      description:
        "High-performance sites and apps engineered to last. No translation lost between idea and shipped product — designers and engineers in one room.",
      cta: {
        label: "Our process",
        href: "/services/engineering",
      },
      image: {
        src: null,
        alt: "Engineering team reviewing software systems",
        position: "right",
      },
      theme: "blue",
    },
  ],
} as const;

export const homeTrustedTeamsContent = {
  title: "Trusted by forward-thinking teams",
  logos: [
    { name: "DBL Group", src: null, width: 90 },
    { name: "Saltanat", src: null, width: 140 },
    { name: "Ispahani", src: null, width: 137 },
    { name: "W", src: null, width: 75 },
    { name: "Leo", src: null, width: 70 },
    { name: "Unilever", src: null, width: 135 },
    { name: "Savoy", src: null, width: 90 },
  ],
} as const;

export const homeServicesContent = {
  eyebrow: "Services",
  title: "What We Do Best",
  description:
    "We embed with your team to define the strategy, craft the experience, and engineer the product — then stay to help it grow. The result is work that's beautiful, fast, and built to scale.",
  cards: [
    {
      title: "Software Development",
      description:
        "Custom software solutions built for performance, scalability, and seamless business operations—from web applications and ERP systems to mobile apps and automation.",
      href: "/services/software-development",
      icon: "software",
      image: {
        src: null,
        alt: "Software interface displayed across desktop and tablet screens",
      },
      theme: "peach",
    },
    {
      title: "Android & iOS App",
      description:
        "Native and cross-platform mobile products designed for speed, reliability, and a consistent experience across Android and iOS devices.",
      href: "/services/mobile-app-development",
      icon: "mobile",
      image: {
        src: null,
        alt: "Mobile application interface displayed on smartphones",
      },
      theme: "blue",
    },
    {
      title: "Web Design & Development",
      description:
        "Responsive websites and web applications built around clear user journeys, strong visual systems, accessibility, and measurable business outcomes.",
      href: "/services/web-design-development",
      icon: "web",
      image: {
        src: null,
        alt: "Responsive website interface displayed across multiple screens",
      },
      theme: "blue",
    },
  ],
} as const;

export const homeFounderContent = {
  name: {
    first: "Tanvir",
    last: "Ahmed",
  },
  label: "The Founder",
  statement:
    "At Solution Studio, we believe in the power of ideas to transform businesses. Our mission is to create digital experiences that are innovative and impactful by combining strategy, design, and technology to drive measurable growth. Every project is handled with precision, creativity, and a clear understanding of our clients’ goals. We don’t just build websites or apps — we create experiences that connect brands with people. Innovation guides everything we do. Our team turns complex challenges into simple, elegant solutions while helping businesses evolve and stand out in a fast-moving digital world. Through collaboration and strong partnerships, we work together with our clients to shape the future of their brands and redefine what’s possible in the digital space.",
} as const;

export const homeFounderTopicsContent = {
  ariaLabel: "Founder topics",
  items: [
    { label: "DBL Leadership", accent: true },
    { label: "Real growth, real people", accent: false },
    { label: "Purpose-led work", accent: true },
    { label: "Radical belonging", accent: false },
    { label: "Women in leadership", accent: true },
    { label: "Real growth, real people", accent: false },
  ],
} as const;

export const homePortfolioPreviewContent = {
  eyebrow: "Latest Projects",
  title: "Portfolio To Explore",
  description: "Explore selected projects by category.",
  categories: [
    { label: "all categories", value: "all" },
    { label: "abstract", value: "abstract" },
    { label: "advertisement", value: "advertisement" },
    { label: "branding", value: "branding" },
    { label: "product", value: "product" },
    { label: "web", value: "web" },
  ],
  projects: [
    {
      title: "Abstract project preview",
      categories: ["abstract"],
      image: { src: null, alt: "Abstract project preview" },
      theme: "amber",
    },
    {
      title: "Advertisement project preview",
      categories: ["advertisement"],
      image: { src: null, alt: "Advertisement project preview" },
      theme: "charcoal",
    },
    {
      title: "Product project preview",
      categories: ["product", "web"],
      image: { src: null, alt: "Product project preview" },
      theme: "indigo",
    },
    {
      title: "Branding project preview",
      categories: ["branding", "web"],
      image: { src: null, alt: "Branding project preview" },
      theme: "forest",
    },
  ],
  seeAll: { label: "See All", href: "/portfolio" },
} as const;

export const homeTrustedPartnersContent = {
  eyebrow: "Trusted Partners",
  title: "A Trusted Partner of Leading Technology Companies",
  description:
    "Working across platforms and disciplines to build digital experiences that last.",
  partners: [
    { name: "Partner 01", src: null },
    { name: "Partner 02", src: null },
    { name: "Partner 03", src: null },
  ],
} as const;

export const homeBlogPreviewContent = {
  eyebrow: "Our Blog",
  title: "Latest creative thinking journals",
  description: "Ideas and perspectives from our team.",
  articles: [
    {
      title: "5 Steps to Create an Outstanding Marketing Plan",
      category: "Marketing",
      publishedAt: "2026-05-07",
      dateLabel: "May 7, 2026",
      image: {
        src: null,
        alt: "Phone showing a marketing website",
      },
      theme: "charcoal",
    },
    {
      title: "Play to Your Strengths and Supercharge Business",
      category: "Marketing",
      publishedAt: "2026-05-07",
      dateLabel: "May 7, 2026",
      image: {
        src: null,
        alt: "Brand strategy displayed on a laptop",
      },
      theme: "warm",
    },
    {
      title: "The Top Digital Marketing for Business Growth",
      category: "Marketing",
      publishedAt: "2026-05-07",
      dateLabel: "May 7, 2026",
      image: {
        src: null,
        alt: "Abstract digital artwork in a glass display",
      },
      theme: "slate",
    },
  ],
} as const;
