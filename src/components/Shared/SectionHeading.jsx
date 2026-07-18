import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Consistent eyebrow + headline + supporting copy block used to open every
 * section on the site. `align` controls left vs centered storytelling blocks.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  as: HeadingTag = "h2",
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("flex flex-col gap-4", alignment, className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-brand-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
          {eyebrow}
        </span>
      )}
      <HeadingTag
        className={cn(
          "font-heading text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl",
          titleClassName
        )}
      >
        {title}
      </HeadingTag>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-brand-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
