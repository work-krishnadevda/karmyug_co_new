import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "../../assets/images/company/hero-dashboard.png";

const features = [
  "AI Powered Solutions",
  "CRM • ERP • HRMS",
  "Workflow Automation",
  "Custom Software Development",
];

const CompanyHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-3xl"></div>

        <div className="absolute left-1/2 top-40 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

              AI-Driven Digital Transformation

            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">

              Building Intelligent Software

              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">

                That Helps Businesses Grow

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

              Karmyug develops AI-ready software solutions including
              CRM, ERP, HRMS, workflow automation, websites,
              and enterprise applications that help businesses
              improve productivity and scale confidently.

            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-blue-600"
                    size={22}
                  />

                  <span className="font-medium text-gray-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="group rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">

                Explore Services

                <ArrowRight
                  size={18}
                  className="ml-2 inline transition group-hover:translate-x-1"
                />

              </button>

              <button className="rounded-full border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-600">

                Contact Us

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"></div>

            <img
              src={heroImage}
              alt="Karmyug AI CRM ERP Dashboard"
              className="relative mx-auto w-full max-w-xl rounded-3xl shadow-2xl"
              loading="eager"
            />

            {/* Floating Card */}

            <div className="absolute -left-8 top-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">

              <p className="text-sm font-semibold text-gray-500">

                AI Productivity

              </p>

              <h3 className="mt-1 text-3xl font-bold text-blue-600">

                +85%

              </h3>

            </div>

            <div className="absolute -right-6 bottom-12 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">

              <p className="text-sm font-semibold text-gray-500">

                Automation

              </p>

              <h3 className="mt-1 text-3xl font-bold text-violet-600">

                24/7

              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CompanyHero;