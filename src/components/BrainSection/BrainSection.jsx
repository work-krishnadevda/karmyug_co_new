import { useState } from "react";
import services from "./brainData";
import BrainSVG from "./BrainSVG";
import ServiceCard from "./ServiceCard";

export default function BrainSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#020617] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e40af20,transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What We Do
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Our Technology Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            We help businesses build intelligent software, automate workflows,
            develop scalable cloud applications and accelerate digital growth.
          </p>

        </div>

        {/* Network */}

        <div className="relative mt-24">

          <BrainSVG
            services={services}
            active={activeService}
            setActive={setActiveService}
          />

          <ServiceCard service={activeService} />

        </div>

      </div>

    </section>
  );
}