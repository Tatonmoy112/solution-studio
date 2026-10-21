export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  verified: boolean;
}

export interface FounderBio {
  name: string;
  role: string;
  statement: string[];
  imagePath: string;
  socials: {
    linkedin?: string;
    facebook?: string;
    github?: string;
    twitter?: string;
  };
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string[];
  coordinates?: string;
  socials: {
    name: string;
    href: string;
  }[];
}

