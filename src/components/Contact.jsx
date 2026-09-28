 import React from 'react';
import { Mail, Phone, Globe, ArrowUpRight } from 'lucide-react';

const directContacts = [
  {
    name: "Sanya Chauhan",
    role: "Co-Founder & Full-Stack Lead",
    email: "sanyachauhan453@gmail.com",
    phone: "+91 6201945659",
    linkedin: "https://linkedin.com/in/sanya-chauhan-034899275"
  },
  {
    name: "Manjeet Varun",
    role: "Founder & System Architect",
    email: "manjeetvarun001@gmail.com",
    phone: "+91 8476909305",
    linkedin: "https://www.linkedin.com/in/manjeet-varun-8149b7371/"
  }
];

export default function Contact({ isDarkMode }) {
  return (
    <section id="contact" className="py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="mono-label mb-3">[ Direct Connection ]</h2>
          <p className="text-4xl sm:text-5xl font-black tracking-[-.08em]">Get in Touch with the Founders</p>
          <p className="text-sm max-w-xl text-[var(--muted)] mt-4">
            Have a startup idea or enterprise software need? Reach out directly to either of us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {directContacts.map((contact, index) => (
            <div key={index} className="pixel-card flex flex-col justify-between p-8 group">
              
              <div>
                <h3 className="text-2xl font-bold mb-1">{contact.name}</h3>
                <p className="text-xs font-mono font-bold tracking-wider text-[var(--muted)] mb-6">{contact.role}</p>
                
                <div className="space-y-4 mb-8">
                  <a href={`mailto:${contact.email}`} className={`flex items-center gap-3 text-sm transition ${isDarkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'}`}>
                    <div className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10 text-amber-400' : 'bg-white border-zinc-200 text-amber-600'}`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{contact.email}</span>
                  </a>

                  <a href={`tel:${contact.phone}`} className={`flex items-center gap-3 text-sm transition ${isDarkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'}`}>
                    <div className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10 text-amber-400' : 'bg-white border-zinc-200 text-amber-600'}`}>
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{contact.phone}</span>
                  </a>
                </div>
              </div>

              <div>
                <a 
                  href={contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm border transition shadow-sm ${
                    isDarkMode 
                      ? 'bg-zinc-900 border-white/10 text-white hover:bg-zinc-800 hover:border-zinc-600' 
                      : 'bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-100 hover:border-zinc-300'
                  }`}
                >
                  <Globe className="w-4 h-4 text-amber-500" />
                  Connect on LinkedIn 
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
