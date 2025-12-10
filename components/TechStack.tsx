import React from 'react';
import { SKILLS } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Tech Stack</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            A curated list of technologies I use to build scalable and performant applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-slate-400 group-hover:text-accent-500 transition-colors">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 font-mono">
                {skill.name}
              </span>
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-accent-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;