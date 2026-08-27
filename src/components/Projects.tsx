import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  BarChart3,
  Music,
  Cloud,
  Binary,
  ArrowUpRight,
  Maximize2,
  Copy,
  Check,
  X,
  Globe
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onCopyUrl: (url: string, title: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onCopyUrl }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Platform', 'Web App', 'Service', 'Developer Tool'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const projectIcons: Record<string, React.ReactNode> = {
    'npm-package-analytics': <BarChart3 className="w-5 h-5 text-cyan-400" />,
    'fluxtube': <Music className="w-5 h-5 text-rose-400" />,
    'cdnbyte': <Cloud className="w-5 h-5 text-sky-400" />,
    'word-encoder-platform': <Binary className="w-5 h-5 text-emerald-400" />
  };

  // Mockup visual themes
  const renderProjectMockup = (project: Project) => {
    switch (project.id) {
      case 'npm-package-analytics':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 p-4 rounded-xl border border-slate-800 flex flex-col justify-between overflow-hidden relative group/mockup">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>npm-registry-analytics / trends</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono font-medium">+142k downloads/mo</span>
            </div>
            {/* Visual Simulated Chart Bars */}
            <div className="flex items-end gap-1.5 h-20 pt-2">
              {[35, 52, 45, 68, 85, 72, 95, 110, 102, 128, 145, 160].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    style={{ height: `${(val / 170) * 100}%` }}
                    className="w-full rounded-t bg-gradient-to-t from-cyan-600/40 via-cyan-500 to-cyan-400 transition-all group-hover/mockup:brightness-125"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1">
              <span>Weekly Velocity</span>
              <span>Granular Timeframes</span>
            </div>
          </div>
        );
      case 'fluxtube':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950/40 p-4 rounded-xl border border-slate-800 flex flex-col justify-between overflow-hidden relative group/mockup">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="font-mono text-[11px] text-rose-300">FluxTube Media Engine</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Streamlined UI</span>
            </div>
            {/* Simulated Track Player Queue */}
            <div className="space-y-1.5 py-1">
              <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/90 border border-slate-800 text-[11px]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-rose-400 font-mono">▶</span>
                  <span className="text-slate-200 truncate font-medium">Ambient Synthwave Session #4</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">03:42</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-slate-950/60 text-[10px] text-slate-400">
                <span className="truncate">Deep Focus Lo-Fi Coding Beats</span>
                <span className="font-mono">04:15</span>
              </div>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <div className="bg-rose-500 h-full w-2/3" />
            </div>
          </div>
        );
      case 'cdnbyte':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/40 p-4 rounded-xl border border-slate-800 flex flex-col justify-between overflow-hidden relative group/mockup">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>https://cdnbyte.vercel.app/i/...</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">Edge Cached</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block">Latency</span>
                <span className="text-xs font-mono font-bold text-sky-300">14ms</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block">Format</span>
                <span className="text-xs font-mono font-bold text-slate-200">WebP / AVIF</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block">Status</span>
                <span className="text-xs font-mono font-bold text-emerald-400">200 OK</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 font-mono truncate bg-slate-950 p-1 rounded border border-slate-800">
              &lt;img src="https://cdnbyte.vercel.app/asset/sample.jpg" /&gt;
            </div>
          </div>
        );
      case 'word-encoder-platform':
      default:
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 p-4 rounded-xl border border-slate-800 flex flex-col justify-between overflow-hidden relative group/mockup">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Text ⇄ Numeric Index Engine</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Real-time</span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono">
                <span className="text-slate-500 block mb-0.5">Input String:</span>
                <span className="text-slate-200">"Kunal Bhande - Full Stack"</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono truncate">
                <span className="text-emerald-400 block mb-0.5">Encoded Vector:</span>
                <span className="text-emerald-300">11-21-14-01-12_02-08-01-14-04-05...</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex justify-between">
              <span>Deterministic Mapping</span>
              <span>REST API Spec</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-950/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>LIVE WEB APPLICATIONS & PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Software Products
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Production-grade applications and utilities designed and deployed by Kunal, emphasizing developer productivity, fast delivery, and clean UX.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 border border-slate-800 p-1.5 rounded-xl self-start md:self-auto shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-mono transition-all min-h-[38px] sm:min-h-[32px] flex items-center ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl group"
            >
              <div className="p-6 sm:p-7">
                {/* Visual Mockup Stage */}
                <div className="mb-6 relative">
                  {renderProjectMockup(project)}
                </div>

                {/* Header info */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {projectIcons[project.id] || <Layers className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-cyan-400/90 font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Quick Copy Link */}
                  <button
                    onClick={() => onCopyUrl(project.liveUrl, project.title)}
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
                    title="Copy Live URL"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Feature Bullet points */}
                <div className="space-y-1.5 mb-6">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800/90 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors min-h-[36px]"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 sm:py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105 min-h-[36px]"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Architecture Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                  {projectIcons[activeModalProject.id] || <Globe className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeModalProject.title}</h3>
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 mt-0.5"
                  >
                    {activeModalProject.liveUrl} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 mb-6">
                <p className="leading-relaxed">{activeModalProject.longDescription || activeModalProject.description}</p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Core Technical Specifications
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {activeModalProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                    Deployment & Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium"
                >
                  Close
                </button>
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                >
                  <span>Open Live Product</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
