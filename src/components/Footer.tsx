import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onCopyEmail, copiedEmail }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/60">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-300 text-sm">
              KB
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h4>
              <p className="text-xs text-slate-500 font-mono">Software Developer · Full-Stack Engineer</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#open-source" className="hover:text-cyan-300 transition-colors">Open Source</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Social & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-300 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-300 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-300 transition-all"
              aria-label="Back to Top"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Kunal Eknath Bhande. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineered with React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
