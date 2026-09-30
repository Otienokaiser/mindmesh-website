import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.css";

const cols = [
  {
    title: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/products", label: "Products" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  { title: "Products", links: [{ href: "/schoolary", label: "Schoolary" }] },
  {
    title: "Services",
    links: [
      { href: "/services#custom-software", label: "Software Development" },
      { href: "/services#websites", label: "Websites" },
      { href: "/services#data-analytics", label: "Data & Analytics" },
      { href: "/services#ai-automation", label: "AI & Automation" },
    ],
  },
];

export function Footer() {
  const wa = whatsappUrl();
  return (
    <footer className={`${styles.footer} on-dark`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" aria-label="MindMesh home"><Logo light /></Link>
            <p>{site.tagline}</p>
          </div>

          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className={styles.h}>{c.title}</h2>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className={styles.h}>Contact</h2>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              {wa && <li><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>}
              <li><span>{site.country}</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {site.year} MindMesh. All rights reserved.</p>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
