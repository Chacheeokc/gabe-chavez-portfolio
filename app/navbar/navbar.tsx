import { useState } from "react";
import { ThemeToggle } from "~/theme-toggle";
import { SITE, NAV_LINKS } from "~/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#about"
          className="text-sm font-semibold text-gray-900 dark:text-white tracking-tight font-mono"
        >
          {SITE.initials}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-500 dark:text-neutral-400 hover:text-[#38bdf8] transition-colors duration-200 font-mono"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={SITE.resumePath}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-500 dark:text-neutral-400 hover:text-[#38bdf8] transition-colors duration-200 font-mono"
            >
              Resume
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile buttons */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-neutral-400 hover:text-[#38bdf8] transition-colors duration-200"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md px-6 pb-4 pt-2">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-500 dark:text-neutral-400 hover:text-[#38bdf8] transition-colors duration-200 font-mono"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={SITE.resumePath}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="text-sm text-gray-500 dark:text-neutral-400 hover:text-[#38bdf8] transition-colors duration-200 font-mono"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
