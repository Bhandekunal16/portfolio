import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Cpu, Layers, Sparkles, Copy, Check, CornerDownLeft, Server, Activity, ArrowRight, ShieldCheck, Database, Cloud } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, OPEN_SOURCE_PACKAGES, PROJECTS_DATA } from '../data/portfolioData';

export const TerminalSnapshot: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'cli' | 'telemetry'>('architecture');
  const [selectedNode, setSelectedNode] = useState<string>('odr');
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'whoami',
      output: (
        <div className="text-slate-300 space-y-1 font-mono text-xs">
          <p className="text-white font-bold">{PERSONAL_INFO.name}</p>
          <p className="text-slate-400">{PERSONAL_INFO.title}</p>
          <p className="text-slate-500">Location: {PERSONAL_INFO.location} · Status: {PERSONAL_INFO.status}</p>
        </div>
      )
    },
    {
      cmd: 'stack --production',
      output: (
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
          <div className="p-2 rounded bg-white/[0.02] border border-white/10">
            <span className="text-cyan-400 font-semibold block">Frontend Tier</span>
            <span>Angular · React · TypeScript</span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] border border-white/10">
            <span className="text-emerald-400 font-semibold block">Backend & APIs</span>
            <span>Node.js · NestJS · Flask</span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] border border-white/10">
            <span className="text-sky-400 font-semibold block">Data Stores</span>
            <span>MongoDB · ClickHouse · Neo4j</span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] border border-white/10">
            <span className="text-indigo-400 font-semibold block">Infra & Cloud</span>
            <span>AWS (EC2, S3) · Docker · Vercel</span>
          </div>
        </div>
      )
    }
  ]);

  const [copiedCode, setCopiedCode] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const architectureNodes = [
    {
      id: 'client',
      title: 'Client Tier',
      tech: 'Angular 17+ · React · TypeScript',
      desc: 'Modular component architecture, memoized state topologies, and high-performance reactive pipelines.',
      type: 'frontend'
    },
    {
      id: 'gateway',
      title: 'API & Security Layer',
      tech: 'Node.js · RBAC · Banking Protocols',
      desc: 'Cryptographic session tokens, dispute resolution APIs, and strict banking data security compliance.',
      type: 'security'
    },
    {
      id: 'odr',
      title: 'Enterprise ODR Core',
      tech: 'State Engines · Microservices',
      desc: 'Online Dispute Resolution system handling multi-stage lifecycles, SLA tracking, and audit logging.',
      type: 'banking'
    },
    {
      id: 'data',
      title: 'Storage & Analytics',
      tech: 'ClickHouse · MongoDB · AWS S3',
      desc: 'Columnar telemetry aggregations, high-concurrency transaction indexing, and global CDN delivery.',
      type: 'storage'
    }
  ];

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = commandInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputNode: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs text-slate-400 font-mono">
            <p><span className="text-cyan-300 font-bold">whoami</span> - Display developer profile</p>
            <p><span className="text-cyan-300 font-bold">stack</span> - View complete engineering stack</p>
            <p><span className="text-cyan-300 font-bold">experience</span> - View current role and banking systems</p>
            <p><span className="text-cyan-300 font-bold">projects</span> - List live web applications</p>
            <p><span className="text-cyan-300 font-bold">packages</span> - List published npm packages</p>
            <p><span className="text-cyan-300 font-bold">contact</span> - Display email and direct lines</p>
            <p><span className="text-cyan-300 font-bold">clear</span> - Clear terminal session</p>
          </div>
        );
        break;
      case 'whoami':
        outputNode = (
          <div className="text-slate-300 space-y-1 text-xs font-mono">
            <p className="text-white font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-cyan-400">{PERSONAL_INFO.title}</p>
            <p className="text-slate-400">Frontend Lead @ NPST · Banking Domain Specialist</p>
          </div>
        );
        break;
      case 'stack':
      case 'skills':
        outputNode = (
          <div className="text-xs text-slate-300 space-y-1 font-mono">
            <p className="text-cyan-300 font-semibold">[Languages] TypeScript, JavaScript, Python, SQL, CSS, JSON, Cypher</p>
            <p className="text-blue-300 font-semibold">[Frontend] Angular, ReactJS, React Native</p>
            <p className="text-emerald-300 font-semibold">[Backend] Node.js, NestJS, Flask</p>
            <p className="text-amber-300 font-semibold">[Databases] MongoDB, Neo4j, ClickHouse</p>
            <p className="text-purple-300 font-semibold">[Cloud/Infra] AWS (EC2, S3), Docker, Vercel, npm</p>
          </div>
        );
        break;
      case 'experience':
        outputNode = (
          <div className="text-xs text-slate-300 space-y-1 font-mono">
            <p className="text-emerald-400 font-bold">{EXPERIENCE_DATA.role} @ {EXPERIENCE_DATA.company}</p>
            <p className="text-slate-400">{EXPERIENCE_DATA.period} ({EXPERIENCE_DATA.location})</p>
            <p className="text-slate-300">• Frontend architecture for Online Dispute Resolution (ODR) Portal</p>
            <p className="text-slate-300">• Merchant Portals for State Bank of Mauritius & Cosmos Bank</p>
          </div>
        );
        break;
      case 'projects':
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="flex items-center justify-between border-b border-white/5 pb-1">
                <span className="text-cyan-300 font-medium">{p.title}</span>
                <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white underline">
                  {p.liveUrl.replace('https://', '')}
                </a>
              </div>
            ))}
          </div>
        );
        break;
      case 'packages':
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            {OPEN_SOURCE_PACKAGES.map((pkg) => (
              <p key={pkg.id}>
                <span className="text-emerald-400 font-bold">{pkg.name}</span> - <code className="text-slate-400">{pkg.npmCommand}</code>
              </p>
            ))}
          </div>
        );
        break;
      case 'contact':
        outputNode = (
          <div className="text-xs space-y-1 font-mono text-slate-300">
            <p>Email: <span className="text-cyan-400">{PERSONAL_INFO.email}</span></p>
            <p>Phone: <span className="text-emerald-400">+91 {PERSONAL_INFO.phone}</span></p>
            <p>GitHub: <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.githubUrl}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.linkedinUrl}</a></p>
          </div>
        );
        break;
      case 'clear':
        setCommandHistory([]);
        setCommandInput('');
        return;
      default:
        outputNode = (
          <div className="text-xs text-rose-400 font-mono">
            Command not found: "{cleanCmd}". Type <span className="text-cyan-300 underline font-bold">help</span> to list available commands.
          </div>
        );
    }

    setCommandHistory((prev) => [...prev, { cmd: commandInput, output: outputNode }]);
    setCommandInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandHistory, activeTab]);

  const copyConfigSnippet = () => {
    const snippet = `// Engineering Architecture Profile
export const engineer = {
  name: "${PERSONAL_INFO.name}",
  role: "${PERSONAL_INFO.title}",
  company: "Network People Services Technologies Ltd.",
  focus: ["Scalable Frontend Architecture", "Banking Portals", "Dispute Resolution (ODR)", "Developer Tooling"],
  stack: {
    languages: ["TypeScript", "JavaScript", "Python", "SQL", "Cypher"],
    frontend: ["Angular", "React", "React Native"],
    backend: ["Node.js", "NestJS", "Flask"],
    databases: ["MongoDB", "ClickHouse", "Neo4j"],
    infrastructure: ["AWS", "Docker", "Vercel"]
  },
  contact: "${PERSONAL_INFO.email}"
};`;
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const selectedNodeInfo = architectureNodes.find(n => n.id === selectedNode) || architectureNodes[2];

  return (
    <div className="w-full rounded-2xl bg-[#0b0d13] border border-white/[0.08] shadow-2xl overflow-hidden flex flex-col">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/[0.08] select-none">
        {/* Left: Window Dots & Node Status */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 pl-1 border-l border-white/10">
            <Server className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300 font-medium hidden sm:inline">kunal-bhande/system-topology</span>
            <span className="text-slate-300 font-medium sm:hidden">topology.ts</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.06]">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'architecture'
                ? 'bg-white/10 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'cli'
                ? 'bg-white/10 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            CLI
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'telemetry'
                ? 'bg-white/10 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Config
          </button>
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="p-5 min-h-[310px] flex flex-col justify-between">
        {activeTab === 'architecture' && (
          <div className="space-y-4">
            {/* Interactive Node Pipeline */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {architectureNodes.map((node, index) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group ${
                      isSelected
                        ? 'bg-white/[0.07] border-cyan-500/50 shadow-md ring-1 ring-cyan-500/20'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        Node 0{index + 1}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-white tracking-tight mb-1 truncate">
                      {node.title}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-400 truncate">
                      {node.tech.split('·')[0]}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Deep Dive Inspector */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                    {selectedNodeInfo.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    [Live Spec]
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  Production Ready
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                {selectedNodeInfo.desc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono text-slate-500 mr-1">Stack:</span>
                {selectedNodeInfo.tech.split('·').map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300"
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* System Status Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-[10px] font-mono text-slate-500 block">Domain</span>
                <span className="text-xs font-mono font-bold text-slate-200">FinTech & Portals</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-[10px] font-mono text-slate-500 block">Role</span>
                <span className="text-xs font-mono font-bold text-cyan-300">Frontend Lead</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-[10px] font-mono text-slate-500 block">Experience</span>
                <span className="text-xs font-mono font-bold text-emerald-400">Nov 2022 – Pres</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cli' && (
          <div className="space-y-3 font-mono text-xs min-h-[260px] max-h-[300px] overflow-y-auto">
            <div className="text-[11px] text-slate-500 pb-2 border-b border-white/5 flex items-center justify-between">
              <span>Environment: Node.js v20.x</span>
              <span className="text-slate-400">Type <span className="text-cyan-400">help</span></span>
            </div>

            {commandHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-cyan-400 font-bold">➜</span>
                  <span className="text-white font-medium">{item.cmd}</span>
                </div>
                <div className="pl-3 py-1">{item.output}</div>
              </div>
            ))}

            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
              <span className="text-cyan-400 font-bold text-xs">➜</span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="type 'help', 'experience', 'projects', 'stack'..."
                className="bg-transparent border-none outline-none text-slate-200 text-xs font-mono flex-1 placeholder:text-slate-600 focus:ring-0"
              />
              <button
                type="submit"
                className="text-slate-500 hover:text-white p-1 transition-colors"
                aria-label="Run command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="relative">
            <button
              onClick={copyConfigSnippet}
              className="absolute top-0 right-0 p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCode ? 'Copied' : 'Copy Spec'}</span>
            </button>

            <pre className="text-xs leading-relaxed text-slate-300 font-mono overflow-x-auto pr-16 max-h-[280px]">
              <span className="text-slate-500">// Engineering Architecture Profile</span>{'\n'}
              <span className="text-indigo-400">export const</span> <span className="text-cyan-300">engineer</span> = {'{'}{'\n'}
              {'  '}<span className="text-slate-400">name:</span> <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,{'\n'}
              {'  '}<span className="text-slate-400">role:</span> <span className="text-emerald-300">"{PERSONAL_INFO.title}"</span>,{'\n'}
              {'  '}<span className="text-slate-400">organization:</span> <span className="text-emerald-300">"Network People Services Technologies Ltd."</span>,{'\n'}
              {'  '}<span className="text-slate-400">bankingPortals:</span> [{'\n'}
              {'    '}<span className="text-cyan-200">"Online Dispute Resolution (ODR) System"</span>,{'\n'}
              {'    '}<span className="text-cyan-200">"State Bank of Mauritius Merchant Portal"</span>,{'\n'}
              {'    '}<span className="text-cyan-200">"Cosmos Bank Merchant Operations Platform"</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}<span className="text-slate-400">openSource:</span> [<span className="text-amber-300">"robotic-creater"</span>, <span className="text-amber-300">"word-encoder"</span>, <span className="text-amber-300">"roboticdb"</span>],{'\n'}
              {'  '}<span className="text-slate-400">email:</span> <span className="text-emerald-300">"{PERSONAL_INFO.email}"</span>{'\n'}
              {'}'};
            </pre>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="px-4 py-2 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Systems Online · Zero-Downtime Design
        </span>
        <span className="text-slate-400">TypeScript · Web · Cloud</span>
      </div>
    </div>
  );
};
