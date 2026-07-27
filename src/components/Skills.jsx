import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Skills() {
  return (
    <section className="px-2 sm:px-6 ">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px]">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/30 blur-[180px]" />

        </div>

        {/* Glass Container */}
        <div className="relative rounded-[32px] border border-violet-500/10 bg-white/40 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 sm:p-16 overflow-hidden">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">
            <div>
              <button className="px-5 py-2 rounded-full border border-black/20 bg-white/20 backdrop-blur-md text-black font-medium mb-6">
                Why Choose Me
              </button>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-black">
                My Extensive
                <br />
                List of Skills
              </h2>
            </div>

            <div className="max-w-md flex items-end">
              <p className="text-gray-700 leading-8">
                We build scalable, high-performing marketing websites backed by smart strategy and
                design-led development.
              </p>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              title="HTML & CSS"
              icon={<FaHtml5 />}
              details="We craft pixel-perfect, responsive interfaces that give startups a strong and professional first impression."
            />

            <SkillCard
              title="JavaScript"
              icon={<FaJs />}
              details="We power interactions and functionality that keep users engaged and experiences smooth."
            />

            <SkillCard
              title="React"
              icon={<FaReact />}
              details="We build scalable, component-driven frontends designed to grow with your product."
            />

            <SkillCard
              title="Next.js"
              icon={<SiNextdotjs />}
              details="We develop fast, SEO-optimized, production-ready applications built for performance and scale."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, icon, details }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-white/40 backdrop-blur-xl p-7 border-violet-500/10 transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)]">
      {/* Hover Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-violet-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-white/10 backdrop-blur-xl text-3xl text-violet-600">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-2xl font-semibold text-black">{title}</h3>

      {/* Description */}
      <p className="text-[15px] leading-7 text-gray-700">{details}</p>

      {/* Bottom Line */}
      <div className="mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
