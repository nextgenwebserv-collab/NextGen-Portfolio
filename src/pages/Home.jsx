import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import WorkProcess from "../components/WorkProcess.jsx";
import WebsiteConfigurator from "../components/WebsiteConfigurator.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Projects from "../components/Projects.jsx";
import Footer from "../components/Footer.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white">

        {/* Logo */}
        <img
          src="/file.png"
          alt="Logo"
          className="mb-6 w-40 object-contain"
        />

        {/* Loading Bar */}
        <div className="h-[4px] w-48 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-black transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Percentage */}
        <div className="mb-3 text-xl font-bold text-black">
          {progress}%
        </div>

      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <WebsiteConfigurator />
      <Testimonials />
      <WorkProcess />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}