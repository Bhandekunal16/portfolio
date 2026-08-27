import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Terminal,
  ShieldCheck,
  Code2,
  Database,
  Cloud,
  ChevronDown,
  Sparkles
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
      className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy, Positioning & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">Engineering Focus:</span>
              <span className="text-cyan-300 font-semibold">Scalable Web Systems & Frontend Architecture</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              {PERSONAL_INFO.name}
            </h1>

            {/* Title / Role */}
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Software Developer · Full-Stack Engineer
              </h2>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {PERSONAL_INFO.bioStatement}
            </p>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </button>

              {/* Social Link Badges */}
              <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-slate-800">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 text-slate-300 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 text-slate-300 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual Technology Stack Strip */}
            <div className="w-full pt-6 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-3 font-semibold">
                Core Engineering Stack
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {PERSONAL_INFO.heroStack.map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-colors shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mr-2" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal & Systems Snapshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <TerminalSnapshot />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>EXPLORE ARCHITECTURE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
