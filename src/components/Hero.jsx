export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pb-16">
      {/* Gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-lime-300 rounded-full blur-3xl opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-16 pt-24">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Trusted <span className="bg-black text-white px-3 py-1 rounded-lg">Partner</span> for{' '}
          <br />
          Your Website <span className="bg-black text-white px-3 py-1 rounded-lg">Develop.</span>
        </h1>

        <p className="mt-6 max-w-xl text-gray-700">
          Building the world’s best marketing websites for over a decade. Your trusted partner for
          strategy, design, and dev.
        </p>

        <button className="mt-8 flex items-center gap-2 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
          📞 Schedule a Call
        </button>
      </div>
    </section>
  );
}
