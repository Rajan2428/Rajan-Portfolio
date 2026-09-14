import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education & Learning Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Building rigorous theoretical foundations and practical engineering skills at university.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden">
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-indigo/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-indigo/20 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {education.status}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {education.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-brand-400 mt-0.5">
                    {education.branch}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Calendar className="w-4 h-4 text-brand-400" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent-indigo" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* University Title & Description */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Institution</span>
                <span className="text-xs text-slate-600">•</span>
                <span className="text-sm font-bold text-white tracking-wide">{education.institution}</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {education.description}
              </p>
            </div>

            {/* Relevant Learning Areas */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-400" />
                <span>Relevant Learning Areas & Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {education.relevantAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:border-brand-500/50 hover:bg-slate-800 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-indigo" />
                <span>Academic Phases & Focus</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.milestones.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-dark-900/60 border border-slate-800/80">
                    <span className="text-xs font-mono font-bold text-brand-400 block mb-1">
                      {m.year}
                    </span>
                    <h5 className="text-sm font-bold text-white mb-1">{m.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{m.details}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
