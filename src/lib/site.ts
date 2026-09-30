/**
 * Single source of truth for company facts. Anything that could not be verified
 * from the project is read from the environment (see .env.example) rather than hard-coded.
 */
const digits = (v?: string) => (v ?? "").replace(/\D/g, "");

export const site = {
  name: "MindMesh",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindmesh.co.ke").replace(/\/$/, ""),
  tagline: "Technology that moves your organization forward.",
  title: "MindMesh — Software, Data, Automation & AI",
  description:
    "MindMesh is a Kenyan technology company building software, digital products, data systems and AI automation for schools, businesses and organizations. Creator of Schoolary.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@mindmesh.co.ke",
  whatsapp: digits(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  schoolaryUrl: process.env.NEXT_PUBLIC_SCHOOLARY_URL ?? "",
  country: "Kenya",
  year: 2026,
} as const;

export function whatsappUrl(text = "Hello MindMesh, I'd like to talk about a project."): string | null {
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : null;
}

export function absoluteUrl(path = "/"): string {
  return `${site.url}${path === "/" ? "" : path}`;
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
