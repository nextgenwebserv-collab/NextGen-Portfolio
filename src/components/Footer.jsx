import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* Brand */}
        <div>
          <img src="/Logo2.png" alt="Logo" className="mb-5 w-44" />
          <p className="text-sm leading-relaxed">
            Building high-performance digital experiences for modern brands. NextGen is your trusted
            partner for strategy, design, and development.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>UI / UX Design</li>
            <li>Mobile Apps</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="mb-4 flex items-center gap-2">
            <FaPhone size={18} className="rotate-90 " />
            <a href="tel:9304729992" className="text-sm hover:text-white">
              (+91) 9304729992,
            </a>
            <a href="tel:8340593996" className="text-sm hover:text-white">
              8340593996
            </a>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <FaEnvelope size={20} />
            <a href="mailto:nextgenwebservices@gmail.com" className="text-sm hover:text-white">
              nextgenwebservices@gmail.com
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/nextgen_webservices/" target="_blank">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="mb-4">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-14 py-6 text-center text-sm">
        © {new Date().getFullYear()} NextGen — All rights reserved.
      </div>
    </footer>
  );
}
