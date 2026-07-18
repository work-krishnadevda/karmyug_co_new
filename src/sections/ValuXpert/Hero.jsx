import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import CTAButton from "@/components/Shared/CTAButton";
import { TrendingUp, FileCheck2 } from "lucide-react";

/**
 * ValuXpert-specific hero. Leads with a mini analytics chart instead of a
 * status list — the product's identity is "turn inspections into insight",
 * so the hero visual should already look like a report, not a checklist.
 */
export default function ValuXpertHero({ product }) {
  const bars = [42, 58, 51, 70, 64, 82, 91];

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute -top-24 right-0 h-[380px] w-[380px] rounded-full bg-[color-mix(in_srgb,var(--brand-light-blue)_28%,transparent)] blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-16 left-0 h-[320px] w-[320px] rounded-full bg-[color-mix(in_srgb,var(--brand-primary)_15%,transparent)] blur-[140px]" />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-brand-primary/15 bg-brand-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
            {product.tagline}
          </span>
          <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
            {product.heroTitle}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-text-secondary sm:text-lg">
            {product.heroDescription}
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
  {/* Primary + Secondary */}
  <div className="flex flex-col gap-3 sm:flex-row">
    <CTAButton
      to="/contact?intent=schedule"
      variant="primary"
      size="lg"
      className="cursor-pointer min-w-[180px]"
    >
      Book a Demo
    </CTAButton>

    <CTAButton
      href={product.liveUrl}
      variant="outline"
      size="lg"
      className="cursor-pointer min-w-[180px]"
    >
      Visit Live Product
    </CTAButton>
  </div>

  {/* Tertiary CTA */}
  <CTAButton
    to="/products"
    variant="ghost"
    size="sm"
    icon={false}
    className="cursor-pointer !px-0 font-semibold text-brand-primary hover:translate-x-1 transition-transform"
  >
    Compare all products →
  </CTAButton>
</div>
        </motion.div>

        {/* Mini analytics report card, replacing the static screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl border border-brand-border bg-white p-6 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.25)] sm:p-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-text">
                Portfolio Valuation Trend
              </p>
              <p className="text-xs text-brand-text-secondary">
                Last 7 engagements
              </p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--brand-success)_12%,white)] px-2.5 py-1 text-xs font-semibold text-[--brand-success]">
              <TrendingUp size={12} />
              +18%
            </span>
          </div>

          <div className="mt-8 flex items-end gap-2.5 h-32">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-[var(--brand-primary)] to-[var(--brand-light-blue)]"
              />
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-2xl bg-brand-primary/5 px-4 py-3 text-xs font-medium text-brand-primary">
            <FileCheck2 size={14} />
            Every figure traceable to a signed-off field inspection
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
