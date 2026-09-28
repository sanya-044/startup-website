import React from 'react';
import { Gauge, MessageSquareText, ShieldCheck, Sparkles } from 'lucide-react';

const points = [
  { Icon: Gauge, title: 'Built to perform', text: 'High-performance systems designed for real-world use.' },
  { Icon: ShieldCheck, title: 'Production-minded', text: 'Clean architecture, reliable flows, and careful delivery.' },
  { Icon: MessageSquareText, title: 'Direct collaboration', text: 'Work directly with the founding engineers building your product.' },
  { Icon: Sparkles, title: 'Precise by design', text: 'A focused studio approach from the first idea to launch.' },
];

export default function WhyPixelForge() {
  return <section id="why-us" className="py-24 border-b section-rule scroll-reveal">
    <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4"><p className="mono-label mb-3">[ Why Choose PixelForge ]</p><h2 className="text-4xl sm:text-5xl font-black tracking-[-.08em] leading-none">Software Development Built to Scale.</h2><p className="mt-6 text-[var(--muted)] leading-7">A focused full-stack engineering partnership for teams that need reliable software built with care.</p></div>
      <div className="lg:col-span-8 grid sm:grid-cols-2 border-t border-l section-rule">{points.map(({ Icon, title, text }) => <article key={title} className="process-step p-7 border-r border-b section-rule"><Icon size={22}/><h3 className="font-bold text-lg mt-10">{title}</h3><p className="text-sm leading-6 text-[var(--muted)] mt-2">{text}</p></article>)}</div>
    </div>
  </section>;
}
