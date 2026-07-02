export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaButtons: {
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
}

export interface StatItem {
  number: string;
  label: string;
}

export interface AboutContent {
  sectionTitle: string;
  questionTitle: string;
  questionSubtitle: string;
  quoteBlock: {
    question: string;
    answer: string;
  };
  descriptionParagraphs: string[];
  ctaText: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface WhyChooseUsContent {
  sectionTitle: string;
  items: WhyChooseUsItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ServicesContent {
  sectionTitle: string;
  items: ServiceItem[];
}

export interface IndustryItem {
  title: string;
  description: string;
  iconName: string;
}

export interface IndustriesContent {
  sectionTitle: string;
  subtitle: string;
  items: IndustryItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  sectionTitle: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ValuesContent {
  sectionTitle: string;
  items: ValueItem[];
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
}

export interface FounderContent {
  sectionTitle: string;
  messageLines: string[];
  name: string;
  role: string;
  imagePath: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string[];
}

export interface FooterContent {
  tagline: string;
  socials: {
    name: string;
    href: string;
  }[];
}
