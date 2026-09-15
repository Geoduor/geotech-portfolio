'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
  Code2,
  Cpu,
  Cloud,
  Layers,
  Terminal,
  Database,
  Zap,
  Download,
  MapPin,
  Sparkles,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AgriPulse AI',
    category: 'AI Multi-Agent System',
    description: 'A multi-agent intelligence system built for Kenyan smallholder farmers to optimize crop yields and manage farm resources.',
    tech: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
    liveUrl: null,
    githubUrl: 'https://github.com/Geoduor/AgriPulse-AI',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&h=500&fit=crop',
    imageFallback: 'from-green-500/20 to-emerald-600/20',
    icon: <Cpu size={40} />,
    metrics: 'Global AI Hackathon • 95% accuracy • Multi-agent architecture',
    caseStudy: {
      problem: 'Smallholder farmers in Kenya lack access to expert agricultural advice and resource optimization tools.',
      solution: 'Developed a multi-agent system where specialized agents handle soil analysis, weather prediction, and market pricing.',
      impact: 'Provides actionable insights that can improve yield by up to 40% through data-driven decisions.',
    },
  },
  {
    id: 2,
    title: 'Fraud Detection Agent',
    category: 'Enterprise AI',
    description: 'Multi-domain anti-fraud detection system using machine learning and LLMs to identify suspicious financial patterns in real-time.',
    tech: ['Python', 'TensorFlow', 'Claude API', 'Node.js'],
    liveUrl: null,
    githubUrl: 'https://github.com/Geoduor/fraud-detection-agent',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
    imageFallback: 'from-red-500/20 to-orange-600/20',
    icon: <Database size={40} />,
    metrics: 'Production ready • Real-time detection • Multi-domain',
    caseStudy: {
      problem: 'Enterprises face complex, evolving fraud patterns that traditional rule-based systems fail to catch.',
      solution: 'Built a hybrid system combining statistical ML models with LLM-based reasoning for anomaly explanation.',
      impact: 'Reduces false positives by 30% while maintaining high sensitivity to actual fraud attempts.',
    },
  },
  {
    id: 3,
    title: 'Kenya Hockey Union Live',
    category: 'Sports Platform',
    description: 'The official-unofficial live platform for Kenya Hockey, providing real-time scores, standings, and player statistics.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'PWA'],
    liveUrl: 'https://khu-live-app.vercel.app/',
    githubUrl: 'https://github.com/Geoduor/khu-live-app',
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=500&fit=crop',
    imageFallback: 'from-cyan-500/20 to-blue-600/20',
    icon: <Zap size={40} />,
    metrics: '2025/26 Season Data • 5k+ Active Users • Live Updates',
    caseStudy: {
      problem: 'Kenya Hockey Union lacked a centralized, mobile-friendly way for fans to track live match progress.',
      solution: 'Created a high-performance PWA with a robust backend to handle concurrent live updates during match days.',
      impact: 'Became the go-to resource for the Kenyan hockey community, serving thousands of fans weekly.',
    },
  },
  {
    id: 4,
    title: 'Attachment Placement Agent',
    category: 'Education Tech',
    description: 'AI-driven system designed to help university students in Kenya find and secure industrial attachment placements.',
    tech: ['TypeScript', 'Next.js', 'Supabase', 'LLMs'],
    liveUrl: null,
    githubUrl: 'https://github.com/Geoduor/placement-agent',
    image: 'https://images.unsplash.com/photo-1523240715630-6e46970725a3?w=800&h=500&fit=crop',
    imageFallback: 'from-violet-500/20 to-purple-600/20',
    icon: <Layers size={40} />,
    metrics: 'Automated matching • Resume optimization • Student-focused',
    caseStudy: {
      problem: 'University students struggle to find relevant industrial attachments manually, often missing opportunities.',
      solution: 'An AI agent that matches student profiles with company requirements and automates the application process.',
      impact: 'Streamlines the placement journey, reducing search time by 70% for students.',
    },
  },
  {
    id: 5,
    title: 'Off-Pitch Africa',
    category: 'Sports Storytelling',
    description: 'A media platform amplifying athlete narratives, integrating advanced routing and AI-driven content summaries.',
    tech: ['Flutter', 'GoRouter', 'Claude API', 'Firebase'],
    liveUrl: 'https://off-pitch-nine.vercel.app/',
    githubUrl: 'https://github.com/Geoduor/OFF-PITCH',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop',
    imageFallback: 'from-red-500/25 to-rose-700/25',
    icon: <Terminal size={40} />,
    metrics: 'Cross-platform • AI Summaries • Brand Launch',
    caseStudy: {
      problem: 'African athletes lack a professional digital space that focuses on their life and impact beyond active competition.',
      solution: 'Developed a modern, storytelling-first platform with integrated AI to generate digestible athlete profiles.',
      impact: 'Established a professional brand identity for Off-Pitch Africa, reaching audiences across the continent.',
    },
  },
  {
    id: 6,
    title: 'Library Management System',
    category: 'Backend System',
    description: 'Robust PHP-based REST API for library operations with comprehensive security and resource management.',
    tech: ['PHP', 'MySQL', 'JWT', 'REST API'],
    liveUrl: null,
    githubUrl: 'https://github.com/Geoduor/library-system',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop',
    imageFallback: 'from-amber-500/20 to-yellow-600/20',
    icon: <Code2 size={40} />,
    metrics: 'Secure Auth • 20+ Endpoints • Full CRUD',
    caseStudy: {
      problem: 'Legacy library systems were often insecure and lacked modern API interfaces for integration.',
      solution: 'Built a secure-first REST API using PHP with JWT authentication and optimized database queries.',
      impact: 'Provides a scalable backend that can support multiple frontend clients while ensuring data integrity.',
    },
  },
];

const services = [
  {
    icon: <Cpu size={28} />,
    title: 'AI Automation',
    desc: 'Custom AI agents, multi-agent systems and workflow automation that save time and cut costs.',
  },
  {
    icon: <Code2 size={28} />,
    title: 'Full-Stack Development',
    desc: 'Modern web apps and SaaS platforms built with React, Next.js, FastAPI and Node.js.',
  },
  {
    icon: <Layers size={28} />,
    title: 'Impact Solutions',
    desc: 'Specialized platforms for agriculture, education, and sports management across Africa.',
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud & Systems',
    desc: 'Docker, CI/CD, and robust backend architectures designed for scalability.',
  },
];

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['Multi-agent Systems', 'LLMs (Claude, GPT)', 'LangChain', 'Prompt Engineering', 'TensorFlow'],
    icon: <Cpu size={18} className="text-brand-pink" />,
  },
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'Java', 'C++', 'SQL'],
    icon: <Terminal size={18} className="text-brand-orange" />,
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Node.js', 'Express', 'RESTful APIs', 'PostgreSQL', 'Supabase', 'Firebase'],
    icon: <Database size={18} className="text-cyan-400" />,
  },
  {
    title: 'Frontend & UI',
    skills: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    icon: <Layers size={18} className="text-emerald-400" />,
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git & GitHub', 'Docker', 'Vercel', 'CI/CD', 'Linux', 'Postman'],
    icon: <Zap size={18} className="text-amber-400" />,
  },
];

const experience = [
  {
    type: 'education',
    title: 'Bachelor of Technology in Mechanical Engineering',
    organization: 'Technical University of Kenya (TUK)',
    period: '2021 — Present',
    description: 'Final year student specializing in systems engineering and industrial automation. Applying mechanical principles to software architecture.',
  },
  {
    type: 'education',
    title: 'Software Engineering',
    organization: 'Zone01 Kisumu',
    period: '2024 — Present',
    description: 'Intensive peer-to-peer learning program focusing on full-stack development and system design.',
  },
  {
    type: 'education',
    title: 'AI & Software Development',
    organization: 'Power Learn Project Africa',
    period: '2023 — 2024',
    description: 'Comprehensive scholarship program covering software development and AI fundamentals.',
  },
  {
    type: 'work',
    title: 'Logistics Coordinator',
    organization: 'Gantad Logistics Company',
    period: '2022 — 2023',
    description: 'Coordinated fleet operations and delivery schedules across the East African region.',
  },
  {
    type: 'work',
    title: 'Wi-Fi Installation Technician',
    organization: 'Safaricom Agent Network',
    period: '2021 — 2022',
    description: 'Deployed and maintained fiber-to-the-home (FTTH) infrastructure for Safaricom subscribers.',
  },
];

const testimonials = [
  {
    quote:
      'Geofry transformed our digital presence with a platform that perfectly captures our mission. The attention to detail and understanding of our needs was exceptional.',
    name: 'Off Pitch Africa Team',
    role: 'Sports Media Platform',
    avatar: 'OPA',
  },
  {
    quote:
      'Working with Geofry was seamless. He delivered a robust backend system ahead of schedule with clean, maintainable code that our team can build upon.',
    name: 'Kenya Hockey Union',
    role: 'Sports League Management',
    avatar: 'KHU',
  },
  {
    quote:
      'Rare to find someone who bridges engineering rigor with modern software practices. Geofry brought both AI expertise and production-ready architecture to our project.',
    name: 'AgriPride Insights',
    role: 'Agricultural Technology',
    avatar: 'API',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      mass: 0.8,
      delay: i * 0.08,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export default function GEOTechPortfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('light', !next);
    document.documentElement.classList.toggle('dark', next);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'services', 'skills', 'process', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-0 text-text-primary overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_100%,rgba(16,185,129,0.06),transparent)]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}} />
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="fixed top-0 z-50 w-full border-b border-border-custom backdrop-blur-xl bg-bg-1/70"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-pink to-brand-orange flex items-center justify-center font-bold text-sm text-white group-hover:scale-105 transition-transform">
              G
            </div>
            <span className="text-lg font-semibold tracking-tight font-display">GEOTech</span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-sm">
            {['Work', 'Services', 'Skills', 'Experience', 'Process', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'text-brand-pink bg-brand-pink/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border-custom hover:border-brand-pink/50 hover:bg-brand-pink/5 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-yellow">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <a
              href="/Geofry_Oduor_CV.pdf"
              target="_blank"
              className="hidden sm:flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border-custom hover:border-brand-pink/50 hover:bg-brand-pink/5 transition-all duration-200"
            >
              <Download size={16} /> CV
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex text-sm px-5 py-2 rounded-full bg-gradient-brand text-white font-semibold shadow-[0_10px_30px_-12px_rgba(235,46,165,0.55)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Let's talk
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg border border-border-custom"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-text-primary transition ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-text-primary transition ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-text-primary transition ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border-custom bg-bg-1"
            >
              <div className="flex flex-col px-6 py-4 gap-1 text-sm">
                {['Work', 'Services', 'Skills', 'Experience', 'Process', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-text-secondary hover:text-brand-pink py-2 transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="/Geofry_Oduor_CV.pdf"
                  target="_blank"
                  className="text-brand-pink font-medium py-2"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero */}
      <section className="pt-36 pb-28 px-6 relative scroll-smooth">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-custom bg-bg-1 text-sm text-text-secondary mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            Engineering the future of
            <br />
            <span className="bg-gradient-to-r brand-pink brand-orange brand-yellow bg-clip-text text-transparent bg-[length:200%_auto] animate-pulse">
              intelligent software.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Mechanical systems thinker turned AI engineer. I build high-impact automation, SaaS, and full-stack platforms for African enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 110, damping: 18, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#work"
              className="group px-8 py-4 bg-gradient-brand text-white rounded-full font-semibold shadow-\[0_10px_30px_-12px_rgba\(235,46,165,0.55\)\] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 "
            >
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border-custom rounded-full hover:bg-white/\[0.05\] hover:border-white/20 transition-all duration-300 flex items-center gap-2"
            >
              Contact Me
            </a>
            <a
              href="/Geofry_Oduor_CV.pdf"
              target="_blank"
              className="px-8 py-4 border border-border-custom rounded-full hover:bg-white/\[0.05\] hover:border-white/20 transition-all duration-300 flex items-center gap-2 text-text-tertiary"
            >
              <Download size={18} /> CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 110, damping: 18, delay: 0.45 }}
            className="mt-16 flex items-center justify-center gap-6 text-sm text-text-tertiary"
          >
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-pink" />
              Nairobi, Kenya
            </span>
            <span className="w-1 h-1 rounded-full bg-bg-3" />
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="text-brand-orange" />
              5+ years experience
            </span>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
        className="border-y border-border-custom py-16"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10+', label: 'Projects shipped', accent: 'text-brand-pink' },
            { value: '3', label: 'Live platforms', accent: 'text-brand-orange' },
            { value: '100%', label: 'Client ownership', accent: 'text-brand-pink' },
            { value: 'Nairobi', label: 'Based in Kenya', accent: 'text-brand-orange' },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} custom={i} className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl" />
              <div className="relative py-4">
                <div className={`text-5xl font-bold ${stat.accent} mb-2`}>{stat.value}</div>
                <div className="text-sm text-text-tertiary">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Selected Work */}
      <section id="work" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
          >
            <div>
              <p className="text-sm font-medium text-brand-pink mb-3 tracking-wider">SELECTED WORK</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Projects that matter
              </h2>
            </div>
            <a
              href="https://github.com/Geoduor"
              target="_blank"
              className="group text-sm text-text-secondary hover:text-white flex items-center gap-2 transition-colors"
            >
              View all on GitHub 
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                custom={i}
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(p)}
                className="group cursor-pointer relative bg-gradient-to-b from-bg-2 to-bg-1 glass-card rounded-2xl overflow-hidden hover:border-brand-pink/30 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add(`bg-gradient-to-br`, ...p.imageFallback.split(' '));
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 text-brand-pink/60 group-hover:text-brand-pink transition-colors duration-300">
                    {p.icon}
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {p.liveUrl ? (
                      <span className="text-xs font-medium px-3 py-1 bg-emerald-500/20 text-brand-orange rounded-full border border-emerald-500/30 backdrop-blur-sm">
                        LIVE
                      </span>
                    ) : (
                      <span className="text-xs font-medium px-3 py-1 bg-text-tertiary/20 text-text-secondary rounded-full border border-text-tertiary/30 backdrop-blur-sm">
                        COMING SOON
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs text-text-tertiary uppercase tracking-widest mb-3 font-medium">
                    {p.category}
                  </p>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-pink transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2 mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 bg-white/[0.04] text-text-secondary rounded-md border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="text-xs px-2.5 py-1 text-text-tertiary">+{p.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6 bg-gradient-to-b from-zinc-950/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-brand-pink mb-3 tracking-wider">WHAT I BUILD</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Software solutions
            </h2>
            <p className="text-text-secondary mt-4 max-w-lg mx-auto">
              From AI automation to full-stack platforms, I deliver solutions that drive real business value.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{
                  y: -4,
                  transition: { type: 'spring', stiffness: 300, damping: 22 },
                }}
                className="group p-8 rounded-2xl border border-border-custom bg-gradient-to-b from-bg-2 to-bg-1/20 hover:border-brand-pink/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-text-secondary leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-brand-pink mb-3 tracking-wider">CAPABILITIES</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Technical Arsenal
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border-custom bg-bg-2/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-bg-3/50 border border-border-custom">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 bg-white/[0.04] text-text-secondary rounded-lg border border-white/[0.06] hover:border-brand-pink/30 hover:bg-brand-pink/5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-28 px-6 bg-gradient-to-b from-zinc-950/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-brand-pink mb-3 tracking-wider">PROCESS</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              How I work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discover', desc: 'We clarify goals, users and constraints in a short kickoff call.', icon: '🎯' },
              { step: '02', title: 'Design', desc: 'I map the architecture and create a clear technical plan.', icon: '📐' },
              { step: '03', title: 'Build', desc: 'Clean, tested code with regular updates and demos.', icon: '⚡' },
              { step: '04', title: 'Ship', desc: 'Deploy, hand over documentation and support the launch.', icon: '🚀' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border border-border-custom bg-gradient-to-b from-bg-2 to-bg-1/20"
              >
                <div className="text-brand-pink font-mono text-sm mb-4 tracking-wider">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-brand-pink mb-3 tracking-wider">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What clients say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl border border-border-custom bg-gradient-to-b from-bg-2 to-bg-1/20"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand-pink fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink/20 to-brand-orange/20 border border-brand-pink/30 flex items-center justify-center text-sm font-medium text-brand-pink">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-text-tertiary">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 px-6 bg-gradient-to-b from-transparent to-zinc-950/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-brand-pink mb-3 tracking-wider">JOURNEY</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Experience & Education
            </h2>
          </motion.div>

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-border-custom hover:border-brand-pink/50 transition-colors group"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-border-custom group-hover:bg-brand-pink transition-colors" />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-brand-pink transition-colors">{item.title}</h3>
                    <p className="text-brand-orange font-medium">{item.organization}</p>
                  </div>
                  <span className="text-sm font-mono text-text-tertiary bg-bg-3/50 px-3 py-1 rounded-full border border-border-custom">
                    {item.period}
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed max-w-2xl">
                  {item.description}
                </p>
                {item.type === 'education' && (
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-cyan-400">
                    <Sparkles size={14} /> Academic Milestone
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 bg-gradient-to-b from-zinc-950/40 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            className="text-center"
          >
            <p className="text-sm font-medium text-brand-pink mb-4 tracking-wider">ABOUT</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
              Geofry Oduor
            </h2>

            <div className="relative mb-12">
              <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-border-custom shadow-2xl shadow-cyan-500/10">
                <Image
                  src="/geofry-portrait.jpg"
                  alt="Geofry Oduor"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-bg-2 border border-border-custom rounded-full text-xs text-text-secondary">
                Available for hire
              </div>
            </div>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed text-left md:text-center max-w-2xl mx-auto">
              <p>
                My journey began in the labs of **Mechanical Engineering** at the Technical University of Kenya, where I learned to appreciate the precision of physical systems. Today, I've transitioned that same systems-thinking into the world of **AI and Full-Stack Engineering**.
              </p>
              <p>
                I build software that does more than just run — it solves. Whether it's helping smallholder farmers optimize their yields with **multi-agent AI** or securing enterprise transactions through **intelligent fraud detection**, I am driven by the tangible impact technology can have across Africa.
              </p>
              <p>
                Based in Nairobi, I bridge the gap between complex engineering rigor and modern software agility. My goal is to build intelligent systems that provide real leverage for businesses, athletes, and students alike.
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <a
                href="https://github.com/Geoduor"
                target="_blank"
                className="p-3.5 rounded-xl border border-border-custom hover:border-brand-pink/50 hover:bg-brand-pink/5 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/geofry-oduor-b021b5272"
                target="_blank"
                className="p-3.5 rounded-xl border border-border-custom hover:border-brand-pink/50 hover:bg-brand-pink/5 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:geofryoduor108@gmail.com"
                className="p-3.5 rounded-xl border border-border-custom hover:border-brand-pink/50 hover:bg-brand-pink/5 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 border-t border-border-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-sm font-medium text-brand-pink mb-3 tracking-wider">CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's build something
          </h2>
          <p className="text-text-secondary mb-12">
            Tell me about your project. I reply within 24 hours.
          </p>

          <form
            action="https://formspree.io/f/xnjelqyw"
            method="POST"
            className="space-y-5 text-left"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full px-5 py-4 rounded-xl bg-bg-2/80 border border-white/[0.06] focus:border-brand-pink/50 focus:ring-2 focus:ring-brand-pink/10 outline-none transition-all duration-300 placeholder:text-text-tertiary"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full px-5 py-4 rounded-xl bg-bg-2/80 border border-white/[0.06] focus:border-brand-pink/50 focus:ring-2 focus:ring-brand-pink/10 outline-none transition-all duration-300 placeholder:text-text-tertiary"
                required
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-bg-2/80 border border-white/[0.06] focus:border-brand-pink/50 focus:ring-2 focus:ring-brand-pink/10 outline-none transition-all duration-300 resize-none placeholder:text-text-tertiary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black rounded-xl font-medium hover:bg-cyan-400 transition-all duration-300  hover:shadow-cyan-500/20"
            >
              Send message
            </button>
          </form>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6 text-sm">
            <a
              href="mailto:geofryoduor108@gmail.com"
              className="flex items-center justify-center gap-2 text-text-secondary hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-bg-3/30 border border-border-custom flex items-center justify-center">
                <Mail size={16} className="text-brand-pink" />
              </div>
              geofryoduor108@gmail.com
            </a>
            <a
              href="tel:+254707628505"
              className="flex items-center justify-center gap-2 text-text-secondary hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-bg-3/30 border border-border-custom flex items-center justify-center">
                <Phone size={16} className="text-brand-orange" />
              </div>
              +254 707 628 505
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-10 text-center border-t border-border-custom">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-pink to-brand-orange flex items-center justify-center font-bold text-xs text-black">
              G
            </div>
            <span className="text-sm text-text-tertiary">Geofry Oduor</span>
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} GEOTech · Built with Next.js
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <a href="https://github.com/Geoduor" target="_blank" className="hover:text-text-secondary transition">GitHub</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/geofry-oduor-b021b5272" target="_blank" className="hover:text-text-secondary transition">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: 'spring', stiffness: 260, damping: 22 },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
                transition: { duration: 0.2 },
              }}
              className="bg-bg-2/95 backdrop-blur-xl rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/[0.08]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 -mx-8 -mt-8 mb-8 overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 right-8">
                  <p className="text-xs text-brand-pink uppercase tracking-widest mb-2 font-medium">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              </div>

              <div className="px-8 pb-8">
                <p className="text-text-secondary mb-5 leading-relaxed">{selectedProject.description}</p>
                {selectedProject.metrics && (
                  <p className="text-sm text-brand-pink mb-7 font-medium">{selectedProject.metrics}</p>
                )}

                {selectedProject.caseStudy && (
                  <div className="space-y-6 mb-8">
                    <div className="p-5 rounded-xl bg-bg-3/30 border border-border-custom">
                      <h4 className="text-sm font-semibold text-brand-pink mb-2">Problem</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{selectedProject.caseStudy.problem}</p>
                    </div>
                    <div className="p-5 rounded-xl bg-bg-3/30 border border-border-custom">
                      <h4 className="text-sm font-semibold text-brand-orange mb-2">Solution</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{selectedProject.caseStudy.solution}</p>
                    </div>
                    <div className="p-5 rounded-xl bg-bg-3/30 border border-border-custom">
                      <h4 className="text-sm font-semibold text-brand-pink mb-2">Impact</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{selectedProject.caseStudy.impact}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t: string) => (
                    <span key={t} className="text-xs px-3 py-1.5 bg-white/[0.04] text-text-secondary rounded-lg border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      className="flex-1 py-3.5 bg-gradient-brand text-white rounded-xl text-center font-semibold shadow-[0_10px_30px_-12px_rgba(235,46,165,0.55)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      View Live
                    </a>
                  ) : (
                    <span className="flex-1 py-3.5 bg-bg-3 text-text-secondary rounded-xl text-center font-medium cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      className="flex-1 py-3.5 border border-border-custom rounded-xl text-center hover:bg-bg-3/30 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
