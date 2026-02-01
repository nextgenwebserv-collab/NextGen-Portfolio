export default function Navbar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-lg tracking-wide">
          <img src="/src/assets/Logo.png" alt="Logo" className="h-10 w-36" />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-md font-medium">
          <a href="#" className="hover:text-gray-500">
            Home
          </a>
          <a href="#" className="hover:text-gray-500">
            About
          </a>
          <a href="#" className="hover:text-gray-500">
            Portfolio
          </a>
        </nav>

        {/* CTA Button */}
        <button className="flex items-center gap-2 border border-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
          Start Project
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-black">
            →
          </span>
        </button>
      </div>
    </header>
  );
}
