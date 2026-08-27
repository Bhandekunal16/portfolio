import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Layers,
  BarChart3,
  Music,
  Cloud,
  Binary,
  Copy,
  Check,
  X,
  Globe,
  ArrowUpRight,
  Search,
  Zap,
  Play,
  Pause,
  Upload,
  RefreshCw,
  Sliders,
  Terminal,
  Activity
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onCopyUrl: (url: string, title: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onCopyUrl }) => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // State for interactive mockups
  // NPM Package Analytics mockup state
  const [npmSearchQuery, setNpmSearchQuery] = useState('react');
  const [npmTimeRange, setNpmTimeRange] = useState<'7d' | '30d' | '1y'>('30d');

  // FluxTube mockup state
  const [isPlayingFlux, setIsPlayingFlux] = useState(true);
  const [fluxTrack, setFluxTrack] = useState('Ambient Synthwave Session #04');

  // CDNByte mockup state
  const [cdnCopied, setCdnCopied] = useState(false);
  const [cdnCompression, setCdnCompression] = useState<'avif' | 'webp' | 'orig'>('webp');

  // Word Encoder mockup state
  const [encoderSampleText, setEncoderSampleText] = useState('Kunal Bhande - Full Stack');

  const npmPackage = PROJECTS_DATA.find(p => p.id === 'npm-package-analytics') || PROJECTS_DATA[0];
  const fluxTube = PROJECTS_DATA.find(p => p.id === 'fluxtube') || PROJECTS_DATA[1];
  const cdnByte = PROJECTS_DATA.find(p => p.id === 'cdnbyte') || PROJECTS_DATA[2];
  const wordEncoder = PROJECTS_DATA.find(p => p.id === 'word-encoder-platform') || PROJECTS_DATA[3];

  const handleCopyCdn = () => {
    navigator.clipboard.writeText('https://cdnbyte.vercel.app/asset/img_9482.webp');
    setCdnCopied(true);
    setTimeout(() => setCdnCopied(false), 2000);
  };

  return (
    <section id="projects" className="py-28 bg-[#08090d] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>FEATURED WORK & PRODUCTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl font-normal leading-relaxed">
              Software products, developer utilities, and high-performance applications designed and engineered for real-world usability.
            </p>
          </div>
        </div>

        {/* 1. LARGE FEATURED SHOWCASE: NPM Package Analytics */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-[#0d0f15] border border-white/[0.08] hover:border-white/15 transition-all overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Project Narrative & Metadata */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                      Featured Platform · 01
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                      Live Vercel Build
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                    {npmPackage.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {npmPackage.description}
                  </p>

                  {/* Core Features */}
                  <div className="space-y-2 mb-6">
                    {npmPackage.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {npmPackage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/[0.08]">
                  <a
                    href={npmPackage.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#08090d] font-bold text-xs transition-all hover:scale-[1.01] active:scale-[0.98] min-h-[44px]"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onCopyUrl(npmPackage.liveUrl, npmPackage.title)}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    title="Copy Live URL"
                    aria-label="Copy URL"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: High-Fidelity NPM Analytics Product Mockup */}
              <div className="lg:col-span-7 bg-[#090b10] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="w-full rounded-xl bg-[#0e1118] border border-white/[0.08] shadow-xl overflow-hidden flex flex-col">
                  
                  {/* Mockup Toolbar */}
                  <div className="px-4 py-3 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1 max-w-sm">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-slate-300 w-full">
                        <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <input
                          type="text"
                          value={npmSearchQuery}
                          onChange={(e) => setNpmSearchQuery(e.target.value)}
                          className="bg-transparent border-none outline-none text-white text-xs font-mono w-full"
                          placeholder="Search npm package..."
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-black/30 p-1 rounded-lg border border-white/5 text-[11px] font-mono">
                      {(['7d', '30d', '1y'] as const).map((r) => (
                        <button
                          key={r}
                          onClick={() => setNpmTimeRange(r)}
                          className={`px-2 py-0.5 rounded transition-all ${
                            npmTimeRange === r
                              ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mockup Dashboard Content */}
                  <div className="p-5 space-y-4">
                    {/* Header Package Snapshot */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white font-mono">
                            {npmSearchQuery || 'package-name'}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                            v18.3.1
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono">
                          Registry: registry.npmjs.org · MIT License
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-cyan-300 font-mono block">
                          {npmTimeRange === '7d' ? '4.82M' : npmTimeRange === '30d' ? '21.4M' : '264.1M'}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">Downloads</span>
                      </div>
                    </div>

                    {/* Download Velocity Bar Chart */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                        <span>Download Velocity Timeline</span>
                        <span className="text-emerald-400 font-semibold">+18.4% WoW</span>
                      </div>

                      <div className="h-28 flex items-end gap-1.5 pt-2 pb-1 border-b border-white/[0.06]">
                        {[42, 58, 51, 69, 88, 76, 98, 114, 108, 134, 150, 168].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar h-full justify-end">
                            <div
                              style={{ height: `${(h / 180) * 100}%` }}
                              className="w-full rounded-t bg-cyan-500/60 group-hover/bar:bg-cyan-400 transition-all"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
                        <span>W01</span>
                        <span>W04</span>
                        <span>W08</span>
                        <span>Current</span>
                      </div>
                    </div>

                    {/* Telemetry Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="p-2 rounded bg-black/30 border border-white/5 text-center">
                        <span className="text-[10px] font-mono text-slate-500 block">Unpacked Size</span>
                        <span className="text-xs font-mono font-bold text-slate-200">316 kB</span>
                      </div>
                      <div className="p-2 rounded bg-black/30 border border-white/5 text-center">
                        <span className="text-[10px] font-mono text-slate-500 block">Latency</span>
                        <span className="text-xs font-mono font-bold text-cyan-300">18 ms</span>
                      </div>
                      <div className="p-2 rounded bg-black/30 border border-white/5 text-center">
                        <span className="text-[10px] font-mono text-slate-500 block">Maintainers</span>
                        <span className="text-xs font-mono font-bold text-emerald-400">Active</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Interactive product preview</span>
                  <a href={npmPackage.liveUrl} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                    Live Demo <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* 2. ASYMMETRIC / DISTINCT EDITORIAL SHOWCASES FOR REMAINING PROJECTS */}
        <div className="space-y-12">
          
          {/* SHOWCASE #2: FLUXTUBE (Music Discovery Client) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-[#0d0f15] border border-white/[0.08] hover:border-white/15 transition-all p-7 sm:p-9 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Info Column */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-rose-400 font-semibold uppercase tracking-wider">
                    Audio & Stream Engine · 02
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    Web Application
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  {fluxTube.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                  {fluxTube.description}
                </p>

                <div className="space-y-2 mb-6">
                  {fluxTube.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {fluxTube.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                  <a
                    href={fluxTube.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#08090d] font-bold text-xs transition-all min-h-[44px]"
                  >
                    <span>Launch FluxTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onCopyUrl(fluxTube.liveUrl, fluxTube.title)}
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    title="Copy Live URL"
                    aria-label="Copy URL"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* FluxTube Product UI Mockup */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="rounded-xl bg-[#090b10] border border-white/[0.08] p-5 shadow-2xl">
                  {/* Top search & title bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-white">FluxTube Stream Engine</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">Ad-Free Audio Client</span>
                  </div>

                  {/* Now Playing Widget */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] mb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-mono text-rose-400 uppercase block font-semibold">
                          Now Playing
                        </span>
                        <h4 className="text-xs font-bold text-white truncate">{fluxTrack}</h4>
                      </div>
                      <button
                        onClick={() => setIsPlayingFlux(!isPlayingFlux)}
                        className="w-8 h-8 rounded-full bg-white text-[#08090d] flex items-center justify-center hover:scale-105 transition-transform"
                      >
                        {isPlayingFlux ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                      </button>
                    </div>

                    {/* Visualizer bars */}
                    <div className="flex items-end gap-1 h-8 mb-2">
                      {[30, 60, 45, 80, 95, 70, 50, 85, 100, 75, 40, 65, 90, 55, 35, 70].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: isPlayingFlux ? `${h}%` : '15%' }}
                          className="flex-1 bg-gradient-to-t from-rose-600/40 to-rose-400 rounded-t transition-all duration-150"
                        />
                      ))}
                    </div>

                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full w-3/5" />
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                      <span>02:14</span>
                      <span>03:45</span>
                    </div>
                  </div>

                  {/* Playback Queue Preview */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Upcoming in Queue</span>
                    {[
                      { title: 'Deep Focus Lo-Fi Coding Beats', duration: '04:12' },
                      { title: 'TypeScript Compilation Chillhop', duration: '03:50' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setFluxTrack(item.title)}
                        className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5 text-[11px] cursor-pointer hover:border-white/15 transition-colors"
                      >
                        <span className="text-slate-300 font-mono truncate">{item.title}</span>
                        <span className="text-slate-500 font-mono text-[10px] shrink-0 ml-2">{item.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TWO COLUMN SPLIT FOR CDNBYTE & WORD ENCODER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* SHOWCASE #3: CDNBYTE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-[#0d0f15] border border-white/[0.08] hover:border-white/15 transition-all p-7 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                    Cloud & Edge Service · 03
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    CDN Service
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2">{cdnByte.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                  {cdnByte.description}
                </p>

                {/* CDNByte Product UI Mockup */}
                <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.08] space-y-3 mb-6">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                    <span className="text-xs font-mono text-sky-300 font-semibold">Edge CDN Pipeline</span>
                    <span className="text-[10px] font-mono text-emerald-400">99.4% Cache Hit</span>
                  </div>

                  {/* Generated Edge URL pill */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/50 border border-white/10 text-[11px] font-mono">
                    <span className="text-slate-300 truncate">https://cdnbyte.vercel.app/asset/img_9482.webp</span>
                    <button
                      onClick={handleCopyCdn}
                      className="p-1 text-slate-400 hover:text-white transition-colors shrink-0 ml-1.5"
                      title="Copy CDN URL"
                    >
                      {cdnCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Format Negotiation & Stats */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                    <div className="p-1.5 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-slate-500 block">Latency</span>
                      <span className="text-sky-300 font-bold">14 ms</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-slate-500 block">Headers</span>
                      <span className="text-slate-200 font-bold">max-age=31536000</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-slate-500 block">Status</span>
                      <span className="text-emerald-400 font-bold">200 OK</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cdnByte.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <a
                  href={cdnByte.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#08090d] font-bold text-xs transition-all min-h-[44px]"
                >
                  <span>Launch CDNByte</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onCopyUrl(cdnByte.liveUrl, cdnByte.title)}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  title="Copy Live URL"
                  aria-label="Copy URL"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* SHOWCASE #4: WORD ENCODER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-[#0d0f15] border border-white/[0.08] hover:border-white/15 transition-all p-7 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    Developer Tool · 04
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    Algorithms & APIs
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2">{wordEncoder.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                  {wordEncoder.description}
                </p>

                {/* Word Encoder Product UI Mockup */}
                <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.08] space-y-3 mb-6">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                    <span className="text-xs font-mono text-emerald-400 font-semibold">Interactive Encoding Sandbox</span>
                    <span className="text-[10px] font-mono text-slate-500">Real-time Map</span>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-500 block mb-1">Input Text:</label>
                    <input
                      type="text"
                      value={encoderSampleText}
                      onChange={(e) => setEncoderSampleText(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-white outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block mb-1">Encoded Index Output:</span>
                    <code className="block p-2 rounded-lg bg-black/60 border border-white/5 text-[11px] font-mono text-emerald-300 truncate">
                      {encoderSampleText.split('').map(c => c.charCodeAt(0)).join('-')}
                    </code>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {wordEncoder.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <a
                  href={wordEncoder.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#08090d] font-bold text-xs transition-all min-h-[44px]"
                >
                  <span>Launch Word Encoder</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onCopyUrl(wordEncoder.liveUrl, wordEncoder.title)}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  title="Copy Live URL"
                  aria-label="Copy URL"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
