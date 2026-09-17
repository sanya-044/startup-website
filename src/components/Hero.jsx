 import React from 'react';
import { ArrowRight, CheckCircle2, Users, Layers, Award } from 'lucide-react';

export default function Hero({ isDarkMode }) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden ${isDarkMode ? 'bg-grid-dark' : 'bg-grid-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono ${isDarkMode ? 'bg-white/5 border-white/10 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'}`}>
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Elite Engineering Studio
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Digital Systems</span> That Scale.
          </h1>
          
          <p className={`max-w-2xl text-base sm:text-lg leading-relaxed mx-auto lg:mx-0 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            We are a two-founder software studio engineering high-performance web applications, robust backends, and precise production architectures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="#projects" className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2 shadow-sm ${isDarkMode ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
              Explore Portfolio <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className={`w-full sm:w-auto px-8 py-4 rounded-xl border font-semibold transition ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-900'}`}>
              Get in Touch
            </a>
          </div>

          <div className={`pt-6 flex items-center justify-center lg:justify-start gap-6 text-xs font-mono ${isDarkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Clean Architecture</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Modern Tech Stacks</div>
          </div>
        </div>

        {/* Right Feature Highlight Box (Replaces Code Box) */}
        <div className="lg:col-span-5">
          <div className={`rounded-2xl border p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-6 ${isDarkMode ? 'bg-zinc-900/40 border-white/10' : 'bg-white border-zinc-200 shadow-zinc-200/50'}`}>
            <div className="flex items-center justify-between border-b pb-4 border-inherit">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-500">PixelForge Profile</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Founding Engineers</p>
                  <p className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Sanya Chauhan & Manjeet Varun</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Core Specialization</p>
                  <p className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Full-Stack Web Apps, Cloud Architectures & APIs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Delivery Standard</p>
                  <p className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Production-ready, thoroughly tested software solutions.</p>
                </div>
              </div>
            </div>

            <div className={`pt-4 border-t flex items-center justify-between text-xs font-mono ${isDarkMode ? 'border-white/10 text-zinc-400' : 'border-zinc-100 text-zinc-500'}`}>
              <span>Status: Active & Shipping</span>
              <span className="text-emerald-500 font-bold">100% On-Time</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}