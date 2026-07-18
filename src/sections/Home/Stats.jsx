import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import AnimatedCounter from "@/components/Shared/AnimatedCounter";
import { stats } from "@/data/companyData";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-primary py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-accent/20 blur-[120px]" />

      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center"
            >
              <p className="font-heading text-3xl font-extrabold text-white sm:text-5xl">
                <AnimatedCounter target={stat.number} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
