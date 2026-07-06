import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

export default function CoreServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#FFF9E8] py-24 lg:py-32"
    >
      {/* Background Decorations */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-52 -left-52 h-[520px] w-[520px] rounded-full bg-[#86C5FF]/15 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#FFA62B]/15 blur-[120px]" />

        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white/60 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <header className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#FFA62B]/15 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFA62B]">
              WHAT WE DO
            </span>

            <h2
              id="services-heading"
              className="mt-7 text-4xl font-bold leading-tight text-[#173B73] sm:text-5xl lg:text-6xl"
            >
              Our Core
              <span className="block text-[#2E5AA7]">Technology Services</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              We help startups, SMEs and enterprises build scalable digital
              products with modern web development, AI automation, ERP, CRM,
              HRMS, cloud infrastructure, cybersecurity and growth-focused
              digital solutions.
            </p>
          </div>

          <div>
            <Link
              to="/services"
              aria-label="Explore all Karmyug services"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#2E5AA7]
                px-8
                py-4
                font-semibold
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#234A8B]
                hover:shadow-2xl
              "
            >
              Explore All Services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </header>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#E6EEF9]
                  bg-white/90
                  p-8
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-[#86C5FF]
                  hover:shadow-2xl
                "
              >
                {/* Hover Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-[#86C5FF]/0 via-transparent to-[#FFA62B]/0 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EDF6FF]
                      transition-all
                      duration-300
                      group-hover:bg-[#2E5AA7]
                      group-hover:rotate-6
                    "
                  >
                    <Icon
                      size={30}
                      className="text-[#2E5AA7] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="mt-7 text-2xl font-bold text-[#173B73]">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-8 text-slate-600">
                    {service.description}
                  </p>

                  {/* Features */}

                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-4 text-slate-700"
                      >
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#FFA62B] shadow-[0_0_10px_rgba(255,166,43,.45)]" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}

                  <Link
                    to="/services"
                    className="
                      group/link
                      mt-10
                      inline-flex
                      items-center
                      gap-2
                      font-semibold
                      text-[#2E5AA7]
                      transition-colors
                      duration-300
                      hover:text-[#173B73]
                    "
                  >
                    Learn More
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
