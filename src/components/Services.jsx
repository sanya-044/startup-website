 import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';

const myProjects = [
  {
    title: "LaundryHub Management System",
    category: "Full-Stack Web App",
    description: "Automated campus laundry management and tracking system built with streamlined database operations and admin panels.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveLink: "https://ath-laundary.vercel.app"
  },
  {
    title: "Fabrice cloth shopping website",
    category: "Full Stack Web App",
    description: "A fullStack shopping website with backend connections.",
    tags: ["React", "Tailwind CSS", "MongoDB", "JavaScript", "express"],
    liveLink: "https://fabrice-gules.vercel.app/"
  },
  {
    title: "Eco Tracking Systems",
    category: "Full Stack development",
    description: "Real-time infrastructure monitoring dashboard featuring live metrics, secure routing, and automated logging.",
    tags: ["JavaScript", "REST APIs", "React", "MongoDB"],
    liveLink: "https://ecotrackingsystem.vercel.app/"
  },
  {
    title: "Construction Website",
    category: "Full Stack development",
    description: "Real-time secured construction Website",
    tags: ["JavaScript", "REST APIs", "React", "MongoDB"],
    liveLink: "https://construction-website-kappa.vercel.app/"
  }
];

export default function Projects({ isDarkMode }) {
  return (
    <section id="projects" className="py-24 border-b section-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="mono-label mb-3">[ Selected Portfolio ]</h2>
          <p className="text-4xl sm:text-5xl font-black tracking-[-.08em]">Featured Systems Built</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {myProjects.map((proj, index) => (
            <div key={index} className="pixel-card flex flex-col justify-between p-7 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 border border-[var(--line)] text-[var(--muted)]">
                    {proj.category}
                  </span>
                  <Layers className="w-5 h-5 transition group-hover:rotate-90" />
                </div>
                <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                <p className="text-sm leading-relaxed mb-6 text-[var(--muted)]">{proj.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2.5 py-1 border border-[var(--line)] text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center pt-4 border-t section-rule">
                  <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold transition hover:translate-x-1">
                    Live Demo <ExternalLink className="w-4 h-4" />
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
