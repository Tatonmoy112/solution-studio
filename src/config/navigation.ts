export type MegaMenuKey = "about" | "services" | "product";

export type NavigationItem = {
  label: string;
  href: string;
  megaMenu?: MegaMenuKey;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", megaMenu: "about" },
  { label: "Services", href: "/services", megaMenu: "services" },
  { label: "Product", href: "/product", megaMenu: "product" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const aboutNavigation = [
  { title: "Our Team", description: "The people behind the work.", href: "/team", icon: "team" },
  { title: "Gallery", description: "A look inside the studio.", href: "/about", icon: "gallery" },
  { title: "Clients", description: "Brands we partner with.", href: "/clients", icon: "clients" },
  { title: "Events", description: "Talks, meetups and launches.", href: "/about", icon: "events" },
  { title: "Partnerships", description: "Alliances and integrations.", href: "/about", icon: "partnerships" },
  { title: "Career", description: "Open roles - join us.", href: "/careers", icon: "career" },
] as const;

export const aboutMenuBannerImageSrc: string | null = null;

export const serviceNavigation = [
  {
    title: "Strategy",
    href: "/services/strategy",
    icon: "strategy",
    items: ["Discovery & research", "Product strategy", "Brand positioning", "Customer journeys", "Growth planning"],
  },
  {
    title: "Design",
    href: "/services/design",
    icon: "design",
    items: ["Product design", "Web design", "Brand identity", "Experience design", "Design systems"],
  },
  {
    title: "Engineering",
    href: "/services/engineering",
    icon: "engineering",
    items: ["Software development", "Web development", "Android & iOS apps", "Scalable platforms", "Ongoing improvement"],
  },
] as const;

export const servicesMenuFeatureImageSrc: string | null = null;

type ProductNavigationItem = {
  title: string;
  description: string;
  href: string;
  action: string;
  imageSrc: string | null;
};

export const productNavigation: readonly ProductNavigationItem[] = [
  {
    title: "Product work",
    description: "Explore the digital experiences we have designed and built with our partners.",
    href: "/portfolio",
    action: "Explore our work",
    imageSrc: null,
  },
  {
    title: "Build with us",
    description: "Have a product idea? Start a conversation with our team about what comes next.",
    href: "/contact",
    action: "Start a project",
    imageSrc: null,
  },
];
