function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="text-2xl font-bold tracking-[0.3em] text-cyan-400">
          NODEVAULT
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#systems" className="hover:text-cyan-400 transition">Systems</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;