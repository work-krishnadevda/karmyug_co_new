import { ArrowRight, PhoneCall } from "lucide-react";

const CompanyCTA = () => {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-violet-700"></div>

      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[180px]" />

      {/* Grid Pattern */}

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 font-semibold text-white backdrop-blur-md">

            LET'S BUILD SOMETHING AMAZING

          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">

            Ready to Transform
            <span className="block">

              Your Business with AI?

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">

            Whether you need a modern website, CRM, ERP, HRMS,
            workflow automation, or a complete AI-powered platform,
            Karmyug is ready to build your next digital success story.

          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <button className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:scale-105">

              Start Your Project

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />

            </button>

            <button className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">

              <PhoneCall size={20} />

              Book Free Consultation

            </button>

          </div>

          {/* Bottom Stats */}

          <div className="mt-20 grid gap-8 sm:grid-cols-3">

            <div>

              <h3 className="text-4xl font-bold text-white">

                8+

              </h3>

              <p className="mt-2 text-blue-100">

                Years Experience

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-white">

                10+

              </h3>

              <p className="mt-2 text-blue-100">

                Projects Delivered

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-white">

                24/7

              </h3>

              <p className="mt-2 text-blue-100">

                Dedicated Support

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CompanyCTA;