import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { brandData, contactData } from '../data/portfolioData';
import { useLenis } from '../providers/SmoothScrollProvider';
import AKLogo from './AKLogo';

export default function Footer() {
  const { scrollTo } = useLenis();

  const scrollToTop = () => {
    scrollTo(0, { offset: 0, duration: 1.2 });
  };

  return (
    <footer className="py-16 border-t border-[#2E2A26] bg-[#0F0E0D] relative z-10">
      <div className="layout-container flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2E2A26]">
          {/* Official Brand Identity Monogram & Wordmark */}
          <div className="flex items-center gap-3">
            <AKLogo
              size={44}
              showWordmark={true}
              showTagline={true}
              variant="default"
            />
          </div>

          {/* Inspirational Tagline */}
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm font-medium text-[#F5F0E8]/90 italic font-heading">
              “Designed with curiosity. Built with engineering.”
            </p>
            <p className="text-[11px] text-[#9C9388] mt-0.5">
              Android Developer · AI Engineer · Software Developer
            </p>
          </div>
        </div>

        {/* Bottom Bar: Links, Copyright, and Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9C9388]">
          {/* Navigation & Social Links */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a
              href="/Ashutosh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF6B35] transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Resume</span>
            </a>
            <span className="text-[#2E2A26]">·</span>
            <a
              href={contactData.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF6B35] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-[#2E2A26]">·</span>
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF6B35] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#2EC4B6]" />
              <span>LinkedIn</span>
            </a>
            <span className="text-[#2E2A26]">·</span>
            <a
              href={`mailto:${contactData.email}`}
              className="hover:text-[#FF6B35] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright & Top Button */}
          <div className="flex items-center gap-4">
            <span className="text-[11px]">
              © {new Date().getFullYear()} {brandData.name}. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#1A1815] border border-[#2E2A26] text-[#9C9388] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors flex items-center gap-1.5 text-xs font-medium group cursor-pointer"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
