import { Code2 } from 'lucide-react';

export default function WorkProcess() {
  return (
    <section className="px-2 sm:px-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px]">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[180px]" />
          <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-fuchsia-500/10 blur-[140px]" />
        </div>

        {/* Glass Container */}
        <div className=" relative rounded-[32px] border border-violet-500/10 bg-white/10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 sm:p-16 overflow-hidden">
          {/* Header */}
          <div className="mb-14">
            <div
              className="
            inline-flex items-center gap-2
            px-5 py-2
            rounded-full
            border border-black/20
            bg-white/5
            backdrop-blur-md
            text-sm text-black
            mb-8
            "
            >
              <Code2 size={16} className="text-purple-400" />
              Work Process
            </div>

            {/* Heading */}
            <div className="max-w-3xl mb-14">
              <h2
                className="
              text-3xl sm:text-4xl
              font-bold
              leading-tight
              text-black
              "
              >
                How I Turn Ideas Into
                <span className="text-purple-400"> Digital Products</span>
              </h2>

              <p className="mt-5 text-black/60 text-base sm:text-lg leading-8">
                A simple and transparent process that transforms your vision into a fast, scalable,
                and beautifully designed digital experience.
              </p>
            </div>
          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard
              title="Discovery"
              tag="Discovery"
              color="bg-cyan-400"
              desc="We understand your vision, goals, and challenges to create the right strategy for your project."
            />

            <ProcessCard
              title="Strategy"
              tag="Strategy"
              color="bg-lime-400"
              desc="We plan a clear roadmap with smart solutions that align with your business objectives."
            />

            <ProcessCard
              title="Design"
              tag="Design"
              color="bg-purple-400"
              desc="We create modern UI designs with smooth user experience and strong visual identity."
            />

            <ProcessCard
              title="Build"
              tag="Build"
              color="bg-yellow-400"
              desc="We develop scalable, fast, and secure digital solutions using modern technologies."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ title, desc, tag, color }) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-violet-500/20
      bg-white/10
      backdrop-blur-xl
      p-7
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-violet-400/40
      hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
        absolute
        -top-12
        -right-12
        w-40
        h-40
        rounded-full
        bg-violet-500/20
        blur-3xl
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
        "
      />

      <div className="relative">
        {/* Tag */}
        <span
          className={`
          inline-block
          ${color}
          text-black
          text-xs
          font-semibold
          px-3
          py-1
          rounded-full
          mb-6
          `}
        >
          {tag}
        </span>

        <h3 className="mb-4 text-2xl font-semibold text-black">{title}</h3>

        <p className="text-[15px] leading-7 text-gray-700">{desc}</p>

        {/* Bottom Line */}
        <div className="mt-8 h-[2px] w-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}
