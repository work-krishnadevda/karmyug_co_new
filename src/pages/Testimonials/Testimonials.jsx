import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import CTAButton from "@/components/Shared/CTAButton";
import AnimatedCounter from "@/components/Shared/AnimatedCounter";
import TestimonialCard from "@/components/Testimonials/TestimonialCard";
import TestimonialSlider from "@/components/Testimonials/TestimonialSlider";
import { testimonials } from "@/data/testimonials";
import { SCHEDULE_CALL_HREF } from "@/constants/companyInfo";

const METRICS = [
  { value: "120+", label: "Businesses served" },
  { value: "98%", label: "Client retention" },
  { value: "4.9", label: "Average rating" },
  { value: "6", label: "Industries covered" },
];

export default function Testimonials() {
  const [filter, setFilter] = useState("All");
  const filters = useMemo(
    () => ["All", ...new Set(testimonials.map((t) => t.product))],
    [],
  );
  const filtered = useMemo(
    () =>
      filter === "All"
        ? testimonials
        : testimonials.filter((t) => t.product === filter),
    [filter],
  );

  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo
        title="Testimonials"
        description="See how businesses across India use Karmyug's HRMS, ValuXpert and Quixivo products to streamline operations and grow faster."
        path="/testimonials"
      />

      {/* Hero */}
      <section className="relative bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-light-blue/30 blur-[160px]" />
        <Container className="relative">
          <SectionHeading
            as="h1"
            eyebrow="Testimonials"
            title="Trusted by teams who run on Karmyug"
            description="Real feedback from operations, finance and academic leaders who moved off spreadsheets and legacy tools onto our products."
          />
        </Container>
      </section>

      {/* Metrics strip */}
      <section className="border-y border-brand-border bg-white py-10">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {METRICS.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-heading text-3xl font-extrabold text-brand-primary sm:text-4xl">
                  <AnimatedCounter target={metric.value} />
                </p>
                <p className="mt-1 text-sm text-brand-text-secondary">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured slider */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.18em] text-brand-text-secondary">
            Featured story
          </p>
          <TestimonialSlider testimonials={testimonials} />
        </Container>
      </section>

      {/* Full grid */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="mb-10 flex flex-wrap justify-center gap-2.5">
            {filters.map((label) => (
              <button
                key={label}
                onClick={() => setFilter(label)}
                className={`rounded-full cursor-pointer border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  filter === label
                    ? "border-brand-primary bg-brand-primary text-white shadow-[0_8px_20px_-8px_rgba(46,90,167,0.5)]"
                    : "border-brand-border bg-white text-brand-text-secondary hover:border-brand-primary/40 hover:text-brand-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white pb-24">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-primary px-6 py-14 text-center sm:px-16">
            <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
              Ready to become our next success story?
            </h2>
            <p className="max-w-xl text-sm text-white/80 sm:text-base">
              Talk to our team about which Karmyug product fits your workflow —
              no pressure, just a straight answer.
            </p>
            <CTAButton
              href={SCHEDULE_CALL_HREF}
              variant="accent"
              size="lg"
              className="cursor-pointer"
            >
              Schedule a Call
            </CTAButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
