"use client";

import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

interface TechCategory {
  category: string;
  techs: string[];
}

const techCategories: TechCategory[] = [
  {
    category: "AI & LLMs",
    techs: ["OpenAI API", "Anthropic API", "RAG Pipelines", "LangChain", "Fine-tuning", "Vector Databases"],
  },
  {
    category: "Automation",
    techs: ["n8n", "Zapier", "HubSpot", "WhatsApp API", "REST APIs", "Webhooks"],
  },
  {
    category: "Cloud & Infra",
    techs: ["AWS", "GCP", "Kubernetes", "Portainer", "Docker", "CI/CD"],
  },
  {
    category: "Languages & Frameworks",
    techs: ["Python", "TypeScript", "JavaScript", "Node.js", "React", "Next.js"],
  },
];

export function TechStack() {
  const ref = useFadeInOnScroll({ threshold: 0.2 });

  return (
    <section
      id="tech-stack"
      ref={ref}
      className="py-20 px-6 max-w-6xl mx-auto fade-in-section"
    >
      <h2 className="text-4xl font-bold text-white mb-12">Technologies I work with</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {techCategories.map((category) => (
          <div key={category.category}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-mono uppercase text-indigo-400">
                {category.category}
              </span>
              <div className="flex-1 border-b border-indigo-500/30" />
            </div>

            <div className="flex flex-wrap gap-3">
              {category.techs.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-sm text-zinc-300 font-mono hover:border-indigo-500/50 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
