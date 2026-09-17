 import React from 'react';
import { ShieldCheck } from 'lucide-react';

const founders = [
  {
    name: "Sanya Chauhan",
    role: "CO-FOUNDER & FULL-STACK LEAD",
    image: "/myyyyfinalpic.png", // 👈 Put your photo in the public folder as sanya.jpg
    description: "Computer Science undergrad passionate about scalable web architecture, MERN stack development, and building exceptional digital products."
  },
  {
    name: "Manjeet Varun",
    role: "Founder & System Architect", // 👈 Updated title here
    image: "/image.png", // 👈 Put your photo in the public folder as manjeet.jpg
    description: "Passionate full-stack developer focused on backend performance, core system algorithms, and cutting-edge software solutions."
  }
];

export default function Founders({ isDarkMode }) {
  return (
    <section id="founders" className={`py-24 border-t scroll-mt-28 transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0c] border-white/15' : 'bg-white border-zinc-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-amber-500 font-bold font-mono">Leadership</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">The Founders of PixelForge</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className={`relative flex flex-col items-center text-center p-8 rounded-3xl border transition group ${isDarkMode ? 'bg-zinc-900/40 border-white/10 hover:border-zinc-700' : 'bg-zinc-50 border-zinc-200 hover:border-zinc-300'}`}>
              
              <div className="absolute top-6 right-6">
                <ShieldCheck className={`w-5 h-5 ${isDarkMode ? 'text-amber-500/80' : 'text-amber-600'}`} />
              </div>

              {/* Founder Photo */}
              <div className="w-24 h-24 mb-6 rounded-2xl overflow-hidden border border-amber-500/30 shadow-md">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
              <p className="text-xs font-mono font-bold tracking-wider text-amber-500 mb-4">{founder.role}</p>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}