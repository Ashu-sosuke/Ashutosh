import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, ExternalLink, FileText, MessageSquare } from 'lucide-react';
import { contactData } from '../data/portfolioData';
import SectionCanvas from './SectionCanvas';
import Magnetic from './Magnetic';
import { staggerContainer, fadeUp, slideFromLeft, slideFromRight } from '../lib/motionVariants';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 10) errs.message = 'Message must be at least 10 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setFormSubmitted(true);
      setIsSending(false);
    }, 700);
  };

  const contactSnippet = `// Direct Communication Protocol
val contact = Channel(
  email = "15bhartiashutosh@gmail.com",
  dispatch = "Direct Mailto Client Hook"
)`;

  return (
    <SectionCanvas
      id="contact"
      snippet={contactSnippet}
      snippetPosition="top-left"
      className="py-24 relative overflow-hidden"
    >
      <div className="layout-container">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col gap-10"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-2 text-left">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="w-8 h-1 rounded-full bg-[#2EC4B6]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2EC4B6]">
                Get In Touch
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8]">
              {contactData.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-[#9C9388] max-w-xl">
              {contactData.subhead}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info & Channels */}
            <motion.div
              variants={slideFromLeft}
              className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#1A1815] border border-[#2E2A26] shadow-xl shadow-[#0F0E0D]/50 flex flex-col justify-between relative z-10 text-left"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2EC4B6]/10 border border-[#2EC4B6]/25 text-xs font-medium text-[#2EC4B6] mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#2EC4B6] animate-pulse" />
                  <span>{contactData.availability}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F0E8] leading-snug">
                  Let’s collaborate on your next product.
                </h3>

                <p className="text-xs sm:text-sm text-[#9C9388] mt-3 leading-relaxed">
                  {contactData.body}
                </p>

                {/* Direct Credentials List */}
                <div className="mt-6 space-y-3 text-xs sm:text-sm">
                  {/* Email */}
                  <div className="p-3.5 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" />
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-[#F5F0E8] hover:text-[#FF6B35] truncate font-mono text-xs transition-colors"
                      >
                        {contactData.email}
                      </a>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.94 }}
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-[#1A1815] border border-[#2E2A26] text-[#9C9388] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors shrink-0 flex items-center gap-1 text-[11px] cursor-pointer"
                      title="Copy Email"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#2EC4B6]" />
                          <span className="text-[#2EC4B6]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Location */}
                  <div className="p-3.5 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#2EC4B6] shrink-0" />
                    <span className="text-[#F5F0E8] text-xs">{contactData.location}</span>
                  </div>
                </div>
              </div>

              {/* Social & Resume Links */}
              <div className="mt-8 pt-6 border-t border-[#2E2A26] flex items-center gap-3 flex-wrap">
                <Magnetic>
                  <motion.a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-4 py-2 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] hover:border-[#FF6B35] text-[#9C9388] hover:text-[#FF6B35] transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-[#9C9388]/50" />
                  </motion.a>
                </Magnetic>

                <Magnetic>
                  <motion.a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-4 py-2 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] hover:border-[#FF6B35] text-[#9C9388] hover:text-[#FF6B35] transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#2EC4B6]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-[#9C9388]/50" />
                  </motion.a>
                </Magnetic>

                <Magnetic>
                  <motion.a
                    href={contactData.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-4 py-2 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] hover:border-[#FF6B35] text-[#9C9388] hover:text-[#FF6B35] transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span>Resume</span>
                    <ExternalLink className="w-3 h-3 text-[#9C9388]/50" />
                  </motion.a>
                </Magnetic>
              </div>
            </motion.div>

            {/* Right: Validated Interactive Contact Form */}
            <motion.div
              variants={slideFromRight}
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#1A1815] border border-[#2E2A26] shadow-xl shadow-[#0F0E0D]/50 relative z-10 text-left"
            >
              <h3 className="text-lg font-bold font-heading text-[#F5F0E8] flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#FF6B35]" />
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#9C9388] mt-1 mb-6">
                Fill in the details below to launch your default email client with a pre-formatted payload directly to {contactData.email}.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="text-xs font-medium text-[#9C9388] block mb-1">
                      Your Name <span className="text-[#FF6B35]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0F0E0D] border ${
                        errors.name ? 'border-red-500/70' : 'border-[#2E2A26]'
                      } text-[#F5F0E8] placeholder-[#9C9388]/40 text-xs focus:outline-none focus:border-[#FF6B35] transition-colors`}
                    />
                    {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="text-xs font-medium text-[#9C9388] block mb-1">
                      Your Email <span className="text-[#FF6B35]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0F0E0D] border ${
                        errors.email ? 'border-red-500/70' : 'border-[#2E2A26]'
                      } text-[#F5F0E8] placeholder-[#9C9388]/40 text-xs focus:outline-none focus:border-[#FF6B35] transition-colors`}
                    />
                    {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="text-xs font-medium text-[#9C9388] block mb-1">
                    Subject <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Role Discussion / Engineering Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#0F0E0D] border ${
                      errors.subject ? 'border-red-500/70' : 'border-[#2E2A26]'
                    } text-[#F5F0E8] placeholder-[#9C9388]/40 text-xs focus:outline-none focus:border-[#FF6B35] transition-colors`}
                  />
                  {errors.subject && <span className="text-[10px] text-red-400 mt-1 block">{errors.subject}</span>}
                </div>

                {/* Message Field */}
                <div>
                  <label className="text-xs font-medium text-[#9C9388] block mb-1">
                    Message <span className="text-[#FF6B35]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your project, timeline, or engineering opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#0F0E0D] border ${
                      errors.message ? 'border-red-500/70' : 'border-[#2E2A26]'
                    } text-[#F5F0E8] placeholder-[#9C9388]/40 text-xs focus:outline-none focus:border-[#FF6B35] transition-colors resize-none`}
                  />
                  {errors.message && <span className="text-[10px] text-red-400 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between">
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-full bg-[#FF6B35] text-[#0F0E0D] text-xs font-semibold hover:bg-[#FF6B35]/85 transition-colors shadow-lg shadow-[#FF6B35]/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSending ? 'Launching Mail Client...' : 'Send Message'}</span>
                  </motion.button>

                  {formSubmitted && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs text-[#2EC4B6] font-medium flex items-center gap-1"
                    >
                      <Check className="w-4 h-4" /> Client launched!
                    </motion.span>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionCanvas>
  );
}
