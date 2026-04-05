import { useFadeIn } from "~/use-fade-in";
import { SKILL_CATEGORIES } from "~/constants";

export function Skills() {
  const { ref, style } = useFadeIn();

  return (
    <section id="skills" className="bg-gray-50 dark:bg-[#0a0a0a] py-24 px-6 transition-colors duration-300">
      <div ref={ref} className={`max-w-4xl mx-auto ${style}`}>
        <h2 className="text-sm text-gray-500 dark:text-neutral-500 tracking-widest uppercase font-mono mb-12">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-xs text-[#0284c7] dark:text-[#38bdf8] font-mono uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-gray-700 dark:text-neutral-300 bg-gray-100 dark:bg-neutral-800/60 border border-gray-200 dark:border-neutral-700/50 rounded-md px-3 py-1 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
