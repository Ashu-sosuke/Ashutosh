import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-[#2E2A26] bg-[#0F0E0D] relative z-10">
      <div className="layout-container flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FF6B35] flex items-center justify-center text-[#0F0E0D] font-heading font-bold text-sm">
            A
          </span>
          <div>
            <p className="text-sm font-heading font-semibold text-[#F5F0E8]">
              Ashutosh Kumar Bharti
            </p>
            <p className="text-[11px] text-[#9C9388]">
              Android & AI Systems Engineer
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5 text-xs text-[#9C9388]">
          <a
            href={contactData.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FF6B35] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" strokeWidth={2.2} /> GitHub
          </a>
          <span className="text-[#2E2A26]">·</span>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FF6B35] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" strokeWidth={2.2} /> LinkedIn
          </a>
          <span className="text-[#2E2A26]">·</span>
          <a
            href={`mailto:${contactData.email}`}
            className="hover:text-[#FF6B35] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" strokeWidth={2.2} /> Email
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-[#1A1815] border border-[#2E2A26] text-[#9C9388] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors flex items-center gap-1.5 text-xs font-medium group"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
