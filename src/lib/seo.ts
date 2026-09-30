import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

/** Per-page metadata with canonical, Open Graph and Twitter cards. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description, siteName: site.name, locale: "en_KE" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: absoluteUrl("/icon.svg"),
  description: site.description,
  email: site.email,
  areaServed: { "@type": "Country", name: "Kenya" },
  address: { "@type": "PostalAddress", addressCountry: "KE" },
  owns: { "@type": "SoftwareApplication", name: "Schoolary", applicationCategory: "EducationalApplication" },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};
