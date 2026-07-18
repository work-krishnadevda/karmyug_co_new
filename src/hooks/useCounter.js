import { useEffect, useRef, useState } from "react";

export function useCounter(
  target,
  { duration = 1400, startOnView = true } = {},
) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const numericTarget =
      parseFloat(String(target).replace(/[^0-9.]/g, "")) || 0;

    const animate = () => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(numericTarget * eased);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!startOnView) {
      animate();
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && animate()),
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return [value, ref];
}
