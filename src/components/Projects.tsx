"use client";

import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { Code, Share2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment integration, and advanced search functionality.",
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and comprehensive analytics dashboard.",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  const ref = useFadeInOnScroll({ threshold: 0.2 });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-6 max-w-6xl mx-auto fade-in-section"
    >
      <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
      <p className="text-zinc-400 mb-12">
        A selection of projects I&apos;ve worked on that showcase my skills and passion
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-indigo-400/50 transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900/50 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-zinc-400 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-zinc-700 text-zinc-400 hover:text-white hover:border-indigo-400 rounded transition-colors"
              >
                <Code size={16} />
                <span className="text-sm">Code</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-zinc-700 text-zinc-400 hover:text-white hover:border-emerald-400 rounded transition-colors"
              >
                <Share2 size={16} />
                <span className="text-sm">Live</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}