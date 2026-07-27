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
    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${scrolled ? 'md:pt-3 py-0' : 'py-0'}
  `}
    >
      <div
        className={`
    mx-auto flex items-center justify-between
    px-5 py-3.5
    transition-all duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    transform

    ${
      scrolled
        ? 'max-w-5xl rounded-full bg-white/80 backdrop-blur-3xl shadow-md border border-black/10 scale-[0.98]'
        : 'max-w-7xl bg-white/80 border-b border-black/10 rounded-none scale-100'
    }
  `}
      >
        {/* Logo */}
        <div className="font-bold text-lg tracking-wide">
          <img src="/file.png" alt="Logo" className="h-10 w-38" />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-md font-medium">
          <a href="#" className="hover:text-gray-500">
            Home
          </a>
          <a href="#about" className="hover:text-gray-500">
            About
          </a>
          <a href="#" className="hover:text-gray-500">
            Portfolio
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/+918340593996?text=Hello%20I%20want%20to%20start%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-black px-3 sm:px-5 py-2 rounded-full text-md hover:bg-black hover:text-white transition"
        >
          Start Project
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-black">
            <ArrowRight size={18} />
          </span>
        </a>
      </div>
    </header>
  );
}
