export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-center">
        <nav className="flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-slate-700">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative py-1 hover:text-teal-700 transition-colors group"
            >
              {link.name}
              {/* Smooth Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-700 transition-all
               duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}