import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";

/**
 * Visual-first overview: every service rendered as a node in a connected
 * ecosystem grid. Communicates breadth instantly via icons + a connecting
 * "circuit" line, before any detailed copy appears. Click jumps to the
 * matching panel further down the page.
 */
export default function ServiceEcosystem({ services }) {
  return (
    <section className="relative overflow-hidden bg-brand-primary py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%" aria-hidden="true">
          <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-light-blue/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-brand-accent/20 blur-[120px]" />

      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-light-blue"
        >
          One ecosystem, twelve capabilities
        </motion.p>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.slug}
                href={`#${service.slug}`}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (index % 6) * 0.06 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-light-blue transition-colors group-hover:bg-brand-accent group-hover:text-brand-text">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="text-[11px] font-semibold leading-tight text-white/90 sm:text-xs">
                  {service.title}
                </span>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
