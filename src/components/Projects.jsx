export default function Projects() {
  return (
    <section className=" text-white  px-8 pb-16">
      <div className="max-w-7xl mx-auto bg-black p-16 rounded-[36px]">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-sm mb-6">
          🧩 Work Process
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14 leading-tight">
          Take a look at the latest <br />
          projects I’ve done
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <ProjectCard
            title="Mobile Trading Platform"
            subtitle="Trading Website Development"
            tags={['webflow', 'web development']}
            rotate="-rotate-6"
            image="/project1.png"
          />

          {/* Card 2 */}
          <ProjectCard
            title="Chaseless Made Effortless"
            subtitle="Landing Page Design"
            tags={['webflow', 'ui/ux']}
            rotate="rotate-6"
            image="/project2.png"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, subtitle, tags, rotate, image }) {
  return (
    <div
      className={`bg-zinc-900 rounded-3xl p-6 transform ${rotate} hover:rotate-0 transition duration-500`}
    >
      {/* Tags */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-black/60 border border-white/20 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden mb-6">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>

      {/* Text */}
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}
