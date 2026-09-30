import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { SchoolaryFeature } from "@/components/sections/SchoolaryFeature";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products — Schoolary and more from MindMesh",
  description:
    "Products built and operated by MindMesh, including Schoolary, a modern school management platform for student records, academics, attendance, fees and communication.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Products we build and run ourselves."
        lead="Alongside client work, MindMesh builds its own products. They keep us honest about what good software takes day to day."
      />
      <SchoolaryFeature />
      <section className="section" aria-labelledby="next-title">
        <div className="container container-narrow">
          <h2 id="next-title" style={{ fontSize: "var(--step-3)" }}>More on the way.</h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Schoolary is our first product, not our last. If you have a problem that could become a product, or a
            system you want built for your organization, we&rsquo;d like to hear about it.
          </p>
          <div style={{ marginTop: "1.75rem" }}><Button href="/contact" variant="secondary" arrow>Talk to us</Button></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
