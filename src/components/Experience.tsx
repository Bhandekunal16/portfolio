import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  ShieldCheck,
  CreditCard,
  Layers,
  ArrowUpRight,
  Sparkles,
  Server,
  Activity,
  Check
} from 'lucide-react';
import { EXPERIENCE_DATA, BANKING_PROJECTS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedBankingTab, setSelectedBankingTab] = useState<string>(BANKING_PROJECTS[0].id);

  return (
    <section id="experience" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER HISTORY & ENTERPRISE PORTALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Banking Architectures
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Engineering robust merchant management platforms and leading high-throughput frontend systems within financial technology and banking ecosystems.
          </p>
        </div>

        {/* Primary Role Card (NPST) */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-7 sm:p-9 bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-slate-700 transition-all"
          >
            {/* Top Accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-indigo-500" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {EXPERIENCE_DATA.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {EXPERIENCE_DATA.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    {EXPERIENCE_DATA.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    {EXPERIENCE_DATA.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 font-mono text-xs">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    {EXPERIENCE_DATA.period}
                  </span>
                </div>
              </div>

              {/* Tag pill */}
              <div className="flex items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                  Leadership · Architecture · ODR Systems
                </div>
              </div>
            </div>

            {/* Core Responsibilities Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
              <div className="lg:col-span-7 space-y-3.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Technical Responsibilities & Leadership
                </h4>
                <ul className="space-y-3">
                  {EXPERIENCE_DATA.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 bg-slate-950/70 rounded-xl p-5 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    Impact & Outcomes
                  </h4>
                  <ul className="space-y-2.5">
                    {EXPERIENCE_DATA.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {EXPERIENCE_DATA.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Banking Projects Cards */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                ENTERPRISE BANKING IMPLEMENTATIONS
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Merchant Operations & Financial Platforms
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Institutional Banking Portals</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BANKING_PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-7 bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                          {project.client}
                        </span>
                        <h4 className="text-lg font-bold text-white">{project.title}</h4>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                      Banking
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Architecture & Capabilities */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5 text-cyan-400" />
                        Key Capabilities & Architecture
                      </h5>
                      <ul className="space-y-2">
                        {project.architectureHighlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/50">
                      <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Security & Scale
                      </h5>
                      <ul className="space-y-1.5">
                        {project.securityAndScale.map((item, idx) => (
                          <li key={idx} className="text-xs text-slate-400 leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
