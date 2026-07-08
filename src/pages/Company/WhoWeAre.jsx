import {
  BrainCircuit,
  BriefcaseBusiness,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import officeImage  from "../../assets/images/company/office.png";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Ready",
    desc: "Modern AI-powered solutions for future growth.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Focused",
    desc: "Technology designed around your business goals.",
  },
  {
    icon: Rocket,
    title: "Scalable",
    desc: "Built to grow with your company.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    desc: "Secure architecture with long-term support.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="relative py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 blur-3xl"></div>

            <img
              src={officeImage}
              alt="Karmyug Software Development Team"
              loading="lazy"
              className="relative rounded-[32px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-xl p-6">

              <h3 className="text-4xl font-bold text-blue-600">
                8+
              </h3>

              <p className="text-gray-600 mt-2">
                Years of Excellence
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

              WHO WE ARE

            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">

              Technology Partner for

              <span className="block text-blue-600">

                Growing Businesses

              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">

              Karmyug is a software development company helping
              startups, SMEs, and enterprises simplify operations
              through intelligent digital solutions.

            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              From websites and mobile applications to CRM, HRMS,
              ERP, workflow automation and AI integration, we build
              scalable systems that improve productivity and create
              measurable business impact.

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">

              {features.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                  >

                    <Icon
                      className="text-blue-600"
                      size={34}
                    />

                    <h3 className="mt-5 font-bold text-xl">

                      {item.title}

                    </h3>

                    <p className="mt-3 text-gray-600 leading-7">

                      {item.desc}

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

export default WhoWeAre;