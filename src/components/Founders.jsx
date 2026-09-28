 import React from 'react';
import { ShieldCheck } from 'lucide-react';

const pixelLetters = {
  S: ['11111','10000','10000','11111','00001','00001','11111'],
  M: ['10001','11011','10101','10101','10001','10001','10001']
};

function PixelLetter({ letter }) {
  return <div className={`founder-letter founder-letter-${letter.toLowerCase()}`} aria-hidden="true">
    {pixelLetters[letter].flatMap((row, rowIndex) => [...row].map((pixel, columnIndex) => <i className={pixel === '1' ? 'on' : ''} key={`${rowIndex}-${columnIndex}`} />))}
  </div>;
}

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
    <section id="founders" className="py-24 border-b section-rule scroll-mt-28 pixel-bg scroll-reveal">
      <div className="founders-letters" aria-hidden="true"><PixelLetter letter="S" /><PixelLetter letter="M" /></div>
      <div className="founders-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="mono-label mb-3">[ Leadership ]</h2>
          <p className="text-4xl sm:text-5xl font-black tracking-[-.08em]">Meet the Full-Stack Software Developers Behind PixelForge</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="pixel-card relative flex flex-col items-center text-center p-8 group">
              
              <div className="absolute top-6 right-6">
                <ShieldCheck className="w-5 h-5" />
              </div>

              {/* Founder Photo */}
              <div className="w-24 h-24 mb-6 overflow-hidden border border-[var(--ink)] shadow-[5px_5px_0_var(--accent)]">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
              <p className="text-xs font-mono font-bold tracking-wider text-[var(--muted)] mb-4">{founder.role}</p>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
