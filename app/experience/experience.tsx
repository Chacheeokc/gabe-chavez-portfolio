import { useFadeIn } from "~/use-fade-in";
import { EXPERIENCES } from "~/constants";

export function Experience() {
  const { ref, style } = useFadeIn();

  return (
    <section id="experience" className="bg-gray-50 dark:bg-[#0a0a0a] py-24 px-6 transition-colors duration-300">
      <div ref={ref} className={`max-w-4xl mx-auto ${style}`}>
        <h2 className="text-sm text-gray-500 dark:text-neutral-500 tracking-widest uppercase font-mono mb-12">
          Experience
        </h2>

        <div className="flex flex-col gap-14">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company + exp.role} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[#0284c7] dark:text-[#38bdf8] font-mono">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-neutral-500 font-mono shrink-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed pl-4 border-l border-gray-200 dark:border-neutral-800"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
