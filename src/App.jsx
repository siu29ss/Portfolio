import React, { useEffect } from 'react';
import './App.css';
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer';

function App() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    const links = document.querySelectorAll('.link');
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        cursor.classList.add('cursor--hover');
      });
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
      });
    });

    // Smooth scrolling
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetPosition = document.querySelector(targetId).offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    };

    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

  }, []);

  return (
    <>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero" className='link'>Home</a></li>
          <li><a href="#projects" className='link'>Projects</a></li>
          <li><a href="#skills" className='link'>Skills</a></li>
          <li><a href="#contact" className='link'>Contact</a></li>
        </ul>
      </nav>
      <div className='cursor'></div>

      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
