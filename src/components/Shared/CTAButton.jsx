import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-brand-primary text-white shadow-[0_10px_25px_rgba(46,90,167,0.25)] hover:bg-brand-primary-dark",
  accent:
    "bg-brand-accent text-brand-text shadow-[0_10px_25px_rgba(255,166,43,0.25)] hover:brightness-95",
  outline:
    "border border-brand-border bg-white text-brand-text hover:border-brand-primary hover:text-brand-primary",
  ghost: "text-brand-primary hover:bg-brand-primary/5",
};

const SIZES = {
  default: "px-6 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
  sm: "px-4 py-2 text-sm",
};

/**
 * Single button primitive for every CTA on the site (nav, hero, footer, forms).
 * Renders a react-router <Link> for internal paths, a plain <a> for external
 * links/mailto/tel, or a <button> when only onClick is supplied — so it never
 * produces a dead link.
 */
export default function CTAButton({
  to,
  href,
  onClick,
  variant = "primary",
  size = "default",
  icon = true,
  className,
  children,
  type = "button",
  ...props
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={18}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  const motionProps = { whileTap: { scale: 0.97 } };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
          {...props}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}
