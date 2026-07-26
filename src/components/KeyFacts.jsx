import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { keyFactsData } from '../data/portfolioData';
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react';

function Counter({ end, duration = 1.2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && typeof end === 'number') {
      animate(count, end, { duration, ease: 'easeOut' });
    }
  }, [isInView, end, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function KeyFacts() {
  const icons = [GraduationCap, Briefcase, Code, Award];
  const accentColors = ['#FF6B35', '#2EC4B6', '#FF6B35', '#2EC4B6'];

  return (
    <section className="py-14 border-y border-[#2E2A26] bg-[#1A1815]/50 backdrop-blur-sm relative z-20">
      <div className="layout-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFactsData.map((fact, index) => {
            const IconComponent = icons[index % icons.length];
            const accent = accentColors[index];

            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-[#1A1815] border border-[#2E2A26] hover:border-[#2E2A26] card-hover flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#9C9388] uppercase tracking-wider">
                    {fact.unit}
                  </span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${accent}12` }}
                  >
                    <IconComponent className="w-4.5 h-4.5" style={{ color: accent }} strokeWidth={2.2} />
                  </div>
                </div>

                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-2xl sm:text-3xl font-bold font-heading" style={{ color: accent }}>
                    {fact.isNumeric ? (
                      <>
                        <Counter end={fact.number} />
                        {fact.suffix}
                      </>
                    ) : (
                      fact.value
                    )}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#F5F0E8]">
                    {fact.label}
                  </p>
                  <p className="text-xs text-[#9C9388] mt-0.5">
                    {fact.highlight}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
