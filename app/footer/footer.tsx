import { useFadeIn } from "~/use-fade-in";
import { SITE, FOOTER } from "~/constants";

export function Footer() {
  const { ref, style } = useFadeIn();

  return (
    <footer className="bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-neutral-800 px-6 transition-colors duration-300">
      <div ref={ref} className={`max-w-4xl mx-auto py-12 flex flex-col md:flex-row md:gap-32 gap-12 ${style}`}>
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
            {FOOTER.heading}
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
            {FOOTER.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs text-gray-500 dark:text-neutral-500 tracking-widest uppercase font-mono">
            Socials
          </h3>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-neutral-400 hover:text-[#38bdf8] transition-colors duration-200 font-mono"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.93 5.36a3 3 0 0 1-3.14 0L1.5 8.67Z"/><path d="M22.5 6.91V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.16l9.71 5.83a1.5 1.5 0 0 0 1.58 0l9.71-5.83Z"/></svg>
            Email
          </a>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-neutral-400 hover:text-[#38bdf8] transition-colors duration-200 font-mono"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.33-1.76c-1.09-.74.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.56 2.56 0 0 0 3.5 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.38 11.38 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23a4.3 4.3 0 0 1 .12 3.18 4.64 4.64 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/></svg>
            GitHub
          </a>
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-neutral-400 hover:text-[#38bdf8] transition-colors duration-200 font-mono"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.46A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.23 0Z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto border-t border-gray-200 dark:border-neutral-800 py-6">
        <p className="text-xs text-gray-400 dark:text-neutral-600 font-mono">
          &copy; {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
