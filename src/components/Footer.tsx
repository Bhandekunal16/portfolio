import React from 'react';
import { ArrowUp, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] border-t border-white/[0.08] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/[0.06]">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center font-mono font-semibold text-white text-xs tracking-wider">
              KB
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wider uppercase font-mono">
                {PERSONAL_INFO.name}
              </h4>
              <p className="text-xs text-slate-500 font-mono">
                Software Developer · Full-Stack Engineer
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300">
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#open-source" className="hover:text-white transition-colors">Open Source</a>
            <a href="#skills" className="hover:text-white transition-colors">Stack</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social & Back to top */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:text-white text-slate-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:text-white text-slate-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:text-white text-slate-400 transition-colors"
              aria-label="Back to Top"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Kunal Eknath Bhande. Engineered with precision.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>React · TypeScript · Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
