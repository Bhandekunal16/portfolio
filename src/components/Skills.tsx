import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  Search,
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Sparkles,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages': <Code2 className="w-4 h-4 text-cyan-400" />,
    'Frontend': <Layout className="w-4 h-4 text-blue-400" />,
    'Backend': <Server className="w-4 h-4 text-emerald-400" />,
    'Databases': <Database className="w-4 h-4 text-amber-400" />,
    'Cloud & Infrastructure': <Cloud className="w-4 h-4 text-sky-400" />,
    'Tools & Platforms': <Wrench className="w-4 h-4 text-purple-400" />,
    'Other': <Cpu className="w-4 h-4 text-rose-400" />
  };

  const allCategories = ['All', ...SKILLS_DATA.map(g => g.category)];

  const filteredGroups = SKILLS_DATA.map(group => {
    if (selectedCategory !== 'All' && group.category !== selectedCategory) {
      return null;
    }
    const filteredSkills = group.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSkills.length === 0 && searchQuery) {
      return null;
    }
    return {
      ...group,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 bg-slate-950/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Engineering Stack
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Languages, frameworks, databases, and infrastructure tools utilized to engineer production-ready web and enterprise architectures.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat !== 'All' && categoryIcons[cat]}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            if (!group) return null;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-6 bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800 mb-4">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {categoryIcons[group.category] || <Cpu className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">{group.category}</h3>
                      <p className="text-[11px] text-slate-400">{group.description}</p>
                    </div>
                  </div>

                  {/* Badges Matrix */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                          skill.highlight
                            ? 'bg-slate-950 text-cyan-300 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900'
                            : 'bg-slate-950/70 text-slate-300 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{group.skills.length} Technologies</span>
                  <span>Production Tested</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Rigor Note */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Stack philosophy: Deterministic typing, robust API contracts, and performant client-side state.</span>
          </div>
          <span className="text-slate-500">No simulated or fabricated toolsets</span>
        </div>

      </div>
    </section>
  );
};
