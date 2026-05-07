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
    role: "Software Engineer | AI Automation Lead",
    period: "Oct 2025 — Present",
    bullets: [
      "Architected and scaled a high-performance n8n infrastructure processing 1.3M+ peak monthly workflow executions, maintaining sub-second latency across HubSpot, Calendly, and Zoom.",
      "Deployed custom AI agents with RAG pipelines, reducing manual ticket resolution time by 30%–40% and acting as a force multiplier for the support team.",
      "Automated revenue recovery workflows that cut involuntary churn by 15%, maintaining 95% data integrity across 5,000+ active monthly subscribers.",
      "Built end-to-end integrations using Python, n8n, and Zapier across 8+ platforms; delivered scalable frontend enhancements following Agile sprint cycles.",
      "Led operational tooling development with a reliability-first approach, enforcing security standards across the full automation stack.",
    ],
  },
  {
    company: "R3 Suprimentos",
    role: "n8n Developer & Software Developer",
    period: "May 2025 — Oct 2025",
    bullets: [
      "Engineered a data synchronization platform managing 100k+ daily user events across AWS and GCP — reducing cross-platform latency by 35% and streamlining supply chain logistics.",
      "Built and deployed scalable n8n workflows that automated 20+ hours of weekly manual data entry, collaborating with cross-functional teams throughout.",
      "Delivered JavaScript/TypeScript solutions with LLM integration, creating a unified automation layer for heterogeneous databases with robust error handling and high-volume throughput.",
      "Configured HubSpot CRM workflows with API authentication and CI/CD pipelines; applied Data Science techniques to drive measurable system performance improvements.",
    ],
  },
  {
    company: "Nebula Payments",
    role: "Python & n8n Automation Developer",
    period: "2024 — 2025",
    bullets: [
      "Processed $1.5M+ in annualized transaction volume with near-zero error rates, automating 90% of routine reconciliations via Python-driven error-handling pipelines.",
      "Designed multi-agent systems for intelligent scheduling and asynchronous follow-up management, with deep WhatsApp integration enabling real-time automated communication flows.",
      "Built two-way RESTful API integrations across heterogeneous databases, establishing the foundational digital infrastructure for core payment operations.",
      "Managed microservices deployment via Portainer, maintaining 98% uptime for internal tools and implementing reactive + proactive alerting systems with granular observability.",
    ],
  },
  {
    company: "SigaTech Soluções",
    role: "Automation Engineer | n8n & Python Developer",
    period: "2023 — 2024",
    bullets: [
      "Spearheaded the digital transformation of legacy databases, migrating 15+ manual processes to n8n workflows and increasing team throughput by 25%.",
      "Implemented a centralized error-logging system that cut debugging time by 50%; standardized workflow libraries adopted by 4 team members, reducing onboarding time for new automation tasks by 2 weeks.",
      "Developed custom Node.js scripts to bridge edge cases between internal ERPs and external marketplaces, ensuring data consistency across heterogeneous environments.",
    ],
  },
];

const highlightMetrics = (text: string) => {
  const highlighted = text.replace(
    /(\$[\d,.]+[MKB+]*|\d+[\d,.]*[MKB%+]+\+?|\d+\+?\s?(hours?|platforms?|subscribers?|tools?))/gi,
    '<strong class="text-white font-semibold">$1</strong>'
  );
  return { __html: highlighted };
};

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
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-indigo-400 font-medium">{exp.company}</p>
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
                    <span dangerouslySetInnerHTML={highlightMetrics(bullet)} />
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
