import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Headset,
  ShieldCheck,
  BadgeDollarSign,
  Layers,
  ClipboardList,
  Compass,
  Hammer,
  LifeBuoy,
} from "lucide-react";

import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import CTAButton from "@/components/Shared/CTAButton";
import FeatureCard from "@/components/Product/FeatureCard";
import AnimatedCounter from "@/components/Shared/AnimatedCounter";
import { serviceJourneys } from "@/data/serviceJourneys";
import { stats } from "@/data/companyData";
import { SCHEDULE_CALL_HREF } from "@/constants/companyInfo";

/** Icon cards used in the "Why Choose Karmyug" section — identical on every
 * service page by design, so the promise reads consistently site-wide. */
const WHY_CHOOSE_KARMYUG = [
  { icon: Users, title: "Experienced Team", desc: "Seasoned specialists who've shipped this exact kind of work before." },
  { icon: Zap, title: "Fast Delivery", desc: "Lean sprints and clear milestones keep the timeline honest." },
  { icon: Headset, title: "24/7 Support", desc: "A dedicated point of contact whenever something needs attention." },
  { icon: ShieldCheck, title: "Secure Solutions", desc: "Security and compliance considered from day one, not bolted on later." },
  { icon: BadgeDollarSign, title: "Cost Effective", desc: "Transparent, fixed-scope pricing with no hidden costs." },
  { icon: Layers, title: "Scalable Services", desc: "Built to grow with you, from first release to enterprise scale." },
];

/** Simple 4-step delivery process, reused across every service page. */
const PROCESS_STEPS = [
  { icon: Compass, title: "Consultation", desc: "We learn your goals, constraints and current workflow." },
  { icon: ClipboardList, title: "Planning", desc: "A clear roadmap, scope and timeline before any code is written." },
  { icon: Hammer, title: "Development", desc: "Agile delivery with regular demos and visible progress." },
  { icon: LifeBuoy, title: "Support", desc: "Post-launch monitoring, fixes and continuous improvement." },
];

export default function ServiceLanding({ service }) {
  const Icon = service.icon;
  const journey = serviceJourneys[service.slug];

  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute -top-24 right-0 h-[380px] w-[380px] rounded-full bg-brand-light-blue/25 blur-[150px]" />
        <div className="pointer-events-none absolute -bottom-16 left-0 h-[320px] w-[320px] rounded-full bg-brand-accent/15 blur-[140px]" />

        <Container className="relative flex flex-col items-center gap-6 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-primary), var(--brand-light-blue))",
            }}
          >
            <Icon size={28} aria-hidden="true" />
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <span className="inline-flex rounded-full border border-brand-primary/15 bg-brand-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              {service.badge}
            </span>
            <h1 className="mt-5 max-w-3xl font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-text-secondary sm:text-lg">
              {service.shortDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 flex flex-col gap-3 sm:flex-row"
          >
            <CTAButton href={SCHEDULE_CALL_HREF} variant="primary" size="lg" className="cursor-pointer">
              Schedule a Call
            </CTAButton>
            <CTAButton to="/contact" variant="outline" size="lg" icon={false} className="cursor-pointer">
              Contact Us
            </CTAButton>
          </motion.div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="What's included"
            description={service.shortDescription}
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <FeatureCard
                key={feature}
                icon={Icon}
                title={feature}
                desc={`Included as part of Karmyug's ${service.title} engagement.`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Karmyug */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Karmyug"
            title="Built around your outcome, not just the build"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_KARMYUG.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </Container>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Our Process" title="How we get there" className="mb-12" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative rounded-2xl border border-brand-border bg-white p-6"
                >
                  <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-brand-text shadow-sm">
                    {index + 1}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <StepIcon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-brand-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Business Growth */}
      <section className="relative overflow-hidden bg-brand-primary py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-accent/20 blur-[120px]" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col items-center gap-4 text-center"
          >
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Business Growth
            </span>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              What this looks like in practice
            </h2>
          </motion.div>

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

          {journey && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light-blue">
                Typical outcome
              </p>
              <p className="mt-2 font-heading text-xl font-extrabold text-white sm:text-2xl">
                {journey.outcome}
              </p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-brand-primary px-6 py-14 text-center sm:px-16"
          >
            <div className="pointer-events-none absolute -top-16 left-10 h-56 w-56 rounded-full bg-white/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-brand-accent/20 blur-[120px]" />
            <div className="relative flex flex-col items-center gap-5">
              <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                Ready to Grow Your Business?
              </h2>
              <p className="max-w-lg text-sm text-white/80 sm:text-base">
                Tell us what you're working on and we'll show you exactly how{" "}
                {service.title.toLowerCase()} fits into it.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAButton href={SCHEDULE_CALL_HREF} variant="accent" size="lg" className="cursor-pointer">
                  Schedule a Call
                </CTAButton>
                <CTAButton
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20 cursor-pointer"
                >
                  Contact Us
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
