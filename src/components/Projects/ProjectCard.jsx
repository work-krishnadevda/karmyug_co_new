import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Premium portfolio card: screenshot-led, minimal copy, badge chips and a
 * single clear call to action. Mirrors the visual language of
 * ProductsShowcase (rounded-[28px], brand-border, soft lift on hover).
 */
function ProjectCard({ project, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const { name, category, description, image, imageAlt, features, impact, url } =
    project;

  return (
    <motion.a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Visit the live ${name} website`}
  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{
    duration: 0.5,
    delay: index * 0.1,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[--brand-border] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-20px_rgba(15,23,42,0.22)] hover:border-[color-mix(in_srgb,var(--brand-primary)_35%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-primary] focus-visible:ring-offset-2"
>
      {/* Screenshot — hero element of the card */}
      <figure className="relative m-0 aspect-[16/10] w-full overflow-hidden bg-[--brand-bg]">
        <span className="absolute top-4 left-4 z-10 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[--brand-primary] border border-[--brand-border]">
          {category}
        </span>

        <span className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-[--brand-primary] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight size={18} aria-hidden="true" />
        </span>

        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle bottom fade so the image edge reads cleanly against the card body */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/70 to-transparent"
        />
      </figure>

      {/* Copy */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold text-[--brand-text]">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[--brand-text-secondary] line-clamp-2">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${name} highlights`}>
          {features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-[--brand-border] bg-[--brand-bg] px-3 py-1 text-[11px] font-medium text-[--brand-text-secondary]"
            >
              {feature}
            </li>
          ))}
        </ul>

        {impact && (
          <p className="mt-4 border-l-2 border-[color-mix(in_srgb,var(--brand-primary)_35%,transparent)] pl-3 text-xs leading-relaxed text-[--brand-text-secondary]">
            {impact}
          </p>
        )}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit the live ${name} website (opens in a new tab)`}
          className="group/btn mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[--brand-primary] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[--brand-primary-dark] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-primary] focus-visible:ring-offset-2"
        >
          Visit Website
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.a>
  );
}

export default memo(ProjectCard);
