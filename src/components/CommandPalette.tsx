import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Terminal,
  ExternalLink,
  Copy,
  Briefcase,
  Layers,
  Package,
  Cpu,
  Mail,
  X,
  Phone,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, OPEN_SOURCE_PACKAGES } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onCopyEmail
}) => {
  const [query, setQuery] = useState('');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      subtitle: PERSONAL_INFO.email,
      icon: <Copy className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onCopyEmail();
        onClose();
      }
    },
    {
      id: 'nav-projects',
      title: 'View Work & Featured Projects',
      subtitle: 'NPM Analytics, FluxTube, CDNByte, Word Encoder',
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      action: () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-exp',
      title: 'Career & Banking Systems Experience',
      subtitle: 'Frontend Lead @ NPST · SBM & Cosmos Bank Portals',
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => {
        document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-oss',
      title: 'Published NPM Packages & Sandbox',
      subtitle: 'robotic-creater, word-encoder, roboticdb',
      icon: <Package className="w-4 h-4 text-amber-400" />,
      action: () => {
        document.querySelector('#open-source')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-skills',
      title: 'Engineering Stack Matrix',
      subtitle: 'Angular, React, Node.js, NestJS, AWS, ClickHouse',
      icon: <Cpu className="w-4 h-4 text-sky-400" />,
      action: () => {
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/Bhandekunal16',
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open(PERSONAL_INFO.githubUrl, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/kunal-bhande-2a0582271',
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedinUrl, '_blank', 'noopener,noreferrer');
        onClose();
      }
    }
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: -15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -15, scale: 0.98 }}
        className="w-full max-w-xl bg-[#0d0f15] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-[#090b10]">
          <Search className="w-4 h-4 text-slate-500 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent border-none text-white text-xs font-mono focus:outline-none placeholder:text-slate-600"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-300 ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="p-2 max-h-80 overflow-y-auto divide-y divide-white/[0.04]">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-slate-500">
              No matching commands or destinations found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] group-hover:border-white/20">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-white block font-mono">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-600 group-hover:text-slate-400">
                  ↵
                </span>
              </button>
            ))
          )}
        </div>

        {/* Palette footer */}
        <div className="px-4 py-2.5 bg-[#090b10] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with ↵ or click</span>
          <span>ESC to close</span>
        </div>
      </motion.div>
    </div>
  );
};
