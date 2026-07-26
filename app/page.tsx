'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';
import { toast } from 'sonner';

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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="fixed top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center font-bold text-sm">
              G
            </div>
            <span className="text-xl font-semibold tracking-tight">GEOTech</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-block text-sm px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-cyan-400 transition"
            >
              Let's talk
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-white transition ${
                    mobileOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition ${
                    mobileOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-[#0a0a0a]"
            >
              <div className="flex flex-col px-6 py-4 gap-4 text-sm">
                {['Work', 'Services', 'Skills', 'Process', 'About', 'Contact'].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-zinc-300 hover:text-white"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-sm text-zinc-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Software solutions
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              that actually ship.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            I build AI automation, SaaS platforms and full-stack systems for businesses
            across Africa. Clean code. Fast delivery. Real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 110, damping: 18, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#work"
              className="px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-cyan-400 transition flex items-center gap-2"
            >
              View selected work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white/20 rounded-full hover:bg-white/5 transition"
            >
              Book a free call
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
        className="border-y border-white/5 py-10"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10+', label: 'Projects shipped' },
            { value: '3', label: 'Live platforms' },
            { value: '100%', label: 'Client ownership' },
            { value: 'Nairobi', label: 'Based in Kenya' },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <div className="text-4xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Selected Work */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <p className="text-sm text-cyan-400 mb-2">SELECTED WORK</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Projects that matter
              </h2>
            </div>
            <a
              href="https://github.com/Geoduor"
              target="_blank"
              className="text-sm text-zinc-400 hover:text-white flex items-center gap-1"
            >
              All on GitHub <ExternalLink size={14} />
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
                  y: -10,
                  scale: 1.03,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(p)}
                className="group cursor-pointer bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors"
              >
                <div
                  className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center relative`}
                >
                  <div className="text-white/30 group-hover:text-white/50 transition-colors">
                    {p.icon}
                  </div>
                  {p.liveUrl && (
                    <span className="absolute top-4 right-4 text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/20">
                      LIVE
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                    {p.category}
                  </p>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-zinc-400 line-clamp-2">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-cyan-400 mb-2">WHAT I BUILD</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Software solutions
            </h2>
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
                  y: -6,
                  transition: { type: 'spring', stiffness: 300, damping: 22 },
                }}
                className="p-8 rounded-2xl border border-white/5 bg-zinc-900/30 hover:border-cyan-500/20 transition-colors"
              >
                <div className="text-cyan-400 mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-zinc-400">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-cyan-400 mb-2">CAPABILITIES</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Skills & Tools
            </h2>
          </motion.div>

          <div className="space-y-6">
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
              >
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How I Work */}
      <section id="process" className="py-24 px-6 bg-zinc-950/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-cyan-400 mb-2">PROCESS</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              How I work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'We clarify goals, users and constraints in a short kickoff call.',
              },
              {
                step: '02',
                title: 'Design',
                desc: 'I map the architecture and create a clear technical plan.',
              },
              {
                step: '03',
                title: 'Build',
                desc: 'Clean, tested code with regular updates and demos.',
              },
              {
                step: '04',
                title: 'Ship',
                desc: 'Deploy, hand over documentation and support the launch.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-zinc-900/40"
              >
                <div className="text-cyan-400 font-mono text-sm mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-zinc-950/40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            className="text-center"
          >
            <p className="text-sm text-cyan-400 mb-3">ABOUT</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Geofry Oduor
            </h2>

            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed text-left md:text-center">
              <p>
                Mechanical Engineering student turned AI & full-stack engineer based in
                Nairobi. I combine systems thinking from engineering with modern software
                development to build products that solve real problems.
              </p>
              <p>
                My focus is on intelligent systems — AI automation, SaaS platforms, and
                business tools for sports, agriculture, and African enterprises. I care
                about clean architecture, fast delivery, and measurable impact.
              </p>
              <p>
                When I’m not shipping code, I’m usually deep in industrial automation labs
                or exploring new ways AI can create leverage for African teams.
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <a
                href="https://github.com/Geoduor"
                target="_blank"
                className="p-3 rounded-full border border-white/10 hover:border-cyan-400 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/geofry-oduor-b021b5272"
                target="_blank"
                className="p-3 rounded-full border border-white/10 hover:border-cyan-400 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Let's build something
          </h2>
          <p className="text-zinc-400 mb-10">
            Tell me about your project. I reply within 24 hours.
          </p>

          {/* 
            Replace YOUR_FORM_ID with your Formspree form ID 
            Example: https://formspree.io/f/xpwgkqyz
          */}
          <form
            action="https://formspree.io/f/xnjelqyw"
            method="POST"
            className="space-y-4 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-cyan-500 outline-none transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-cyan-500 outline-none transition"
              required
            />
            <textarea
              name="message"
              placeholder="Project details..."
              rows={4}
              className="w-full px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-cyan-500 outline-none resize-none transition"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-white text-black rounded-xl font-medium hover:bg-cyan-400 transition"
            >
              Send message
            </button>
          </form>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-sm text-zinc-400">
            <a
              href="mailto:geofryoduor108@gmail.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Mail size={16} /> geofryoduor108@gmail.com
            </a>
            <a
              href="tel:+254707628505"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Phone size={16} /> +254 707 628 505
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-xs text-zinc-600 border-t border-white/5">
        © {new Date().getFullYear()} GEOTech · Geofry Oduor
      </footer>

      {/* Project Modal – Case Study Style */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
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
              className="bg-zinc-900 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-zinc-500 hover:text-white text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <p className="text-zinc-400 mb-6">{selectedProject.description}</p>

              {selectedProject.caseStudy && (
                <div className="space-y-5 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">
                      Problem
                    </h4>
                    <p className="text-sm text-zinc-400">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">
                      Solution
                    </h4>
                    <p className="text-sm text-zinc-400">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">
                      Impact
                    </h4>
                    <p className="text-sm text-zinc-400">
                      {selectedProject.caseStudy.impact}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-white/5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    className="flex-1 py-3 bg-white text-black rounded-xl text-center font-medium hover:bg-cyan-400 transition"
                  >
                    View Live
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="flex-1 py-3 border border-white/20 rounded-xl text-center hover:bg-white/5 transition"
                  >
                    GitHub
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