export default function Projects() {
  return (
    <section className="text-white px-2 sm:px-8 pb-16">
      <div className="max-w-7xl mx-auto bg-black p-10 sm:p-16 rounded-[36px]">
        {/* Badge */}
        <div className="flex flex-col items-center">
          <span className="border border-white/50 px-4 py-2 rounded-full text-sm mb-6">
            Work Process
          </span>

          {/* Heading */}
          <h2 className="text-center text-2xl md:text-5xl font-bold mb-14 leading-tight">
            Take a look at the latest <br />
            projects I’ve done
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          <ProjectCard
            title="Upskills"
            subtitle="Learning Management System"
            details="Upskills is a powerful and feature-packed learning platform with a clean, modern interface, designed to deliver seamless learning experiences across all devices."
            tags={['web development']}
            rotate="-rotate-6"
            image="/Upskills.png"
            link="https://upskills-nu.vercel.app/"
          />

          <ProjectCard
            title="ShopU"
            subtitle="E-commerce Platform"
            details="ShopU is a modern e-commerce platform built with scalability and performance in mind. It features a responsive design, secure payment processing, and an intuitive user interface."
            tags={['web development', 'e-commerce']}
            rotate="rotate-6"
            image="/Capture.png"
            link="https://www.shopustore.in/"
          />

          <ProjectCard
            title="CareOne"
            subtitle="Hospital Management System"
            details="CareOne is a comprehensive hospital management system designed to streamline operations, improve patient care, and enhance administrative efficiency."
            tags={['Hospital management', 'web development']}
            rotate="-rotate-6"
            image="/Careone.png"
            link="https://careone.com"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, subtitle, tags, rotate, image, details, link }) {
  return (
    <div
      className={`bg-zinc-900 rounded-3xl px-4 py-2 transform ${rotate} hover:rotate-0 transition duration-500`}
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
      <div className="rounded-md overflow-hidden mb-6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="w-full object-cover cursor-pointer" />
        </a>
      </div>

      {/* Text */}
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-200">{subtitle}</p>
      <p className="text-sm text-gray-400 py-2">{details}</p>
    </div>
  );
}
