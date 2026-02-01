import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Skills() {
  return (
    <section className="px-2 sm:px-6">
      <div className="max-w-7xl mx-auto rounded-[32px] bg-gradient-to-br from-black via-zinc-900 to-black p-6 sm:p-16 relative overflow-hidden">
        {/* Top glow */}
        <div className="absolute w-72 h-72 blur-3xl rounded-full" />

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center gap-10 mb-6 sm:mb-16">
          <div className="text-white">
            <button className="border border-white px-4 py-2 rounded-full text-sm mb-6">
              Why Choose me
            </button>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              My Extensive <br /> List of Skills
            </h2>
          </div>

          <div className="max-w-sm sm:mt-8 text-white text-md relative">
            <p>
              We build scalable, high-performing marketing websites backed by smart strategy and
              design-led development.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard
            title="HTML & CSS"
            icon={<FaHtml5 />}
            details="We craft pixel-perfect, responsive interfaces that give startups a strong and professional first impression."
          />
          <SkillCard
            title="Javascript"
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
    </section>
  );
}

function SkillCard({ title, icon, rotate, details }) {
  return (
    <div
      className={`w-full bg-zinc-900 rounded-3xl p-6 sm:p-8 text-white transform ${rotate || ''} hover:rotate-6 transition duration-300`}
    >
      <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-full border border-white/30 text-3xl">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-gray-400">{details}</p>
    </div>
  );
}
