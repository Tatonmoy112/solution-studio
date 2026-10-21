export interface FaqItem {
  question: string;
  answer: string;
  category: "Engagement" | "Engineering" | "Pricing & Timelines";
}

export const faqs: FaqItem[] = [
  {
    category: "Engagement",
    question: "How do we start working with Solution Studio?",
    answer:
      "Every engagement begins with an introductory discovery consultation where we assess your business goals, current bottlenecks, and technical requirements. From there, we provide a detailed technical architecture proposal and a sprint-based execution roadmap before any commitment is made.",
  },
  {
    category: "Engineering",
    question: "Do you build custom solutions from scratch or use templates?",
    answer:
      "We build custom software tailored specifically to your domain. While we leverage battle-tested open-source libraries and frameworks (Next.js, NestJS, Flutter, PostgreSQL) to accelerate delivery, your business logic, schema, and user interface are engineered uniquely for your operational reality.",
  },
  {
    category: "Engagement",
    question: "Who owns the code and intellectual property?",
    answer:
      "You own 100% of the intellectual property, source code, database schemas, and infrastructure configurations. Upon project completion and milestone handover, full administrative rights to all repositories and cloud accounts are transferred to your organization.",
  },
  {
    category: "Pricing & Timelines",
    question: "How long does a typical project take?",
    answer:
      "A focused Minimum Viable Product (MVP) or specialized internal tool typically takes between 4 to 8 weeks. Larger enterprise platforms, custom ERPs, and multi-tenant SaaS systems usually range from 2 to 4 months delivered in transparent two-week milestone sprints.",
  },
  {
    category: "Pricing & Timelines",
    question: "What is your pricing model?",
    answer:
      "We operate primarily on fixed-scope milestone deliverables for defined projects, giving you budget certainty. For evolving product roadmaps or continuous engineering support, we provide dedicated engineering squad retainers.",
  },
  {
    category: "Engineering",
    question: "What happens after our software is deployed?",
    answer:
      "We provide a 30-day post-launch warranty period covering any bug fixes and performance tuning. Following that, we offer ongoing maintenance and infrastructure monitoring retainers to ensure your application continues operating with 99.9% uptime as your user base grows.",
  },
];

