import { Handshake } from "lucide-react";

import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import CTAButton from "@/components/Shared/CTAButton";
import LogoMarquee from "@/components/Shared/LogoMarquee";

const PARTNER_TYPES = [
  {
    title: "Implementation Partners",
    desc: "Consultancies who deploy Karmyug products for their clients.",
  },
  {
    title: "Technology Partners",
    desc: "Platforms we integrate with for payments, communication and analytics.",
  },
  {
    title: "Referral Partners",
    desc: "Agencies and advisors who refer clients and earn commission.",
  },
];

export default function Partners() {
  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo
        title="Partners"
        description="Partner with Karmyug Solutions — implementation, technology and referral partnerships for HRMS, ValuXpert and Quixivo."
        path="/company/partners"
      />

      <section className="bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Partners"
            align="left"
            title="Grow with Karmyug"
            description="We work with consultancies, technology platforms and referral partners to bring HRMS, ValuXpert and Quixivo to more teams."
          />
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <LogoMarquee />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PARTNER_TYPES.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-brand-border bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Handshake size={20} aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-heading text-base font-bold text-brand-text">
                  {type.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-24">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-primary px-6 py-14 text-center sm:px-16">
            <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
              Interested in partnering?
            </h2>
            <p className="max-w-xl text-sm text-white/80 sm:text-base">
              Tell us about your business and how you'd like to work with
              Karmyug.
            </p>
            <CTAButton
              to="/contact"
              variant="accent"
              size="lg"
              className="cursor-pointer"
            >
              Get in touch
            </CTAButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
