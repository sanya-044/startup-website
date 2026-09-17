 import React from 'react';
import { ExternalLink, Code, Layers } from 'lucide-react';

const projects = [
  {
    title: "LaundryHub Management System",
    category: "Full-Stack Web App",
    description: "Automated campus laundry management and tracking system built with streamlined database operations and admin panels.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "#"
  },
  {
    title: "AI Prompt Engine & Studio",
    category: "AI / Web Tool",
    description: "An advanced context-aware prompt generator and image editing workspace designed for precise creative control.",
    tags: ["React", "Tailwind CSS", "Gemini API"],
    link: "#"
  },
  {
    title: "Enterprise Cloud Dashboard",
    category: "Cloud Analytics",
    description: "Real-time infrastructure monitoring dashboard featuring live metrics, secure routing, and automated logging.",
    tags: ["JavaScript", "REST APIs", "Chart.js"],
    link: "#"
  }
];

export default function Projects({ isDarkMode }) {
  return (
    <section id="projects" className={`py-24 border-t transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0c] border-white/10' : 'bg-white border-zinc-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-amber-500 font-bold font-mono">Portfolio</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Systems Built</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className={`flex flex-col justify-between p-7 rounded-2xl border transition group ${isDarkMode ? 'bg-zinc-900/40 border-white/10 hover:border-zinc-700' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-300'}`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${isDarkMode ? 'bg-white/5 text-zinc-300 border-white/10' : 'bg-white text-zinc-700 border-zinc-200'}`}>
                    {proj.category}
                  </span>
                  <Layers className={`w-5 h-5 transition ${isDarkMode ? 'text-zinc-600 group-hover:text-amber-500' : 'text-zinc-400 group-hover:text-amber-600'}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{proj.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className={`text-xs font-mono px-2.5 py-1 rounded-md border ${isDarkMode ? 'bg-zinc-950 text-zinc-400 border-white/5' : 'bg-white text-zinc-600 border-zinc-200'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`flex items-center gap-4 text-sm font-semibold pt-4 border-t ${isDarkMode ? 'border-white/10' : 'border-zinc-200'}`}>
                  <a href={proj.link} className={`flex items-center gap-1.5 transition ${isDarkMode ? 'text-white hover:text-amber-400' : 'text-zinc-900 hover:text-amber-600'}`}>
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href={proj.link} className={`flex items-center gap-1.5 transition ${isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                    Source <Code className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}