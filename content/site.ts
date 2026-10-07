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
  role: "AI & Software Developer",
  location: "Kenya — Kisumu / Nairobi",
  /** Used for metadataBase, sitemap and OG tags. */
  url: "https://geotech-portfolio.vercel.app", // TODO(you): confirm the live domain
  tagline: "I build AI systems and web platforms that solve real problems.",
  intro:
    "Final-year mechanical engineering student and AI & software developer in Kenya. I build AI-powered tools and full-stack web platforms for agriculture, healthcare, sports and education.",
  availability: "Available for new projects", // set to null to hide the badge
  github: "https://github.com/Geoduor",
  linkedin: "https://www.linkedin.com/in/geofry-oduor-b021b5272" as string | null, // from CV; set to null to hide
  cv: "/Geofry_Oduor_CV.pdf",
  photo: "/geofry-portrait.jpg",
  labPhoto: "/geofry-lab.jpg",
} as const;

/**
 * Credibility bar. Every number here is checkable against the project list —
 * keep it that way. Do not add a metric you cannot defend.
 */
export const stats = [
  { value: "7", label: "Projects built" },
  { value: "6", label: "Live deployments" },
  { value: "5", label: "Sectors covered" },
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
      "I turn manual, repetitive workflows into AI agents, from crop diagnosis and clinic triage to application matching.",
    deliverables: [
      "Multi-agent workflows with Claude and Gemini",
      "Triage, scoring and matching pipelines",
      "Rules engines that keep decisions explainable, with LLMs handling the language",
      "Workflow automation with n8n and Google Apps Script",
    ],
  },
  {
    id: "web-platforms",
    icon: "layout",
    title: "Full-Stack Web Platforms",
    summary:
      "Responsive web apps built on Next.js and React, from public sites to logged-in products with admin dashboards.",
    deliverables: [
      "Next.js / React applications",
      "Admin dashboards for managing news, galleries and submissions",
      "Mobile-first, responsive interfaces",
      "SEO basics: metadata, sitemaps and Open Graph tags",
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
      "PostgreSQL / SQLite / Supabase data modelling",
      "Authentication and role-based access (OAuth2, JWT)",
      "Webhook integrations with signature verification",
    ],
  },
  {
    id: "data-products",
    icon: "activity",
    title: "Realtime & Data Products",
    summary:
      "Live scores, feeds and dashboards where the data has to be right and current.",
    deliverables: [
      "Live standings and fixtures feeds",
      "Installable PWAs with offline caching",
      "Scoped push notifications",
      "Cross-platform clients (React, Flutter)",
    ],
  },
];

export type ProjectVideo = {
  /** Path under /public. */
  src: string;
  /** Poster image shown before playback. */
  poster: string;
  /** Button text, e.g. "Watch ad". */
  label: string;
};

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
  /** Optional promo video, opened from a button on the card. */
  video?: ProjectVideo;
  /** Set true to show on the home page. */
  featured: boolean;
};

export const projects: Project[] = [
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
    video: {
      src: "/videos/khu-live-ad.mp4",
      poster: "/videos/khu-live-ad-poster.jpg",
      label: "Watch ad",
    },
    featured: true,
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
    liveUrl: "https://offpitchafrica.com",
    featured: true,
  },
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
      "A bilingual (English/Swahili) triage tool that classifies patients as red, yellow or green with a deterministic rule engine, explains costs under SHA and prints referral slips. An LLM only structures and phrases; it never decides. A team prototype (Team 104) from the GOMYCODE Come Build with AI hackathon, with clinical content still awaiting clinician review.",
    tech: ["Next.js", "FastAPI", "Python", "Rules engine"],
    githubUrl: "https://github.com/Geoduor/MediTriage-AI",
    liveUrl: "https://meditriageai-sand.vercel.app",
    featured: false,
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
    title: "Kisumu Young Stars Hockey Club",
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
    body: "A short call to understand the problem, the constraints and what success looks like.",
  },
  {
    step: "02",
    title: "Scope & quote",
    body: "You get a written scope, a timeline and a price before any work starts.",
  },
  {
    step: "03",
    title: "Build with regular demos",
    body: "Working software on a link you can click, shared as it progresses, so you see progress and not just status reports.",
  },
  {
    step: "04",
    title: "Launch & handover",
    body: "Deployment, documentation and a walkthrough so your team can run it.",
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
    items: ["Python", "TypeScript", "JavaScript", "Go", "PHP", "C/C++ (Arduino)"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Flutter", "HTML/CSS"],
  },
  {
    label: "Backend & data",
    items: ["FastAPI", "Node.js", "REST APIs", "PostgreSQL", "SQLite", "Supabase"],
  },
  {
    label: "AI & automation",
    items: [
      "Multi-agent systems",
      "Claude API",
      "Gemini",
      "Prompt engineering",
      "n8n",
      "Rules engines",
    ],
  },
  {
    label: "Tooling",
    items: ["Git & GitHub", "Docker", "Vercel", "Linux", "GitHub Actions"],
  },
  {
    label: "Engineering",
    items: ["SolidWorks", "AutoCAD", "MATLAB", "Arduino & sensors"],
  },
];

export const experience = [
  {
    period: "In progress",
    title: "Software Engineering Programme",
    org: "Zone01 Kisumu",
    body: "Software engineering programme. Completed an intensive introduction to software development (Feb–Mar 2024) and the Go-based Algorithms & Data Structures track.",
  },
  {
    period: "In progress",
    title: "AI & Software Development",
    org: "Power Learn Project Africa",
    body: "Training in AI and software development. Completed the 4-week AI Safari on agentic frameworks, AI automation, prompt engineering and AI ethics & governance.",
  },
  {
    period: "2023",
    title: "Logistics Coordinator / Assistant",
    org: "Gantad Logistics Company",
    body: "Coordinated logistics operations, shipment scheduling and supply chain documentation, worked on delivery routes and turnaround times, and managed vendor communications and records.",
  },
  {
    period: "2020 — 2022",
    title: "Technical Support & Wi-Fi Installation Technician",
    org: "Safaricom agent network",
    body: "Installed and configured Wi-Fi equipment and last-mile internet for residential and SME clients, troubleshot connectivity and hardware faults, and trained users on their equipment.",
  },
];

export const education = [
  {
    period: "2020 — Present",
    title: "B.Tech, Mechanical Engineering (final year)",
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

export const certificates: {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}[] = [
  {
    id: "come-build-with-ai",
    title: "Come Build with AI hackathon",
    issuer: "GOMYCODE",
    date: "27 Sep 2026",
    description:
      "Certificate of participation as a listed member of Team 104, for the MediTriage AI project.",
    image: "/certificates/cert1.jpeg",
  },
  {
    id: "ai-safari",
    title: "AI Safari",
    issuer: "Power Learn Project",
    date: "1 Jul 2026",
    description:
      "Certificate of achievement for a 4-week programme covering agentic frameworks, AI automation, prompt engineering, and AI ethics & governance.",
    image: "/certificates/cert2.jpeg",
  },
  {
    id: "intro-software-dev",
    title: "Introduction to Software Development",
    issuer: "Zone01 Kisumu",
    date: "2 Apr 2024",
    description:
      "One-month intensive on the 01 Edu platform (26 Feb – 23 Mar 2024), with foundational Go proficiency.",
    image: "/certificates/cert3.jpeg",
  },
];
