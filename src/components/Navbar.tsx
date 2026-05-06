"use client";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Tech Stack", href: "tech-stack" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/50 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={handleScrollToTop}
          className="text-2xl font-bold text-indigo-500 hover:text-indigo-400 transition-colors cursor-pointer"
        >
          Gustavo.
        </button>

        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
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
