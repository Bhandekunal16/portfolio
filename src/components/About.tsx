import React from 'react';
import { motion } from 'motion/react';
import {
  Layout,
  Cpu,
  Layers,
  Cloud,
  Terminal,
  Compass,
  Package,
  ShieldCheck,
  CheckCircle2,
  GitBranch,
  Database
} from 'lucide-react';
import { CORE_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillarIcons: Record<string, React.ReactNode> = {
    'Frontend Architecture': <Layout className="w-5 h-5 text-cyan-400" />,
    'Enterprise Banking Systems': <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    'Backend Engineering': <Cpu className="w-5 h-5 text-indigo-400" />,
    'Developer Tooling & OSS': <Package className="w-5 h-5 text-amber-400" />,
    'Cloud & Containerization': <Cloud className="w-5 h-5 text-sky-400" />,
    'Technical Decision-Making': <Compass className="w-5 h-5 text-purple-400" />
  };

  return (
    <section id="about" className="py-24 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architecting Scalable Systems & High-Security Portals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {PERSONAL_INFO.aboutDetailed}
          </p>
        </div>

        {/* Narrative & Focus Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Engineering Profile Card */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-5">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  Technical Ownership
                </span>
                <span className="text-xs text-slate-500 font-mono">NPST · Banking Portals</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Full-Lifecycle Software Engineering
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                From framing state topologies in complex single-page applications to architecting backend services and micro-utilities, I build systems with an emphasis on maintainability, determinism, and enterprise-grade security.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
              <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Production experience delivering Online Dispute Resolution (ODR) systems.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Integrated payment workflows for State Bank of Mauritius & Cosmos Bank.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Published open-source packages in the npm ecosystem with zero external dependencies.</span>
              </div>
            </div>
          </div>

          {/* Core Technical Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CORE_PILLARS.map((pillar) => (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90 transition-all flex flex-col justify-start"
              >
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 w-fit mb-3">
                  {pillarIcons[pillar.title] || <Layers className="w-5 h-5 text-cyan-400" />}
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Real-world Execution Callout Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-indigo-950/30 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
              <GitBranch className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Production-Ready & Enterprise-Compliant</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Proficient with strict RBAC access controls, high-concurrency data streaming, audit logging, and modern continuous deployment.
              </p>
            </div>
          </div>
          <a
            href="#experience"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold transition-all hover:scale-105"
          >
            View Experience Timeline →
          </a>
        </div>

      </div>
    </section>
  );
};
