import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.siteUrl,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
