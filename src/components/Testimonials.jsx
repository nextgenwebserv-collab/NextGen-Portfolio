export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute -top-0 -left-20 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-60 right-0 w-96 h-96 bg-lime-300 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <span className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 rounded-full text-sm mb-6 bg-white">
          💬 Testimonials
        </span>

        <h2 className="text-4xl font-bold mb-4">
          Client <span className="bg-black text-white px-3 py-1 rounded-lg">Talking</span>
        </h2>

        <p className="max-w-xl text-gray-700 sm:mb-10">
          We start every client interaction with an in-depth discovery call where we get to know
          each other.
        </p>

        <div className="flex flex-col justify-center md:flex-row gap-8 items-center">
          <div className="flex gap-4 mt-6 sm:mt-10">
            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
              →
            </button>
          </div>
          {/* Avatar */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <img src="/avatar2.jpg" alt="client" className="w-40 h-40 rounded-full object-cover" />
          </div>

          {/* Testimonial card */}
          <div className="bg-black text-white rounded-2xl p-6 sm:p-8 max-w-md">
            <span className="text-xs text-gray-400 block mb-2">AUTODESK</span>

            <p className="text-sm text-gray-300 mb-6">
              “John did an amazing work with our web app. Everything he did to optimize our software
              helped us reduce our loading speed by 50%.”
            </p>

            <div>
              <p className="font-semibold">Andy Smith</p>
              <p className="text-xs text-gray-400">VP of Design at Autodesk</p>
            </div>
          </div>
        </div>

        {/* Arrows */}
      </div>
    </section>
  );
}
