import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { heroData } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ── Scroll-Linked Animations (Framer Motion) ──
  const { scrollY } = useScroll();
  
  // Interpolate backdrop opacity from 0 to 0.9 past 120px
  const bgOpacity = useTransform(scrollY, [0, 120], ['rgba(15, 14, 13, 0)', 'rgba(15, 14, 13, 0.9)']);
  
  // Interpolate backdrop blur from 0px to 12px
  const blurValue = useTransform(scrollY, [0, 120], ['blur(0px)', 'blur(12px)']);
  
  // Interpolate border color opacity from transparent to solid 
  const borderOpacity = useTransform(scrollY, [0, 120], ['rgba(46, 42, 38, 0)', 'rgba(46, 42, 38, 1)']);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{
        backgroundColor: bgOpacity,
        backdropFilter: blurValue,
        borderBottom: '1px solid',
        borderColor: borderOpacity,
      }}
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
    >
      <div className="layout-container flex items-center justify-between">
        {/* Brand logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <span className="w-10 h-10 rounded-xl bg-[#FF6B35] flex items-center justify-center text-[#0F0E0D] font-heading font-bold text-base transition-transform group-hover:scale-105">
            A
          </span>
          <span className="font-heading text-lg font-bold text-[#F5F0E8] tracking-tight">
            ashu
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-[#1A1815]/75 border border-[#2E2A26] rounded-full px-6 py-2 backdrop-blur-md">
          {heroData.navLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-xs font-semibold tracking-wide text-[#9C9388] hover:text-[#F5F0E8] uppercase transition-colors"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-[#FF6B35] text-[#0F0E0D] text-sm font-semibold hover:bg-[#FF6B35]/85 transition-all shadow-md shadow-[#FF6B35]/15"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2.5 rounded-xl bg-[#1A1815] border border-[#2E2A26] text-[#F5F0E8] hover:border-[#FF6B35] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF6B35]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-[#2E2A26] bg-[#0F0E0D]/95 backdrop-blur-xl px-6 pt-4 pb-8"
          >
            <div className="flex flex-col gap-1.5 pt-2">
              {heroData.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm text-[#9C9388] hover:text-[#F5F0E8] hover:bg-[#1A1815] border border-transparent hover:border-[#2E2A26] flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-[#FF6B35] text-xs">→</span>
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-[#2E2A26]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-full bg-[#FF6B35] text-[#0F0E0D] text-sm font-semibold flex items-center justify-center gap-1.5"
                >
                  Let's Connect →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
