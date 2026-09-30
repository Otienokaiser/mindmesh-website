import { stack } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./TechStack.module.css";

export function TechStack() {
  return (
    <section className="section section-soft" aria-labelledby="tech-title">
      <div className="container">
        <SectionHeading id="tech-title" eyebrow="Technology" title="Modern tools, chosen for the job." lead="We pick technology for reliability and maintainability, not novelty." />
        <dl className={styles.grid}>
          {stack.map((g) => (
            <div key={g.group} className={styles.group}>
              <dt>{g.group}</dt>
              <dd>
                <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
