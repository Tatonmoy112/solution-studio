export const aboutPageBannerContent = {
  title: "About Us",
  backgroundSrc: "/images/about/about-hero.png",
} as const;

type AboutImage = {
  id: string;
  alt: string;
  src: string | null;
};

export const aboutIntroductionContent = {
  eyebrow: "About Us",
  titleLines: [
    "We Build Digital Experiences",
    "That Move Brands Forward",
  ],
  description:
    "Solution Studio blends strategy, design, and technology to craft digital products and brands that perform — turning ambitious ideas into measurable growth.",
  images: [
    { id: "team-portrait", alt: "Team members reviewing work together", src: null },
    { id: "planning", alt: "Team planning a digital project", src: null },
    { id: "collaboration", alt: "Design and engineering team collaborating", src: null },
    { id: "meeting", alt: "Colleagues discussing project ideas", src: null },
    { id: "discussion", alt: "Team members in a group discussion", src: null },
    { id: "celebration", alt: "Team celebrating a shared milestone", src: null },
  ] satisfies AboutImage[],
};

export const aboutWhoWeAreContent = {
  eyebrow: "The Challenge",
  title: "Who We Are",
  detailTitle: "An Agency That’s Been Solving Business Problems for Brands",
  description:
    "We are a collective of strategists, designers, and engineers who believe great brands are built at the intersection of bold creativity and sharp technology. From the first sketch to the final launch, we obsess over the details that make digital experiences feel effortless.",
  images: [
    { id: "team", alt: "Solution Studio team together", src: null },
    { id: "design", alt: "Designer working on a digital experience", src: null },
    { id: "studio", alt: "Solution Studio team at work", src: null },
  ] satisfies AboutImage[],
};

export const aboutJourneyContent = {
  eyebrow: "Our Journey",
  title: "From 2012, in order.",
  years: ["2012", "2014", "2018", "2022", "2026"],
  milestone: {
    year: "2012",
    title: "Solution Studio Was Founded",
    description:
      "We are a collective of strategists, designers, and engineers who believe great brands are built at the intersection of bold creativity and sharp technology. From the first sketch to the final launch, we obsess over the details that make digital experiences feel effortless.",
    image: {
      src: null as string | null,
      alt: "Solution Studio team discussing a project",
    },
  },
};

export const aboutImpactContent = {
  eyebrow: "Our Impact",
  title: "Scale Your Wellness",
  description:
    "Our impact is defined not only by what we create, but by how effectively it helps our clients grow, adapt and lead.",
  focusAreas: ["Efficiency", "Precision", "Growth", "Support"],
  feature: {
    backgroundSrc: null as string | null,
    message: "Singer has completely changed with Solution Studio.",
    name: "John Doe",
    role: "MD of Singer Bangladesh",
  },
  metrics: [
    {
      id: "beginnings",
      value: "2012" as string | null,
      description: "Established, Solution Studio has grown through innovation.",
      placeholderWidth: "w-[92px]",
    },
    {
      id: "clients",
      value: "650+" as string | null,
      description: "clients trust us for reliable service and measurable results.",
      placeholderWidth: "w-[112px]",
    },
    {
      id: "team",
      value: "50+" as string | null,
      description: "professionals unite creativity and technology to drive growth.",
      placeholderWidth: "w-[80px]",
    },
    {
      id: "experience",
      value: "14+" as string | null,
      description: "years of expertise delivering meaningful and lasting growth.",
      placeholderWidth: "w-[72px]",
    },
  ],
};

export const aboutTeamImageContent = {
  src: null as string | null,
  alt: "Two Solution Studio team members walking and talking outdoors",
};

export const aboutValuesContent = {
  eyebrow: "Mission,Vision & Values",
  title: "One team for whole journey",
  cards: [
    {
      category: "Values",
      icon: "values",
      title: "Transparency and service you can trust",
      description:
        "Our team believes in transparency and great customer service. This is why we connect the frontend reporting to the backend analytics, helping our clients take control and truly understand how their advertising performs.",
      image: {
        src: null as string | null,
        alt: "Team reviewing analytics and reporting together",
        position: "right",
      },
      theme: "blue",
    },
    {
      category: "Vision",
      icon: "vision",
      title: "Building trusted innovation with global impact",
      description:
        "Our vision is to be a trusted and respected world-class software company and marketing agency, developing state-of-the-art solutions that improve our clients' profits and efficiency.",
      image: {
        src: null as string | null,
        alt: "Digital products being developed on desktop and tablet screens",
        position: "left",
      },
      theme: "peach",
    },
    {
      category: "Mission",
      icon: "mission",
      title: "Helping businesses innovate, grow and thrive",
      description:
        "Our mission is to constantly grow as a professional agency and support our clients and partners with cutting-edge solutions and services that allow them to innovate, create and profit.",
      image: {
        src: null as string | null,
        alt: "Team collaborating around a laptop",
        position: "right",
      },
      theme: "blue",
    },
  ],
} as const;

export const aboutAchievementsContent = {
  eyebrow: "Our Achievements",
  title: "We Take Pride In All The",
  titleAccent: "Work We Do",
  description: "Recognised by TechBehemoths across three service categories in 2023",
  backgroundSrc: null as string | null,
  summary: {
    eyebrow: "Awards",
    title: "Our Achievements",
    year: "2023",
    count: "03 Categories",
  },
  awards: [
    {
      id: "seo",
      number: "01",
      organization: "TechBehemoths",
      yearLabel: "Awards 2023",
      category: "SEO",
      country: "Bangladesh",
      href: null as string | null,
    },
    {
      id: "ecommerce",
      number: "02",
      organization: "TechBehemoths",
      yearLabel: "Awards 2023",
      category: "E-Commerce & Development",
      country: "Bangladesh",
      href: null as string | null,
    },
    {
      id: "wordpress",
      number: "03",
      organization: "TechBehemoths",
      yearLabel: "Awards 2023",
      category: "WordPress",
      country: "Bangladesh",
      href: null as string | null,
    },
  ],
} as const;

export const aboutGrowthBannerContent = {
  titleLines: ["Your Gateway To", "Futuristic Hike", "Exploration"],
  backgroundSrc: null as string | null,
  cta: {
    label: "Let’s Grow",
    href: "/contact",
  },
} as const;
