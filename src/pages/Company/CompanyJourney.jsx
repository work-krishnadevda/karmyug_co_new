import {
  Flag,
  Laptop2,
  Building2,
  BrainCircuit,
  Globe2,
} from "lucide-react";

const timeline = [
  {
    year: "2018",
    icon: Flag,
    title: "Karmyug Founded",
    description:
      "Started with a vision to build reliable digital solutions for businesses.",
  },
  {
    year: "2020",
    icon: Laptop2,
    title: "Web & App Development",
    description:
      "Expanded into modern websites, web applications, and mobile solutions.",
  },
  {
    year: "2022",
    icon: Building2,
    title: "Business Software",
    description:
      "Introduced CRM, ERP, HRMS, and workflow automation products.",
  },
  {
    year: "2024",
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Embedded AI-powered automation and analytics into our solutions.",
  },
  {
    year: "Future",
    icon: Globe2,
    title: "Global Expansion",
    description:
      "Growing as a trusted technology partner for businesses worldwide.",
  },
];

const CompanyJourney = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-brand-light-blue/15 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            OUR JOURNEY
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
            Growing With
            <span className="block text-blue-600">
              Technology & Innovation
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Every milestone reflects our commitment to building smarter
            software and helping businesses grow through technology.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Line */}

          <div className="hidden lg:block absolute left-0 right-0 top-10 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-brand-light-blue rounded-full"></div>

          <div className="grid gap-10 lg:grid-cols-5">

            {timeline.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.year}
                  className="relative text-center group"
                >

                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white border-4 border-blue-600 shadow-xl transition-all duration-300 group-hover:scale-110">

                    <Icon
                      size={34}
                      className="text-blue-600"
                    />

                  </div>

                  <p className="mt-6 text-blue-600 font-bold">

                    {item.year}

                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">

                    {item.description}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default CompanyJourney;