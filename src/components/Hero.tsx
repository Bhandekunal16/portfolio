import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Terminal,
  ShieldCheck,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TerminalSnapshot } from './TerminalSnapshot';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Subtle radial background depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-cyan-500/[0.04] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Editorial Typography, Positioning & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status & Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">Status:</span>
              <span className="text-slate-200 font-medium">Available for Engineering Roles</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-3">
              Kunal Bhande
            </h1>

            {/* Title / Role */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 tracking-tight mb-5">
              Software Developer · Full-Stack Engineer
            </h2>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              Building scalable web applications, developer tools, and reliable software systems across frontend, backend, and cloud.
            </p>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-8 w-full sm:w-auto">
              <button
                onClick={onExploreProjects}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#08090d] font-bold text-sm transition-all hover:scale-[1.01] active:scale-[0.98] min-h-[44px]"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-sm transition-all min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact</span>
              </button>

              {/* GitHub & LinkedIn CTAs */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-slate-300 hover:text-white text-xs font-mono transition-colors min-h-[44px]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-slate-300 hover:text-white text-xs font-mono transition-colors min-h-[44px]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Visual Engineering Stack Metadata Strip */}
            <div className="w-full pt-6 border-t border-white/[0.08]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2.5 font-semibold">
                Core Stack
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {PERSONAL_INFO.heroStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Architecture & Telemetry Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <TerminalSnapshot />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#projects"
            className="flex flex-col items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>DISCOVER WORK</span>
            <ChevronDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
