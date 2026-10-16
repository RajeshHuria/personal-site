interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
}

const projects: Project[] = [
  {
    id: "mcp-teamviewer",
    title: "TeamViewer MCP Server",
    description: "Model Context Protocol server exposing TeamViewer Web API as tools for Claude. Enables programmatic device management and session control.",
    tags: ["Python", "FastAPI", "MCP", "APIs"],
    year: 2024,
  },
  {
    id: "personal-site",
    title: "Personal Portfolio Site",
    description: "Full-stack portfolio with blog integration, dark mode, and optimized performance. Built with Next.js and TypeScript.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    year: 2024,
  },
  {
    id: "release-automation",
    title: "Release Automation Framework",
    description: "Internal framework for coordinating multi-team releases at TeamViewer. Handles versioning, testing, and deployment orchestration.",
    tags: ["Python", "CI/CD", "DevOps"],
    year: 2023,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-16">Selected Projects</h2>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-b border-gray-200 dark:border-gray-800 pb-8 md:pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">{project.year}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
