import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useCarousel from "@/hooks/useCarousel";
import TestimonialCard from "./TestimonialCard";

/**
 * Auto-advancing testimonial carousel (pauses on hover/focus).
 * Reuses the existing useCarousel hook for index + autoplay logic.
 */
export default function TestimonialSlider({ testimonials }) {
  const { active, next, previous, setPaused } = useCarousel(
    testimonials.length,
  );
  const current = testimonials[active];

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="min-h-[280px] sm:min-h-[240px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <TestimonialCard testimonial={current} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={previous}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-brand-border bg-white text-brand-text transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          className="flex gap-2"
          role="tablist"
          aria-label="Select testimonial"
        >
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={index === active}
              aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
              onClick={() => setPaused(false)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                index === active
                  ? "w-6 bg-brand-primary"
                  : "w-2 bg-brand-border"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center cursor-pointer justify-center rounded-full border border-brand-border bg-white text-brand-text transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
