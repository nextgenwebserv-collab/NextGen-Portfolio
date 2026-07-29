import { useEffect, useState } from 'react';
import { Code2, Search, Lightbulb, Palette, Rocket } from 'lucide-react';
export default function WorkProcess() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    'Digital Products',
    'Websites',
    'Mobile Apps',
    'AI Solutions',
    'SaaS Platforms',
    'Web Applications',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentText(prev => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="px-2 sm:px-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px]">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[180px]" />
          <div className="sm:hidden absolute left-1/2 top-200 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[180px]" />
        </div>

        {/* Glass Container */}
        <div className=" relative rounded-[32px] border border-violet-500/10 bg-white/40 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 sm:p-16 overflow-hidden">
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/20 bg-white/20 backdrop-blur-md backdrop-blur-md text-sm text-black mb-8">
              <Code2 size={16} />
              Work Process
            </div>

            {/* Heading */}
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-black">
                How I Turn Ideas Into
                <span
                  key={currentText}
                  className={`ml-3 inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold transition-all duration-500 ease-in-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0 blur-0'
                      : 'opacity-0 -translate-y-4 blur-sm'
                  }`}
                >
                  {texts[currentText]}
                </span>
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
              icon={Search}
              desc="We understand your vision, goals, and challenges to create the right strategy for your project."
            />

            <ProcessCard
              title="Strategy"
              icon={Lightbulb}
              desc="We plan a clear roadmap with smart solutions that align with your business objectives."
            />

            <ProcessCard
              title="Design"
              icon={Palette}
              desc="We create modern UI designs with smooth user experience and strong visual identity."
            />

            <ProcessCard
              title="Build"
              icon={Rocket}
              desc="We develop scalable, fast, and secure digital solutions using modern technologies."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ title, desc, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-violet-500/20 bg-white/10 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)]">
      {/* Hover Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-violet-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative">
        {/* Tag */}
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg">
          <Icon size={22} />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-black">{title}</h3>

        <p className="text-[15px] leading-7 text-gray-700">{desc}</p>

        {/* Bottom Line */}
        <div className="mt-4 h-[2px] w-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}
