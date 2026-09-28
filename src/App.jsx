import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'; // This handles your studio's services
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const movePixels = (event) => {
    event.currentTarget.style.setProperty('--mouse-x', `${event.clientX}px`);
    event.currentTarget.style.setProperty('--mouse-y', `${event.clientY}px`);
  };

  return (
    <div onPointerMove={movePixels} className={`site-shell ${isDarkMode ? 'site-dark' : 'site-light'}`}>
      <div className="geo-shapes" aria-hidden="true">
        <i className="geo geo-orbit" />
        <i className="geo geo-blob" />
        <i className="geo geo-square" />
        <i className="geo geo-diamond" />
        <i className="geo geo-ring" />
      </div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(value => !value)} />
      <Hero isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Founders isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer />
      <div className="cursor-pixels" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</div>
    </div>
  );
}
