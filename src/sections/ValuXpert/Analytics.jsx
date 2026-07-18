import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import { Camera, FileSpreadsheet, LineChart } from "lucide-react";

const STAGES = [
  {
    icon: Camera,
    title: "Field Inspection",
    desc: "Structured, photo-backed data captured on-site.",
  },
  {
    icon: FileSpreadsheet,
    title: "Auto-Populated Report",
    desc: "Comparable data and templates fill the report automatically.",
  },
  {
    icon: LineChart,
    title: "Portfolio Intelligence",
    desc: "Every engagement rolls into a live analytics dashboard.",
  },
];

/** ValuXpert signature section: before → after style pipeline showing raw
 * field data turning into a reviewable, auditable report. */
export default function ValuXpertAnalytics() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="From field to report"
          title="Inspection data becomes insight, automatically"
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col gap-4 rounded-2xl border border-brand-border bg-brand-bg p-7"
            >
              {i < STAGES.length - 1 && (
                <span className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-brand-border sm:block" />
              )}
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <stage.icon size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-text">
                  {stage.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-text-secondary">
                  {stage.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
