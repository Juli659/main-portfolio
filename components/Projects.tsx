export default function Projects() {
  const projects = [
  {
    title: "E-COMMERCE WEBSITE",
    category: "WEB DEVELOPMENT",
    description: "A responsive e-commerce storefront featuring dynamic product filtering, interactive shopping cart state management, and a clean, conversion-focused checkout flow.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://e-commerce-ui-git-main-julie2.vercel.app/",
  },
  {
    title: "SKYFLOW — FLIGHT BOOKING WEB APPLICATION",
    category: "WEB DEVELOPMENT",
    description: "A sleek, responsive flight search and booking web application built for speed and clarity, featuring real-time route filtering, fare comparisons, and intuitive seat selection.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://skyflow-6gjz-fzjhtv0fe-julie2.vercel.app/" ,
  },
  {
    title: "LOCALPRO HUB — SERVICE MARKETPLACE WEBSITE",
    category: "WEB DEVELOPMENT",
    description: "A modern local service marketplace for discovering, filtering, and booking vetted professionals, complete with dynamic tier pricing estimates and instant e-receipts.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://localpro-hub.vercel.app/",
  },
];

  return (
    <section id="projects" className="w-full bg-[#f4f6f8] py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#111827] mb-8">
          FEATURED PROJECTS
        </h2>

        {/* 3-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded overflow-hidden shadow-sm flex flex-col justify-between p-5 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Image Placeholder Box */}
                <div className="w-full h-36 bg-slate-200 border border-slate-300 rounded flex items-center justify-center text-slate-500 text-xs font-semibold">
                  [ Project Preview ]
                </div>

                {/* Category & Title */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block">
                    {project.category}
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900 mt-0.5">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills & Action Link */}
              <div className="pt-4 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block text-[11px] font-bold uppercase text-[#1a4b56] hover:text-[#133942] tracking-wider pt-1 transition-colors"
                >
                  VIEW DETAILS &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}