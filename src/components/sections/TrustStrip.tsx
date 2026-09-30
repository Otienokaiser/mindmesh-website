import styles from "./TrustStrip.module.css";

const pillars = ["Software engineering", "Data & analytics", "Workflow automation", "Applied AI"];

export function TrustStrip() {
  return (
    <section className={styles.strip} aria-label="About MindMesh">
      <div className={`container ${styles.inner}`}>
        <p className={styles.statement}>
          Building technology for organizations across Kenya, and running our own product, Schoolary, in the real
          world.
        </p>
        <ul className={styles.list}>
          {pillars.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}
