import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Package,
  Terminal,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Play,
  Database,
  Code2,
  Binary,
  Layers,
  FileSpreadsheet
} from 'lucide-react';
import { OPEN_SOURCE_PACKAGES } from '../data/portfolioData';
import { OpenSourcePackage } from '../types';

interface OpenSourceProps {
  onCopyText: (text: string, label: string) => void;
}

export const OpenSource: React.FC<OpenSourceProps> = ({ onCopyText }) => {
  const [selectedDemoPackage, setSelectedDemoPackage] = useState<string>('robotic-creater');

  // Interactive Playground State: ASCII generator
  const [asciiInput, setAsciiInput] = useState<string>('KUNAL');
  const [asciiStyle, setAsciiStyle] = useState<'block' | 'slant' | 'banner'>('block');

  // Interactive Playground State: Word Encoder
  const [encoderInput, setEncoderInput] = useState<string>('FullStack Engineer');

  // Interactive Playground State: RoboticDB Simulation
  const [dbCollection, setDbCollection] = useState<Array<{ id: number; name: string; role: string; department: string }>>([
    { id: 1, name: 'Kunal Bhande', role: 'Frontend Lead', department: 'Engineering' },
    { id: 2, name: 'ODR Service', role: 'Microservice', department: 'Banking' },
    { id: 3, name: 'SBM Portal', role: 'Client Portal', department: 'Enterprise' },
    { id: 4, name: 'Cosmos Gateway', role: 'Payment API', department: 'Financial' }
  ]);
  const [dbQueryFilter, setDbQueryFilter] = useState<string>('All');

  // Simple ASCII generator implementation for robotic-creater demo
  const generateAscii = (text: string, style: 'block' | 'slant' | 'banner') => {
    const clean = text.toUpperCase().replace(/[^A-Z0-9 ]/g, '');
    if (!clean) return 'Enter text above to generate ASCII pattern...';

    const fonts: Record<string, Record<string, string[]>> = {
      block: {
        A: [' █████ ', '██   ██', '███████', '██   ██', '██   ██'],
        B: ['██████ ', '██   ██', '██████ ', '██   ██', '██████ '],
        C: [' ██████', '██     ', '██     ', '██     ', ' ██████'],
        D: ['██████ ', '██   ██', '██   ██', '██   ██', '██████ '],
        E: ['███████', '██     ', '█████  ', '██     ', '███████'],
        F: ['███████', '██     ', '█████  ', '██     ', '██     '],
        G: [' ██████', '██     ', '██   ██', '██   ██', ' ██████'],
        H: ['██   ██', '██   ██', '███████', '██   ██', '██   ██'],
        I: ['███████', '  ███  ', '  ███  ', '  ███  ', '███████'],
        J: ['   ████', '     ██', '     ██', '██   ██', ' █████ '],
        K: ['██  ██ ', '██ ██  ', '████   ', '██ ██  ', '██  ██ '],
        L: ['██     ', '██     ', '██     ', '██     ', '███████'],
        M: ['██   ██', '███ ███', '██ █ ██', '██   ██', '██   ██'],
        N: ['██   ██', '███  ██', '██ █ ██', '██  ███', '██   ██'],
        O: [' █████ ', '██   ██', '██   ██', '██   ██', ' █████ '],
        P: ['██████ ', '██   ██', '██████ ', '██     ', '██     '],
        Q: [' █████ ', '██   ██', '██ █ ██', '██  ██ ', ' ████ █'],
        R: ['██████ ', '██   ██', '██████ ', '██   ██', '██   ██'],
        S: [' ██████', '██     ', ' █████ ', '     ██', '██████ '],
        T: ['███████', '  ███  ', '  ███  ', '  ███  ', '  ███  '],
        U: ['██   ██', '██   ██', '██   ██', '██   ██', ' █████ '],
        V: ['██   ██', '██   ██', '██   ██', ' ██ ██ ', '  ███  '],
        W: ['██   ██', '██   ██', '██ █ ██', '███ ███', '██   ██'],
        X: ['██   ██', ' ██ ██ ', '  ███  ', ' ██ ██ ', '██   ██'],
        Y: ['██   ██', ' ██ ██ ', '  ███  ', '  ███  ', '  ███  '],
        Z: ['███████', '   ███ ', '  ███  ', ' ███   ', '███████'],
        ' ': ['       ', '       ', '       ', '       ', '       ']
      }
    };

    const lines = ['', '', '', '', ''];
    for (let char of clean.slice(0, 10)) {
      const charBlock = fonts.block[char] || fonts.block[' '];
      for (let i = 0; i < 5; i++) {
        lines[i] += charBlock[i] + ' ';
      }
    }

    if (style === 'slant') {
      return lines.map((l, i) => ' '.repeat(i * 2) + l.replaceAll('█', '/')).join('\n');
    }
    if (style === 'banner') {
      const border = '═'.repeat(lines[0].length + 4);
      return `╔${border}╗\n` + lines.map(l => `║  ${l}  ║`).join('\n') + `\n╚${border}╝`;
    }

    return lines.join('\n');
  };

  // Word encoder simulation
  const encodeString = (str: string) => {
    return str
      .split('')
      .map((ch) => {
        if (ch === ' ') return '00';
        const code = ch.charCodeAt(0);
        return String(code).padStart(3, '0');
      })
      .join('-');
  };

  const decodeString = (encoded: string) => {
    return encoded
      .split('-')
      .map((num) => {
        if (num === '00') return ' ';
        const code = parseInt(num, 10);
        return isNaN(code) ? '?' : String.fromCharCode(code);
      })
      .join('');
  };

  return (
    <section id="open-source" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
            <Package className="w-3.5 h-3.5" />
            <span>NPM ECOSYSTEM & PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Open Source & Developer Tooling
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Published libraries and zero-dependency utilities built by Kunal to streamline data manipulation, text algorithms, and CLI workflows.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {OPEN_SOURCE_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl p-6 bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between shadow-xl ${
                selectedDemoPackage === pkg.id
                  ? 'border-indigo-500/60 bg-slate-900 ring-1 ring-indigo-500/30'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-indigo-400">
                      <Package className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-indigo-300 font-bold">{pkg.version}</span>
                  </div>

                  <a
                    href={pkg.npmUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
                  >
                    npm <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-mono">{pkg.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{pkg.description}</p>

                {/* 1-Click Install Command Pill */}
                <div className="mb-4">
                  <button
                    onClick={() => onCopyText(pkg.npmCommand, pkg.name)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-mono text-cyan-300 transition-colors group/cmd"
                  >
                    <span className="truncate">{pkg.npmCommand}</span>
                    <Copy className="w-3.5 h-3.5 text-slate-500 group-hover/cmd:text-cyan-300 shrink-0 ml-2" />
                  </button>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 mb-4">
                  {pkg.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Playground Switcher Button */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedDemoPackage(pkg.id)}
                  className={`w-full py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
                    selectedDemoPackage === pkg.id
                      ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                      : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Play className="w-3 h-3" />
                  <span>{selectedDemoPackage === pkg.id ? 'Active in Sandbox' : 'Test in Sandbox'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Interactive In-Browser Sandbox */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <span>Interactive NPM Sandbox:</span>
                <span className="text-indigo-400 font-extrabold">{selectedDemoPackage}</span>
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">Zero-dependency client execution</span>
              <button
                onClick={() => {
                  const cmd = OPEN_SOURCE_PACKAGES.find(p => p.id === selectedDemoPackage)?.npmCommand || '';
                  onCopyText(cmd, selectedDemoPackage);
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-mono text-cyan-300 flex items-center gap-1.5 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Command</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* robotic-creater Demo */}
            {selectedDemoPackage === 'robotic-creater' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-8">
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Input String (Max 10 chars for preview):
                    </label>
                    <input
                      type="text"
                      maxLength={10}
                      value={asciiInput}
                      onChange={(e) => setAsciiInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white font-mono text-sm"
                      placeholder="e.g. KUNAL"
                    />
                  </div>

                  <div className="sm:col-span-4">
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Banner Style:
                    </label>
                    <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                      {(['block', 'slant', 'banner'] as const).map((style) => (
                        <button
                          key={style}
                          onClick={() => setAsciiStyle(style)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${
                            asciiStyle === style
                              ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ASCII Output Screen */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-slate-500">ASCII Art Output:</span>
                    <button
                      onClick={() => onCopyText(generateAscii(asciiInput, asciiStyle), 'ASCII Output')}
                      className="text-xs font-mono text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy ASCII Output</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-[10px] sm:text-xs font-mono text-cyan-300 overflow-x-auto leading-tight selection:bg-cyan-500/30">
                    {generateAscii(asciiInput, asciiStyle)}
                  </pre>
                </div>
              </div>
            )}

            {/* word-encoder Demo */}
            {selectedDemoPackage === 'word-encoder' && (
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">
                    Plaintext Message to Encode:
                  </label>
                  <input
                    type="text"
                    value={encoderInput}
                    onChange={(e) => setEncoderInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white font-mono text-sm"
                    placeholder="Enter any text to encode..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-emerald-400 font-semibold">Encoded Vector (Indices)</span>
                      <button
                        onClick={() => onCopyText(encodeString(encoderInput), 'Encoded Vector')}
                        className="text-xs font-mono text-slate-400 hover:text-white"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                    <code className="text-xs font-mono text-emerald-300 block break-all bg-slate-950 p-2.5 rounded border border-slate-800">
                      {encodeString(encoderInput)}
                    </code>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-cyan-400 font-semibold">Instant Decoded Reversal</span>
                      <span className="text-[10px] font-mono text-slate-500">Lossless Check</span>
                    </div>
                    <code className="text-xs font-mono text-cyan-300 block break-all bg-slate-950 p-2.5 rounded border border-slate-800">
                      "{decodeString(encodeString(encoderInput))}"
                    </code>
                  </div>
                </div>
              </div>
            )}

            {/* roboticdb Demo */}
            {selectedDemoPackage === 'roboticdb' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">Query Filter:</span>
                    <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                      {['All', 'Engineering', 'Banking', 'Financial'].map((dept) => (
                        <button
                          key={dept}
                          onClick={() => setDbQueryFilter(dept)}
                          className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                            dbQueryFilter === dept
                              ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const csv = 'id,name,role,department\n' + dbCollection.map(c => `${c.id},"${c.name}","${c.role}","${c.department}"`).join('\n');
                      onCopyText(csv, 'RoboticDB CSV Export');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-emerald-400 flex items-center gap-1.5"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Export as CSV</span>
                  </button>
                </div>

                {/* DB Table Preview */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                      <tr>
                        <th className="p-3">#ID</th>
                        <th className="p-3">Entity Name</th>
                        <th className="p-3">Role / Service</th>
                        <th className="p-3">Department</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {dbCollection
                        .filter(item => dbQueryFilter === 'All' || item.department === dbQueryFilter)
                        .map((row) => (
                          <tr key={row.id} className="hover:bg-slate-800/40">
                            <td className="p-3 text-cyan-400">{row.id}</td>
                            <td className="p-3 font-semibold text-white">{row.name}</td>
                            <td className="p-3 text-slate-300">{row.role}</td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-indigo-300">
                                {row.department}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
