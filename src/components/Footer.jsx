import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t section-rule py-8 text-[var(--muted)] text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-[var(--ink)]">
          <Code2 className="w-5 h-5" /> PIXELFORGE
        </div>
        <p>© {new Date().getFullYear()} PixelForge. All rights reserved.</p>
      </div>
    </footer>
  );
}
