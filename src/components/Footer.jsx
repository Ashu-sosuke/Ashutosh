import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileDown } from 'lucide-react';

const Footer = () => {
  const socials = [
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ), 
      href: "https://github.com/Ashu-sosuke", 
      label: "GitHub" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ), 
      href: "https://www.linkedin.com/in/ashutosh-kumar-bharti/", 
      label: "LinkedIn" 
    },
    { 
      icon: <Mail size={20} />, 
      href: "mailto:15bhartiashutosh@gmail.com", 
      label: "Email" 
    }
  ];

  return (
    <footer id="contact" style={{ padding: '6rem 0 3rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
        
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Let's Build Something Exceptional</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto' }}>
            Currently open to innovative opportunities in Mobile Engineering and AI integration.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#10B981' }}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'border-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.borderColor = 'rgba(16, 185, 129, 0.5)'}
              onMouseOut={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)'}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/Ashutosh Resume.pdf"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 2rem',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            color: '#10B981',
            borderRadius: '12px',
            fontWeight: '600',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}
        >
          <FileDown size={20} />
          Download Resume (PDF)
        </motion.a>

        <div style={{ marginTop: '4rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Ashutosh Kumar Bharti. Crafted with React & Framer Motion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
