import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Linkedin, Github, MapPin, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null); // null | 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    
    // Confetti celebration
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus('error');
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-950 border-t border-slate-800/60">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Have a project in mind, an internship opportunity, or just want to discuss AI and web technologies? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">Direct Email</span>
                  <span className="text-sm sm:text-base font-bold text-white break-all">{personal.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 hover:border-brand-500/60 text-slate-200 hover:text-white transition-all shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-brand-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-brand-500 hover:bg-brand-600 text-white transition-colors shadow-sm"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Connect on</span>
                  <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">LinkedIn</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Explore on</span>
                  <span className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">GitHub</span>
                </div>
              </a>
            </div>

            {/* Location & University Info */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-accent-cyan shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Location & Base</span>
                <span className="text-sm font-bold text-white">{personal.location}</span>
                <span className="text-xs text-brand-400 block mt-0.5">{personal.college}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-brand-400" />
                <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
              </div>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
                  <Sparkles className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="font-semibold">Message Received!</p>
                    <p className="text-xs text-emerald-200/80 mt-0.5">Thank you for reaching out, Rajan will review your message soon.</p>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-300 text-sm">
                  Please fill out all required fields before submitting.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Internship / Hello"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 via-accent-indigo to-accent-violet hover:from-brand-600 hover:to-accent-indigo shadow-lg shadow-brand-500/25 transition-all text-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
