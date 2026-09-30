import { Button } from "@/components/ui/Button";
import { MeshVisual } from "@/components/mockups/MeshVisual";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Software · Data · Automation · AI</p>
          <h1 id="hero-title">We build technology that solves real-world problems.</h1>
          <p className="lead">
            MindMesh designs and builds software, digital products and intelligent systems that help organizations
            operate better, serve their customers and grow.
          </p>
          <div className={styles.actions}>
            <Button href="/contact" arrow>Start a project</Button>
            <Button href="/products" variant="secondary">Explore our products</Button>
          </div>
        </div>
        <div className={styles.visual}>
          <MeshVisual />
        </div>
      </div>
    </section>
  );
}
