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
    title: 'Kenya Hockey Union Live',
    category: 'Sports Platform',
    description:
      'End-to-end league management system with live fixtures, standings, statistics and public portal.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'PWA'],
    liveUrl: 'https://khu-live-app.vercel.app/',
    githubUrl: 'https://github.com/Geoduor/khu-live-app',
    color: 'from-cyan-500/20 to-blue-600/20',
    icon: <Zap size={40} />,
    metrics: 'Live production • Real-time data • Fan-facing platform',
    caseStudy: {
      problem:
        'Kenya Hockey Union had no dedicated fan-facing platform for live scores, fixtures and standings.',
      solution:
        'Built a full-stack live platform with real-time data, PWA support and public portal.',
      impact:
        'Fans can now follow matches live. The system is used as the unofficial source of truth for the league.',
    },
  },
  {
    id: 2,
    title: 'Off Pitch Africa',
    category: 'Sports Media Platform',
    description:
      'A leading Kenyan sports media & storytelling platform that amplifies athlete narratives for sustainable development across Africa — from the final whistle to what happens next.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://off-pitch-nine.vercel.app/',
    githubUrl: 'https://github.com/Geoduor/OFF-PITCH',
    color: 'from-red-500/25 to-rose-700/25',
    icon: <Terminal size={40} />,
    metrics: 'Production website • Brand platform • Mobile-first',
    caseStudy: {
      problem:
        'African athletes and sports stories lacked a professional platform focused on life beyond the pitch.',
      solution:
        'Designed and developed a modern media platform with strong storytelling focus, clean UI and mobile-first experience.',
      impact:
        'Created a professional digital home for Off Pitch Africa, enabling content, partnerships and brand presence.',
    },
  },
  {
    id: 3,
    title: 'AgriPride Insights',
    category: 'AI SaaS',
    description:
      'AI-powered farm management platform helping African farmers with crop analytics and automation.',
    tech: ['TypeScript', 'Supabase', 'AI APIs'],
    liveUrl: 'https://geoduor-agripride-insights.vercel.app/',
    githubUrl: 'https://github.com/Geoduor/agripride-insights',
    color: 'from-violet-500/20 to-purple-600/20',
    icon: <Database size={40} />,
    metrics: 'AI-powered • Agriculture focus • Analytics platform',
    caseStudy: {
      problem:
        'Smallholder farmers in Africa lack accessible tools for data-driven crop decisions.',
      solution:
        'Built an AI-powered insights platform with analytics and automation features.',
      impact: 'Gives farmers actionable data to improve yields and operations.',
    },
  },
];

const services = [
  {
    icon: <Cpu size={28} />,
    title: 'AI Automation',
    desc: 'Custom AI agents, chatbots and workflow automation that save time and cut costs.',
  },
  {
    icon: <Code2 size={28} />,
    title: 'Full-Stack Development',
    desc: 'Modern web apps and SaaS platforms built with React, Next.js, FastAPI and Go.',
  },
  {
    icon: <Layers size={28} />,
    title: 'Business Systems',
    desc: 'CRM, ERP, inventory, sports and agriculture management platforms.',
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud & DevOps',
    desc: 'Docker, CI/CD, Vercel/VPS deployment and reliable infrastructure.',
  },
];

const skills = [
  { name: 'TypeScript / JavaScript', level: 92 },
  { name: 'React / Next.js', level: 95 },
  { name: 'Python / FastAPI', level: 88 },
  { name: 'PostgreSQL / Supabase', level: 85 },
  { name: 'AI Agents & Prompt Engineering', level: 86 },
  { name: 'Go', level: 72 },
  { name: 'Docker & CI/CD', level: 80 },
  { name: 'System Design', level: 78 },
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
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
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
        className="fixed top-0 z-50 w-full backdrop-blur-2xl bg-[#080808]/70 border-b border-white/[0.05]"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center font-bold text-sm text-black group-hover:scale-105 transition-transform">
              G
            </div>
            <span className="text-lg font-semibold tracking-tight">GEOTech</span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-sm">
            {['Work', 'Services', 'Skills', 'Process', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'text-white bg-white/5'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Geofry_Oduor_CV.pdf"
              target="_blank"
              className="hidden sm:flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-white/20 hover:border-cyan-400 transition"
            >
              <Download size={16} /> CV
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-block text-sm px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-cyan-400 transition"
            >
              Let's talk
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-white transition ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-white transition ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-white transition ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
              className="md:hidden border-t border-white/5 bg-[#0a0a0a]"
            >
              <div className="flex flex-col px-6 py-4 gap-4 text-sm">
                {['Work', 'Services', 'Skills', 'Process', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-zinc-300 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="/Geofry_Oduor_CV.pdf"
                  target="_blank"
                  className="text-cyan-400 font-medium"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-400 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            I build intelligent software
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-pulse">
              for African businesses.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            AI automation, SaaS platforms and full-stack systems for sports, agriculture and enterprises. Clean architecture. Fast delivery. Real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 110, damping: 18, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#work"
              className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/10"
            >
              View selected work 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Geofry_Oduor_CV.pdf"
              target="_blank"
              className="px-8 py-4 border border-white/10 rounded-full hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 110, damping: 18, delay: 0.45 }}
            className="mt-16 flex items-center justify-center gap-6 text-sm text-zinc-500"
          >
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" />
              Nairobi, Kenya
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="text-emerald-400" />
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
        className="border-y border-white/[0.05] py-16"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10+', label: 'Projects shipped', accent: 'text-cyan-400' },
            { value: '3', label: 'Live platforms', accent: 'text-emerald-400' },
            { value: '100%', label: 'Client ownership', accent: 'text-cyan-400' },
            { value: 'Nairobi', label: 'Based in Kenya', accent: 'text-emerald-400' },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} custom={i} className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl" />
              <div className="relative py-4">
                <div className={`text-5xl font-bold ${stat.accent} mb-2`}>{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
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
              <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider">SELECTED WORK</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Projects that matter
              </h2>
            </div>
            <a
              href="https://github.com/Geoduor"
              target="_blank"
              className="group text-sm text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
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
                className="group cursor-pointer relative bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                  <div className="text-white/40 group-hover:text-white/60 transition-colors duration-300 relative z-10">
                    {p.icon}
                  </div>
                  {p.liveUrl && (
                    <span className="absolute top-4 right-4 text-xs font-medium px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                      LIVE
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3 font-medium">
                    {p.category}
                  </p>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-zinc-400 line-clamp-2 mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 bg-white/[0.04] text-zinc-400 rounded-md border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="text-xs px-2.5 py-1 text-zinc-500">+{p.tech.length - 3}</span>
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
            <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider">WHAT I BUILD</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Software solutions
            </h2>
            <p className="text-zinc-400 mt-4 max-w-lg mx-auto">
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
                className="group p-8 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider">CAPABILITIES</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Skills & Tools
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.05,
                  type: 'spring',
                  stiffness: 100,
                  damping: 18,
                }}
                className="relative group"
              >
                <div className="flex justify-between text-sm mb-3">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-medium">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.03]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-sm opacity-50" />
                  </motion.div>
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
            <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider">PROCESS</p>
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
                className="relative p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-zinc-900/60 to-zinc-900/20"
              >
                <div className="text-cyan-400 font-mono text-sm mb-4 tracking-wider">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
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
            <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider">TESTIMONIALS</p>
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
                className="p-7 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-zinc-900/60 to-zinc-900/20"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-cyan-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-sm font-medium text-cyan-400">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
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
            <p className="text-sm font-medium text-cyan-400 mb-4 tracking-wider">ABOUT</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
              Geofry Oduor
            </h2>

            <div className="relative mb-12">
              <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-cyan-500/10">
                <Image
                  src="/geofry-portrait.jpg"
                  alt="Geofry Oduor"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-zinc-900 border border-white/10 rounded-full text-xs text-zinc-400">
                Available for hire
              </div>
            </div>

            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed text-left md:text-center max-w-2xl mx-auto">
              <p>
                Mechanical Engineering student turned AI & full-stack engineer based in Nairobi.
                I combine systems thinking from engineering with modern software development to
                build products that solve real problems.
              </p>
              <p>
                My focus is on intelligent systems — AI automation, SaaS platforms, and business
                tools for sports, agriculture, and African enterprises. I care about clean
                architecture, fast delivery, and measurable impact.
              </p>
              <p>
                When I'm not shipping code, I'm usually deep in industrial automation labs or
                exploring new ways AI can create leverage for African teams.
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <a
                href="https://github.com/Geoduor"
                target="_blank"
                className="p-3.5 rounded-xl border border-white/[0.08] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/geofry-oduor-b021b5272"
                target="_blank"
                className="p-3.5 rounded-xl border border-white/[0.08] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:geofryoduor108@gmail.com"
                className="p-3.5 rounded-xl border border-white/[0.08] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 border-t border-white/[0.05]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider">CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's build something
          </h2>
          <p className="text-zinc-400 mb-12">
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
                className="w-full px-5 py-4 rounded-xl bg-zinc-900/80 border border-white/[0.06] focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 outline-none transition-all duration-300 placeholder:text-zinc-500"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full px-5 py-4 rounded-xl bg-zinc-900/80 border border-white/[0.06] focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 outline-none transition-all duration-300 placeholder:text-zinc-500"
                required
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-zinc-900/80 border border-white/[0.06] focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 outline-none transition-all duration-300 resize-none placeholder:text-zinc-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black rounded-xl font-medium hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
            >
              Send message
            </button>
          </form>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6 text-sm">
            <a
              href="mailto:geofryoduor108@gmail.com"
              className="flex items-center justify-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                <Mail size={16} className="text-cyan-400" />
              </div>
              geofryoduor108@gmail.com
            </a>
            <a
              href="tel:+254707628505"
              className="flex items-center justify-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                <Phone size={16} className="text-emerald-400" />
              </div>
              +254 707 628 505
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-10 text-center border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center font-bold text-xs text-black">
              G
            </div>
            <span className="text-sm text-zinc-500">Geofry Oduor</span>
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} GEOTech · Built with Next.js
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <a href="https://github.com/Geoduor" target="_blank" className="hover:text-zinc-400 transition">GitHub</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/geofry-oduor-b021b5272" target="_blank" className="hover:text-zinc-400 transition">LinkedIn</a>
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
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
              className="bg-zinc-900/95 backdrop-blur-xl rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/[0.08]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2 font-medium">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              </div>

              <p className="text-zinc-400 mb-5 leading-relaxed">{selectedProject.description}</p>
              {selectedProject.metrics && (
                <p className="text-sm text-cyan-400 mb-7 font-medium">{selectedProject.metrics}</p>
              )}

              {selectedProject.caseStudy && (
                <div className="space-y-6 mb-8">
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Problem</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{selectedProject.caseStudy.problem}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">Solution</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{selectedProject.caseStudy.solution}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Impact</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{selectedProject.caseStudy.impact}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t: string) => (
                  <span key={t} className="text-xs px-3 py-1.5 bg-white/[0.04] text-zinc-400 rounded-lg border border-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    className="flex-1 py-3.5 bg-white text-black rounded-xl text-center font-medium hover:bg-cyan-400 transition-all duration-300"
                  >
                    View Live
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="flex-1 py-3.5 border border-white/[0.1] rounded-xl text-center hover:bg-white/[0.05] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}