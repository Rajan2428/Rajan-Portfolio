import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-brand-500/30 selection:text-brand-400">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
