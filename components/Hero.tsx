import Image from "next/image";
export default function Hero() {
  return (
    <section id="home" className="w-full bg-[#b8d6f4] py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Content */}
        <div className="md:col-span-8 space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight uppercase">
            JULIET PRINCESS | FRONTEND DEVELOPER
          </h1>
          
          <p className="text-[11px] sm:text-xs font-semibold text-[#4b5563] tracking-wide uppercase max-w-lg leading-relaxed">
            BUILDING RESPONSIVE, ACCESSIBLE AND PERFORMANCE-DRIVEN WEB APPLICATIONS.
          </p>

          <div className="pt-1">
            <a
              href="#projects"
              className="inline-block bg-[#1a4b56] hover:bg-[#133942] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded shadow-sm transition-colors"
            >
              VIEW PROJECTS
            </a>
          </div>
        </div>

        {/* Right Headshot / Photo */}
<div className="md:col-span-4 flex justify-center md:justify-end">
  <div className="relative w-44 h-48 sm:w-48 sm:h-52 rounded-full overflow-hidden border border-slate-300 shadow-sm bg-slate-200">
    <Image
      src="/profile2.jpg"
      alt="Profile Headshot"
      fill
      className="object-cover object-top"
      priority
    />
  </div>
</div>

      </div>
    </section>
  );
}