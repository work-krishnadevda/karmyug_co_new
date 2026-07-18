import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CircleAlert,
  BrainCircuit,
  Layers,
  Waypoints,
  Rocket,
  BriefcaseBusiness,
  TrendingUp,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { services } from "@/data/services";

/** The 5-step visual story: problem -> analysis -> product fit -> ecosystem -> impact */
const journey = [
  {
    step: "01",
    icon: CircleAlert,
    title: "The Challenge",
    caption: "Manual work. Scattered data. Slow decisions.",
  },
  {
    step: "02",
    icon: BrainCircuit,
    title: "We Analyze & Automate",
    caption: "AI maps every workflow, end to end.",
  },
  {
    step: "03",
    icon: Layers,
    title: "The Right Product",
    caption: "HRMS, ValuXpert or Quixivo — built for you.",
  },
  {
    step: "04",
    icon: Waypoints,
    title: "One Ecosystem",
    caption: "Every product connected. Every insight shared.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Business, Accelerated",
    caption: "Faster, smarter, ready to scale.",
  },
];

/** Karmyug's three products, shown as lightweight mockup panels (no images = zero extra weight) */
const ecosystem = [
  {
    name: "HRMS Crane",
    tag: "Workforce",
    icon: BriefcaseBusiness,
    to: "/products/hrms",
    accent: "var(--brand-primary)",
  },
  {
    name: "ValuXpert",
    tag: "Valuation",
    icon: TrendingUp,
    to: "/products/valuxpert",
    accent: "var(--brand-light-blue)",
  },
  {
    name: "Quixivo",
    tag: "Institutes",
    icon: GraduationCap,
    to: "/products/quixivo",
    accent: "var(--brand-accent)",
  },
];

const capabilities = services
  .filter((service) => service.showOnHome)
  .map((service) => ({
    ...service,
    highlights: service.features.slice(0, 2),
  }));

export default function CoreServices() {
  const shouldReduceMotion = useReducedMotion();
  const [openSlug, setOpenSlug] = useState(null);

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#FFF9E8] py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-72 w-72 rounded-full bg-[#86C5FF]/15 blur-[110px] sm:-top-52 sm:-left-52 sm:h-[520px] sm:w-[520px] sm:blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#FFA62B]/15 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-[#FFA62B]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#FFA62B] sm:px-5 sm:py-2 sm:text-sm">
              What We Do
            </span>

            <h2
              id="services-heading"
              className="mt-6 text-3xl font-bold leading-tight text-[#173B73] sm:text-5xl lg:text-6xl"
            >
              Our Core
              <span className="block text-[#2E5AA7]">Technology Services</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              From first bottleneck to full automation — see how Karmyug
              turns business chaos into one connected system.
            </p>
          </div>

          <Link
            to="/services"
            aria-label="Explore all Karmyug services"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#2E5AA7] px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#234A8B] hover:shadow-2xl sm:px-8 sm:py-4 sm:text-base"
          >
            Explore All Services
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </header>

        {/* Storytelling journey */}
        <motion.ol
          {...reveal(0.05)}
          aria-label="How Karmyug transforms your business, in five steps"
          className="relative mt-16 flex flex-col gap-6 sm:mt-20 lg:flex-row lg:items-start lg:gap-4"
        >
          {journey.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === journey.length - 1;

            return (
              <li
                key={item.step}
                className="relative flex flex-1 items-start gap-4 lg:flex-col lg:items-center lg:text-center"
              >
                <div className="relative flex flex-col items-center">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E6EEF9] bg-white text-[#2E5AA7] shadow-md sm:h-16 sm:w-16"
                    aria-hidden="true"
                  >
                    <Icon size={26} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFA62B] text-[10px] font-bold text-white shadow-sm"
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                </div>

                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-7 top-14 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#2E5AA7]/30 to-transparent lg:left-[calc(50%+1.75rem)] lg:top-7 lg:h-px lg:w-[calc(100%-3.5rem)] lg:bg-gradient-to-r"
                  />
                )}

                <div className="lg:mt-4 lg:px-2">
                  <h3 className="text-base font-bold text-[#173B73] sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 lg:mx-auto lg:max-w-[10.5rem]">
                    {item.caption}
                  </p>
                </div>
              </li>
            );
          })}
        </motion.ol>

        {/* Product ecosystem panels */}
        <motion.div {...reveal(0.1)} className="mt-16 sm:mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#2E5AA7]/70">
            One Ecosystem, Three Products
          </p>

          <div className="relative mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden h-px w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#2E5AA7]/25 to-transparent sm:block"
            />

            {ecosystem.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.name}
                  to={product.to}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E6EEF9] bg-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#86C5FF] hover:shadow-2xl"
                >
                  {/* Mock browser chrome — pure CSS, no image */}
                  <div className="flex items-center gap-1.5 border-b border-[#E6EEF9] bg-[#F7FAFF] px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#FFA62B]/60" />
                    <span className="h-2 w-2 rounded-full bg-[#86C5FF]/60" />
                    <span className="h-2 w-2 rounded-full bg-[#2E5AA7]/40" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: product.accent }}
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#173B73]">
                      {product.name}
                    </h3>
                    <span className="mt-1 text-sm text-slate-500">
                      {product.tag}
                    </span>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E5AA7] transition-colors duration-300 group-hover:text-[#173B73]">
                      View product
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Capability grid — icon-first, expand for detail */}
        <motion.div {...reveal(0.15)} className="mt-16 sm:mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#2E5AA7]/70">
            Backed By Full-Stack Capability
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {capabilities.map((service) => {
              const Icon = service.icon;
              const isOpen = openSlug === service.slug;

              return (
                <div
                  key={service.slug}
                  className="group relative overflow-hidden rounded-2xl border border-[#E6EEF9] bg-white/90 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#86C5FF] hover:shadow-xl"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-detail-${service.slug}`}
                    onClick={() =>
                      setOpenSlug((current) =>
                        current === service.slug ? null : service.slug
                      )
                    }
                    className="flex w-full flex-col items-start gap-2 p-4 text-left sm:p-5"
                  >
                    <div className="flex w-full items-start justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF6FF] text-[#2E5AA7] transition-all duration-300 group-hover:bg-[#2E5AA7] group-hover:text-white"
                        aria-hidden="true"
                      >
                        <Icon size={20} />
                      </div>
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`mt-2 text-slate-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <h3 className="mt-1 text-sm font-bold leading-5 text-[#173B73] sm:text-base">
                      {service.title}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-wide text-[#FFA62B]">
                      {service.badge}
                    </span>
                  </button>

                  <div
                    id={`service-detail-${service.slug}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-2 px-4 pb-4 sm:px-5 sm:pb-5">
                        {service.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-2 text-xs text-slate-600 sm:text-sm"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFA62B]" />
                            {highlight}
                          </span>
                        ))}

                        <Link
                          to={`/services#${service.slug}`}
                          className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E5AA7] hover:text-[#173B73] sm:text-sm"
                        >
                          Learn more
                          <ArrowRight size={13} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
