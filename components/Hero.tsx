import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { HERO_CONTENT, SOCIALS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6 inline-block px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-600 dark:text-accent-400 text-sm font-mono animate-fade-in-up">
          Hello, World! I'm {HERO_CONTENT.name}
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6 animate-fade-in-up [animation-delay:100ms]">
          {HERO_CONTENT.title}
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          {HERO_CONTENT.tagline} {HERO_CONTENT.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
          <a
            href="#projects"
            className="group px-8 py-3.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center gap-2"
          >
            View Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://drive.google.com/uc?export=download&id=1Tt4W46RrIO_dEGxdhO6jUBMshxeu2i4I"
            className="px-8 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-6 animate-fade-in-up [animation-delay:400ms]">
          {SOCIALS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors transform hover:scale-110"
              aria-label={social.platform}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;