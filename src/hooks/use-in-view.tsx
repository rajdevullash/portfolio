import { useEffect, useRef, useState } from "react";

/**
 * useInView hook
 * @param options IntersectionObserverInit options (threshold, root, rootMargin)
 * @param config Additional config: once (if true observer unobserves after first intersect)
 */
export function useInView<T extends Element = HTMLElement>(
  options?: IntersectionObserverInit,
  config?: { once?: boolean }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observerOptions: IntersectionObserverInit = { threshold: 0.15, ...(options || {}) };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (config?.once) {
            observer.unobserve(entry.target);
          }
        } else {
          // if once is true we keep the visible state; otherwise toggle off when leaving viewport
          if (!config?.once) setInView(false);
        }
      });
    }, observerOptions);

    observer.observe(node);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, JSON.stringify(options), String(config?.once)]);

  return { ref, inView } as const;
}

export default useInView;
