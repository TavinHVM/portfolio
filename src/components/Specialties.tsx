"use client";

import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { Zap, Brain, Code2, Cloud } from "lucide-react";

interface Specialty {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const specialties: Specialty[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "n8n & Automation",
    description: "Expert-level workflow orchestration, CRM integrations, and enterprise automation systems handling 1.3M+ executions monthly.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI & LLM Integration",
    description: "OpenAI/Anthropic APIs, LangChain, RAG pipelines, vector databases, and fine-tuned models integrated into real products.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Full-Stack Development",
    description: "Python, TypeScript, Node.js, and React — building the layers that connect automation to users.",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud & Infrastructure",
    description: "AWS, GCP, Kubernetes, Portainer, and CI/CD pipelines for scalable and reliable deployments.",
  },
];

export function Specialties() {
  const ref = useFadeInOnScroll({ threshold: 0.2 });

  return (
    <section
      id="specialties"
      ref={ref}
      className="py-20 px-6 max-w-6xl mx-auto fade-in-section"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-2xl bg-zinc-900/50 p-6 hover:border-indigo-500/40 hover:bg-zinc-900 transition-all duration-300"
          >
            <div className="text-indigo-400">
              {specialty.icon}
            </div>
            <h3 className="text-white font-semibold mt-3 mb-2">
              {specialty.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {specialty.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
