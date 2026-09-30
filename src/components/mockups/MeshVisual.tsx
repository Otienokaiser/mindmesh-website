import styles from "./MeshVisual.module.css";

const center = { x: 280, y: 240 };
const nodes = [
  { id: "software", label: "Software", x: 110, y: 110 },
  { id: "data", label: "Data", x: 460, y: 120 },
  { id: "automation", label: "Automation", x: 100, y: 370 },
  { id: "ai", label: "AI", x: 455, y: 360 },
];
const ambient = [
  [40, 230], [190, 40], [350, 30], [530, 230], [300, 440], [190, 450], [520, 460], [30, 60], [540, 40],
] as const;

export function MeshVisual() {
  return (
    <figure className={styles.wrap}>
      <svg viewBox="0 0 560 480" role="img" aria-labelledby="mesh-title mesh-desc" className={styles.svg}>
        <title id="mesh-title">MindMesh capability network</title>
        <desc id="mesh-desc">
          A central MindMesh node connected to four capabilities: software, data, automation and AI.
        </desc>
        <defs>
          <radialGradient id="mm-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#a9dce3" stopOpacity="0.55" />
            <stop offset="1" stopColor="#a9dce3" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={center.x} cy={center.y} r="190" fill="url(#mm-glow)" />

        {/* ambient lattice */}
        <g stroke="#cfd7e0" strokeWidth="1" opacity="0.8">
          {ambient.map(([x, y], i) => {
            const n = nodes[i % nodes.length];
            return <line key={`a${i}`} x1={x} y1={y} x2={n.x} y2={n.y} />;
          })}
          <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[1].x} y2={nodes[1].y} />
          <line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[3].x} y2={nodes[3].y} />
          <line x1={nodes[3].x} y1={nodes[3].y} x2={nodes[2].x} y2={nodes[2].y} />
          <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[0].x} y2={nodes[0].y} />
        </g>
        <g fill="#cfd7e0">
          {ambient.map(([x, y], i) => <circle key={`d${i}`} cx={x} cy={y} r="3.5" />)}
        </g>

        {/* spokes */}
        <g stroke="#6fbcc8" strokeWidth="1.5">
          {nodes.map((n) => (
            <line key={n.id} x1={center.x} y1={center.y} x2={n.x} y2={n.y} className={styles.flow} />
          ))}
        </g>

        {/* capability nodes */}
        {nodes.map((n) => (
          <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
            <rect x="-62" y="-22" width="124" height="44" rx="10" fill="#fff" stroke="#cfd7e0" />
            <circle cx="-42" cy="0" r="5" fill="#a9dce3" stroke="#6fbcc8" />
            <text x="-28" y="5" fontSize="15" fontWeight="600" fill="#0b1220" fontFamily="system-ui, sans-serif">
              {n.label}
            </text>
          </g>
        ))}

        {/* core */}
        <g transform={`translate(${center.x} ${center.y})`}>
          <circle r="62" fill="#fff" stroke="#cfd7e0" />
          <circle r="46" fill="#0b1220" />
          <g stroke="#a9dce3" strokeWidth="2" strokeLinecap="round" fill="none">
            <path d="M-20 14V-12l20 17 20-17v26" />
          </g>
          <g fill="#a9dce3">
            <circle cx="-20" cy="-12" r="4.5" />
            <circle cx="0" cy="5" r="4.5" />
            <circle cx="20" cy="-12" r="4.5" />
          </g>
        </g>
      </svg>
    </figure>
  );
}
