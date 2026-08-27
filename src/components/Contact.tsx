import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail, copiedEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Engineering Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Kunal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 bg-[#08090d] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>COMMUNICATION & INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl font-normal leading-relaxed">
            Interested in collaborating on frontend architecture, financial software systems, or open source developer tools? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-7 rounded-2xl bg-[#0d0f15] border border-white/[0.08] shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-2">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all font-mono"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-slate-400 mt-1.5">
                  Primary channel for recruiting and technical inquiries.
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.08] mt-5 flex items-center gap-3">
                <button
                  onClick={onCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium transition-all min-h-[44px]"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 text-xs font-mono transition-colors min-h-[44px] flex items-center justify-center"
                  title="Open Mail Client"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone & Phone Call */}
            <div className="p-7 rounded-2xl bg-[#0d0f15] border border-white/[0.08] shadow-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-lg font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                >
                  +91 {PERSONAL_INFO.phone}
                </a>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Call Kunal"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0d0f15] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block">GitHub</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-mono truncate block">
                    Bhandekunal16
                  </span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0d0f15] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block">LinkedIn</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-mono truncate block">
                    kunal-bhande
                  </span>
                </div>
              </a>
            </div>

            {/* Availability Pill */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Available for engineering conversations within 24-48 hours.</span>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-9 rounded-2xl bg-[#0d0f15] border border-white/[0.08] shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mb-6 font-normal">
                Submit an inquiry or prepare a message to launch directly in your email client.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-slate-200 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-mono">
                    <Check className="w-4 h-4" />
                    <span>Message Ready to Send</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. You can now dispatch this message directly:
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={generateMailto()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#08090d] font-bold text-xs shadow-md"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Launch Mail Client</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-mono hover:text-white"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-white/30 focus:outline-none text-white text-xs font-mono placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-white/30 focus:outline-none text-white text-xs font-mono placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Engineering Role / System Architecture"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-white/30 focus:outline-none text-white text-xs font-mono placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your engineering requirements, project scope, or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-white/30 focus:outline-none text-white text-xs font-mono placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      Direct inbox dispatch
                    </span>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#08090d] font-bold text-xs transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 min-h-[44px]"
                    >
                      {submitting ? (
                        <span>Preparing...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
