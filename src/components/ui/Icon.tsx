const paths = {
  code: "M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12",
  globe: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.4 3.8 5.4 3.8 9S14.500 18.600 12 21c-2.500-2.400-3.800-5.400-3.800-9S9.500 5.400 12 3z",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  spark: "M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800L12 3zM19 16l.7 1.800L21.500 18.500l-1.800.7L19 21l-.7-1.800-1.800-.7 1.800-.7L19 16z",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.500l9 5 9-5",
  compass: "M12 3a9 9 0 100 18 9 9 0 000-18zM15.500 8.500l-2 5-5 2 2-5 5-2z",
  target: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 7a5 5 0 100 10 5 5 0 000-10zM12 11a1 1 0 100 2 1 1 0 000-2z",
  users: "M9 11a3.500 3.500 0 100-7 3.500 3.500 0 000 7zM2.500 20c.5-3.500 3-5.500 6.500-5.500s6 2 6.500 5.500M16 4.300a3.500 3.500 0 010 6.400M18 14.800c1.800.7 3 2.300 3.400 5.200",
  growth: "M3 17l6-6 4 4 8-8M15 7h6v6",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  pin: "M12 21s7-6.200 7-11.500A7 7 0 005 9.500C5 14.800 12 21 12 21zM12 7.500a2.500 2.500 0 100 5 2.500 2.500 0 000-5z",
  whatsapp: "M3.500 20.500l1.200-4.300A8.500 8.500 0 1112 20.500a8.500 8.500 0 01-4-1l-4.500 1zM9 8.500c0 3.500 3 6.500 6.500 6.500l1-1.500-2-1-1 .7a4 4 0 01-2-2l.7-1-1-2L9 8.500z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  check: "M5 12.500l4.500 4.500L19 7.500",
  shield: "M12 3l8 3v6c0 4.500-3.200 8-8 9-4.800-1-8-4.500-8-9V6l8-3z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 22, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
