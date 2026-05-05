"use client";

import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

export function About() {
  const ref = useFadeInOnScroll({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-6 max-w-6xl mx-auto fade-in-section"
    >
      <h2 className="text-4xl font-bold text-white mb-12">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-zinc-300 leading-relaxed text-lg">
            I&apos;m a Software Engineer focused on Artificial Intelligence, with over 3 years of experience building LLM-powered solutions and intelligent automation pipelines. I&apos;ve been following AI&apos;s evolution since GPT-3 and have a genuine passion for making complex systems work seamlessly behind the scenes.
          </p>

          <p className="text-zinc-300 leading-relaxed text-lg">
            I work primarily with conversational AI, RAG architectures, and end-to-end workflow automation using tools like n8n and Python. From integrating language models into enterprise applications to running infrastructure that handles over 1.3 million workflow executions monthly — I care about building things that are reliable, scalable, and actually useful.
          </p>

          <div className="pt-4">
            <p className="text-sm text-zinc-500 font-mono mb-2">Current focus:</p>
            <p className="text-zinc-300">
              AI Automation Engineering at Tillit Brasil — designing intelligent agents, advanced RAG pipelines, and high-performance n8n infrastructure.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full aspect-square bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 rounded-2xl border border-zinc-700 flex items-center justify-center">
            <div className="text-center">
              <img src="/profile-photo.png" alt="Profile" width={640} height={640} className="w-full h-full rounded-2xl mx-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 mt-10 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-400">3+</p>
            <p className="text-sm text-zinc-400 mt-1">Years with n8n</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-400">1.3M+</p>
            <p className="text-sm text-zinc-400 mt-1">Monthly Workflow executions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-400">1M+</p>
            <p className="text-sm text-zinc-400 mt-1">Users served</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-400">EN / PT / ES</p>
            <p className="text-sm text-zinc-400 mt-1">Languages</p>
          </div>
        </div>
      </div>
    </section>
  );
}
