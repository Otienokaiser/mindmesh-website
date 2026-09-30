import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/products", priority: 0.8 },
  { path: "/schoolary", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: absoluteUrl(r.path), lastModified: new Date(), priority: r.priority }));
}
