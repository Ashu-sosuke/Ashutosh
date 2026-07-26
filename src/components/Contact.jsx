import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { contactData } from '../data/portfolioData';
import DotGrid from './DotGrid';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contactData.email}?subject=Collaboration Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Reactive Dot Grid */}
      <DotGrid count={12} maxOffset={12} className="top-12 right-12 hidden md:block" />

      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 rounded-full bg-[#2EC4B6]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#2EC4B6]">Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8]">
              Let's connect
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left — Info */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#1A1815] border border-[#2E2A26] shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2EC4B6]/10 border border-[#2EC4B6]/25 text-xs font-medium text-[#2EC4B6] mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#2EC4B6] animate-pulse" />
                  Open for opportunities
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F0E8] leading-tight">
                  {contactData.headline}
                </h3>

                <p className="text-sm text-[#9C9388] mt-4 leading-relaxed">
                  {contactData.body}
                </p>

                {/* Info list */}
                <div className="mt-8 space-y-3.5 text-sm">
                  {/* Email */}
                  <div className="p-4 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" strokeWidth={2.2} />
                      <span className="text-[#F5F0E8] truncate">{contactData.email}</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-[#1A1815] border border-[#2E2A26] text-[#9C9388] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors shrink-0 flex items-center gap-1 text-xs"
                      title="Copy Email"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#2EC4B6]" />
                          <span className="text-[#2EC4B6]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-4 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#2EC4B6] shrink-0" strokeWidth={2.2} />
                    <span className="text-[#F5F0E8]">{contactData.location}</span>
                  </div>
                </div>
              </div>

              {/* Social buttons */}
              <div className="mt-8 pt-6 border-t border-[#2E2A26] flex items-center gap-4">
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] hover:border-[#FF6B35] text-[#9C9388] hover:text-[#FF6B35] transition-all flex items-center justify-center gap-2 text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={2.2} />
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] hover:border-[#FF6B35] text-[#9C9388] hover:text-[#FF6B35] transition-all flex items-center justify-center gap-2 text-xs font-medium"
                >
                  <Github className="w-4 h-4" strokeWidth={2.2} />
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#1A1815] border border-[#2E2A26] shadow-xl">
              <h4 className="text-lg font-bold font-heading text-[#F5F0E8] mb-1 flex items-center gap-2">
                <Send className="w-4 h-4 text-[#FF6B35]" strokeWidth={2.2} />
                Send a message
              </h4>
              <p className="text-xs text-[#9C9388] mb-6">
                Opens a pre-filled email — no forms to worry about.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-[#9C9388] mb-1.5 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] text-[#F5F0E8] placeholder-[#9C9388]/40 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#9C9388] mb-1.5 font-medium">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@techfirm.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] text-[#F5F0E8] placeholder-[#9C9388]/40 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#9C9388] mb-1.5 font-medium">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Ashu, I'd love to chat about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] text-[#F5F0E8] placeholder-[#9C9388]/40 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#FF6B35] text-[#0F0E0D] text-sm font-semibold hover:bg-[#FF6B35]/85 transition-all shadow-lg shadow-[#FF6B35]/15 flex items-center justify-center gap-2 group"
                >
                  <span>Launch Mail App</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {formSubmitted && (
                  <p className="text-xs text-[#2EC4B6] text-center mt-2 font-medium">
                    ✓ Mail client opened! You can also email directly at {contactData.email}
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
