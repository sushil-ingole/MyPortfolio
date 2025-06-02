import { useEffect, useRef, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      const isDark = JSON.parse(savedMode);
      setIsDarkMode(isDark);
      document.body.classList.toggle('dark-mode', isDark);
    }
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;


    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        const rect = cursor.getBoundingClientRect();
        const offset = rect.width / 2; // Dynamically calculate offset
        cursor.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset - 10}px, 0)`;
        cursor.style.opacity = '1'; // Ensure the cursor is visible when moving
      }
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.backgroundColor = 'transparent';
        cursor.style.height = '30px';
        cursor.style.width = '30px';
        cursor.style.border = '2px solid #fff';
        cursor.style.borderRadius = '50%';
        cursor.style.boxShadow = '0 0 10px 5px rgba(0, 0, 0, 0.2)';
        cursor.style.transform = 'rotate(45deg)';
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.backgroundColor = 'black';
        cursor.style.height = '20px';
        cursor.style.width = '20px';
      }
    };

    const handleMouseOut = () => {
      if (cursor) {
        cursor.style.opacity = '0'; // Hide the cursor when outside the viewport
      }
    };

    const handleMouseOver = () => {
      if (cursor) {
        cursor.style.opacity = '1'; // Show the cursor when back inside the viewport
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);

    const hoverElements = document.querySelectorAll('img, button, a, span');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={isDarkMode} />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;