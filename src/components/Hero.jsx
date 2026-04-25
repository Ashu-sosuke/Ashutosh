import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const headline = "ASHUTOSH KUMAR BHARTI — Mobile & AI Engineer";
  const subheadline = "Building Intelligent Mobile Solutions with Kotlin & AI.";
  const description = "Android Specialist currently engineering real-time synchronization at ParkVault.";

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      },
    },
  };

  const charVars = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'hidden',
        backgroundColor: '#0A0A0A'
      }}
    >
      {/* Atmospheric Background Image */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/assets/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          zIndex: 0
        }}
      />

      {/* Top Shine / Glow Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40vh',
          background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 0%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      
      <div className="container" style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: '#10B981', fontWeight: '600', letterSpacing: '0.2em', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.75rem' }}
        >
          {subheadline}
        </motion.p>

        <motion.h1
          variants={containerVars}
          initial="hidden"
          animate="visible"
          style={{ 
            fontSize: 'clamp(2.5rem, 7vw, 4rem)', 
            lineHeight: '1.1', 
            marginBottom: '2rem', 
            maxWidth: '1000px', 
            margin: '0 auto 2rem',
            fontWeight: '800',
            letterSpacing: '-0.02em'
          }}
        >
          {headline.split("").map((char, index) => (
            <motion.span key={index} variants={charVars}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3.5rem', fontWeight: '400' }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2.5rem',
              backgroundColor: '#10B981',
              color: '#0A0A0A',
              fontWeight: '700',
              borderRadius: '12px',
              transition: 'background 0.3s'
            }}
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontWeight: '600',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Subtle Bottom Glow to blend with next section */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '20vh',
          background: 'linear-gradient(to top, #0A0A0A 0%, transparent 100%)',
          zIndex: 3
        }}
      />
    </section>
  );
};

export default Hero;
