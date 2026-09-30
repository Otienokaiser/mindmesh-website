import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SchoolaryDashboard } from "@/components/mockups/SchoolaryDashboard";
import { Icon } from "@/components/ui/Icon";
import styles from "./Work.module.css";

export function Work() {
  return (
    <section className="section section-soft" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          eyebrow="What we're building"
          title="Products and systems in practice."
          lead="Schoolary is the product we build and run ourselves. Client systems are private to each organization, so we describe them rather than show them."
        />
        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.feature} reveal`}>
            <div className={styles.shot}><SchoolaryDashboard caption={false} /></div>
            <div className={styles.body}>
              <p className={styles.cat}>Product · School management</p>
              <h3>Schoolary</h3>
              <p>One connected system for student records, academics, attendance, fees, staff and communication.</p>
              <p className={styles.ctx}>Built and operated by MindMesh</p>
              <Link className="text-link" href="/schoolary">
                View product
                <Icon name="arrow" size={14} className="arrow" />
              </Link>
            </div>
          </article>

          <article className={`${styles.card} ${styles.invite} reveal`}>
            <p className={styles.cat}>Custom systems · Automation · Data</p>
            <h3>Your organization&rsquo;s next system</h3>
            <p>
              Business systems, automation workflows and data tools are built to order. Tell us about the process that
              slows your team down and we&rsquo;ll tell you what we&rsquo;d build.
            </p>
            <div><Button href="/contact" variant="secondary" arrow>Discuss a project</Button></div>
          </article>
        </div>
      </div>
    </section>
  );
}
