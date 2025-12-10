import React from 'react';
import { EXPERIENCE } from '../constants';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Journey</h2>
          <p className="text-slate-600 dark:text-slate-400">
            My academic foundation and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Education */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col hover:border-accent-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg text-accent-500 shadow-sm">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Education</h3>
            </div>
            
            <div className="flex-grow flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                {EXPERIENCE.education.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-1">
                {EXPERIENCE.education.institution}
              </p>
              {/* Optional Year Display */}
              {EXPERIENCE.education.year && (
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 mt-2">
                   <Calendar size={14} />
                   {EXPERIENCE.education.year}
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Internship Experience */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col hover:border-accent-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg text-accent-500 shadow-sm">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Internships</h3>
            </div>

            <div className="flex-grow space-y-6">
              {EXPERIENCE.internships.map((internship, index) => (
                <div key={index} className="flex flex-col border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-1">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {internship.role}
                  </h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-slate-600 dark:text-slate-400">
                      {internship.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;