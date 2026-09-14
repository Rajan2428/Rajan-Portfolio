import React, { useState } from 'react';
import { 
  Code2, Palette, FileCode, Terminal, 
  BrainCircuit, Sparkles, Layout, Workflow,
  Cpu, Wrench, Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const iconComponents = {
    Code2: Code2,
    Palette: Palette,
    FileCode: FileCode,
    Terminal: Terminal,
    BrainCircuit: BrainCircuit,
    Sparkles: Sparkles,
    Layout: Layout,
    Workflow: Workflow
  };

  const categories = ['All', 'Frontend & Web', 'Programming & AI', 'Tools & Systems'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-dark-900/50 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A comprehensive overview of the programming languages, frameworks, AI concepts, and tools I use to build solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = iconComponents[skill.icon] || Code2;
            return (
              <div
                key={skill.id}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header: Icon + Category Badge */}
                  <div className="flex items-start justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-brand-300 group-hover:border-brand-500/30 transition-colors">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                    {skill.name}
                  </h3>

                  <span className="text-xs font-medium text-slate-400 block mb-3">
                    {skill.category}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-brand-400 font-mono">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700`}
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-white">Always Learning:</span> Continuously expanding knowledge in modern full-stack architectures, transformer models, and AI agent frameworks.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
