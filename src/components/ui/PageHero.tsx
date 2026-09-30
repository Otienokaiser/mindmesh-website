import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead: ReactNode }) {
  return (
    <header
      style={{
        padding: "clamp(3rem, 7vw, 5.5rem) 0 clamp(2.5rem, 5vw, 4rem)",
        borderBottom: "1px solid var(--line)",
        backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    >
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 style={{ fontSize: "var(--step-5)", marginTop: "1.25rem", maxWidth: "16ch" }}>{title}</h1>
        <p className="lead" style={{ marginTop: "1.5rem" }}>{lead}</p>
      </div>
    </header>
  );
}
