import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import CTAButton from "@/components/Shared/CTAButton";
import { Users, Clock, Wallet, CheckCircle2 } from "lucide-react";

/**
 * HRMS-specific hero. Distinct from ValuXpert/Quixivo heroes: leads with a
 * live-feeling attendance/payroll status card instead of a static screenshot,
 * to make "workforce operations, running right now" the first impression.
 */
export default function HRMSHero({ product }) {
  const liveStats = [
    { icon: Users, label: "Employees Active", value: "248" },
    { icon: Clock, label: "Checked In Today", value: "231" },
    { icon: Wallet, label: "Payroll Status", value: "On Track" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute -top-24 left-0 h-[380px] w-[380px] rounded-full bg-[color-mix(in_srgb,var(--brand-primary)_18%,transparent)] blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-[320px] w-[320px] rounded-full bg-[color-mix(in_srgb,var(--brand-accent)_15%,transparent)] blur-[140px]" />

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

        {/* Live-feeling workforce status card, replacing the static screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl border border-brand-border bg-white p-6 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.25)] sm:p-8"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-brand-text">
              Today's Workforce Snapshot
            </p>
            <span className="flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--brand-success)_12%,white)] px-2.5 py-1 text-xs font-semibold text-[--brand-success]">
              <span className="h-1.5 w-1.5 rounded-full bg-[--brand-success] animate-pulse" />
              Live
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {liveStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center justify-between rounded-2xl border border-brand-border bg-brand-bg px-4 py-3.5"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <stat.icon size={16} />
                  </span>
                  <span className="text-sm font-medium text-brand-text-secondary">
                    {stat.label}
                  </span>
                </span>
                <span className="text-sm font-bold text-brand-text">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 rounded-2xl bg-brand-primary/5 px-4 py-3 text-xs font-medium text-brand-primary">
            <CheckCircle2 size={14} />
            Payroll auto-reconciled from attendance — zero manual entry
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
