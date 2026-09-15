import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/blog",
  "/careers",
  "/clients",
  "/team",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route || "/", siteConfig.url).toString(),
  }));
}
