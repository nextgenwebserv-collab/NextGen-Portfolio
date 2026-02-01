export default function About() {
  return (
    <section id="about" className="relative py-18 sm:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -top-10 -left-20 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-60 right-0 w-96 h-96 bg-lime-300 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-16">
        <span className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 rounded-full text-sm mb-6 bg-white">
          About NextGen
        </span>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Who <span className="bg-black text-white px-3 py-0.5 rounded-lg">We Are</span>
            </h2>

            <p className="max-w-xl text-gray-700 ">
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
          </div>

          {/* Content Card */}
          <div className="bg-black text-white rounded-2xl p-6 sm:p-10 max-w-lg">
            <p className="text-sm text-gray-200 mb-6">
              We specialize in designing and developing modern websites using the latest
              technologies like React, Next.js, and Tailwind CSS. Our approach blends strategy,
              clean design, and robust development to deliver digital experiences that create real
              impact.
            </p>

            <div className="space-y-3">
              <p className="text-sm text-gray-300">✔ Strategy-driven development</p>
              <p className="text-sm text-gray-300">✔ Modern & scalable tech stack</p>
              <p className="text-sm text-gray-300">✔ Performance-focused solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
