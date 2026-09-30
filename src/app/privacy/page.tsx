import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How MindMesh collects and uses information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lead="Last updated: 2026. This policy covers information you share through mindmesh.co.ke." />
      <section className="section">
        <div className="container container-narrow prose">
          <h2>What we collect</h2>
          <p>When you use the contact form we receive the details you enter: your name, email address, organization, phone or WhatsApp number, project type, budget range and message.</p>
          <h2>How we use it</h2>
          <p>We use this information only to respond to your enquiry and to discuss a possible project with you. We do not sell your information or use it for unrelated marketing.</p>
          <h2>Sharing</h2>
          <p>Enquiries are delivered to MindMesh through the service we use to handle form submissions. We share information beyond that only when the law requires it.</p>
          <h2>Cookies and analytics</h2>
          <p>This website does not set advertising or tracking cookies.</p>
          <h2>Your rights</h2>
          <p>You may ask us to access, correct or delete the information you have sent us, in line with the Kenya Data Protection Act, 2019. Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
