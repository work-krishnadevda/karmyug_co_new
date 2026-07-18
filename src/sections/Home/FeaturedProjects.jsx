import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/Shared/Container";
import ProjectCard from "@/components/Projects/ProjectCard";
import { featuredProjects } from "@/data/featuredProjects";

export default function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  const headingReveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-[--brand-bg] py-20 sm:py-24 lg:py-28"
    >
      {/* Ambient background glow, consistent with the rest of the homepage */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--brand-primary)_16%,transparent)] blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--brand-accent)_14%,transparent)] blur-[120px]" />
      </div>

      <Container className="relative">
        <motion.div {...headingReveal} className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[--brand-border] bg-[color-mix(in_srgb,var(--brand-primary)_6%,white)] px-5 py-2 text-sm font-medium text-[--brand-primary]">
            ✦ Featured Projects
          </span>

          <h2
            id="projects-heading"
            className="text-3xl font-black tracking-tight text-[--brand-text] sm:text-4xl lg:text-5xl"
          >
            Selected Work
          </h2>

          <p className="text-base leading-relaxed text-[--brand-text-secondary] sm:text-lg">
            Real-world products designed and developed for businesses across
            healthcare, finance, and education.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
