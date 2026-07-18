import {
  Bot,
  Cpu,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import aiImage from "../../assets/images/company/ai.webp";

const features = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate repetitive workflows while maintaining complete business control.",
  },
  {
    icon: Workflow,
    title: "Smart Workflows",
    description:
      "Connect departments and simplify operations with intelligent automation.",
  },
  {
    icon: Cpu,
    title: "Future Ready",
    description:
      "Scalable systems designed to evolve alongside your growing business.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with dependable performance and long-term support.",
  },
];

const AIPhilosophy = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      {/* Background Blurs */}

      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute -right-20 bottom-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-brand-light-blue/10 blur-3xl"></div>

            <img
              src={aiImage}
              alt="AI Workflow Automation Illustration"
              loading="lazy"
              className="relative mx-auto w-full max-w-xl"
            />

            {/* Floating Cards */}

            <div className="absolute left-0 top-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">

              <p className="text-sm text-gray-500">

                Automation

              </p>

              <h3 className="mt-1 text-2xl font-bold text-blue-600">

                24/7

              </h3>

            </div>

            <div className="absolute bottom-10 right-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">

              <p className="text-sm text-gray-500">

                Efficiency

              </p>

              <h3 className="mt-1 text-2xl font-bold text-brand-primary">

                +85%

              </h3>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">

              AI-FIRST PHILOSOPHY

            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">

              AI That Works
              <span className="block text-blue-600">

                With People, Not Instead Of Them

              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">

              At Karmyug, we believe technology should empower teams rather
              than replace them. Our AI-first philosophy focuses on automating
              repetitive tasks, enhancing decision-making, and enabling people
              to focus on creativity, innovation, and business growth.

            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                      <Icon
                        size={28}
                        className="text-blue-600 group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AIPhilosophy;