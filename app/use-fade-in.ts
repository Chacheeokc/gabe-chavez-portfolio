import { useEffect, useRef, useState } from "react";

export function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style =
    "transition-all duration-700 ease-out " +
    (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6");

  return { ref, style };
}
