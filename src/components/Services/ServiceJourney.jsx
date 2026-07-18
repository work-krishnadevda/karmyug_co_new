import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import Container from "@/components/Shared/Container";
import CTAButton from "@/components/Shared/CTAButton";
import { serviceJourneys } from "@/data/serviceJourneys";

const BEATS = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "technology", label: "Technology" },
  { key: "outcome", label: "Outcome" },
];

function Beat({ beat, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="flex flex-1 flex-col items-start gap-2"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-text-secondary/70">
        {beat.label}
      </span>
      <p
        className={`font-heading text-base font-bold leading-snug sm:text-lg ${
          beat.key === "outcome" ? "text-brand-primary" : "text-brand-text"
        }`}
      >
        {value}
      </p>
    </motion.div>
  );
}

function Connector({ delay = 0 }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className="hidden shrink-0 items-center px-2 text-brand-primary/40 sm:flex"
      >
        <ArrowRight size={20} aria-hidden="true" />
      </motion.div>
      <div className="flex shrink-0 items-center justify-center py-2 text-brand-primary/40 sm:hidden">
        <ArrowDown size={18} aria-hidden="true" />
      </div>
    </>
  );
}

/**
 * One "comic panel" per service: icon + title on one side, a visual
 * Problem -> Solution -> Technology -> Outcome pipeline on the other.
 * Alternates sides on desktop to create a scanning, storytelling rhythm.
 */
export default function ServiceJourney({ service, index }) {
  const Icon = service.icon;
  const journey = serviceJourneys[service.slug];
  const reversed = index % 2 === 1;

  return (
    <motion.article
      id={service.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="scroll-mt-28 py-10 sm:py-14"
    >
      <Container>
        <div
          className={`flex flex-col gap-8 rounded-[2rem] border border-brand-border bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] sm:p-10 lg:flex-row lg:items-center lg:gap-12 ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Identity panel */}
          <div className="flex shrink-0 flex-col gap-4 lg:w-64">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-primary), var(--brand-light-blue))",
              }}
            >
              <Icon size={26} aria-hidden="true" />
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
                {service.badge}
              </span>
              <h2 className="mt-1 font-heading text-2xl font-extrabold text-brand-text sm:text-[1.7rem]">
                {service.title}
              </h2>
            </div>
            <CTAButton
              to="/contact"
              variant="outline"
              size="sm"
              className="w-fit cursor-pointer"
            >
              Discuss this
            </CTAButton>
            <Link
              to={`/services/${service.slug}`}
              className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-primary-dark"
            >
              View More
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden h-40 w-px shrink-0 bg-brand-border lg:block" />
          <div className="h-px w-full bg-brand-border lg:hidden" />

          {/* Visual pipeline */}
          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
            {BEATS.map((beat, i) => (
              <div
                key={beat.key}
                className="flex flex-1 flex-col sm:flex-row sm:items-center"
              >
                <Beat beat={beat} value={journey[beat.key]} index={i} />
                {i < BEATS.length - 1 && <Connector delay={i * 0.1 + 0.05} />}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </motion.article>
  );
}
