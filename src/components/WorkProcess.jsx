export default function WorkProcess() {
  return (
    <section className=" text-white px-2 sm:px-8 sm:pt-8">
      <div className="max-w-7xl mx-auto p-6 sm:p-16 bg-black rounded-[32px] bg-gradient-to-bl from-black via-zinc-900 to-black">
        <div className="absolute  w-72 h-72 blur-3xl rounded-full " />
        <span className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-sm mb-6">
          ⚙️ Work Process
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">My Work Process</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <ProcessCard
            title="Discovery"
            tag="Discovery"
            color="bg-cyan-400"
            desc="We start every project by understanding your vision, challenges, and goals—then define the best strategy to move forward."
          />
          <ProcessCard
            title="Strategy"
            tag="Strategy"
            color="bg-lime-400"
            desc="Our complete design process is guided by proven strategies and thoughtful consultation to deliver results that truly matter."
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
            desc="We build fast, scalable, and reliable digital solutions using modern technologies.
Our focus is on performance, security, and long-term growth."
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

      <p className="text-gray-400 text-sm sm:mb-6">{desc}</p>
    </div>
  );
}
