import { Button } from "@/components/ui/Button";
import { SchoolaryDashboard } from "@/components/mockups/SchoolaryDashboard";
import { schoolaryModules } from "@/lib/content";
import styles from "./SchoolaryFeature.module.css";

export function SchoolaryFeature() {
  return (
    <section className={`section section-dark ${styles.section}`} id="schoolary" aria-labelledby="schoolary-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow">A MindMesh product</p>
          <h2 id="schoolary-title">School management, reimagined.</h2>
          <p className="lead">
            Schoolary is a modern school management platform that brings student records, academics, attendance, fees,
            staff, communication and school operations into one connected system.
          </p>
          <ul className={styles.modules} aria-label="Schoolary modules">
            {schoolaryModules.map((m) => <li key={m}>{m}</li>)}
          </ul>
          <div className={styles.actions}>
            <Button href="/schoolary" variant="brand" arrow>Explore Schoolary</Button>
          </div>
          <p className={styles.note}>Designed, built and operated by MindMesh.</p>
        </div>
        <div className={`${styles.visual} reveal`}>
          <SchoolaryDashboard />
        </div>
      </div>
    </section>
  );
}
