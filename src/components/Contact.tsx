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
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck
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
    // UI-ready simulation with mailto option
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Kunal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/70 border-t border-slate-800/80 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a project, product, or engineering problem to solve?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Whether you are looking to build a high-performance frontend architecture, an enterprise banking portal, or discuss software engineering opportunities — let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-2">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-slate-400 mt-1">
                  Primary channel for recruiting and technical inquiries.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 mt-4 flex items-center gap-3">
                <button
                  onClick={onCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium transition-all"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-mono transition-colors"
                  title="Open Mail Client"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone & Phone Call */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex items-center justify-between">
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
                className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all"
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
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Github className="w-6 h-6 text-slate-300 group-hover:text-cyan-300 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block">GitHub</span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Bhandekunal16
                  </span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-cyan-300 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block">LinkedIn</span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    kunal-bhande
                  </span>
                </div>
              </a>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Available for engineering conversations within 24-48 hours.</span>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the fields below to dispatch an inquiry or open your default mail client.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-slate-200 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                    <Check className="w-5 h-5" />
                    <span>Message Ready to Send!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. You can dispatch this message directly via your email client using the button below:
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={generateMailto()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch Mail Client</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono hover:text-white"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Frontend Lead Role / Architectural Consulting"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
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
                      placeholder="Describe your engineering requirements, team goals, or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      Strict privacy · No spam
                    </span>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Preparing Message...</span>
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
