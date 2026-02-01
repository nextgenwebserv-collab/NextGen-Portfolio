export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            DEVELOP<span className="text-green-400">.ME</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Building modern, fast & scalable digital experiences for startups and businesses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>UI / UX Design</li>
            <li>Mobile Apps</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-green-400 cursor-pointer">
              🐦
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-green-400 cursor-pointer">
              💼
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-green-400 cursor-pointer">
              📷
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-14 py-6 text-center text-sm">
        © {new Date().getFullYear()} Develop.me — All rights reserved.
      </div>
    </footer>
  );
}
