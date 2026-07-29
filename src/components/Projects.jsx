export default function Projects() {
  return (
    <section className="px-2 sm:px-6 text-black">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px]">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[180px]" />
        </div>

        {/* Glass Container */}
        <div className="relative rounded-[32px] border border-violet-500/10 bg-white/40 backdrop-blur-xl p-6 sm:p-16 overflow-hidden">
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
          <div className="flex flex-row gap-6 overflow-x-auto scroll-smooth no-scrollbar p-4">
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
              tags={['hospital management']}
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

function ProjectCard({ title, subtitle, tags, image, details, link }) {
  return (
    <div className="group perspective flex-shrink-0 w-[300px] sm:w-[320px] h-[320px]">
      <div
        className="
          relative h-full w-full
          transition-all duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* Front Side */}
        <div className="absolute inset-0 rounded-3xl border border-violet-500/20 bg-white/10 backdrop-blur-xl p-4 [backface-visibility:hidden]">
          {/* Tags */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-xs bg-white/10 border border-violet-500/20 px-3 py-1 rounded-full text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Image */}
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={title}
              className="rounded-2xl border border-white/20 cursor-pointer transition duration-500 group-hover:scale-105"
            />
          </a>

          {/* Title */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-black">{title}</h3>

            <p className="text-sm text-gray-700 mt-1">{subtitle}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-3xl border border-violet-500/40 bg-white/[0.08]
            backdrop-blur-xl
            text-black
            p-6
            flex flex-col
            justify-between
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >
          <div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>

            <p className="text-gray-700 leading-relaxed text-sm">{details}</p>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-600 text-white font-semibold py-3 transition hover:scale-105"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}
