import React, { useState } from 'react';
import { Plus } from 'lucide-react';
const questions = [
  ['What kind of projects do you take on?', 'Full-stack web applications, internal systems, dashboards, backend services, and API-focused products.'],
  ['Can we discuss an idea before starting?', 'Yes. Reach out directly and we can discuss the problem, scope, and a practical technical direction.'],
  ['Do you build both frontend and backend?', 'Yes. PixelForge works across the full product stack, from user-facing interfaces to backend architecture.'],
  ['How do we get started?', 'Use the contact details below to connect with either founder and share a short overview of your project.'],
];
export default function FAQ(){const [open,setOpen]=useState(0);return <section className="py-24 border-b section-rule scroll-reveal"><div className="max-w-4xl mx-auto px-5"><p className="mono-label mb-3">[ Software Development FAQ ]</p><h2 className="text-4xl sm:text-5xl font-black tracking-[-.08em] mb-12">Full-Stack Development Questions, Answered.</h2><div className="border-t section-rule">{questions.map(([question,answer],index)=><div key={question} className="border-b section-rule"><button onClick={()=>setOpen(open===index?-1:index)} className="w-full flex justify-between items-center gap-6 py-6 text-left font-bold"><span>{question}</span><Plus size={20} className={`shrink-0 transition-transform ${open===index?'rotate-45':''}`}/></button>{open===index&&<p className="pb-6 max-w-2xl text-sm leading-6 text-[var(--muted)]">{answer}</p>}</div>)}</div></div></section>}
