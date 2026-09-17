import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
}