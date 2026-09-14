import React, { useState } from 'react';
import { Award, Trophy, BookOpen, Medal, Star, PlusCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;
  const [activeTab, setActiveTab] = useState(achievements[0].category);

  const categoryIcons = {
    'Certifications': Award,
    'Hackathons': Trophy,
    'Courses & Academics': BookOpen,
    'Awards & Recognitions': Medal,
  };

  const currentCategoryData = achievements.find(a => a.category === activeTab) || achievements[0];

  return (
    <section id="achievements" className="py-24 relative bg-dark-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Showcasing certifications, hackathon participation, academic milestones, and ongoing achievements.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {achievements.map((item) => {
            const Icon = categoryIcons[item.category] || Star;
            const isActive = activeTab === item.category;
            return (
              <button
                key={item.category}
                onClick={() => setActiveTab(item.category)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-accent-indigo to-accent-violet text-white shadow-lg shadow-accent-indigo/20 scale-105'
                    : 'bg-dark-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.category}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-400 ml-1">
                  {item.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {currentCategoryData.items.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-slate-800/80 hover:border-accent-violet/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-violet/15 text-accent-violet border border-accent-violet/20 font-mono">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-300 transition-colors mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-brand-400 mb-3">
                  {item.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}

          {/* Easy "+ Add Achievement" Card */}
          <div className="glass-panel p-6 rounded-3xl border border-dashed border-slate-700 hover:border-brand-400/60 transition-colors flex flex-col justify-center items-center text-center group min-h-[220px]">
            <div className="w-12 h-12 rounded-2xl bg-slate-800/60 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-brand-400 group-hover:border-brand-500/40 transition-colors mb-3">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">
              Expandable Milestones
            </h4>
            <p className="text-xs text-slate-400 max-w-xs mb-3">
              Easily update or add your new certifications, hackathons, and awards directly in <code className="text-brand-400 bg-slate-900 px-1 py-0.5 rounded">portfolioData.js</code>.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-400 group-hover:translate-x-1 transition-transform">
              <span>Ready for additions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
