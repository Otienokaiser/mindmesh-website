export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill="#0b1220" />
      <g stroke="#a9dce3" strokeWidth="1.4" strokeLinecap="round" opacity="0.75">
        <path d="M8 22V10l8 7 8-7v12" fill="none" />
      </g>
      <g fill="#a9dce3">
        <circle cx="8" cy="10" r="2.2" />
        <circle cx="16" cy="17" r="2.2" />
        <circle cx="24" cy="10" r="2.2" />
        <circle cx="8" cy="22" r="1.6" />
        <circle cx="24" cy="22" r="1.6" />
      </g>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: "1.125rem", letterSpacing: "-0.03em", color: light ? "#fff" : "var(--ink)" }}>
      <LogoMark />
      MindMesh
    </span>
  );
}
