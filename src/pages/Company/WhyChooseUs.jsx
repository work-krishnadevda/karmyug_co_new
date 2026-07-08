import {
  BrainCircuit,
  ShieldCheck,
  Workflow,
  Rocket,
  Headset,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Ready Solutions",
    description:
      "Future-proof software powered by intelligent automation and AI capabilities.",
  },
  {
    icon: Workflow,
    title: "Custom Development",
    description:
      "Tailored CRM, ERP, HRMS, web and mobile applications built for your business.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Agile development process with faster releases and continuous improvements.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Secure architecture, role-based access and scalable infrastructure.",
  },
  {
    icon: Headset,
    title: "Long-Term Support",
    description:
      "Dedicated support, maintenance and feature upgrades even after launch.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "Built using React, Node.js, AI tools and cloud technologies for long-term scalability.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            WHY KARMYUG
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
            More Than a Software Company
            <span className="block text-blue-600">
              Your Technology Growth Partner
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We don't just build software. We help businesses transform,
            automate processes, and scale using modern technologies that
            deliver measurable results.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-blue-50 group-hover:to-violet-50 transition-all duration-500" />

                <div className="relative">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">

                    <Icon
                      size={30}
                      className="text-blue-600 group-hover:text-white"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {feature.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;