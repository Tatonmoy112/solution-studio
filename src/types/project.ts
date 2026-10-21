export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  year: string;
  summary: string;
  fullOverview: string;
  image: string;
  tags: string[];
  metrics?: ProjectMetric[];
  architectureHighlights?: string[];
  coreFeatures: string[];
  technicalChallenges: string[];
  businessOutcomes: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: "live" | "private" | "not-live";
  featured: boolean;
}

