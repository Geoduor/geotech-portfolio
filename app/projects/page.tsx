import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Layers, Terminal, Zap, Database, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AgriPulse AI',
    category: 'AI Multi-Agent System',
    description: 'A multi-agent intelligence system built for Kenyan smallholder farmers to optimize crop yields and manage farm resources.',
    tech: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
    liveUrl: null,
    githubUrl: 'https://github.com/Geoduor/AgriPulse-AI',
    color: 'from-green-500/20 to-emerald-600/20',
    icon: <Cpu size={40} />,
  },
  {
    id: 2,
    title: 'Fraud Detection Agent',
    category: 'Enterprise AI',
    description: 'Multi-domain anti-fraud detection system using machine learning and LLMs to identify suspicious financial patterns in real-time.',
    tech: ['Python', 'TensorFlow', 'Claude API', 'Node.js'],
    liveUrl: null,
    githubUrl: 'https://github.com/Geoduor/fraud-detection-agent',
    color: 'from-red-500/20 to-orange-600/20',
    icon: <Database size={40} />,
  },
  {
    id: 3,
    title: 'Kenya Hockey Union Live',
    category: 'Sports Platform',
    description: 'The official-unofficial live platform for Kenya Hockey, providing real-time scores, standings, and player statistics.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'PWA'],
    liveUrl: 'https://khu-live-app.vercel.app/',
    githubUrl: 'https://github.com/Geoduor/khu-live-app',
    color: 'from-cyan-500/20 to-blue-600/20',
    icon: <Zap size={40} />,
  },
  {
    id: 4,
    title: 'Attachment Placement Agent',
    category: 'Education Tech',
    description: 'AI-driven system designed to help university students in Kenya find and secure industrial attachment placements.',
    tech: ['TypeScript', 'Next.js', 'Supabase', 'LLMs'],
    liveUrl: null,
    githubUrl: 'https://github.com/Geoduor/placement-agent',
    color: 'from-violet-500/20 to-purple-600/20',
    icon: <Layers size={40} />,
  },
  {
    id: 5,
    title: 'Off-Pitch Africa',
    category: 'Sports Storytelling',
    description: 'A media platform amplifying athlete narratives, integrating advanced routing and AI-driven content summaries.',
    tech: ['Flutter', 'GoRouter', 'Claude API', 'Firebase'],
    liveUrl: 'https://off-pitch-nine.vercel.app/',
    githubUrl: 'https://github.com/Geoduor/OFF-PITCH',
    color: 'from-red-500/25 to-rose-700/25',
    icon: <Terminal size={40} />,
  },
  {
    id: 6,
    title: 'Library Management System',
    category: 'Backend System',
    description: 'Robust PHP-based REST API for library operations with comprehensive security and resource management.',
    tech: ['PHP', 'MySQL', 'JWT', 'REST API'],
    liveUrl: null,
    githubUrl: 'https://github.com/Geoduor/library-system',
    color: 'from-amber-500/20 to-yellow-600/20',
    icon: <Code2 size={40} />,
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">Professional Projects</h1>
      <p className="text-lg text-text-secondary mb-12 max-w-2xl">
        A curated selection of my work spanning AI automation, SaaS platforms, and enterprise-grade systems for diverse industries.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -5 }}
            className="bg-bg-1 border border-border-custom p-6 rounded-2xl hover:border-brand-blue/30 transition-all"
          >
            <div className={`h-24 bg-gradient-to-br ${p.color} flex items-center justify-center rounded-xl mb-4`}>
                <div className="text-white/50">{p.icon}</div>
            </div>
            <p className="text-xs text-brand-blue uppercase font-bold tracking-wider mb-2">{p.category}</p>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">{p.title}</h3>
            <p className="text-sm text-text-secondary mb-4 line-clamp-2">{p.description}</p>
            <div className="flex gap-2">
                <a href={p.githubUrl} target="_blank" className="text-sm flex items-center gap-1 hover:text-brand-blue"><Github size={16}/> Code</a>
                {p.liveUrl && <a href={p.liveUrl} target="_blank" className="text-sm flex items-center gap-1 hover:text-brand-blue"><ExternalLink size={16}/> Live</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
