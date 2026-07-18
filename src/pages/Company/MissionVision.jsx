import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-brand-light-blue/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">

            OUR PURPOSE

          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">

            Driven by Innovation,
            <span className="block text-blue-600">
              Focused on Business Growth
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            Everything we build is designed to help businesses
            simplify operations, increase productivity,
            and prepare for the future with AI-powered technology.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Mission */}

          <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 shadow-lg transition duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl">

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition group-hover:scale-125"></div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

              <Target className="text-blue-600" size={32} />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-gray-900">

              Our Mission

            </h3>

            <p className="mt-6 leading-8 text-gray-600">

              Empower businesses with reliable,
              AI-ready software—from websites and marketing
              to CRM, HRMS, ERP, and workflow automation—
              so teams work smarter, operate faster,
              and scale with confidence.

            </p>

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-blue-600"></div>

                <span>Custom Software Development</span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-blue-600"></div>

                <span>AI & Workflow Automation</span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-blue-600"></div>

                <span>Business Digital Transformation</span>

              </div>

            </div>

          </div>

          {/* Vision */}

          <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 shadow-lg transition duration-500 hover:-translate-y-3 hover:border-brand-primary hover:shadow-2xl">

            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-brand-light-blue/15 blur-3xl transition group-hover:scale-125"></div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light-blue/15">

              <Eye className="text-brand-primary" size={32} />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-gray-900">

              Our Vision

            </h3>

            <p className="mt-6 leading-8 text-gray-600">

              To become the trusted technology partner
              for startups and enterprises across India
              and globally by delivering intelligent,
              scalable software solutions that create
              measurable business value.

            </p>

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-brand-primary"></div>

                <span>Global Technology Partner</span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-brand-primary"></div>

                <span>Innovation with ROI</span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-brand-primary"></div>

                <span>Long-Term Client Success</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;