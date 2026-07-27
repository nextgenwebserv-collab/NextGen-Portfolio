import { FaFacebook, FaInstagram, FaTwitter, FaPhone } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pb-0 sm:pb-32 pt-4 sm:pt-18">
      {/* Gradient blobs */}

      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-60 sm:w-96 h-60 sm:h-96 bg-violet-500/60 rounded-full blur-[100px] opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 py-16 sm:pt-24">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Trusted <span className="bg-black text-white px-3 rounded-lg">Partner</span> for <br />
          <span>Your Website</span>{' '}
          <span className="bg-black text-white px-3 rounded-lg">Develop.</span>
        </h1>

        <div className="flex justify-start items-center gap-18 mt-6">
          <div className="flex flex-col space-y-2">
            <a href="#">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/nextgen_webservices/" target="_blank">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/nxtgen_services" className="mb-4">
              <FaTwitter size={24} />
            </a>
            <hr className="rotate-90" />
          </div>
          <div>
            <p className="mt-6 max-w-xl text-gray-800">
              Building high-performance digital experiences for modern brands. NextGen is your
              trusted partner for strategy, design, and development.
            </p>
            <button className="mt-2 sm:mt-8 flex items-center gap-2 border border-black pr-2 sm:pr-3 pl-1 py-1 sm:py-2 rounded-full hover:bg-black hover:text-white transition duration-300 cursor-pointer text-sm sm:text-md">
              <FaPhone size={32} className="rotate-90 border py-1 rounded-full" />
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
