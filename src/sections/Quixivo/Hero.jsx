import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import CTAButton from "@/components/Shared/CTAButton";
import { GraduationCap, CreditCard, MessageSquare } from "lucide-react";

/**
 * Quixivo-specific hero. Leads with a "student journey" mini-timeline card
 * instead of a status list or chart — Quixivo's identity is coordinating
 * people (students, staff, parents), so the visual should show flow.
 */
export default function QuixivoHero({ product }) {
  const journey = [
    { icon: GraduationCap, label: "Admission confirmed" },
    { icon: CreditCard, label: "Fees auto-invoiced" },
    { icon: MessageSquare, label: "Parent notified" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute -top-24 left-1/3 h-[380px] w-[380px] rounded-full bg-[color-mix(in_srgb,var(--brand-accent)_18%,transparent)] blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-[320px] w-[320px] rounded-full bg-[color-mix(in_srgb,var(--brand-light-blue)_20%,transparent)] blur-[140px]" />

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

        {/* Connected-step journey card, replacing the static screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl border border-brand-border bg-white p-6 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.25)] sm:p-8"
        >
          <p className="text-sm font-semibold text-brand-text">
            One Admission, Zero Manual Steps
          </p>

          <div className="mt-6 flex flex-col">
            {journey.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="relative flex items-center gap-4 pb-6 last:pb-0"
              >
                {i < journey.length - 1 && (
                  <span className="absolute left-[19px] top-10 h-full w-px bg-brand-border" />
                )}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <step.icon size={17} />
                </span>
                <span className="text-sm font-medium text-brand-text">
                  {step.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-2 rounded-2xl bg-brand-accent/10 px-4 py-3 text-xs font-medium text-[--brand-primary-dark]">
            Students, staff and parents all see the same real-time status
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
