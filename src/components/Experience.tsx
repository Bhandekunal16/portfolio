import React from 'react';
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
  Server,
  Activity,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { EXPERIENCE_DATA, BANKING_PROJECTS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 bg-[#08090d] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>CAREER HISTORY & ENGINEERING LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl font-normal leading-relaxed">
            Leading frontend systems architecture and building high-security financial portals across enterprise banking domains.
          </p>
        </div>

        {/* Editorial Timeline Container */}
        <div className="space-y-12">
          
          {/* Main Role Timeline Item */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Timeline Left: Year / Period */}
            <div className="lg:col-span-3">
              <div className="sticky top-28 space-y-1">
                <span className="text-lg font-bold text-white font-mono block">
                  2022 — Present
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block">
                  Nov 2022 – Present · Full Time
                </span>
                <span className="text-xs font-mono text-slate-500 block">
                  Thane, India
                </span>
              </div>
            </div>

            {/* Timeline Right: Role Details & Core Highlights */}
            <div className="lg:col-span-9 p-8 rounded-2xl bg-[#0d0f15] border border-white/[0.08] shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Software Developer / Frontend Lead
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span className="font-medium text-slate-200">
                      Network People Services Technologies Ltd. (NPST)
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 self-start sm:self-auto font-medium">
                  Current Role
                </span>
              </div>

              {/* Editorial Highlights Breakdown */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Architectural Ownership & Technical Decisions
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-300 leading-relaxed font-normal">
                    {EXPERIENCE_DATA.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    System Achievements & Outcomes
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 font-normal">
                    {EXPERIENCE_DATA.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 font-mono">✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                {EXPERIENCE_DATA.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Visually Separated Banking Implementations */}
          <div className="pt-10 border-t border-white/[0.08]">
            <div className="mb-8">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                INSTITUTIONAL BANKING SYSTEMS
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Enterprise Banking Projects
              </h3>
              <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                High-security transaction management platforms and operational banking portals engineered for major institutional clients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {BANKING_PROJECTS.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl p-7 bg-[#0d0f15] border border-white/[0.08] hover:border-white/15 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-400">
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                            {project.client}
                          </span>
                          <h4 className="text-lg font-bold text-white tracking-tight">
                            {project.title}
                          </h4>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.08] text-[11px] font-mono text-slate-400">
                        Enterprise
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                      {project.description}
                    </p>

                    {/* Architecture & Capabilities */}
                    <div className="space-y-3.5 mb-6">
                      <div className="p-3.5 rounded-xl bg-[#090b10] border border-white/[0.06]">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                          Capabilities & Workflows
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {project.architectureHighlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
                          Security & Reliability
                        </span>
                        <ul className="space-y-1 text-xs text-slate-400">
                          {project.securityAndScale.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
