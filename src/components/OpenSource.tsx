import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Package,
  Terminal,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  Database,
  Type,
  FileCode2,
  Play
} from 'lucide-react';
import { OPEN_SOURCE_PACKAGES } from '../data/portfolioData';

interface OpenSourceProps {
  onCopyCommand: (cmd: string, name: string) => void;
  copiedCommand: string | null;
}

export const OpenSource: React.FC<OpenSourceProps> = ({ onCopyCommand, copiedCommand }) => {
  // Live Playground State
  const [activePackageTab, setActivePackageTab] = useState<'robotic-creater' | 'word-encoder' | 'roboticdb'>('robotic-creater');

  // robotic-creater sandbox state
  const [asciiInput, setAsciiInput] = useState('KUNAL');
  const [asciiStyle, setAsciiStyle] = useState<'banner' | 'block' | 'slant'>('banner');

  // word-encoder sandbox state
  const [encoderInput, setEncoderInput] = useState('DevTools');

  // roboticdb sandbox state
  const [dbQuery, setDbQuery] = useState('find({ status: "active" })');

  const getAsciiBanner = (text: string, style: string) => {
    const clean = text.toUpperCase().slice(0, 10) || 'DEV';
    if (style === 'block') {
      return `┌──────────────────────────┐
│  ${clean.split('').join(' ')}
└──────────────────────────┘
[robotic-creater :: rendered]`;
    }
    if (style === 'slant') {
      return `  ___   ___  _____  ___  
 / _ \\ / _ \\|_   _|/ _ \\ 
| (_) | (_) | | | | (_) |
 \\___/ \\___/  |_|  \\___/ 
[Text: ${clean} // Slant Font]`;
    }
    return ` __  __ _   _ _   _   _     
|  \\/  | | | | \\ | | / \\    
| |\\/| | | | |  \\| |/ _ \\   
| |  | | |_| | |\\  / ___ \\  
|_|  |_|\\___/|_| \\_/_/   \\_\\
[ASCII Banner rendered for "${clean}"]`;
  };

  return (
    <section id="open-source" className="py-28 bg-[#08090d] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>OPEN SOURCE & DEVELOPER ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Published NPM Packages
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl font-normal leading-relaxed">
            Developer tools, algorithmic text transforms, and data utilities authored and distributed through the npm registry.
          </p>
        </div>

        {/* 3-Column Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {OPEN_SOURCE_PACKAGES.map((pkg) => {
            const isCopied = copiedCommand === pkg.npmCommand;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-[#0d0f15] border border-white/[0.08] hover:border-white/15 p-6 flex flex-col justify-between shadow-xl group transition-all"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                        <Package className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-mono tracking-tight">
                          {pkg.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500">{pkg.version}</span>
                      </div>
                    </div>

                    <a
                      href={pkg.npmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-white transition-colors"
                      title="View package on npmjs.com"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {pkg.description}
                  </p>

                  {/* Install Command Bar */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] mb-4">
                    <code className="text-xs font-mono text-cyan-300 truncate mr-2">
                      {pkg.npmCommand}
                    </code>
                    <button
                      onClick={() => onCopyCommand(pkg.npmCommand, pkg.name)}
                      className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all shrink-0"
                      title="Copy install command"
                      aria-label="Copy install command"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {pkg.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.06] text-[10px] font-mono text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Node & Web</span>
                  <a
                    href={pkg.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    NPM Registry <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Developer Playground */}
        <div className="rounded-2xl bg-[#0d0f15] border border-white/[0.08] shadow-2xl overflow-hidden">
          
          {/* Playground Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
              </div>
              <span className="text-xs font-mono font-bold text-white pl-2 border-l border-white/10 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Package Testing Sandbox
              </span>
            </div>

            {/* Package Tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setActivePackageTab('robotic-creater')}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activePackageTab === 'robotic-creater'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                robotic-creater
              </button>
              <button
                onClick={() => setActivePackageTab('word-encoder')}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activePackageTab === 'word-encoder'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                word-encoder
              </button>
              <button
                onClick={() => setActivePackageTab('roboticdb')}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activePackageTab === 'roboticdb'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                roboticdb
              </button>
            </div>
          </div>

          {/* Playground Body */}
          <div className="p-6 sm:p-8 bg-[#090b10]">
            
            {/* TAB 1: ROBOTIC CREATER */}
            {activePackageTab === 'robotic-creater' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5 font-medium">
                      Input Text:
                    </label>
                    <input
                      type="text"
                      value={asciiInput}
                      onChange={(e) => setAsciiInput(e.target.value)}
                      maxLength={12}
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-sm outline-none focus:border-cyan-500/50"
                      placeholder="Type text..."
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5 font-medium">
                      Font / Art Style:
                    </label>
                    <div className="flex items-center gap-2">
                      {(['banner', 'block', 'slant'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => setAsciiStyle(st)}
                          className={`flex-1 py-2 px-3 rounded-xl border text-xs font-mono uppercase transition-all ${
                            asciiStyle === st
                              ? 'bg-white/10 text-cyan-300 border-cyan-500/40 font-bold'
                              : 'bg-black/40 text-slate-400 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-2 font-medium">
                    Rendered Terminal Output:
                  </span>
                  <pre className="p-5 rounded-xl bg-black border border-white/10 text-cyan-300 font-mono text-xs overflow-x-auto leading-tight shadow-inner">
                    {getAsciiBanner(asciiInput, asciiStyle)}
                  </pre>
                </div>
              </div>
            )}

            {/* TAB 2: WORD ENCODER */}
            {activePackageTab === 'word-encoder' && (
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5 font-medium">
                    Input String to Encode:
                  </label>
                  <input
                    type="text"
                    value={encoderInput}
                    onChange={(e) => setEncoderInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-sm outline-none focus:border-cyan-500/50"
                    placeholder="Enter string..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">
                      ASCII Byte Stream
                    </span>
                    <p className="text-xs font-mono text-emerald-400 font-medium break-all">
                      {encoderInput.split('').map(c => c.charCodeAt(0).toString(16)).join(' ')}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono text-slate-500 uppercase block">
                      Tokenized Character Map
                    </span>
                    <p className="text-xs font-mono text-cyan-300 font-medium break-all">
                      [{encoderInput.split('').map(c => `"${c}"`).join(', ')}]
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ROBOTICDB */}
            {activePackageTab === 'roboticdb' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Simulated Memory Store Execution</span>
                  <span className="text-emerald-400">Status: Query OK (2 records)</span>
                </div>

                <pre className="p-5 rounded-xl bg-black border border-white/10 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed shadow-inner">
                  <span className="text-slate-500">// roboticdb in-memory collection results</span>{'\n'}
                  <span className="text-cyan-400">db</span>.<span className="text-indigo-400">collection</span>(<span className="text-emerald-300">'nodes'</span>).<span className="text-indigo-400">find</span>({'{'} status: <span className="text-emerald-300">'active'</span> {'}'}) {'=>'} [{'\n'}
                  {'  '}{'{'} id: <span className="text-emerald-300">'node_1'</span>, region: <span className="text-emerald-300">'ap-south-1'</span>, uptime: <span className="text-amber-300">99.98</span>, connections: <span className="text-amber-300">1420</span> {'}'},{'\n'}
                  {'  '}{'{'} id: <span className="text-emerald-300">'node_2'</span>, region: <span className="text-emerald-300">'eu-west-1'</span>, uptime: <span className="text-amber-300">99.95</span>, connections: <span className="text-amber-300">890</span> {'}'}{'\n'}
                  ];
                </pre>
              </div>
            )}

          </div>

          <div className="px-6 py-3 bg-white/[0.02] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Zero Runtime Dependencies · TypeScript Definitions Included</span>
            <span className="text-slate-400">Available on NPM</span>
          </div>
        </div>

      </div>
    </section>
  );
};
