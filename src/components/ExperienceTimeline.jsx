import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    style={{
      position: 'relative',
      paddingLeft: '3rem',
      marginBottom: '4rem'
    }}
  >
    {/* Dot on Timeline */}
    <div style={{
      position: 'absolute',
      left: '-7px',
      top: '0',
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      backgroundColor: '#0A0A0A',
      border: '3px solid #10B981',
      zIndex: 2,
      boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)'
    }} />

    {/* Content Card */}
    <div style={{
      backgroundColor: 'rgba(15, 15, 15, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      padding: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', fontWeight: '700' }}>{exp.role}</h3>
          <p style={{ color: '#10B981', fontWeight: '600', fontSize: '1rem' }}>{exp.company}</p>
        </div>
        <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', fontWeight: '500' }}>{exp.period}</span>
      </div>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        {exp.details.map((detail, i) => (
          <li key={i} style={{ 
            fontSize: '1rem', 
            color: 'rgba(255,255,255,0.6)', 
            lineHeight: '1.6',
            display: 'flex',
            gap: '0.75rem'
          }}>
            <span style={{ color: '#10B981', marginTop: '0.2rem' }}>•</span>
            {detail}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {exp.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.4rem 0.8rem',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "Lead Developer & Researcher",
      company: "AstraSOS Project",
      period: "2025 - Present",
      details: [
        "Architecting a next-gen safety ecosystem with real-time AI-driven panic detection.",
        "Engineered a dynamic 'Safety Heatmap' using Google Maps API for incident visualization.",
        "Integrated Faster-Whisper and FastAPI to calculate 'Panic Scores' with sub-second latency.",
        "Leading the development of a cross-platform mobile suite for community safety."
      ],
      tags: ["Kotlin", "FastAPI", "Firebase", "AI/ML", "Google Maps"]
    },
    {
      role: "B.Tech in Computer Science",
      company: "Roorkee Institute of Technology",
      period: "2024 - 2028",
      details: [
        "Maintaining a top-tier academic record with focus on Algorithms and Systems Design.",
        "Actively building production-ready apps while mastering low-level software engineering.",
        "Recipient of the IIT Bombay C Programming Certification."
      ],
      tags: ["Algorithms", "OS", "DBMS", "C/C++", "Java"]
    },
    {
      role: "Android Developer Intern",
      company: "Luxora (E-commerce UI)",
      period: "2024",
      details: [
        "Developed a high-performance e-commerce UI with Jetpack Compose.",
        "Implemented secure authentication and real-time state management using MVVM.",
        "Optimized app performance, achieving 60fps animations across complex list views."
      ],
      tags: ["Jetpack Compose", "Kotlin", "MVVM", "Firebase"]
    },
    {
      role: "Software Foundations",
      company: "IIT Bombay Spoken Tutorial",
      period: "2023",
      details: [
        "Certified in C programming with specialization in pointer management and memory allocation.",
        "Built initial programming foundations through data structure implementations.",
        "Contributed to peer-learning projects in open-source environments."
      ],
      tags: ["C", "Data Structures", "Pointers", "Algorithms"]
    }
  ];

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Experience<span style={{ color: '#10B981' }}>.</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>My professional and academic journey</p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '1px',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            zIndex: 1
          }} />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
