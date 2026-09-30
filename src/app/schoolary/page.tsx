import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SchoolaryDashboard } from "@/components/mockups/SchoolaryDashboard";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { absoluteUrl, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./schoolary.module.css";

export const metadata = pageMetadata({
  title: "Schoolary — School Management Platform by MindMesh",
  description:
    "Schoolary is a modern school management platform by MindMesh that connects student records, academics, attendance, fees, staff and communication in one system.",
  path: "/schoolary",
});

const modules = [
  { t: "Student records", d: "A single, reliable record for every learner, from admission onwards." },
  { t: "Academics", d: "Classes, subjects, assessments and results kept in one place." },
  { t: "Attendance", d: "Daily attendance captured quickly and visible to those who need it." },
  { t: "Fees", d: "Fee structures, payments and balances without parallel spreadsheets." },
  { t: "Staff", d: "Staff records and responsibilities organized alongside the school." },
  { t: "Communication", d: "Reach parents, staff and classes from the same system." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Schoolary",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  url: absoluteUrl("/schoolary"),
  description: "A school management platform for student records, academics, attendance, fees, staff and communication.",
  creator: { "@type": "Organization", name: site.name, url: site.url },
};

export default function SchoolaryPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="A MindMesh product"
        title="School management, reimagined."
        lead="Schoolary brings student records, academics, attendance, fees, staff, communication and school operations into one connected system."
      />
      <section className="section" aria-label="Schoolary overview">
        <div className="container">
          <div className={styles.shot}><SchoolaryDashboard /></div>
          <div className={styles.actions}>
            {site.schoolaryUrl && <Button href={site.schoolaryUrl} arrow>Visit Schoolary</Button>}
            <Button href="/contact" variant={site.schoolaryUrl ? "secondary" : "primary"} arrow>
              Ask about Schoolary
            </Button>
          </div>
        </div>
      </section>
      <section className="section section-soft" aria-labelledby="modules-title">
        <div className="container">
          <h2 id="modules-title" style={{ fontSize: "var(--step-4)", maxWidth: "18ch" }}>One system for the whole school.</h2>
          <ul className={styles.grid}>
            {modules.map((m) => (
              <li key={m.t} className="reveal">
                <Icon name="check" className={styles.tick} />
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section" aria-labelledby="by-title">
        <div className="container container-narrow">
          <p className="eyebrow">Built by MindMesh</p>
          <h2 id="by-title" style={{ fontSize: "var(--step-3)", marginTop: "1rem" }}>Part of a broader technology company.</h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Schoolary is designed, built and operated by MindMesh. The same team also builds custom software, data
            systems and automation for businesses and organizations.
          </p>
          <div style={{ marginTop: "1.75rem" }}><Button href="/about" variant="secondary" arrow>About MindMesh</Button></div>
        </div>
      </section>
      <CTASection title="Want Schoolary at your school?" text="Tell us about your school and we'll show you how it could work for you." />
    </>
  );
}
