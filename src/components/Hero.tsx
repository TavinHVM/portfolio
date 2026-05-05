"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const roles = ["AI Automation Developer", "n8n Specialist", "Software Engineer"];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole.length < role.length) {
        setDisplayedRole(role.slice(0, displayedRole.length + 1));
      } else if (isDeleting && displayedRole.length > 0) {
        setDisplayedRole(displayedRole.slice(0, -1));
      } else if (!isDeleting && displayedRole.length === role.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole.length === 0) {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, currentRole]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center max-w-2xl">
        <p className="text-indigo-400 text-lg mb-4 font-mono">Welcome to my portfolio</p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I&apos;m <span className="text-indigo-500">Gustavo Martins</span>
        </h1>

        <div className="h-16 mb-8">
          <p className="text-2xl md:text-3xl text-zinc-300 font-mono">
            {displayedRole}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          I specialize in building intelligent automation solutions that streamline workflows and enhance productivity. With a passion for AI and a knack for problem-solving, I create tools that make complex tasks simple and efficient.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#specialties"
            className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 duration-300"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 rounded-lg font-semibold transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
