import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'; // This handles your studio's services
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Process from './components/Process';
import WhyPixelForge from './components/WhyPixelForge';
import TechStack from './components/TechStack';
import ServicesDetail from './components/ServicesDetail';
import FAQ from './components/FAQ';
import ProjectCTA from './components/ProjectCTA';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const shellRef = useRef(null);
  useEffect(() => {
    const introTimer = window.setTimeout(() => setShowIntro(false), 2200);
    return () => window.clearTimeout(introTimer);
  }, []);
  useEffect(() => {
    const positionBall = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      const phase = progress * 4;
      const segment = Math.floor(phase);
      const local = phase - segment;
      const eased = local * local * (3 - 2 * local);
      const fromLeft = segment % 2 === 0;
      const x = fromLeft ? 7 + eased * 84 : 91 - eased * 84;
      const y = 112 + progress * Math.max(window.innerHeight - 210, 180);
      shellRef.current?.style.setProperty('--ball-x', `${x}%`);
      shellRef.current?.style.setProperty('--ball-y', `${y}px`);
      const thirdSection = document.querySelectorAll('section')[2];
      const isInsideContent = Boolean(thirdSection && window.scrollY >= thirdSection.offsetTop - window.innerHeight * 0.45);
      shellRef.current?.classList.toggle('ball-warm', isInsideContent);
      shellRef.current?.classList.toggle('ball-in-content', isInsideContent);
      shellRef.current?.classList.toggle('ball-docked', progress > 0.965);
    };
    positionBall(); window.addEventListener('scroll', positionBall, { passive: true }); window.addEventListener('resize', positionBall);
    return () => { window.removeEventListener('scroll', positionBall); window.removeEventListener('resize', positionBall); };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.scroll-reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const movePixels = (event) => {
    event.currentTarget.style.setProperty('--mouse-x', `${event.clientX}px`);
    event.currentTarget.style.setProperty('--mouse-y', `${event.clientY}px`);
  };

  return (
    <div ref={shellRef} onPointerMove={movePixels} className={`site-shell ${isDarkMode ? 'site-dark' : 'site-light'}`}>
      {showIntro && <div className="pixel-intro" aria-label="PixelForge loading">
        <div className="intro-grid">{Array.from({ length: 36 }, (_, index) => <i key={index} />)}</div>
        <p className="intro-name">PIXEL<span>FORGE</span></p>
        <p className="intro-subtitle">SOFTWARE / ESTABLISHING CONNECTION</p>
        <div className="intro-progress"><i /></div>
      </div>}
      <div className="geo-shapes" aria-hidden="true">
        <i className="geo geo-orbit" />
        <i className="geo geo-blob" />
        <i className="geo geo-square" />
        <i className="geo geo-diamond" />
        <i className="geo geo-ring" />
      </div>
      <div className="scroll-pixel-ball" aria-hidden="true">{'00111000111110111111111111111111101111100011100'.split('').map((pixel, index) => <i className={pixel === '1' ? `on ${index % 5 === 0 ? 'shade' : ''}` : ''} key={index} />)}</div>
      <div className="ball-dock" aria-hidden="true">{'00111000111110111111111111111111101111100011100'.split('').map((pixel, index) => <i className={pixel === '1' ? 'on' : ''} key={index} />)}</div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(value => !value)} />
      <Hero isDarkMode={isDarkMode} />
      <WhyPixelForge />
      <TechStack />
      <ServicesDetail />
      <Services isDarkMode={isDarkMode} />
      <Process />
      <Founders isDarkMode={isDarkMode} />
      <FAQ />
      <ProjectCTA />
      <Contact isDarkMode={isDarkMode} />
      <Footer />
      <div className="cursor-pixels" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</div>
    </div>
  );
}
