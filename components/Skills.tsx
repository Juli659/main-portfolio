export default function Skills() {
  const technicalSkills = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  const toolsAndFrameworks = [
    "Git / GitHub",
    "Figma",
    "VS Code",
    "REST APIs",
    "Supabase",
  ];

  return (
    <section id="skills" className="w-full bg-[#f4f6f8] py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#111827] mb-8">
          SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Technical Skills Category */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-800">
              TECHNICAL
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#1a4b56] hover:bg-[#133942] text-white text-[10px] sm:text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wide shadow-sm transform hover:-translate-y-0.5 hover:scale-105 hover:shadow-md transition-all duration-200 ease-out cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks Category */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-800">
              TOOLS & FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-2">
              {toolsAndFrameworks.map((tool, index) => (
                <span
                  key={index}
                  className="bg-[#1a4b56] hover:bg-[#133942] text-white text-[10px] sm:text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wide shadow-sm transform hover:-translate-y-0.5 hover:scale-105 hover:shadow-md transition-all duration-200 ease-out cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}