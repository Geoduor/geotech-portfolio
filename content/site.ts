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
  { value: "7", label: "Projects shipped" },
  { value: "6", label: "Live platforms" },
  { value: "5", label: "Industries served" },
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
    category: "AI Agronomy Platform",
    problem:
      "Kenyan smallholder farmers face delayed pest diagnosis and too few extension workers, and advice rarely arrives in their own language.",
    solution:
      "An agronomy assistant that understands English, Swahili and local dialects, identifies crop disease with Gemini, pulls county-level weather and recommends locally available agrochemicals with KES pricing.",
    tech: ["Python", "FastAPI", "React", "Gemini", "Supabase"],
    githubUrl: "https://github.com/Geoduor/agripulse-ai",
    liveUrl: "https://agripulse-ai-eosin.vercel.app",
    featured: true,
  },
  {
    id: "meditriage",
    title: "MediTriage AI",
    category: "Healthcare AI",
    problem:
      "Understaffed primary-care clinics in Kenya see 50–80+ patients a day, and deciding who needs a hospital, urgent care or routine treatment is slow.",
    solution:
      "A bilingual (English/Swahili) triage tool that classifies patients as red, yellow or green with a deterministic rule engine, explains costs under SHA and prints referral slips. An LLM only structures and phrases; it never decides. A prototype from the GOMYCODE Come Build with AI hackathon, with clinical content awaiting clinician review.",
    tech: ["Next.js", "FastAPI", "Python", "Rules engine"],
    githubUrl: "https://github.com/Geoduor/MediTriage-AI",
    liveUrl: "https://meditriageai-sand.vercel.app",
    featured: true,
  },
  {
    id: "khu-live",
    title: "Kenya Hockey Union Live",
    category: "Sports Platform",
    problem:
      "Kenyan hockey fans had no reliable place to follow live scores, standings and fixtures.",
    solution:
      "An unofficial, fan-built installable PWA with live standings across 8 KHU leagues, match-state tracking, favourite teams with scoped push notifications and offline caching, fed by a rate-limited scraper with a circuit breaker.",
    tech: ["React", "FastAPI", "SQLite", "PWA"],
    githubUrl: "https://github.com/Geoduor/khu-live-app",
    liveUrl: "https://khu-live-app.vercel.app",
    featured: true,
  },
  {
    id: "placement-agent",
    title: "AttachKenya",
    category: "Education Tech",
    problem:
      "University students struggle to find industrial attachment placements that fit their course, and the process is largely manual.",
    solution:
      "A matching system where students build a profile once and get transparent 0–100 match scores per placement from a weighted rules engine (course, skills, industry, location, duration), plus Claude-drafted cover letters and an application tracker.",
    tech: ["Next.js", "TypeScript", "Supabase", "Claude API"],
    githubUrl: "https://github.com/Geoduor/ATTACH",
    liveUrl: null,
    featured: false,
  },
  {
    id: "kyhc",
    title: "Kisumu Youngstars Hockey Club",
    category: "Club Management",
    problem:
      "A hockey club needs one place to manage teams, players, coaches, matches, training and attendance, with the right people seeing the right data.",
    solution:
      "A role-based club management system: a FastAPI and PostgreSQL API with OAuth2 JWT authentication and seven permission levels, tested and shipped through GitHub Actions, with a React and TypeScript front end.",
    tech: ["FastAPI", "PostgreSQL", "React", "TypeScript"],
    githubUrl: "https://github.com/Geoduor/KYHC",
    liveUrl: "https://kyhc.vercel.app",
    featured: false,
  },
  {
    id: "off-pitch",
    title: "Off-Pitch Africa",
    category: "Sports Media",
    problem:
      "African athlete stories get far less coverage than the games themselves.",
    solution:
      "A multi-page site for Off Pitch Africa with a Claude-powered chat assistant, live YouTube, Instagram and Facebook feeds, and a password-protected admin dashboard for updating events, gallery, blog and videos without code.",
    tech: ["JavaScript", "Vercel", "Claude API", "GitHub API"],
    githubUrl: "https://github.com/Geoduor/OFF-PITCH",
    liveUrl: "https://off-pitch-nine.vercel.app/",
    featured: false,
  },
  {
    id: "ikinai-media",
    title: "Ikinai Media",
    category: "Media Website & CMS",
    problem:
      "A media company needs a public site and a way for staff to publish news and manage their portfolio and enquiries without developer help.",
    solution:
      "A Next.js website with an admin dashboard for posting and publishing news, managing portfolio items and reviewing contact submissions, backed by Prisma and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/Geoduor/ikinai-media",
    liveUrl: "https://ikinai-media.vercel.app/",
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
    items: ["Multi-agent systems", "LangChain", "Claude API", "Gemini", "Rules engines"],
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
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export const certificates = [
  {
    id: "come-build-with-ai",
    title: "Come Build with AI",
    issuer: "GOMYCODE",
    date: "27 SEP 2026",
    image: "/certificates/cert1.jpeg",
  },
  {
    id: "ai-safari",
    title: "AI Safari covering AGENTIC FRAMEWORKS, AI AUTOMATION, PROMPT ENGINEERING AND AI ETHICS & GOVERNANCE",
    issuer: "POWER LEARN PROJECT",
    date: "1 JUL 2026",
    image: "/certificates/cert2.jpeg",
  },
  {
    id: "intro-software-dev",
    title: "Introduction to Software Development",
    issuer: "ZONE01 KISUMU",
    date: "2 APR 2024",
    image: "/certificates/cert3.jpeg",
  },
];
