import React from 'react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Built with React, Tailwind & ❤️.
          </p>
        </div>
        
        <div className="flex gap-6">
          {SOCIALS.map((social) => (
             <a
              key={social.platform}
              href={social.url}
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
            >
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;