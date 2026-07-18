import { cn } from "@/lib/utils";

export default function FeatureCard({ icon: Icon, title, desc, className }) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-brand-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(46,90,167,0.25)]",
        className
      )}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
        <Icon size={20} aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-heading text-base font-bold text-brand-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{desc}</p>
    </div>
  );
}
