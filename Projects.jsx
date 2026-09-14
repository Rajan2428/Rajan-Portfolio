import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, Sparkles, Layers, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Artificial Intelligence', 'Digital Productivity'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Projects & Practical Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Real-world projects showcasing modern frontend architecture, AI integration, and student productivity systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-500 to-accent-indigo text-white shadow-lg shadow-brand-500/25'
                  : 'bg-dark-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 group"
            >
              {/* Project Card Header Visual Banner */}
              <div className="relative p-6 bg-gradient-to-br from-slate-900 via-dark-850 to-dark-950 border-b border-slate-800/60 overflow-hidden">
                {/* Decorative background grid & glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-all"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-brand-300 font-mono">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-brand-500/15 text-brand-400 border border-brand-500/20">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {project.category}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Pills */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Technologies Used:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-accent-indigo hover:from-brand-600 hover:to-accent-indigo shadow-md shadow-brand-500/20 hover:shadow-brand-500/30 transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Project</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
