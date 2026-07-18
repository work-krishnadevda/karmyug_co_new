import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TestimonialCard({ testimonial, className }) {
  const { name, role, company, logo, quote, rating } = testimonial;

  return (
    <article
      className={cn(
        "flex h-full flex-col justify-between rounded-2xl border border-brand-border bg-white p-6 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.15)] sm:p-8",
        className
      )}
    >
      <div>
        <Quote className="h-8 w-8 text-brand-accent" aria-hidden="true" />
        <p className="mt-4 text-base leading-relaxed text-brand-text sm:text-lg">
          “{quote}”
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              loading="lazy"
              className="h-9 w-9 rounded-lg object-contain"
            />
          )}
          <div>
            <p className="text-sm font-semibold text-brand-text">{name}</p>
            <p className="text-xs text-brand-text-secondary">
              {role}, {company}
            </p>
          </div>
        </div>

        <div className="flex" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className={index < rating ? "fill-brand-accent text-brand-accent" : "text-brand-border"}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </article>
  );
}
