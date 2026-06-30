import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

import { Link } from "react-router-dom";

export default function CoreServices() {
  return (
    <section className="relative bg-white">
      {/* Orange Top */}

      <div className="bg-[#F5A000] pt-24 pb-48">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.3em] text-white/80 font-semibold">
                WHAT WE DO
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Our Core Services
              </h2>

              <p className="text-white/90 mt-6 text-lg leading-8">
                IT excellence, digital marketing, business growth, custom CRM,
                HRMS, ERP, AI automation, cloud infrastructure, and
                cybersecurity— everything your business needs to scale faster
                with modern technology.
              </p>
            </div>

            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#F5A000] transition-all duration-300  hover:scale-105"
            >
              Explore More Services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Cards */}

      <div className="-mt-32 max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-8">
                  <Icon size={30} className="text-[#F5A000]" />
                </div>

                <h3 className="text-2xl font-semibold mb-5">{service.title}</h3>

                <p className="text-gray-600 leading-8 mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#F5A000]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <button className="group flex items-center gap-2 font-semibold text-[#F5A000]">
                  Explore
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
