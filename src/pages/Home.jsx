import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import WorkProcess from '../components/WorkProcess.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <WorkProcess />

      <Testimonials />

      <Projects />
      <Footer />
    </div>
  );
}
