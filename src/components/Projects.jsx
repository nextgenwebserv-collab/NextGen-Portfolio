'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Medicare Pro',
    subtitle: 'Healthcare & Medical Platform',
    details:
      'Medicare Pro is a modern healthcare platform designed to provide a seamless digital experience for patients and healthcare providers. It focuses on easy access to medical services, healthcare information, and efficient patient management.',
    tags: ['Healthcare'],
    image: '/Medicare.jpg',
    link: 'https://medicare-demo03.vercel.app/',
  },
  {
    title: 'Upskills',
    details:
      'Upskills is a powerful and feature-packed learning platform with a clean, modern interface, designed to deliver seamless learning experiences across all devices.',
    tags: ['Learning Platform'],
    image: '/Upskills.png',
    link: 'https://upskills-nu.vercel.app/',
  },
  {
    title: 'ShopU',
    details:
      'ShopU is a modern e-commerce platform built with scalability and performance in mind. It features a responsive design, secure payment processing, and an intuitive user interface.',
    tags: ['E-commerce'],
    image: '/Capture.png',
    link: 'https://shopu-nu.vercel.app/',
  },
  {
    title: 'Maison',
    subtitle: 'Fine Dining Restaurant',
    details:
      'Maison is a premium fine dining restaurant website designed to showcase an elegant culinary experience, curated menus, chef expertise, restaurant stories, and seamless table reservations.',
    tags: ['Restaurant'],
    image: '/Resturant.png',
    link: 'https://resturent-demo01.vercel.app/',
  },

  // {
  //   title: 'CareOne',
  //   details:
  //     'CareOne is a comprehensive hospital management system designed to streamline operations, improve patient care, and enhance administrative efficiency.',
  //   tags: ['Hospital Management System'],
  //   image: '/Careone.png',
  //   link: 'https://careone.com',
  // },
  {
    title: 'Medicare Pro',
    subtitle: 'Healthcare & Medical Platform',
    details:
      'Medicare Pro is a modern healthcare platform designed to provide a seamless digital experience for patients and healthcare providers. It focuses on easy access to medical services, healthcare information, and efficient patient management.',
    tags: ['Healthcare'],
    image: '/MedicarePro.png',
    link: 'https://medicarepro-demo04.vercel.app/',
  },
  {
    title: 'RealEstate Hub',

    details:
      'A modern real estate platform designed to help users discover, compare, and manage property listings for buying and renting. It includes property search, advanced filters, property details, favorites, comparisons, and an easy-to-use interface for finding the right property.',

    tags: ['Real Estate Platform'],

    image: '/Real.png',

    link: 'https://real-estate-demo05.vercel.app/',
  },
  {
    title: 'Bengal Tiger',
    details:
      "Bengal Tiger is a modern travel platform designed to showcase unforgettable journeys across India's wildlife, nature, and cultural destinations. It offers curated tour packages, destination exploration, and a seamless travel experience.",
    tags: ['Travel & Tourism Platform'],
    image: '/Travel.PNG',
    link: 'https://bengal-tan.vercel.app/',
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const nextProject = () => {
    setDirection('next');

    setActiveIndex(prev => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setDirection('prev');

    setActiveIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="px-2 sm:px-6 text-black">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px]">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[180px]" />
        </div>

        {/* Glass Container */}
        <div className="relative rounded-[32px] border border-violet-500/10 bg-white/40 backdrop-blur-xl p-6 sm:p-16 overflow-hidden">
          {/* Header */}
          <div className="flex flex-col items-center mb-10 sm:mb-14">
            <span className="px-5 py-2 rounded-full border border-black/20 bg-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Projects
            </span>

            <h2 className="text-center text-3xl md:text-4xl font-bold leading-tight">
              Take a look at the latest
              <br />
              projects I’ve done
            </h2>
          </div>

          {/* 3D Carousel */}
          <div className="relative h-[430px] sm:h-[450px] [perspective:1400px]">
            {projects.map((project, index) => {
              let position = index - activeIndex;

              // Circular positioning
              if (position > Math.floor(projects.length / 2)) {
                position -= projects.length;
              }

              if (position < -Math.floor(projects.length / 2)) {
                position += projects.length;
              }

              const isActive = position === 0;
              const isLeft = position === -1;
              const isRight = position === 1;

              return (
                <div
                  key={project.title}
                  className={`absolute left-1/2 top-0 w-[300px] sm:w-[330px] h-[400px] sm:h-[400px] -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isActive
                        ? `
                          z-30 opacity-100 scale-100 translate-y-0 rotate-y-0
                        `
                        : isLeft
                          ? `
                            z-20 opacity-60 scale-[0.82] -translate-x-[125%] translate-y-8 -rotate-[8deg]
                          `
                          : isRight
                            ? `
                              z-20 opacity-60 scale-[0.82] translate-x-[25%] translate-y-8 rotate-[8deg]
                            `
                            : `
                              z-0 opacity-0 scale-[0.7] translate-y-16 pointer-events-none
                            `
                    }
                  `}
                >
                  <ProjectCard project={project} active={isActive} />
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="relative z-50 flex items-center justify-center gap-4">
            <button
              onClick={previousProject}
              aria-label="Previous project"
              className="group w-12 h-12 rounded-full border border-violet-500/20 bg-white/40 backdrop-blur-xl flex items-center justify-center text-xl text-violet-700 transition-all duration-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:scale-110 active:scale-95 "
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextProject}
              aria-label="Next project"
              className="group w-12 h-12 rounded-full border border-violet-500/20 bg-white/40 backdrop-blur-xl flex items-center justify-center text-xl text-violet-700 transition-all duration-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => {
                  setDirection(index > activeIndex ? 'next' : 'prev');
                  setActiveIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-500
                  ${index === activeIndex ? 'w-8 bg-violet-600' : 'w-1.5 bg-violet-300/50'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, active }) {
  return (
    <div
      className={`relative w-full h-full rounded-[28px] border border-violet-500/20 bg-white backdrop-blur-xl p-4 overflow-hidden shadow-[0_20px_60px_rgba(124,58,237,0.12)]
        ${active ? 'shadow-[0_25px_70px_rgba(124,58,237,0.22)]' : ''}
      `}
    >
      {/* Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-violet-500/20 blur-[70px]" />

      {/* Tags */}
      <div className="relative z-10 flex gap-2 mb-4 flex-wrap">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-[11px] bg-white/30 border border-violet-500/20 px-3 py-1 rounded-full text-gray-700 backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="relative z-10 block overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[155px] sm:h-[170px] object-cover rounded-2xl border border-white/30 transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-5">
        <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>

        <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
          {project.details}
        </p>
      </div>

      {/* View Project */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label={`View ${project.title}`}
      >
        ↗
      </a>
    </div>
  );
}
