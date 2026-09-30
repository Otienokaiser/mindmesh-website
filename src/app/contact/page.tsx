import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/sections/ContactForm";
import { site, whatsappUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./contact.module.css";

export const metadata = pageMetadata({
  title: "Contact — Start a project with MindMesh",
  description:
    "Tell MindMesh what you need: a website, custom software, school management, automation, data or AI. Based in Kenya, working with organizations across the country.",
  path: "/contact",
});

export default function ContactPage() {
  const wa = whatsappUrl();
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="What can we help you with?"
        lead="Tell us about the problem you want to solve. You'll hear back from a person, not a sales script."
      />
      <section className="section" aria-label="Contact form and details">
        <div className={`container ${styles.grid}`}>
          <ContactForm email={site.email} />
          <aside className={styles.aside} aria-label="Other ways to reach us">
            <h2>Other ways to reach us</h2>
            <ul>
              <li>
                <Icon name="mail" />
                <div><b>Email</b><a href={`mailto:${site.email}`}>{site.email}</a></div>
              </li>
              {wa && (
                <li>
                  <Icon name="whatsapp" />
                  <div><b>WhatsApp</b><a href={wa} target="_blank" rel="noopener noreferrer">Chat with us</a></div>
                </li>
              )}
              <li>
                <Icon name="pin" />
                <div><b>Location</b><span>{site.country}</span></div>
              </li>
            </ul>
            <div className={styles.info}>
              <h3>What happens next</h3>
              <ol>
                <li>We read your message and may ask a few questions.</li>
                <li>We suggest an approach and, where possible, a rough scope.</li>
                <li>If it&rsquo;s a fit, we agree a plan and start.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
