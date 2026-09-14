import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-850 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Role */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-400 to-accent-indigo flex items-center justify-center font-bold text-white text-lg shadow-sm">
              RR
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-wide block">
                {personal.name}
              </span>
              <span className="text-xs text-slate-400">
                {personal.role} • {personal.college}
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <a href="#home" className="hover:text-brand-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-brand-400 transition-colors">About</a>
            <a href="#education" className="hover:text-brand-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-brand-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brand-400 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-brand-400 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/60 text-slate-400 hover:text-white transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/60 text-slate-400 hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/60 text-slate-400 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-500/20 border border-brand-500/40 text-brand-400 hover:bg-brand-500 hover:text-white transition-all shadow-sm group"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with passion for AI, Web & Clean Code
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
