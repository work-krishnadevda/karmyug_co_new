import { Check } from "lucide-react";

/** Small "row" used for problem/solution and benefit lists across product pages. */
export default function ModuleCard({ text, tone = "neutral" }) {
  const dot =
    tone === "positive" ? "bg-success" : tone === "warning" ? "bg-brand-accent" : "bg-brand-primary";

  return (
    <li className="flex items-start gap-3 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text">
      <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${dot}`}>
        <Check size={10} className="text-white" aria-hidden="true" />
      </span>
      {text}
    </li>
  );
}
