import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import { UserPlus, Fingerprint, Calculator, FileCheck } from "lucide-react";

const STEPS = [
  { icon: UserPlus, title: "Employee Onboarded", desc: "Records, documents and org placement created once." },
  { icon: Fingerprint, title: "Attendance Captured", desc: "Biometric, geo or app check-ins sync automatically." },
  { icon: Calculator, title: "Payroll Calculated", desc: "Salary, overtime and deductions computed from real attendance." },
  { icon: FileCheck, title: "Payslip Delivered", desc: "Compliant payslips generated and sent — no manual entry." },
];

/** HRMS signature section: a horizontal connected-node workflow showing the
 * "one record, zero re-entry" story the product is built around. */
export default function HRMSWorkflow() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it flows"
          title="One employee record. Every downstream step automatic."
          className="mb-14"
        />
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-8 left-0 right-0 hidden h-px bg-brand-border lg:block" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-start gap-3 rounded-2xl border border-brand-border bg-brand-bg p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary text-white">
                <step.icon size={18} />
              </span>
              <p className="text-sm font-bold text-brand-text">{step.title}</p>
              <p className="text-xs leading-relaxed text-brand-text-secondary">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
