import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import CTAButton from "@/components/Shared/CTAButton";
import { COMPANY_INFO } from "@/constants/companyInfo";

const OPEN_ROLES = [
  {
    title: "Frontend Engineer (React)",
    location: "Indore / Remote",
    type: "Full-time",
  },
  {
    title: "Backend Engineer (Node.js)",
    location: "Indore / Remote",
    type: "Full-time",
  },
  { title: "Product Designer", location: "Indore / Remote", type: "Full-time" },
];

const PERKS = [
  "Work directly on products used by real businesses, not internal tooling",
  "Small teams, high ownership — you'll ship, not just build tickets",
  "Flexible remote-friendly setup",
  "Learning budget for courses, books and conferences",
];

export default function Careers() {
  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo
        title="Careers"
        description="Open roles at Karmyug Solutions — join the team building HRMS, ValuXpert and Quixivo."
        path="/company/careers"
      />

      <section className="bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Careers"
            align="left"
            title="Build products real businesses run on"
            description="We're a small, product-first team. If you'd rather ship something people use daily than push tickets, this is the place."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-heading text-xl font-bold text-brand-text">
              Open roles
            </h2>
            <div className="mt-5 space-y-4">
              {OPEN_ROLES.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex flex-col justify-between gap-3 rounded-2xl border border-brand-border bg-white p-6 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="font-semibold text-brand-text">
                      {role.title}
                    </p>
                    <div className="mt-1 flex items-center gap-4 text-xs text-brand-text-secondary">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} /> {role.type}
                      </span>
                    </div>
                  </div>
                  <CTAButton
                    href={`mailto:${COMPANY_INFO.email}?subject=Application: ${role.title}`}
                    size="sm"
                    icon={false}
                    className="cursor-pointer"
                  >
                    Apply
                  </CTAButton>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm text-brand-text-secondary">
              Don't see a fit but think you'd add value?{" "}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="font-semibold text-brand-primary underline"
              >
                Reach out anyway
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-brand-text">
              Why join us
            </h2>
            <ul className="mt-5 space-y-3">
              {PERKS.map((perk) => (
                <li
                  key={perk}
                  className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text"
                >
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
