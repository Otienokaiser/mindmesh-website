import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container container-narrow" style={{ textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: "var(--step-4)", marginTop: "1rem" }}>This page could not be found.</h1>
        <p className="lead" style={{ margin: "1.25rem auto 2rem" }}>The link may be broken or the page may have moved.</p>
        <Button href="/" arrow>Back to home</Button>
      </div>
    </section>
  );
}
