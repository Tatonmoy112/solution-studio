export type NavigationItem = {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  disabled?: boolean;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", hasMegaMenu: true },
  { label: "Services", href: "/services" },
  { label: "Product", href: "/product", disabled: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const aboutNavigation = [
  {
    title: "Company",
    description: "How we work and what guides us.",
    href: "/about",
    icon: "company",
  },
  {
    title: "Our Team",
    description: "Meet the people behind our work.",
    href: "/team",
    icon: "team",
  },
  {
    title: "Services",
    description: "Explore our digital capabilities.",
    href: "/services",
    icon: "services",
  },
  {
    title: "Careers",
    description: "Build meaningful products with us.",
    href: "/careers",
    icon: "careers",
  },
] as const;
