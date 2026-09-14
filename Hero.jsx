import React from 'react';
import { ArrowRight, Mail, Sparkles, MapPin, GraduationCap, ChevronDown, Github, Linkedin, Terminal, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent-indigo/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md mb-8 shadow-sm hover:border-brand-400/40 transition-colors">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              Open to Opportunities • <span className="text-brand-400 font-semibold">{personal.college}</span>
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Hi, I'm <span className="text-gradient">{personal.name}</span>
          </h1>

          <div className="inline-block mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 tracking-tight flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
              <span>{personal.tagline}</span>
            </p>
          </div>

          {/* Professional Introduction */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {personal.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-brand-500 via-accent-indigo to-accent-violet hover:from-brand-600 hover:to-accent-indigo shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-200 group text-base"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-slate-200 bg-dark-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 transition-all duration-200 hover:-translate-y-0.5 text-base shadow-sm group"
            >
              <Mail className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 pt-2 border-t border-slate-800/80 w-full max-w-3xl">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-400" />
              <span>{personal.location}</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent-indigo" />
              <span>{personal.college}</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>{personal.role}</span>
            </div>
          </div>

          {/* Key Metrics / Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 w-full max-w-3xl">
            {personal.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-3.5 rounded-2xl text-center border border-slate-800/60 hover:border-slate-700 transition-colors"
              >
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="mt-12 inline-flex flex-col items-center text-xs text-slate-500 hover:text-brand-400 transition-colors group focus:outline-none"
            aria-label="Scroll to About Section"
          >
            <span className="mb-1">Explore More</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-brand-400" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
