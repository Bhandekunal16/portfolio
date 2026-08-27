import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Terminal,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Cpu,
  Server,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#08090d] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl font-normal leading-relaxed">
            A software developer focused on architecting resilient user experiences, solid backend services, and reliable developer tooling.
          </p>
        </div>

        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
            <div className="p-8 rounded-2xl bg-[#0d0f15] border border-white/[0.08] shadow-xl space-y-5">
              <p className="text-white font-medium text-lg leading-snug">
                I am a Software Developer and Frontend Lead specializing in building robust, performant web applications and enterprise-grade distributed systems.
              </p>

              <p className="text-slate-300 leading-relaxed">
                At <span className="text-white font-medium">Network People Services Technologies Ltd. (NPST)</span>, I lead frontend architecture for the <span className="text-cyan-300 font-mono">Online Dispute Resolution (ODR)</span> platform and have delivered core merchant operating portals for major banking institutions including the <span className="text-white font-medium">State Bank of Mauritius</span> and <span className="text-white font-medium">Cosmos Bank</span>.
              </p>

              <p className="text-slate-300 leading-relaxed">
                My engineering approach is grounded in end-to-end craftsmanship: architecting predictable state topologies in TypeScript and Angular/React, building secure backend APIs with Node.js and NestJS, optimizing queries across MongoDB and ClickHouse, and streamlining cloud workflows on AWS.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Beyond enterprise banking applications, I am an active creator of open source software and developer tools, authoring multiple published npm packages that simplify text algorithms and memory-efficient data structures.
              </p>
            </div>

            {/* Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0d0f15] border border-white/[0.08]">
                <ShieldCheck className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">
                  Banking Security
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strict compliance, audit logging, and resilient financial state flows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d0f15] border border-white/[0.08]">
                <Zap className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">
                  High Performance
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fast initial loads, sub-second queries, and minimal bundle overhead.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d0f15] border border-white/[0.08]">
                <Terminal className="w-5 h-5 text-purple-400 mb-2" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">
                  Tooling & OSS
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Author of published npm packages solving real developer friction.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts & System Profile (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Profile Bento */}
            <div className="p-7 rounded-2xl bg-[#0d0f15] border border-white/[0.08] shadow-xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block border-b border-white/[0.08] pb-3">
                Quick Facts & Spec
              </span>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                  <span className="text-slate-500">Current Role</span>
                  <span className="text-white font-semibold">Frontend Lead</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                  <span className="text-slate-500">Company</span>
                  <span className="text-slate-200">NPST Ltd.</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                  <span className="text-slate-500">Experience</span>
                  <span className="text-cyan-300 font-bold">Nov 2022 — Present</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                  <span className="text-slate-500">Location</span>
                  <span className="text-slate-200">Thane, India</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                  <span className="text-slate-500">NPM Packages</span>
                  <span className="text-emerald-400 font-bold">3 Published</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Education</span>
                  <span className="text-slate-200">Engineering Graduate</span>
                </div>
              </div>
            </div>

            {/* Architecture Focus Pill */}
            <div className="p-6 rounded-2xl bg-[#0d0f15] border border-white/[0.08] space-y-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
                Primary Architecture Tiers
              </span>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Frontend: Angular 17+, React, TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Backend: Node.js, NestJS, Flask, REST</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Storage: ClickHouse, MongoDB, Neo4j</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Cloud: AWS (EC2, S3), Docker, Vercel</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
