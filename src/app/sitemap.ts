import { MetadataRoute } from "next";
// import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://solutionstudio.bd";
  const currentDate = new Date();

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Temporarily hidden: Case Studies
    // {
    //   url: `${baseUrl}/projects`,
    //   lastModified: currentDate,
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic project case study routes - Temporarily hidden
  // const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
  //   url: `${baseUrl}/projects/${p.slug}`,
  //   lastModified: currentDate,
  //   changeFrequency: "monthly",
  //   priority: 0.8,
  // }));

  return staticRoutes;
}

