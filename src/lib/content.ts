import {
  HeroContent,
  StatItem,
  AboutContent,
  WhyChooseUsContent,
  ServicesContent,
  IndustriesContent,
  ProcessContent,
  ValuesContent,
  FounderContent,
  ContactInfo,
  FooterContent
} from "./types";

export const heroContent: HeroContent = {
  headline: "Your Business Problems Deserve Real Solutions — Not Just Code",
  subheadline: "Solution Studio helps startups, SMEs, and enterprises build custom software, mobile apps, AI-powered systems, and digital products that drive real business growth — not just deliverables.",
  ctaButtons: [
    {
      text: "Let's Talk About Your Business",
      href: "#contact",
      variant: "primary"
    },
    {
      text: "See What We Build",
      href: "#services",
      variant: "secondary"
    }
  ]
};

export const statsContent: StatItem[] = [
  { number: "20+", label: "Projects Delivered" },
  { number: "15+", label: "Happy Clients" },
  { number: "1+", label: "Year Experience" }
];

export const aboutContent: AboutContent = {
  sectionTitle: "About Us",
  questionTitle: "We Started With One Question",
  questionSubtitle: "Great software isn't measured in features. It's measured in outcomes.",
  quoteBlock: {
    question: "What technology do you need?",
    answer: "What problem are you actually trying to solve?"
  },
  descriptionParagraphs: [
    "At Solution Studio, we don't just write code. We sit with businesses, understand how they operate, identify the real friction points, and then build digital systems that fix them properly.",
    "Whether you're a startup validating your first idea, an SME ready to digitize operations, or an enterprise scaling complex workflows — we work as your technology partner, not just your vendor."
  ],
  ctaText: "Let's Solve Your Problems"
};

export const whyChooseUsContent: WhyChooseUsContent = {
  sectionTitle: "Why Businesses Trust Us",
  items: [
    {
      title: "Business-first, not tech-first",
      description: "We understand your goals before we write a single line of code."
    },
    {
      title: "Built around your workflow",
      description: "No templates. No shortcuts. Custom solutions for how you actually work."
    },
    {
      title: "Honest communication, always",
      description: "You know exactly where your project stands at every stage."
    },
    {
      title: "Scalable from day one",
      description: "Built to grow with your business, not break when you do."
    },
    {
      title: "End-to-end ownership",
      description: "From the first conversation to long-term support, we stay accountable."
    },
    {
      title: "Quality that doesn't cut corners",
      description: "We test rigorously because your reputation depends on ours."
    }
  ]
};

export const servicesContent: ServicesContent = {
  sectionTitle: "What We Build For You",
  items: [
    {
      title: "Business Systems & ERP Solutions",
      description: "Take full control of your operations. We build centralized systems that connect your teams, automate repetitive processes, and give you real-time visibility into how your business runs day to day.",
      iconName: "Settings"
    },
    {
      title: "Custom Software Development",
      description: "Your business doesn't fit into an off-the-shelf product — and your software shouldn't either. We design and build applications precisely around your workflows, your team, and your goals.",
      iconName: "Code2"
    },
    {
      title: "Mobile App Solutions",
      description: "Put your business in your customers' hands. We build high-performance Android and iOS applications that are intuitive, reliable, and built to scale as your user base grows.",
      iconName: "Smartphone"
    },
    {
      title: "AI & Business Automation",
      description: "Stop spending time on work your system could be doing. We implement AI-powered tools and automation that reduce manual effort, minimize errors, and free your team to focus on what actually matters.",
      iconName: "Cpu"
    },
    {
      title: "Web Application Development",
      description: "Fast, secure, and scalable web platforms for modern businesses. Whether it's a customer-facing portal or an internal management tool — we build it right the first time.",
      iconName: "Globe"
    },
    {
      title: "Digital Transformation Consulting",
      description: "Not sure where technology fits into your business strategy? We help you build a clear roadmap — identifying where digital solutions will create the most impact and how to get there without wasted time or budget.",
      iconName: "TrendingUp"
    }
  ]
};

export const industriesContent: IndustriesContent = {
  sectionTitle: "Industries We Understand",
  subtitle: "We don't just build software — we understand the industries we build for.",
  items: [
    {
      title: "Manufacturing",
      description: "Streamline production tracking, automate inventory management, and get the operational visibility your floor demands — all in one connected system.",
      iconName: "Factory"
    },
    {
      title: "Healthcare",
      description: "Patient management, appointment platforms, and clinical workflows that improve care delivery and reduce the administrative burden on your staff.",
      iconName: "HeartPulse"
    },
    {
      title: "Retail & E-Commerce",
      description: "Connect your inventory, sales channels, and customer experience into a single system built to handle real-world retail complexity.",
      iconName: "ShoppingBag"
    },
    {
      title: "Education",
      description: "Digital learning platforms and institution management systems that make education more accessible, trackable, and effective for everyone involved.",
      iconName: "GraduationCap"
    },
    {
      title: "Startups",
      description: "From first MVP to market-ready product — we help founders validate fast, build right, and scale confidently. We've been there. We know the pressure.",
      iconName: "Rocket"
    },
    {
      title: "SMEs & Enterprises",
      description: "Whether you're digitizing for the first time or scaling what's already working — we bring the technical depth and business understanding to make the next step count.",
      iconName: "Building2"
    }
  ]
};

export const processContent: ProcessContent = {
  sectionTitle: "How We Actually Work",
  subtitle: "No surprises. No black boxes. Just a clear process from start to finish.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description: "We spend real time learning your business. Your goals, your challenges, your users, and what success actually looks like for you — not for us."
    },
    {
      number: "02",
      title: "Strategize",
      description: "We turn that understanding into a clear plan. What to build, why, in what order, and how it directly connects to your business outcomes."
    },
    {
      number: "03",
      title: "Design",
      description: "We create intuitive, scalable experiences that feel natural to the people who will use them every single day."
    },
    {
      number: "04",
      title: "Develop",
      description: "We build with care — clean architecture, secure code, and performance that holds up under real-world conditions."
    },
    {
      number: "05",
      title: "Launch",
      description: "We deploy thoughtfully, test rigorously, and make sure everything that goes live is something you're proud to put your name on."
    },
    {
      number: "06",
      title: "Support",
      description: "This is where most agencies disappear. We stay. Continuous improvements, ongoing support, and a long-term partnership you can actually count on."
    }
  ]
};

export const valuesContent: ValuesContent = {
  sectionTitle: "What We Stand For",
  items: [
    {
      title: "Outcomes Over Outputs",
      description: "We measure our work by what actually changed for your business — not by how many features got shipped."
    },
    {
      title: "Full Ownership",
      description: "When we take on a project, we take full responsibility for it. No finger-pointing. No dropped handoffs."
    },
    {
      title: "Honest Communication",
      description: "You'll always hear the truth from us — even when it's not what you were hoping for. That's how real trust gets built."
    },
    {
      title: "Quality by Default",
      description: "We don't do \"good enough.\" Every product, every release, every interaction reflects our standard of work."
    },
    {
      title: "Genuine Partnership",
      description: "We grow when our clients grow. That's not a tagline — it's simply how we've built this company."
    }
  ],
  mission: {
    title: "Our Mission",
    description: "To help businesses across Bangladesh — and beyond — use technology not as a cost to manage, but as a competitive advantage that drives growth, efficiency, and long-term value."
  },
  vision: {
    title: "Our Vision",
    description: "To become Bangladesh's most trusted technology partner — known not just for the software we build, but for the business outcomes we consistently create."
  }
};

export const founderContent: FounderContent = {
  sectionTitle: "A Word From Our Founder",
  messageLines: [
    "I started Solution Studio because I kept seeing the same pattern: businesses paying for software that didn't actually solve their problem.",
    "They'd get a product. It would check all the technical boxes. But the real challenge — the bottleneck, the inefficiency, the thing keeping the business from growing — was still there. Nothing had fundamentally changed.",
    "I think that happens because most software companies are selling technology. They're not solving problems.",
    "We do things differently here. We start by listening. We ask hard questions. We push back when what's being requested isn't actually what's needed. And we stay accountable long after the project is delivered — because that's when you find out if what you built actually works.",
    "If you're looking for a team that just builds whatever you ask for, we're probably not the right fit.",
    "But if you want a partner who thinks about your business outcomes first — and builds technology around that — I'd genuinely love to have that conversation."
  ],
  name: "Tanvir Ahmed Tonmoy",
  role: "Founder, Solution Studio",
  imagePath: "/images/founder.jpg"
};

export const contactInfo: ContactInfo = {
  email: "hello@solutionstudio.bd",
  phone: "+880 1316-571406",
  address: [
    "House # 55",
    "Road # Hazi Askor Ali Road",
    "Khapara, Tongi",
    "Gazipur - 1712"
  ]
};

export const footerContent: FooterContent = {
  tagline: "Not services. Real outcomes.",
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com/company/solution-studio-bd" },
    { name: "Facebook", href: "https://www.facebook.com/share/1bmLnLLAY6/?mibextid=wwXIfr" },
    { name: "Twitter", href: "https://twitter.com/solution_studio" },
    { name: "GitHub", href: "https://github.com/Tatonmoy112" }
  ]
};
