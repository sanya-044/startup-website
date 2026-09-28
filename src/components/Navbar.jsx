import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
const Mark = () => <span className="pixel-mark" aria-hidden="true">{Array.from({ length: 25 }, (_, i) => <i key={i} />)}</span>;
export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false); const close = () => setIsOpen(false);
  return <nav className="sticky top-0 z-50 border-b section-rule bg-[var(--base)]/95 backdrop-blur-md"><div className="max-w-7xl mx-auto px-5 h-[76px] flex items-center justify-between">
    <a href="#" className="flex items-center gap-3"><Mark /><span className="font-black tracking-[-.08em] text-lg">PIXEL<span className="text-[var(--muted)]">FORGE</span><small className="block text-[8px] tracking-[.35em] font-bold text-[var(--muted)]">SOFTWARE</small></span></a>
    <div className="hidden md:flex items-center gap-7 text-xs font-bold tracking-wider"><a href="#projects" className="nav-link">SERVICES</a><a href="#projects" className="nav-link">PORTFOLIO</a><a href="#founders" className="nav-link">FOUNDERS</a><button onClick={toggleTheme} className="w-9 h-9 grid place-items-center border border-[var(--line)] hover:bg-[var(--ink)] hover:text-[var(--base)] transition" title="Toggle theme">{isDarkMode ? <Sun size={15} /> : <Moon size={15} />}</button><a href="#contact" className="pixel-button px-4 py-2">LET'S TALK</a></div>
    <div className="flex md:hidden gap-3"><button onClick={toggleTheme} className="w-9 h-9 border border-[var(--line)] grid place-items-center">{isDarkMode ? <Sun size={15} /> : <Moon size={15} />}</button><button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button></div>
  </div>{isOpen && <div className="md:hidden border-t section-rule px-5 py-5 grid gap-4 text-xs font-bold tracking-widest"><a onClick={close} href="#projects">SERVICES / PORTFOLIO</a><a onClick={close} href="#founders">FOUNDERS</a><a onClick={close} href="#contact" className="pixel-button text-center p-3">LET'S TALK</a></div>}</nav>;
}
