import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import crane from "../../assets/images/products/crane/HRMS overview.webp";
import valuxpert from "../../assets/images/products/valuxpert/valuXpertOverview.webp";
import quixivo from "../../assets/images/products/quixivo/Quixivo overview.webp";

const projects = [
  {
    id: 1,
    name: "HRMS Crane",
    tag: "Workforce",
    description:
      "Streamline workforce operations: employees, attendance, payroll and analytics through secure portals.",
    image: crane,
    to: "/products/hrms",
  },
  {
    id: 2,
    name: "ValuXpert",
    tag: "Valuation",
    description:
      "Automate case allocation, field inspections, and business intelligence across valuation workflows.",
    image: valuxpert,
    to: "/products/valuxpert",
  },
  {
    id: 3,
    name: "Quixivo",
    tag: "Institutes",
    description:
      "All-in-one institute management — students, fees, communication and learning in a single platform.",
    image: quixivo,
    to: "/products/quixivo",
  },
];

export default function ProductsShowcase() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[--brand-border] bg-white/80 backdrop-blur-md p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-20px_rgba(15,23,42,0.22)] hover:border-[color-mix(in_srgb,var(--brand-primary)_35%,transparent)]"
            >
              {/* Ambient corner glow, only visible on hover for restraint */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[color-mix(in_srgb,var(--brand-light-blue)_35%,transparent)] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative overflow-hidden rounded-2xl mb-6 bg-[--brand-bg] h-60 flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[--brand-primary] border border-[--brand-border]">
                  {project.tag}
                </span>
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-[--brand-primary]">
                  <ArrowUpRight size={18} />
                </div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-bold text-[--brand-text] mb-2">{project.name}</h3>
              <p className="text-sm text-[--brand-text-secondary] leading-relaxed flex-grow">
                {project.description}
              </p>

              <Link
                to={project.to}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[--brand-primary] transition-colors hover:text-[--brand-primary-dark]"
              >
                Explore {project.name}
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
