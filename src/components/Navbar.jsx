 import React, { useState } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0c]/80 border-white/10' : 'bg-white/80 border-zinc-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-lg font-bold tracking-wider group">
          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${isDarkMode ? 'bg-white/5 border-white/10 text-amber-400' : 'bg-zinc-100 border-zinc-200 text-amber-600'}`}>
            <Terminal className="w-5 h-5" />
          </div>
          <span>PIXEL<span className="text-amber-500">FORGE</span></span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {/* Changed href from #services to #projects so it goes to your projects */}
          <a href="#projects" className={`transition ${isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>Services</a>
          <a href="#projects" className={`transition ${isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>Portfolio</a>
          <a href="#founders" className={`transition ${isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>Founders</a>
          
          <button onClick={toggleTheme} className={`p-2.5 rounded-xl border transition ${isDarkMode ? 'bg-zinc-900 border-white/10 text-amber-400' : 'bg-zinc-100 border-zinc-200 text-amber-600'}`} title="Toggle Theme">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a href="#contact" className={`px-5 py-2.5 rounded-xl font-semibold transition shadow-sm ${isDarkMode ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
            Let's Talk
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} className={`p-2 rounded-lg border ${isDarkMode ? 'bg-zinc-900 border-white/10 text-amber-400' : 'bg-zinc-100 border-zinc-200 text-amber-600'}`}>
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden border-b px-6 py-6 space-y-4 font-medium ${isDarkMode ? 'bg-[#0a0a0c] border-white/10 text-zinc-200' : 'bg-white border-zinc-200 text-zinc-800'}`}>
          {/* Mobile version updated to #projects as well */}
          <a href="#projects" onClick={() => setIsOpen(false)} className={`block transition ${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'}`}>Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className={`block transition ${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'}`}>Portfolio</a>
          <a href="#founders" onClick={() => setIsOpen(false)} className={`block transition ${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'}`}>Founders</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className={`block text-center py-3 rounded-xl font-semibold ${isDarkMode ? 'bg-white text-zinc-950' : 'bg-zinc-900 text-white'}`}>Let's Talk</a>
        </div>
      )}
    </nav>
  );
}