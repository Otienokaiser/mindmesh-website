import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({ eyebrow, title, lead, as: Tag = "h2", align = "left", id }: Props) {
  const center = align === "center";
  return (
    <div style={{ maxWidth: 720, marginInline: center ? "auto" : undefined, textAlign: center ? "center" : undefined }}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id} style={{ fontSize: Tag === "h1" ? "var(--step-5)" : "var(--step-4)", marginTop: eyebrow ? "1rem" : 0 }}>
        {title}
      </Tag>
      {lead && (
        <p className="lead" style={{ marginTop: "1.25rem", marginInline: center ? "auto" : undefined }}>
          {lead}
        </p>
      )}
    </div>
  );
}
