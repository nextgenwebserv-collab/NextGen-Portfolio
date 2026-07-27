export default function Projects() {
  return (
    <section className="px-2 sm:px-6 text-black">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px]">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-fuchsia-500/10 blur-[150px]" />
        </div>

        {/* Glass Container */}
        <div className="relative rounded-[32px] border border-violet-500/40 bg-white/10 backdrop-blur-2xl p-6 sm:p-16 overflow-hidden">
          {/* Header */}
          <div className="flex flex-col items-center mb-14">
            <span className="px-5 py-2 rounded-full border border-black/20 bg-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Projects
            </span>

            <h2 className="text-center text-3xl md:text-4xl font-bold leading-tight">
              Take a look at the latest
              <br />
              projects I’ve done
            </h2>
          </div>

          {/* Cards */}
          <div className="flex md:flex-row flex-col gap-10 md:overflow-x-auto md:scroll-smooth md:pb-4 no-scrollbar p-4">
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
              link="https://shopu-nu.vercel.app/"
            />

            <ProjectCard
              title="CareOne"
              subtitle="Hospital Management System"
              details="CareOne is a comprehensive hospital management system designed to streamline operations, improve patient care, and enhance administrative efficiency."
              tags={['hospital management', 'web development']}
              rotate="-rotate-6"
              image="/Careone.png"
              link="https://careone.com"
            />

            <ProjectCard
              title="SchooLama"
              subtitle="ERP Software"
              details="A School Management ERP is a software system designed to manage and automate all the daily operations of a school, including student records, attendance, fee management, examinations, and staff details in a single platform."
              tags={['web development', 'ERP System']}
              rotate="rotate-6"
              image="/Lama.png"
              link="https://erp-iota-five.vercel.app/admin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, subtitle, tags, rotate, image, details, link }) {
  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-3xl
        border border-violet-500/40
        bg-white/[0.08]
        backdrop-blur-xl
        px-4 py-3
        transform
        ${rotate}
        transition-all duration-500
        hover:-translate-y-3
        hover:rotate-0
        hover:border-violet-500/20
        hover:shadow-xl
        md:min-w-[300px]
        md:max-w-[300px]
      `}
    >
      {/* Tags */}
      <div className="relative flex gap-2 mb-4 flex-wrap">
        {tags.map(tag => (
          <span
            key={tag}
            className="
              text-xs
              bg-white/10
              border border-violet-500/20
              px-3 py-1
              rounded-full
              text-gray-700
              backdrop-blur-md
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Image */}
      <div
        className="
        relative
        rounded-2xl
        overflow-hidden
        mb-6
        border border-white/20
      "
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={title}
            className="
              w-full
              object-cover
              cursor-pointer
              transition duration-500
              group-hover:scale-105
            "
          />
        </a>
      </div>

      {/* Text */}
      <div className="relative">
        <h3 className="text-xl font-semibold mb-1 text-black">{title}</h3>

        <p className="text-sm text-gray-700">{subtitle}</p>

        <p className="text-sm text-gray-600 py-2 leading-6">{details}</p>
      </div>
    </div>
  );
}
