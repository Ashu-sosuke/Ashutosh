import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import BentoSkills from './components/BentoSkills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-root" style={{ backgroundColor: '#0A0A0A', color: '#fff', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <Projects />
        <BentoSkills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
