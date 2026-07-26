import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import SectionCanvas from './SectionCanvas';
import Tilt from './Tilt';

export default function About() {
  const aboutSnippet = `const engineer = {
  passion: 'Compose',
  focus: ['Android', 'AI', 'FastAPI'],
  mindset: 'autonomous_builder'
};`;

  return (
    <SectionCanvas
      id="about"
      splashPosition="top-right"
      splashHueShift={15}
      splashOpacity={0.16}
      dotCount={20}
      dotPosition="bottom-left"
      snippet={aboutSnippet}
      snippetPosition="bottom-left"
      className="py-24 relative overflow-hidden"
    >
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
              <span className="w-8 h-1 rounded-full bg-[#FF6B35]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#FF6B35]">About</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8] relative inline-block self-start pb-2">
              A bit about me
              {/* Thin animated line drawing itself on scroll-into-view */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6B35] origin-left"
              />
            </h2>
          </div>

          {/* Bio Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main bio */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#1A1815] border border-[#2E2A26] shadow-xl relative z-10">
              <div className="space-y-5 text-[#F5F0E8]/90 leading-relaxed text-[15px] text-left">
                <p>{aboutData.paragraph1}</p>
                <p className="border-l-3 border-[#FF6B35] pl-5 py-1 bg-[#FF6B35]/5 rounded-r-xl">
                  {aboutData.paragraph2}
                </p>
                <p>{aboutData.paragraph3}</p>
                <p className="text-[#9C9388] text-sm bg-[#0F0E0D] p-4 rounded-xl border border-[#2E2A26]">
                  <span className="text-[#2EC4B6] font-semibold">Mindset →</span>{' '}
                  {aboutData.paragraph4}
                </p>
              </div>
            </div>

            {/* Sidebar highlights with 3D Tilt cards */}
            <div className="lg:col-span-4 flex flex-col gap-4 relative z-10">
              {[
                {
                  title: 'End-to-End Feature Ownership',
                  desc: "Expanded intern scope to independently ship ParkVault's Razorpay payment gateway integration.",
                  color: '#FF6B35',
                },
                {
                  title: 'Cross-Domain Systems',
                  desc: 'Bridging native Kotlin/Compose UI with real-time FastAPI & LLM inference pipelines.',
                  color: '#2EC4B6',
                },
                {
                  title: 'Founder Ambition',
                  desc: 'Building deep technical skills today with the long-term mission to build an AI-native startup.',
                  color: '#FF6B35',
                },
              ].map((card) => (
                <Tilt key={card.title} maxTilt={8} className="w-full">
                  <div className="p-5 rounded-2xl bg-[#1A1815] border border-[#2E2A26] flex items-start gap-4 h-full text-left">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${card.color}15` }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: card.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F5F0E8] font-heading">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#9C9388] mt-1 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionCanvas>
  );
}
