import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms governing use of the MindMesh website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" lead="Last updated: 2026. These terms cover your use of mindmesh.co.ke." />
      <section className="section">
        <div className="container container-narrow prose">
          <h2>Use of this website</h2>
          <p>The content on this website is provided for general information about MindMesh and its services. Please use it lawfully and do not attempt to disrupt or misuse it.</p>
          <h2>No offer or guarantee</h2>
          <p>Information here is not a quote or contract. Engagements with MindMesh are governed by a separate written agreement.</p>
          <h2>Intellectual property</h2>
          <p>The MindMesh and Schoolary names, logos and website content belong to MindMesh unless stated otherwise.</p>
          <h2>Third-party links</h2>
          <p>We are not responsible for the content of external sites we link to.</p>
          <h2>Contact</h2>
          <p>Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
