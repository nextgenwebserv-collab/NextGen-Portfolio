'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setScrolled(false);
        return;
      }

      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
    w-full z-50
    md:fixed md:top-0 md:left-0
    transition-[padding]
    duration-500
    ease-out
    ${scrolled ? 'md:pt-3' : 'pt-0'}
  `}
    >
      <div
        className={`mx-auto flex items-center justify-between
    px-5 py-2 will-change-[max-width,border-radius]
    transition-[max-width,border-radius,background-color,box-shadow,backdrop-filter]
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${scrolled ? 'max-w-5xl rounded-full bg-white/60 backdrop-blur-xl shadow-sm border border-black/10' : 'max-w-7xl rounded-none bg-white/80 border-b border-white/20 '}
  `}
      >
        {/* Logo */}
        <div className="font-bold text-lg tracking-wide">
          <img src="/file.png" alt="Logo" className="h-10 w-38" />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-md font-medium">
          <a href="#" className="hover:text-violet-500">
            Home
          </a>
          <a href="#about" className="hover:text-violet-500">
            About
          </a>
          <a href="#contact" className="hover:text-violet-500">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/+918340593996?text=Hello%20I%20want%20to%20start%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 border border-black px-3 sm:px-5 py-2 rounded-full text-md transition-all duration-300 hover:bg-violet-500 hover:text-white hover:border-violet-500"
        >
          Start Project
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={18} />
          </span>
        </a>
      </div>
    </header>
  );
}
