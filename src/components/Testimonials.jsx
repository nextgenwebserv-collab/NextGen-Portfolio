import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-60 sm:w-96 h-60 sm:h-96 bg-violet-500/60 rounded-full blur-[100px] opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <span className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 rounded-full text-sm mb-6 bg-white">
          💬 Testimonials
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Client <span className="bg-black text-white px-3 py-1 rounded-lg">Talking</span>
        </h2>

        <p className="max-w-xl text-gray-700 sm:mb-10">
          We start every client interaction with an in-depth discovery call where we get to know
          each other.
        </p>

        <div className="flex flex-col justify-center md:flex-row gap-8 items-center">
          <div className="flex gap-4 mt-6 sm:mt-10">
            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
              <ArrowLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
              <ArrowRight size={18} />
            </button>
          </div>
          {/* Avatar */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <img src="/avatar2.jpg" alt="client" className="w-40 h-40 rounded-full object-cover" />
          </div>

          {/* Testimonial card */}
          <div className="group relative text-black overflow-hidden rounded-2xl border border-violet-500/20 bg-white/[0.08] backdrop-blur-2xl p-6 sm:p-8 max-w-md transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)]">
            <span className="text-xs  block mb-2">AUTODESK</span>

            <p className="text-sm  mb-6">
              “John did an amazing work with our web app. Everything he did to optimize our software
              helped us reduce our loading speed by 50%.”
            </p>

            <div>
              <p className="font-semibold">Andy Smith</p>
              <p className="text-xs ">VP of Design at Autodesk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
