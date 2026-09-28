import React from 'react';
import { Search, Boxes, Rocket } from 'lucide-react';

const steps = [
  { number: '01', title: 'Discover', text: 'We turn the idea into a clear technical direction.', Icon: Search },
  { number: '02', title: 'Build', text: 'We design and engineer the system with precision.', Icon: Boxes },
  { number: '03', title: 'Ship', text: 'We test, refine, and deliver a production-ready product.', Icon: Rocket },
];

export default function Process() {
  return <section id="process" className="py-24 border-b section-rule scroll-reveal">
    <div className="max-w-7xl mx-auto px-5">
      <div className="mb-14"><p className="mono-label mb-3">[ Our Software Development Process ]</p><h2 className="text-4xl sm:text-5xl font-black tracking-[-.08em]">From product idea to production-ready software.</h2></div>
      <div className="grid md:grid-cols-3 border border-[var(--line)]">
        {steps.map(({ number, title, text, Icon }, index) => <article key={number} className={`process-step p-7 sm:p-9 ${index < 2 ? 'md:border-r border-b md:border-b-0' : ''} section-rule`}>
          <div className="flex justify-between items-start"><span className="text-4xl font-black text-[var(--muted)] tracking-[-.1em]">{number}</span><Icon size={21} /></div>
          <h3 className="mt-12 text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
        </article>)}
      </div>
    </div>
  </section>;
}
