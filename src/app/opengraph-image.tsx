import { ImageResponse } from "next/og";

export const alt = "MindMesh — Software, Data, Automation & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          background: "#0b1220", color: "#fff", padding: 80, fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "#a9dce3", display: "flex" }} />
          MindMesh
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
            Technology that moves your organization forward.
          </div>
          <div style={{ fontSize: 28, color: "#a9dce3" }}>Software · Data · Automation · AI — Kenya</div>
        </div>
      </div>
    ),
    size,
  );
}
