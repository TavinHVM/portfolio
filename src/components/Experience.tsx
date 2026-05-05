"use client";

import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    company: "Tillit Brasil",
    role: "Software Engineer | AI Automation",
    period: "Oct 2025 — Present",
    bullets: [
      "Designing intelligent AI-powered automations with custom agents, advanced RAG pipelines, vectorization strategies, and fine-tuned models.",
      "Architecting and scaling a high-performance n8n infrastructure handling over 1.3 million workflow executions monthly.",
      "Building end-to-end integrations across n8n, Python, and Zapier — connecting HubSpot, Calendly, Zoom, Slack, ClickUp, and more.",
      "Leading automation pipelines and operational tooling with focus on reliability, security, and scalability.",
      "Supporting React-based frontend development integrated with automation layers.",
    ],
  },
  {
    company: "R3 Suprimentos",
    role: "n8n Developer & Software Developer",
    period: "May 2025 — Oct 2025",
    bullets: [
      "Building n8n automations with deep integration across AWS, GCP, Kubernetes, and Portainer.",
      "Applying Data Science techniques to extract actionable insights and improve system performance.",
      "Configuring HubSpot CRM workflows and handling API authentication and CI/CD pipelines.",
      "Delivering JavaScript/TypeScript solutions with LLM integration for AI-driven automation.",
    ],
  },
  {
    company: "Nebula Payments",
    role: "Python & n8n Automation Developer",
    period: "2023 — 2025",
    bullets: [
      "Designing multi-agent systems for intelligent scheduling and asynchronous follow-up management.",
      "Deep WhatsApp integration enabling real-time automated communication flows.",
      "Building two-way integrations across heterogeneous databases using RESTful API patterns.",
      "Implementing error-handling layers with reactive and proactive strategies and granular alerting systems.",
    ],
  },
];

export function Experience() {
  const ref = useFadeInOnScroll({ threshold: 0.2 });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-6 max-w-6xl mx-auto fade-in-section"
    >
      <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-indigo-500"
          >
            <div className="absolute -left-3.5 top-0 w-3 h-3 rounded-full bg-indigo-500" />

            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <p className="text-indigo-400 font-medium">{exp.role}</p>
                <p className="text-sm text-zinc-400 font-mono pt-1">
                  {exp.period}
                </p>
              </div>

              <ul className="space-y-2 pt-4">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex gap-3 text-zinc-300 leading-relaxed"
                  >
                    <span className="text-indigo-400 font-semibold mt-1">
                      ·
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
