import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#08090d] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education & Background
          </h2>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl p-7 sm:p-8 bg-[#0d0f15] border border-white/[0.08] hover:border-white/15 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-cyan-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <h3 className="text-xl font-bold text-white tracking-tight">{EDUCATION_DATA.institution}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {EDUCATION_DATA.grade}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-slate-200 mb-2 font-mono">
                {EDUCATION_DATA.degree}
              </h4>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {EDUCATION_DATA.period}
                </span>
                <span>•</span>
                <span>{EDUCATION_DATA.field}</span>
              </div>

              <div className="space-y-1">
                {EDUCATION_DATA.highlights.map((h, idx) => (
                  <p key={idx} className="text-xs text-slate-400 leading-relaxed font-normal">
                    • {h}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 md:pl-6">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Verification
            </span>
            <span className="text-xs font-mono text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Degree
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
