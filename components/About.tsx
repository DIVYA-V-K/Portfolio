import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { Terminal, User, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                <User className="text-accent-500" size={28} />
                About Me
              </h2>
              <div className="h-1 w-20 bg-accent-500 mt-4 rounded-full" />
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {ABOUT_CONTENT.bio}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-accent-500 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <Zap size={18} className="text-accent-500" />
                My Philosophy
              </h3>
              <p className="text-slate-600 dark:text-slate-400 italic">
                "{ABOUT_CONTENT.philosophy}"
              </p>
            </div>
          </div>

          {/* Visual Content / Interests */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Fake Terminal Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-2 text-xs text-slate-400 font-mono">alex@dev-machine:~/interests</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-slate-300">ls -la ./personal-interests</span>
                </div>
                
                <ul className="space-y-2 pl-4 text-slate-300">
                  {ABOUT_CONTENT.interests.map((interest, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-slate-500 text-xs">rw-r--r--</span>
                      <span className="text-accent-400">{interest.toLowerCase().replace(/\s+/g, '-')}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-slate-300 flex items-center gap-2">
                    echo "Let's build something cool" <span className="animate-pulse block w-2 h-4 bg-slate-500"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;