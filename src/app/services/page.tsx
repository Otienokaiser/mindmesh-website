import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { Process } from "@/components/sections/Process";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import styles from "./services.module.css";

export const metadata = pageMetadata({
  title: "Services — Software, Data, Automation & AI",
  description:
    "Custom software, websites, data analytics, AI automation, business systems and technology consulting from MindMesh, a Kenyan technology company.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology built around your needs."
        lead="Software engineering, data, automation and AI, combined to solve the problem in front of you."
      />
      <section className="section" aria-label="Services">
        <div className="container">
          <ul className={styles.list}>
            {services.map((s) => (
              <li key={s.slug} id={s.slug} className={styles.row}>
                <div className={styles.head}>
                  <span className={styles.icon}><Icon name={s.icon} /></span>
                  <h2>{s.title}</h2>
                </div>
                <div className={styles.body}>
                  <p className={styles.summary}>{s.summary}</p>
                  <p>{s.detail}</p>
                  <ul className={styles.points}>
                    {s.points.map((p) => (
                      <li key={p}><Icon name="check" size={16} />{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.more}>
            <Button href="/contact" arrow>Tell us what you need</Button>
          </div>
        </div>
      </section>
      <Process />
      <CTASection />
    </>
  );
}
