import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import { GraduationCap, Users2, ShieldCheck } from "lucide-react";

const AUDIENCES = [
  { icon: GraduationCap, title: "Students", desc: "See attendance, fees and results in one app." },
  { icon: Users2, title: "Staff", desc: "Manage classes, attendance and communication in one place." },
  { icon: ShieldCheck, title: "Administrators", desc: "Get institute-wide visibility on fees, admissions and academics." },
];

/** Quixivo signature section: three-audience view, since the product's
 * identity is coordinating everyone on the same real-time system. */
export default function QuixivoAudiences() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Built for everyone in the institute"
          title="One platform, three points of view"
          description="Students, staff and administrators each get a view tuned to what they need — powered by the same real-time data."
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col gap-4 rounded-2xl border border-brand-border bg-brand-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.2)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/15 text-[--brand-primary-dark]">
                <a.icon size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-text">{a.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-text-secondary">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
