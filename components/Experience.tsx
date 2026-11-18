export default function Experience() {
  const experiences = [
    {
      role: "Role / Company",
      type: "App / Web Developer",
      points: [
        "Led front-end development initiatives, modernizing component architectures and UI/UX flows.",
        "Collaborated across design and technical teams to build scalable, responsive web platforms.",
        "Optimized web application performance, accessibility metrics, and cross-browser consistency.",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full bg-white py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#111827] mb-6">
          PROFESSIONAL EXPERIENCE
        </h2>

        {/* Experience Content */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-1.5">
              
              {/* Role & Category Subheading */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                  {exp.role}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a4b56] block mt-0.5">
                  {exp.type}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc list-inside space-y-1.5 text-[11px] sm:text-xs text-slate-600 leading-relaxed pt-1">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="marker:text-[#1a4b56]">
                    {point}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}