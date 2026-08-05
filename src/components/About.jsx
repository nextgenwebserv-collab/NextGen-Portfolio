import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    margin: '-35% 0px -35% 0px',
    once: false,
  });

  return (
    <section ref={sectionRef} id="about" className="relative py-18 sm:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-40 sm:top-20 left-1/2 -translate-x-1/2 w-60 sm:w-96 h-60 sm:h-96 bg-violet-500/60 rounded-full blur-[100px] opacity-80" />

      <div className="sm:hidden absolute left-1/2 top-40 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[180px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-16">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 15,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 rounded-full text-sm mb-6 bg-white"
        >
          About NextGen
        </motion.span>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : -80,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Who <span className="bg-black text-white px-3 py-0.5 rounded-lg">We Are</span>
            </h2>

            <p className="max-w-xl text-gray-700">
              NextGen Web Services is a modern digital agency focused on building fast, scalable,
              and visually compelling websites for businesses of all sizes. We combine smart
              strategy, clean design, and powerful development to create digital experiences that
              not only look great but also deliver real results.
              <br />
              With a strong emphasis on performance, user experience, and modern technologies, we
              help brands establish a strong online presence. From concept to launch, NextGen Web
              Services works as a trusted partner to turn ideas into high-impact digital products
              that support long-term growth.
            </p>
          </motion.div>

          {/* RIGHT CARD - ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : 80,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-lg w-full"
          >
            {/* RIGHT CARD - HOVER */}
            <div className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-white/40 backdrop-blur-2xl p-6 sm:p-10 transition-transform duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)]">
              <p className="relative text-sm text-black/80 mb-6">
                We specialize in designing and developing modern websites using the latest
                technologies like React, Next.js, and Tailwind CSS. Our approach blends strategy,
                clean design, and robust development to deliver digital experiences that create real
                impact.
              </p>

              <div className="relative space-y-3">
                <p className="text-sm text-black/70">✔ Strategy-driven development</p>

                <p className="text-sm text-black/70">✔ Modern & scalable tech stack</p>

                <p className="text-sm text-black/70">✔ Performance-focused solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
