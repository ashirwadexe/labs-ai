import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer';
import TrustedBy from './components/TrustedBy';
import OurWork from './components/OurWork';
import Teams from './components/Teams';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.15;
      position.current.y += (mouse.current.y - position.current.y) * 0.15;

      if (dotRef.current && outlineRef.current) {
        // Dot: follows mouse instantly
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
        
        // Outline: follows with easing
        outlineRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className='dark:bg-black relative overflow-x-hidden'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy/>
      <Services />
      <OurWork/>
      <ContactUs />
      <Teams/>
      <Footer theme={theme} />

      {/* --- Cursor Elements (Separated) --- */}
      
      {/* 1. Outer Ring */}
      <div 
        ref={outlineRef} 
        className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] will-change-transform'
        style={{ transition: 'none' }}
      />

      {/* 2. Inner Dot */}
      <div 
        ref={dotRef} 
        className='fixed top-0 left-0 h-2 w-2 rounded-full bg-primary pointer-events-none z-[9999] will-change-transform'
      />
    </div>
  )
}

export default App