import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import SectionCanvas from './SectionCanvas';
import Tilt from './Tilt';
import ScrollReveal from './ScrollReveal';
import { staggerContainer, fadeUp, slideFromLeft } from '../lib/motionVariants';
import { Smartphone, Cpu, Rocket, GraduationCap } from 'lucide-react';

export default function About() {
  const aboutSnippet = `val engineer = object : EngineeringMindset {
  val primaryStack = "Kotlin + Jetpack Compose"
  val backendStack = "FastAPI + Asynchronous IO"
  val academic = "B.Tech CSE @ Roorkee Institute of Technology"
  val vision = "Building production-grade AI-native products"
}`;

  const highlights = [
    {
      title: 'End-to-End Feature Ownership',
      desc: 'Expanded intern scope at ParkVault to independently architect and ship Razorpay, the app’s first online payment flow.',
      icon: Smartphone,
      accent: '#FF6B35',
    },
    {
      title: 'Cross-Domain Systems Engineering',
      desc: 'Bridging native Kotlin/Compose client architectures with high-throughput FastAPI and real-time audio/vision ML inference.',
      icon: Cpu,
      accent: '#2EC4B6',
    },
    {
      title: 'Startup & Founder Mindset',
      desc: 'Relentlessly turning complex architectural patterns into shipped, verified, production-grade applications.',
      icon: Rocket,
      accent: '#FF6B35',
    },
  ];

  return (
    <SectionCanvas
      id="about"
      snippet={aboutSnippet}
      snippetPosition="bottom-left"
      className="py-24 relative overflow-hidden"
    >
      <div className="layout-container">
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-1 rounded-full bg-[#FF6B35]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B35]">About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8] relative inline-block self-start pb-2">
                {aboutData.heading}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6B35] origin-left"
                />
              </h2>
            </div>
          </ScrollReveal>

          {/* Bio Cards & Bento Grid */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main bio narrative card */}
              <motion.div
                variants={slideFromLeft}
                className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#1A1815] border border-[#2E2A26] shadow-xl relative z-10 flex flex-col justify-between"
              >
                <div className="space-y-5 text-[#9C9388] leading-relaxed text-[15px] text-left">
                  <p className="text-[#F5F0E8]/90 font-medium">
                    {aboutData.paragraph1}
                  </p>
                  
                  <div className="border-l-3 border-[#FF6B35] pl-5 py-2 bg-[#FF6B35]/5 rounded-r-xl">
                    <p className="text-[#F5F0E8] text-sm leading-relaxed">
                      {aboutData.paragraph2}
                    </p>
                  </div>

                  <p className="text-[#F5F0E8]/85">
                    {aboutData.paragraph3}
                  </p>

                  <div className="text-xs text-[#9C9388] bg-[#0F0E0D] p-4 rounded-xl border border-[#2E2A26] flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B35]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#FF6B35]" />
                    </div>
                    <div>
                      <span className="text-[#2EC4B6] font-semibold block mb-0.5">Engineering Philosophy</span>
                      <span>{aboutData.paragraph4}</span>
                    </div>
                  </div>
                </div>

                {/* 4 Verified Stats Mini Bento Strip */}
                <div className="mt-8 pt-6 border-t border-[#2E2A26] grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {aboutData.stats.map((stat, sIdx) => {
                    const color = sIdx % 2 === 0 ? '#FF6B35' : '#2EC4B6';
                    return (
                      <div key={stat.label} className="p-3.5 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] text-left">
                        <div className="text-xl sm:text-2xl font-bold font-heading" style={{ color }}>
                          {stat.value}
                        </div>
                        <div className="text-xs font-semibold text-[#F5F0E8] mt-0.5">
                          {stat.label}
                        </div>
                        <div className="text-[10px] text-[#9C9388] mt-0.5">
                          {stat.sublabel}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Sidebar 3D Tilt Feature Highlights */}
              <motion.div variants={staggerContainer(0.1)} className="lg:col-span-4 flex flex-col gap-4 relative z-10">
                {highlights.map((card) => {
                  const Icon = card.icon;
                  return (
                    <Tilt key={card.title} maxTilt={6} className="w-full">
                      <motion.div
                        variants={fadeUp}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="p-5 rounded-2xl bg-[#1A1815] border border-[#2E2A26] flex items-start gap-4 h-full text-left transition-all hover:border-[#FF6B35]/30 shadow-lg shadow-[#0F0E0D]/40"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: `${card.accent}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: card.accent }} strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[#F5F0E8] font-heading">
                            {card.title}
                          </h3>
                          <p className="text-xs text-[#9C9388] mt-1 leading-relaxed">
                            {card.desc}
                          </p>
                        </div>
                      </motion.div>
                    </Tilt>
                  );
                })}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionCanvas>
  );
}
