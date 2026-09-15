export const siteConfig = {
  name: "Solution Studio",
  logo: "/images/brand/ss logo.png",
  contactHref: "/contact",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
