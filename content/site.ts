/**
 * Single source of truth for every piece of copy on the site.
 *
 * Edit this file to change the website's content — you should not need to
 * touch a component to update text.
 *
 * ⚠️  Items marked `TODO(you)` are placeholders. Only you know the real value.
 *     Search this file for "TODO(you)" before you launch.
 */

/** Placeholder until a real address is supplied. */
export const CONTACT_EMAIL = "geofryoduor108@gmail.com";

export const site = {
  name: "Geofry Oduor",
  brand: "Geodr.",
  role: "AI & Full-Stack Engineer",
  location: "Kenya — Kisumu / Nairobi",
  /** Used for metadataBase, sitemap and OG tags. */
  url: "https://geotech-portfolio.vercel.app", // TODO(you): confirm the live domain
  tagline: "I build AI systems and web platforms that solve real problems.",
  intro:
    "Mechanical engineer turned software engineer. I design and ship AI automation, multi-agent systems and full-stack web platforms for teams across Africa.",
  availability: "Available for new projects", // set to null to hide the badge
  github: "https://github.com/Geoduor",
  linkedin: null as string | null, // TODO(you): LinkedIn URL, or leave null to hide
  cv: "/Geofry_Oduor_CV.pdf",
  photo: "/geofry-portrait.jpg",
  labPhoto: "/geofry-lab.jpg",
} as const;

/**
 * Credibility bar. Every number here is checkable against the project list —
 * keep it that way. Do not add a metric you cannot defend.
 */
export const stats = [
  { value: "6", label: "Projects shipped" },
  { value: "2", label: "Live platforms" },
  { value: "3", label: "Industries served" },
  { value: "2", label: "Active programmes" },
];

export type Service = {
  id: string;
  icon: string;
  title: string;
  summary: string;
  deliverables: string[];
};

/**
 * Services are scoped to work that the project list below already evidences.
 */
export const services: Service[] = [
  {
    id: "ai-automation",
    icon: "bot",
    title: "AI Automation & Multi-Agent Systems",
    summary:
      "I turn manual, repetitive workflows into AI agents that run on their own — research, triage, routing and reporting.",
    deliverables: [
      "Multi-agent workflows (LangChain / Claude / OpenAI)",
      "Document, ticket and data triage pipelines",
      "LLM features wired into your existing product",
      "Evaluation harness so quality is measured, not assumed",
    ],
  },
  {
    id: "web-platforms",
    icon: "layout",
    title: "Full-Stack Web Platforms",
    summary:
      "Fast, accessible, search-optimised web apps built on Next.js and React — from landing page to logged-in product.",
    deliverables: [
      "Next.js / React applications",
      "Design systems and component libraries",
      "Dashboards, portals and customer-facing apps",
      "Core Web Vitals and accessibility passes",
    ],
  },
  {
    id: "backend-apis",
    icon: "server",
    title: "Backend & API Engineering",
    summary:
      "Reliable, secure APIs and data layers that the rest of your product can depend on.",
    deliverables: [
      "REST APIs (FastAPI, Node.js, PHP)",
      "PostgreSQL / MySQL / Supabase data modelling",
      "Authentication and authorisation (JWT, roles)",
      "Third-party integrations and webhooks",
    ],
  },
  {
    id: "data-products",
    icon: "activity",
    title: "Realtime & Data Products",
    summary:
      "Live scores, feeds, dashboards and reporting surfaces where the data has to be right and current.",
    deliverables: [
      "Realtime dashboards and live-data feeds",
      "PWA / mobile-first delivery",
      "Cross-platform clients (React, Flutter)",
      "Analytics and reporting views",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  /** Problem → what was built. Keep it specific; no invented metrics. */
  problem: string;
  solution: string;
  tech: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  /** Set true to show on the home page. */
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "agripulse",
    title: "AgriPulse AI",
    category: "AI Multi-Agent System",
    problem:
      "Smallholder farmers make high-stakes planting and resource decisions with fragmented, hard-to-read information.",
    solution:
      "A multi-agent system that coordinates specialised agents to interpret farm conditions and surface actionable guidance.",
    tech: ["Python", "LangChain", "OpenAI", "FastAPI"],
    githubUrl: "https://github.com/Geoduor/AgriPulse-AI",
    liveUrl: null,
    featured: true,
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection Agent",
    category: "Enterprise AI",
    problem:
      "Fraud patterns vary across domains, so single-model detectors miss cases and drown analysts in false positives.",
    solution:
      "A multi-domain anti-fraud system combining machine learning with LLM reasoning to flag suspicious financial activity in real time.",
    tech: ["Python", "TensorFlow", "Claude API", "Node.js"],
    githubUrl: "https://github.com/Geoduor/fraud-detection-agent",
    liveUrl: null,
    featured: true,
  },
  {
    id: "khu-live",
    title: "Kenya Hockey Union Live",
    category: "Sports Platform",
    problem:
      "Kenyan hockey fans had no reliable place to follow live scores, standings and player statistics.",
    solution:
      "A live platform serving realtime scores and season data for the 2025/26 season, built as an installable PWA.",
    tech: ["React", "FastAPI", "PostgreSQL", "PWA"],
    githubUrl: "https://github.com/Geoduor/khu-live-app",
    liveUrl: "https://khu-live-app.vercel.app/",
    featured: true,
  },
  {
    id: "placement-agent",
    title: "Attachment Placement Agent",
    category: "Education Tech",
    problem:
      "University students struggle to find and secure industrial attachment placements, and the process is largely manual.",
    solution:
      "An AI-driven system that matches students to placement opportunities and helps them work through the application.",
    tech: ["TypeScript", "Next.js", "Supabase", "LLMs"],
    githubUrl: "https://github.com/Geoduor/placement-agent",
    liveUrl: null,
    featured: false,
  },
  {
    id: "off-pitch",
    title: "Off-Pitch Africa",
    category: "Sports Storytelling",
    problem:
      "African athlete stories get far less coverage than the games themselves.",
    solution:
      "A media platform amplifying athlete narratives, with structured routing and AI-assisted content summaries.",
    tech: ["Flutter", "GoRouter", "Claude API", "Firebase"],
    githubUrl: "https://github.com/Geoduor/OFF-PITCH",
    liveUrl: "https://off-pitch-nine.vercel.app/",
    featured: false,
  },
  {
    id: "library-system",
    title: "Library Management System",
    category: "Backend System",
    problem:
      "Library operations need safe multi-user access to shared resources without exposing member data.",
    solution:
      "A PHP REST API handling catalogue, members and lending, with JWT authentication and role-based access control.",
    tech: ["PHP", "MySQL", "JWT", "REST API"],
    githubUrl: "https://github.com/Geoduor/library-system",
    liveUrl: null,
    featured: false,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    body: "A short call to understand the problem, the constraints and what success looks like. No charge, no obligation.",
  },
  {
    step: "02",
    title: "Scope & fixed quote",
    body: "You get a written scope, a timeline and a fixed price before any work starts. No open-ended billing.",
  },
  {
    step: "03",
    title: "Build with weekly demos",
    body: "Working software every week on a staging link you can click. You see progress, not status reports.",
  },
  {
    step: "04",
    title: "Launch & handover",
    body: "Deployment, documentation and a walkthrough so your team can run it. Support window included.",
  },
];

/**
 * Real, attributable testimonials only.
 * Leave this empty and the section renders nothing — do not invent quotes.
 * TODO(you): add 2–3 real client quotes. This is the single highest-converting
 * block on a services site.
 */
export const testimonials: {
  quote: string;
  author: string;
  role: string;
}[] = [];

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "PHP", "Java", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Flutter", "HTML/CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    label: "AI / ML",
    items: ["Multi-agent systems", "LangChain", "Claude API", "OpenAI", "TensorFlow"],
  },
  {
    label: "Tooling",
    items: ["Git", "Docker", "Vercel", "Linux", "CI/CD"],
  },
];

export const experience = [
  {
    period: "2025 — Present",
    title: "Software Engineering",
    org: "Zone01 Kisumu",
    body: "Peer-to-peer, project-based software engineering programme covering Go, JavaScript and systems fundamentals.",
  },
  {
    period: "2025 — Present",
    title: "AI & Software Development",
    org: "Power Learn Project Africa",
    body: "Applied AI and full-stack development training, including multi-agent systems and production deployment.",
  },
  {
    period: "2024 — 2025",
    title: "Logistics Coordinator",
    org: "Gantad Logistics Company",
    body: "Coordinated freight scheduling and delivery operations, tracking consignments and resolving delays.",
  },
  {
    period: "2023 — 2024",
    title: "Wi-Fi Installation Technician",
    org: "Safaricom agent network",
    body: "Installed and commissioned customer Wi-Fi links, diagnosing connectivity faults on site.",
  },
];

export const education = [
  {
    period: "Final year",
    title: "B.Tech, Mechanical Engineering",
    org: "Technical University of Kenya",
  },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
