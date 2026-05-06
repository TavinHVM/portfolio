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
      "Architected and scaled a high-performance n8n infrastructure processing 1.3M+ workflow executions/month, ensuring sub-second latency across HubSpot, Calendly, Zoom, Slack, and ClickUp.",
      "Deployed custom AI agents with advanced RAG pipelines, vectorization strategies, and fine-tuned models — reducing manual ticket resolution time by 40% and acting as a force multiplier for the support team.",
      "Automated revenue recovery workflows that cut involuntary churn by 15%, maintaining 99.9% data integrity across 5,000+ active monthly subscribers.",
      "Built end-to-end integrations using Python, n8n, and Zapier across 8+ platforms; delivered scalable React-based frontend enhancements following Agile methodologies.",
      "Led operational tooling with a reliability-first approach, enforcing security, observability, and scalability standards across the entire automation stack.",
    ],
  },
  {
    company: "R3 Suprimentos",
    role: "n8n Developer & Software Developer",
    period: "May 2025 — Oct 2025",
    bullets: [
      "Engineered a data synchronization platform managing 1M+ daily user interactions across AWS, GCP, and Kubernetes — reducing cross-platform latency by 35% and streamlining supply chain logistics.",
      "Built and deployed scalable n8n workflows that automated 20+ hours of weekly manual data entry across operations, collaborating with cross-functional teams throughout.",
      "Delivered JavaScript/TypeScript solutions with LLM integration, creating a unified automation layer capable of handling heterogeneous databases and high-volume throughput with robust error handling.",
      "Applied Data Science techniques to extract actionable insights and configured HubSpot CRM workflows with API authentication and CI/CD pipelines to improve system performance at scale.",
    ],
  },
  {
    company: "Nebula Payments",
    role: "Python & n8n Automation Developer",
    period: "2023 — 2025",
    bullets: [
      "Processed $2M+ in annualized transaction volume with near-zero error rates, automating 90% of routine transaction reconciliations via Python-driven error-handling pipelines.",
      "Designed multi-agent systems for intelligent scheduling and asynchronous follow-up management, with deep WhatsApp integration enabling real-time automated communication flows.",
      "Built two-way RESTful API integrations across heterogeneous databases, establishing the foundational digital infrastructure for the company's payment operations.",
      "Managed microservices deployment via Portainer, maintaining 98% uptime for internal automation tools and implementing reactive + proactive alerting systems with granular observability.",
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
