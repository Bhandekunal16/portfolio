import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Layers,
  Server,
  Database,
  Cloud,
  Wrench,
  Search
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'languages':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'frontend':
        return <Layers className="w-4 h-4 text-blue-400" />;
      case 'backend':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'databases':
        return <Database className="w-4 h-4 text-amber-400" />;
      case 'cloud & infrastructure':
        return <Cloud className="w-4 h-4 text-purple-400" />;
      default:
        return <Wrench className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <section id="skills" className="py-28 bg-[#08090d] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Engineering Stack
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl font-normal leading-relaxed">
              Production languages, frameworks, distributed databases, and cloud infrastructure verified across production banking systems.
            </p>
          </div>

          {/* Quick Filter Input */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d0f15] border border-white/[0.08] text-xs font-mono text-slate-300 w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter technologies..."
              className="bg-transparent border-none outline-none text-white text-xs font-mono w-full placeholder:text-slate-600 focus:ring-0"
            />
          </div>
        </div>

        {/* Engineering Stack Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((group) => {
            const filteredSkills = group.skills.filter(s =>
              s.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
              group.category.toLowerCase().includes(filterQuery.toLowerCase())
            );

            if (filterQuery && filteredSkills.length === 0) return null;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-[#0d0f15] border border-white/[0.08] hover:border-white/15 p-6 flex flex-col justify-between shadow-lg group transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                        {getCategoryIcon(group.category)}
                      </div>
                      <h3 className="text-sm font-bold text-white font-mono tracking-tight">
                        {group.category}
                      </h3>
                    </div>

                    <span className="text-[11px] font-mono text-slate-500">
                      {group.skills.length} tools
                    </span>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {group.skills.map((skill) => {
                      const isMatch = filterQuery && skill.name.toLowerCase().includes(filterQuery.toLowerCase());
                      return (
                        <span
                          key={skill.name}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            isMatch
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                              : skill.highlight
                              ? 'bg-white/[0.04] border border-white/15 text-white font-medium'
                              : 'bg-white/[0.02] border border-white/[0.06] text-slate-400 group-hover:border-white/10'
                          }`}
                        >
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Practical application note */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{group.description.slice(0, 32)}...</span>
                  <span className="text-slate-400">Enterprise Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Topology Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0d0f15] border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
              FULL-STACK CAPABILITY
            </span>
            <h4 className="text-xl font-bold text-white tracking-tight">
              Frontend → Backend → Data → Infrastructure
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl font-normal">
              Equally experienced in writing low-latency client UI state, robust Node.js / NestJS services, high-throughput database schemas, and AWS deployments.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#08090d] text-xs font-bold font-mono transition-all"
            >
              Discuss Architecture
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
