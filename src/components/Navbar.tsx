import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech-stack" },
  // { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/50 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#hero"
          className="text-2xl font-bold text-indigo-500"
        >
          Gustavo.
        </Link>

        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
