import { principles } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./WhyUs.module.css";

export function WhyUs() {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className={`container ${styles.grid}`}>
        <SectionHeading id="why-title" eyebrow="Why MindMesh" title="Practical by design." lead="Good technology disappears into the work. That is the standard we build to." />
        <ul className={styles.list}>
          {principles.map((p) => (
            <li key={p.title} className="reveal">
              <Icon name={p.icon} className={styles.icon} />
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
