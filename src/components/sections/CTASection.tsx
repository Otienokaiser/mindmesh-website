import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/site";
import styles from "./CTASection.module.css";

interface Props {
  title?: string;
  text?: string;
}

export function CTASection({
  title = "Have a problem worth solving?",
  text = "Let's turn it into a working digital solution.",
}: Props) {
  const wa = whatsappUrl();
  return (
    <section className={`${styles.cta} on-dark`} aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.actions}>
          <Button href="/contact" variant="brand" arrow>Start a conversation</Button>
          {wa && <Button href={wa} variant="outline-light">WhatsApp us</Button>}
        </div>
      </div>
    </section>
  );
}
