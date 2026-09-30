import { process } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading id="process-title" eyebrow="How we work" title="From problem to product." />
        <ol className={styles.list}>
          {process.map((s) => (
            <li key={s.n} className={`${styles.step} reveal`}>
              <span className={styles.n}>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
