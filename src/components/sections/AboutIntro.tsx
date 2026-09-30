import { Button } from "@/components/ui/Button";
import styles from "./AboutIntro.module.css";

export function AboutIntro() {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="eyebrow">About MindMesh</p>
          <h2 id="about-title">Technology should make things simpler.</h2>
        </div>
        <div className={styles.text}>
          <p>
            Too much software adds work instead of removing it. MindMesh exists to build the opposite: tools that fit
            how people actually work, in places where off-the-shelf products often don&rsquo;t.
          </p>
          <p>
            We are a Kenyan technology company. We build for schools, businesses and organizations here, and we build
            to a standard that holds up anywhere. Our own product, Schoolary, is how we test our ideas against real
            daily use.
          </p>
          <Button href="/about" variant="secondary" arrow>Our story</Button>
        </div>
      </div>
    </section>
  );
}
