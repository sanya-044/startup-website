 import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'; // This handles your studio's services
import Founders from './components/Founders';
import Contact from './components/Contact';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? 'dark bg-[#0a0a0c] text-zinc-100' : 'bg-zinc-50 text-zinc-900'}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Founders isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}