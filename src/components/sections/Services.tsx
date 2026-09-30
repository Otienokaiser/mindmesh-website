import Link from "next/link";
import { services } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          title="Technology built around your needs."
          lead="We combine software engineering, data, automation and AI, so the solution fits the problem instead of the other way round."
        />
        <ul className={styles.grid}>
          {services.map((s) => (
            <li key={s.slug} className={`${styles.item} reveal`}>
              <span className={styles.icon}><Icon name={s.icon} /></span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <Link className={`text-link ${styles.more}`} href={`/services#${s.slug}`}>
                Learn more<span className="visually-hidden"> about {s.title}</span>
                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
