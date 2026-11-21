import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { heroData } from '../data/portfolioData';
import { useLenis } from '../providers/SmoothScrollProvider';
import AKLogo from './AKLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollTo } = useLenis();

  // ── Scroll-Linked Header Background Animation ──
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], ['rgba(15, 14, 13, 0)', 'rgba(15, 14, 13, 0.92)']);
  const blurValue = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(16px)']);
  const borderOpacity = useTransform(scrollY, [0, 80], ['rgba(46, 42, 38, 0)', 'rgba(46, 42, 38, 1)']);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === '#' || href === '#home') {
      scrollTo(0, { offset: 0, duration: 1.1 });
    } else {
      scrollTo(href, { offset: -75, duration: 1.1 });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

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
      className="fixed top-0 left-0 right-0 z-50 py-3.5 transition-all duration-300"
    >
      <div className="layout-container flex items-center justify-between">
        {/* Brand identity: Official AK Monogram + Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="ASHUTOSH - Home"
        >
          <AKLogo
            size={42}
            showWordmark={true}
            showTagline={true}
            variant="default"
            className="cursor-pointer"
          />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1A1815]/80 border border-[#2E2A26] rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/40">
          {heroData.navLinks.map((link) => {
            const sectionTarget = link.href.replace('#', '') || 'home';
            const isActive = activeSection === sectionTarget;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-[#F5F0E8]'
                    : 'text-[#9C9388] hover:text-[#F5F0E8]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#FF6B35]/15 border border-[#FF6B35]/30 rounded-full -z-10 shadow-sm"
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs: Resume & Let's Connect */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/Ashutosh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#1A1815] border border-[#2E2A26] hover:border-[#FF6B35] text-[#9C9388] hover:text-[#FF6B35] text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 group cursor-pointer shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#FF6B35] group-hover:scale-110 transition-transform" />
            <span>Resume</span>
            <span className="text-[10px] text-[#9C9388]/60 group-hover:text-[#FF6B35] transition-colors">↗</span>
          </a>

          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-full bg-[#FF6B35] text-[#0F0E0D] text-xs font-semibold hover:bg-[#FF6B35]/85 transition-colors shadow-md shadow-[#FF6B35]/15 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile menu trigger */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-xl bg-[#1A1815] border border-[#2E2A26] text-[#F5F0E8] hover:border-[#FF6B35] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF6B35]" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-b border-[#2E2A26] bg-[#0F0E0D]/98 backdrop-blur-2xl px-6 pt-4 pb-8"
          >
            <div className="flex flex-col gap-1.5 pt-2">
              {heroData.navLinks.map((link) => {
                const sectionTarget = link.href.replace('#', '') || 'home';
                const isActive = activeSection === sectionTarget;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-all ${
                      isActive
                        ? 'text-[#F5F0E8] bg-[#1A1815] border border-[#2E2A26]'
                        : 'text-[#9C9388] hover:text-[#F5F0E8] hover:bg-[#1A1815]/50 border border-transparent'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#FF6B35]">→</span>
                  </a>
                );
              })}

              <div className="mt-4 pt-4 border-t border-[#2E2A26] flex flex-col gap-2.5">
                <a
                  href="/Ashutosh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#1A1815] border border-[#2E2A26] text-[#F5F0E8] text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#FF6B35]" />
                  <span>Download Resume PDF</span>
                </a>

                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-[#FF6B35] text-[#0F0E0D] text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FF6B35]/20 hover:bg-[#FF6B35]/90 transition-colors"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
