"use client";

import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

interface ContactLink {
  label: string;
  sublabel?: string;
  href: string;
  icon: React.ReactNode;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    sublabel: "gustavohv.dev@gmail.com",
    href: "mailto:gustavohv.dev@gmail.com",
    icon: <Mail size={20} />,
  },
  {
    label: "GitHub",
    sublabel: "/TavinHVM",
    href: "https://github.com/TavinHVM",
    icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
  },
  {
    label: "LinkedIn",
    sublabel: "/gustavohvdev",
    href: "https://www.linkedin.com/in/gustavohvdev/",
    icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
  },
  {
    label: "WhatsApp",
    sublabel: "+55 62 99530-1725",
    href: "https://wa.me/5562995301725",
    icon: <FontAwesomeIcon icon={faWhatsapp} size="lg" />,
  }
];

export function Contact() {
  const ref = useFadeInOnScroll({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-6 max-w-3xl mx-auto fade-in-section mb-40"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s work together</h2>
        <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
          I&apos;m always interested in hearing about new projects and opportunities. Feel
          free to reach out if you&apos;d like to collaborate or just have a chat.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 w-72 h-20 border border-zinc-700 text-zinc-300 hover:text-white hover:border-indigo-400 rounded-lg transition-all duration-300 hover:scale-105 flex-nowrap"
            >
              <div className="flex-shrink-0">
                {link.icon}
              </div>
              <div className="flex flex-col items-start flex-1 min-w-0">
                <span className="font-medium whitespace-nowrap text-sm">{link.label}</span>
                {link.sublabel && (
                  <span className="text-xs text-zinc-400 whitespace-nowrap truncate">{link.sublabel}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
