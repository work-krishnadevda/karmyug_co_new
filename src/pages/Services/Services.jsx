import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import CTAButton from "@/components/Shared/CTAButton";
import ServiceEcosystem from "@/components/Services/ServiceEcosystem";
import ServiceJourney from "@/components/Services/ServiceJourney";
import { services } from "@/data/services";
import { SCHEDULE_CALL_HREF } from "@/constants/companyInfo";

const FAQS = [
  {
    q: "Which service is the right starting point for a small team?",
    a: "Most teams start with IT Solutions or Web & App Development to get a working product live, then layer in AI Automation or CRM/HRMS once operations need it.",
  },
  {
    q: "Do you work with an existing codebase or only greenfield projects?",
    a: "Both. A large share of our engagements are modernizing or extending an existing system rather than building from scratch.",
  },
  {
    q: "How is pricing structured?",
    a: "Fixed-scope for well-defined projects, time-and-materials for ongoing product work. We'll recommend the right model on a quick call.",
  },
];

function FaqItem({ faq, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-brand-border bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center cursor-pointer justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-brand-text">{faq.q}</span>
        <Plus
          size={18}
          className={`shrink-0 text-brand-primary transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        />
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="px-6 pb-5 text-sm leading-relaxed text-brand-text-secondary"
        >
          {faq.a}
        </motion.p>
      )}
    </div>
  );
}

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo
        title="Services"
        description="AI, cloud, ERP, CRM, digital transformation, web & mobile development, automation, UI/UX and consulting — explore Karmyug's full service catalog."
        path="/services"
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="relative bg-white pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full bg-brand-primary/15 blur-[160px]" />
        <Container className="relative">
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Every capability. One connected system."
            description="Twelve services, one delivery engine. Scroll to see how each one moves from problem to business outcome."
          />
        </Container>
      </section>

      {/* Visual ecosystem overview */}
      <ServiceEcosystem services={services} />

      {/* Service journeys — visual pipeline per service */}
      <section className="py-4 sm:py-8">
        {services.map((service, index) => (
          <ServiceJourney key={service.slug} service={service} index={index} />
        ))}
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            className="mb-10"
          />
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white pb-24">
        <Container>
          <div className="relative overflow-hidden flex flex-col items-center gap-6 rounded-3xl bg-brand-primary px-6 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-brand-accent/20 blur-[100px]" />
            <h2 className="relative font-heading text-2xl font-extrabold text-white sm:text-3xl">
              Not sure which service fits?
            </h2>
            <p className="relative max-w-xl text-sm text-white/80 sm:text-base">
              Send us a short brief and we'll map it to the right combination of
              services and products.
            </p>
            <CTAButton
              href={SCHEDULE_CALL_HREF}
              variant="accent"
              size="lg"
              className="relative cursor-pointer"
            >
              Schedule a Call
            </CTAButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
