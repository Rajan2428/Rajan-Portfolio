import React from 'react';
import { Cpu, Globe, Zap, CheckCircle2, User, BookOpen, Compass, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about, personal } = portfolioData;

  const iconMap = {
    Cpu: Cpu,
    Globe: Globe,
    Zap: Zap,
  };

  return (
    <section id="about" className="py-24 relative bg-dark-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {about.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-brand-400"></span>
                Who I Am & What Drives Me
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Highlights Grid */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {about.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block">{item.label}</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Three Core Interest Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Core Areas of Interest
            </div>

            {about.pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon] || Code;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/80 hover:border-brand-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Action Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-500/10 via-accent-indigo/10 to-transparent border border-brand-500/20 flex items-center justify-between mt-6">
              <div>
                <span className="text-xs text-brand-400 font-medium block">Want to know more?</span>
                <span className="text-sm font-bold text-white">Let's connect & build something great.</span>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-brand-500 hover:bg-brand-600 text-white transition-colors shrink-0 shadow-sm"
              >
                Reach Out
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
