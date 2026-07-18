import { useCounter } from "@/hooks/useCounter";

/**
 * Reveal-on-scroll number counter, e.g. "500+", "98%", "12x".
 * Reuses the existing useCounter hook — parses digits from `target`,
 * keeps any suffix (+, %, x, k) exactly as authored in the data.
 */
export default function AnimatedCounter({ target, duration = 1400, className }) {
  const [value, ref] = useCounter(target, { duration });
  const suffix = String(target).replace(/[0-9.,]/g, "");
  const decimals = String(target).includes(".") ? 1 : 0;

  return (
    <span ref={ref} className={className}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
