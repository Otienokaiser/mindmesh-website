import type { IconName } from "@/components/ui/Icon";

export interface Service {
  slug: string;
  icon: IconName;
  title: string;
  summary: string;
  detail: string;
  points: string[];
}

export const services: Service[] = [
  {
    slug: "custom-software",
    icon: "code",
    title: "Custom Software",
    summary: "Web applications and internal systems designed around the way an organization actually operates.",
    detail:
      "When off-the-shelf tools force you to change how you work, we build the tool that fits. We scope tightly, ship in stages and keep the codebase clean enough for others to maintain.",
    points: ["Web applications and portals", "Internal tools and admin systems", "Integrations with the tools you already use"],
  },
  {
    slug: "websites",
    icon: "globe",
    title: "Websites & Digital Platforms",
    summary: "Professional, fast, responsive websites and digital experiences.",
    detail:
      "Websites that load quickly on mobile networks, read clearly and are easy to keep up to date. Built with search visibility and accessibility in mind from the start.",
    points: ["Company and organization websites", "Content and booking platforms", "SEO, performance and accessibility"],
  },
  {
    slug: "data-analytics",
    icon: "chart",
    title: "Data & Analytics",
    summary: "Turn operational data into useful insights, reports and decision-support systems.",
    detail:
      "Most organizations already collect the data they need. We clean it, connect it and present it so the people making decisions can trust what they see.",
    points: ["Dashboards and reporting", "Data cleaning and modelling", "SQL-backed analytics applications"],
  },
  {
    slug: "ai-automation",
    icon: "spark",
    title: "AI & Automation",
    summary: "Automate repetitive processes and build intelligent workflows using modern AI technologies.",
    detail:
      "We apply language models and workflow automation to tasks that consume staff time, such as document handling, enquiries and reporting, with people kept in the loop where judgement matters.",
    points: ["Workflow and notification automation", "AI assistants for internal use", "Document and data extraction"],
  },
  {
    slug: "business-systems",
    icon: "layers",
    title: "Business Systems",
    summary: "CRM, management systems, dashboards and other software that replace fragmented manual processes.",
    detail:
      "Spreadsheets, notebooks and chat threads eventually stop scaling. We consolidate them into one system with clear records, roles and reporting.",
    points: ["CRM and customer tracking", "Operations and management systems", "Role-based access and audit trails"],
  },
  {
    slug: "consulting",
    icon: "compass",
    title: "Technology Consulting",
    summary: "Help organizations identify where technology can improve their operations and customer experience.",
    detail:
      "Not every problem needs software. We review your workflows, tell you honestly where technology helps and where it doesn't, and outline a practical path forward.",
    points: ["Workflow and systems review", "Build-or-buy advice", "Roadmaps and technical scoping"],
  },
];

export const process = [
  { n: "01", title: "Understand", text: "We learn the organization, its users, workflows and the problem worth solving." },
  { n: "02", title: "Design", text: "We turn the problem into a clear digital experience and a sound technical architecture." },
  { n: "03", title: "Build", text: "We develop, test and refine the solution with you along the way." },
  { n: "04", title: "Launch & Improve", text: "We deploy, then keep improving based on how the product is used in the real world." },
];

export const principles = [
  { icon: "target" as IconName, title: "Built for the real world", text: "We focus on solving operational problems rather than building technology for its own sake." },
  { icon: "users" as IconName, title: "Designed around people", text: "Technology should be intuitive for the people who actually use it every day." },
  { icon: "growth" as IconName, title: "Built to grow", text: "Systems should be able to evolve as your organization, its data and its needs grow." },
  { icon: "spark" as IconName, title: "Practical innovation", text: "We use modern technology where it creates measurable value, and keep it simple where it doesn't." },
];

export const stack = [
  { group: "Web", items: ["Next.js", "React", "PHP", "JavaScript", "HTML & CSS"] },
  { group: "Data", items: ["SQL", "Analytics", "Dashboards"] },
  { group: "Cloud", items: ["Supabase", "Modern cloud infrastructure", "Deployment platforms"] },
  { group: "AI", items: ["LLMs", "AI assistants", "Automation", "Intelligent workflows"] },
];

export const schoolaryModules = [
  "Student records",
  "Academics",
  "Attendance",
  "Fees",
  "Staff",
  "Communication",
];

export const projectTypes = [
  "Website",
  "Custom software",
  "School management",
  "Automation",
  "Data & analytics",
  "AI",
  "Other",
] as const;

export const budgets = ["Not sure yet", "Under KES 100,000", "KES 100,000 – 300,000", "KES 300,000 – 1,000,000", "Above KES 1,000,000"] as const;
