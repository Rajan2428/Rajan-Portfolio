import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Calendar } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-dark-900 border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden">
        {/* Glowing top ambient gradient */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 via-accent-indigo to-accent-violet"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">
            {project.category}
          </span>
          <span className="text-xs font-medium text-slate-400">
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          {project.title}
        </h3>

        {/* Full Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {project.fullDescription}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-400" />
            <span>Key Features & Architecture</span>
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0 mt-2"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-accent-indigo" />
            <span>Technologies & Tools</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/80 border border-slate-700 text-brand-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-5 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source</span>
          </a>

          <a
            href={project.liveUrl}
            onClick={(e) => {
              if (project.liveUrl === '#') {
                e.preventDefault();
                alert(`Viewing live demo for ${project.title}`);
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-accent-indigo hover:from-brand-600 hover:to-accent-indigo shadow-md shadow-brand-500/25 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
