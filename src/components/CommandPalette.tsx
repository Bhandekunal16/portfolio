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
  GraduationCap,
  Sparkles
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
        } else {
          // Open
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
      id: 'nav-exp',
      title: 'View Work Experience & Banking Portals',
      subtitle: 'Frontend Lead @ NPST · SBM & Cosmos Bank Portals',
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => {
        document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-projects',
      title: 'Explore Live Web Applications',
      subtitle: 'NPM Analytics, FluxTube, CDNByte, Word Encoder',
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      action: () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-oss',
      title: 'Test Open Source NPM Packages',
      subtitle: 'robotic-creater, word-encoder, roboticdb',
      icon: <Package className="w-4 h-4 text-amber-400" />,
      action: () => {
        document.querySelector('#open-source')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-skills',
      title: 'Inspect Technology Ecosystem',
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950">
          <Search className="w-4 h-4 text-slate-500 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent border-none text-white text-sm font-mono focus:outline-none placeholder:text-slate-600"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-300 ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="p-2 max-h-80 overflow-y-auto divide-y divide-slate-800/40">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-slate-500">
              No matching commands or destinations found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 block">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-600 group-hover:text-slate-400">
                  Select ↵
                </span>
              </button>
            ))
          )}
        </div>

        {/* Palette footer */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with ↵ or Click</span>
          <span>Esc to Close</span>
        </div>
      </motion.div>
    </div>
  );
};
