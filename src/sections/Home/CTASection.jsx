import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import CTAButton from "@/components/Shared/CTAButton";
import { SCHEDULE_CALL_HREF } from "@/constants/companyInfo";

export default function CTASection() {
  return (
    <section className="bg-brand-bg py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-brand-primary px-6 py-16 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute -top-20 left-10 h-64 w-64 rounded-full bg-white/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-brand-accent/20 blur-[120px]" />

          <div className="relative flex flex-col items-center gap-6">
            <h2 className="font-heading text-2xl font-extrabold text-white sm:text-4xl">
              Ready to run your operations on one platform?
            </h2>
            <p className="max-w-xl text-sm text-white/80 sm:text-base">
              Talk to our team about HRMS, ValuXpert or Quixivo — or tell us
              what you're building and we'll scope it together.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href={SCHEDULE_CALL_HREF}
                variant="accent"
                size="lg"
                className="cursor-pointer"
              >
                Schedule a Call
              </CTAButton>
              <CTAButton
                to="/products"
                variant="outline"
                size="lg"
                icon={false}
                className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20 cursor-pointer"
              >
                Explore Products
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
