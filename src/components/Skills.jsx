export default function Skills() {
  return (
    <section className="relative px-8 text-white ">
      <div className="max-w-7xl bg-black mx-auto p-16 rounded-[40px]">
        <button className="border border-white/30 px-4 py-2 rounded-full text-sm mb-6">
          Why Choose me
        </button>

        <h2 className="text-4xl font-bold mb-12">My Extensive List of Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card */}
          <SkillCard title="HTML & CSS" />
          <SkillCard title="Javascript" />
          <SkillCard title="Webflow" />
          <SkillCard title="Webflow" />
          <SkillCard title="Webflow" />
          <SkillCard title="Webflow" />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 hover:-translate-y-2 transition">
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full border border-white/20">
        ⚛️
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">
        Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam.
      </p>
    </div>
  );
}
