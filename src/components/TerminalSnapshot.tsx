import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Cpu, Layers, Sparkles, Copy, Check, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, OPEN_SOURCE_PACKAGES, PROJECTS_DATA } from '../data/portfolioData';

export const TerminalSnapshot: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cli' | 'architecture' | 'npm'>('cli');
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'whoami',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-300 font-semibold">{PERSONAL_INFO.name}</p>
          <p className="text-slate-400">{PERSONAL_INFO.title}</p>
          <p className="text-xs text-slate-500 font-mono">Location: {PERSONAL_INFO.location} · Status: {PERSONAL_INFO.status}</p>
        </div>
      )
    },
    {
      cmd: 'stack --summary',
      output: (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300">
          <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
            <span className="text-cyan-400 font-medium block">Frontend</span>
            <span>Angular · React · TypeScript</span>
          </div>
          <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
            <span className="text-emerald-400 font-medium block">Backend</span>
            <span>Node.js · NestJS · Flask</span>
          </div>
          <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
            <span className="text-purple-400 font-medium block">Data & Cloud</span>
            <span>MongoDB · ClickHouse · AWS</span>
          </div>
        </div>
      )
    }
  ]);

  const [copiedCode, setCopiedCode] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = commandInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputNode: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs text-slate-400 font-mono">
            <p><span className="text-cyan-300">whoami</span> - Display developer profile</p>
            <p><span className="text-cyan-300">stack</span> - View core technology ecosystem</p>
            <p><span className="text-cyan-300">experience</span> - View current role and banking systems</p>
            <p><span className="text-cyan-300">projects</span> - List live web applications</p>
            <p><span className="text-cyan-300">packages</span> - List published npm packages</p>
            <p><span className="text-cyan-300">contact</span> - Display email and direct lines</p>
            <p><span className="text-cyan-300">clear</span> - Clear terminal session</p>
          </div>
        );
        break;
      case 'whoami':
        outputNode = (
          <div className="text-slate-300 space-y-1 text-xs">
            <p className="text-cyan-300 font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-slate-400">{PERSONAL_INFO.title}</p>
            <p className="text-slate-500">Frontend Lead @ NPST · Banking Domain Specialist</p>
          </div>
        );
        break;
      case 'stack':
      case 'skills':
        outputNode = (
          <div className="text-xs text-slate-300 space-y-1 font-mono">
            <p className="text-cyan-400 font-semibold">[Languages] TypeScript, JavaScript, Python, SQL, Cypher</p>
            <p className="text-blue-400 font-semibold">[Frontend] Angular, ReactJS, React Native</p>
            <p className="text-emerald-400 font-semibold">[Backend] Node.js, NestJS, Flask</p>
            <p className="text-amber-400 font-semibold">[Databases] MongoDB, Neo4j, ClickHouse</p>
            <p className="text-purple-400 font-semibold">[Cloud/DevOps] AWS (EC2, S3), Docker, Vercel, npm</p>
          </div>
        );
        break;
      case 'experience':
        outputNode = (
          <div className="text-xs text-slate-300 space-y-1">
            <p className="text-emerald-400 font-bold">{EXPERIENCE_DATA.role} @ {EXPERIENCE_DATA.company}</p>
            <p className="text-slate-400">{EXPERIENCE_DATA.period} ({EXPERIENCE_DATA.location})</p>
            <p className="text-slate-300">• Led ODR Portal frontend architecture & performance</p>
            <p className="text-slate-300">• Delivered Merchant Portals for State Bank of Mauritius & Cosmos Bank</p>
          </div>
        );
        break;
      case 'projects':
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="flex items-center justify-between border-b border-slate-800/60 pb-1">
                <span className="text-cyan-300 font-medium">{p.title}</span>
                <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 underline">
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
                <span className="text-emerald-400 font-bold">{pkg.name}</span> - {pkg.npmCommand}
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
      case 'sudo hire kunal':
      case 'hire':
        outputNode = (
          <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
            <p className="font-bold">✓ Permission Granted: High-impact engineer ready to deploy.</p>
            <p className="mt-1">Reach out at <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-mono">{PERSONAL_INFO.email}</a> to schedule an interview.</p>
          </div>
        );
        break;
      default:
        outputNode = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: "{cleanCmd}". Type <span className="text-cyan-300 underline font-bold">help</span> to view supported commands.
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
    const snippet = `// Engineering Profile
export const engineer = {
  name: "${PERSONAL_INFO.name}",
  role: "${PERSONAL_INFO.title}",
  experience: "Frontend Lead @ NPST (Banking Systems & Portals)",
  domains: ["Banking Portals", "ODR Systems", "Merchant Operations", "Dev Tooling"],
  coreStack: ["Angular", "React", "Node.js", "NestJS", "TypeScript", "AWS", "Docker", "ClickHouse"],
  email: "${PERSONAL_INFO.email}"
};`;
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-950/80 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col">
      {/* Header Bar - Fully Responsive */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-900/90 border-b border-slate-800/80 select-none">
        {/* Left: Window Controls & Directory Info */}
        <div className="flex items-center justify-between sm:justify-start gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/50" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/50" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/50" />
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-slate-400 ml-1 sm:ml-2 flex items-center gap-1.5 truncate">
            <TerminalIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">
              <span className="hidden md:inline text-slate-500">kunal-bhande@workspace:</span>
              <span className="text-cyan-300 font-medium">~/architecture</span>
            </span>
          </span>
        </div>

        {/* Right: Tab Buttons with Responsive Labels & Full Grid on Mobile */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 sm:p-1 rounded-lg border border-slate-800 shrink-0 w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={() => setActiveTab('cli')}
            className={`flex-1 sm:flex-initial px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono transition-all text-center whitespace-nowrap ${
              activeTab === 'cli'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="sm:hidden">CLI</span>
            <span className="hidden sm:inline">Interactive CLI</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex-1 sm:flex-initial px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono transition-all text-center whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Config.ts
          </button>
          <button
            onClick={() => setActiveTab('npm')}
            className={`flex-1 sm:flex-initial px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono transition-all text-center whitespace-nowrap ${
              activeTab === 'npm'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="sm:hidden">Packages</span>
            <span className="hidden sm:inline">NPM Ecosystem</span>
          </button>
        </div>
      </div>

      {/* Terminal View Content */}
      <div className="p-4 sm:p-5 font-mono text-sm min-h-[300px] max-h-[360px] overflow-y-auto">
        {activeTab === 'cli' && (
          <div className="space-y-3">
            <div className="text-xs text-slate-500 pb-2 border-b border-slate-900 flex items-center justify-between">
              <span>Environment: Node.js v20.x · Terminal Session Active</span>
              <span className="text-slate-400">Type <span className="text-cyan-400">help</span> for commands</span>
            </div>

            {commandHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-cyan-400 font-bold">➜</span>
                  <span className="text-indigo-400 font-semibold">~</span>
                  <span className="text-slate-200">{item.cmd}</span>
                </div>
                <div className="pl-4 py-1">{item.output}</div>
              </div>
            ))}

            {/* Interactive Prompt Input */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
              <span className="text-cyan-400 font-bold text-xs">➜</span>
              <span className="text-indigo-400 font-semibold text-xs">~</span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="type 'help', 'experience', 'projects'..."
                className="bg-transparent border-none outline-none text-slate-200 text-xs font-mono flex-1 placeholder:text-slate-600 focus:ring-0"
              />
              <button
                type="submit"
                className="text-slate-500 hover:text-cyan-400 p-1 transition-colors"
                aria-label="Run command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="relative">
            <button
              onClick={copyConfigSnippet}
              className="absolute top-0 right-0 p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1.5 transition-all"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied' : 'Copy'}</span>
            </button>

            <pre className="text-xs leading-relaxed text-slate-300 overflow-x-auto pr-16">
              <span className="text-slate-500">// Engineering Profile & Systems Overview</span>{'\n'}
              <span className="text-indigo-400">export const</span> <span className="text-cyan-300">engineer</span> = {'{'}{'\n'}
              {'  '}<span className="text-slate-400">name:</span> <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,{'\n'}
              {'  '}<span className="text-slate-400">role:</span> <span className="text-emerald-300">"{PERSONAL_INFO.title}"</span>,{'\n'}
              {'  '}<span className="text-slate-400">experience:</span> <span className="text-emerald-300">"Frontend Lead @ NPST"</span>,{'\n'}
              {'  '}<span className="text-slate-400">enterpriseDomains:</span> [{'\n'}
              {'    '}<span className="text-amber-300">"Online Dispute Resolution (ODR)"</span>,{'\n'}
              {'    '}<span className="text-amber-300">"State Bank of Mauritius Merchant Portal"</span>,{'\n'}
              {'    '}<span className="text-amber-300">"Cosmos Bank Merchant Operations"</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}<span className="text-slate-400">coreStack:</span> [{'\n'}
              {'    '}<span className="text-cyan-300">"Angular"</span>, <span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"TypeScript"</span>,{'\n'}
              {'    '}<span className="text-cyan-300">"Node.js"</span>, <span className="text-cyan-300">"NestJS"</span>, <span className="text-cyan-300">"Python"</span>,{'\n'}
              {'    '}<span className="text-cyan-300">"MongoDB"</span>, <span className="text-cyan-300">"ClickHouse"</span>, <span className="text-cyan-300">"Docker"</span>, <span className="text-cyan-300">"AWS"</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}<span className="text-slate-400">openSource:</span> [<span className="text-emerald-300">"robotic-creater"</span>, <span className="text-emerald-300">"word-encoder"</span>, <span className="text-emerald-300">"roboticdb"</span>],{'\n'}
              {'  '}<span className="text-slate-400">email:</span> <span className="text-emerald-300">"{PERSONAL_INFO.email}"</span>{'\n'}
              {'}'};
            </pre>
          </div>
        )}

        {activeTab === 'npm' && (
          <div className="space-y-3 text-xs">
            <p className="text-slate-400">Published npm packages authored by Kunal:</p>
            {OPEN_SOURCE_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">{pkg.name}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{pkg.version}</span>
                </div>
                <p className="text-slate-300 text-[11px] font-sans">{pkg.description}</p>
                <div className="flex items-center justify-between pt-1">
                  <code className="text-[10px] text-cyan-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 font-mono">
                    {pkg.npmCommand}
                  </code>
                  <a
                    href={pkg.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-indigo-400 hover:text-indigo-300 underline"
                  >
                    View on npmjs.com
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer status */}
      <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          Terminal Ready
        </span>
        <span className="text-slate-400">TypeScript · Production Architecture</span>
      </div>
    </div>
  );
};
