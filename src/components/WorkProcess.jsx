export default function WorkProcess() {
  return (
    <section className=" text-white px-8 pt-8">
      <div className="max-w-7xl mx-auto p-16 bg-black rounded-[32px] ">
        <span className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-sm mb-6">
          ⚙️ Work Process
        </span>

        <h2 className="text-4xl font-bold mb-12">My Work Process</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProcessCard
            title="Discovery"
            tag="Discovery"
            color="bg-cyan-400"
            desc="We start every client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action."
          />
          <ProcessCard
            title="Strategy"
            tag="Strategy"
            color="bg-lime-400"
            desc="Every end-to-end process of our designs will include pre-built strategies and consultation to ensure success."
          />
          <ProcessCard
            title="Design"
            tag="Design"
            color="bg-purple-400"
            desc="After the concept is agreed upon, your brand will be brought to life with modern UI and seamless UX."
          />
          <ProcessCard
            title="Build"
            tag="Build"
            color="bg-yellow-400"
            desc="We develop fast, scalable, and trusted solutions using modern technologies."
          />
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ title, desc, tag, color }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 relative hover:-translate-y-1 transition">
      <span
        className={`inline-block ${color} text-black text-xs font-semibold px-3 py-1 rounded-full mb-4`}
      >
        {tag}
      </span>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-400 text-sm mb-6">{desc}</p>

      <button className="absolute top-6 right-6 text-sm text-gray-400 hover:text-white">
        → Read More
      </button>
    </div>
  );
}
