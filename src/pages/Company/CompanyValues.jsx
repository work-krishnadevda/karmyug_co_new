import {
  ShieldCheck,
  Handshake,
  Lightbulb,
  Users,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "We build reliable, scalable, and high-performance software with attention to every detail.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    description:
      "Clear communication, honest timelines, and complete project visibility at every stage.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging AI, automation, and modern technologies to create future-ready solutions.",
  },
  {
    icon: Users,
    title: "Client Ownership",
    description:
      "We treat every project like it's our own business and work as an extension of your team.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description:
      "Our partnership continues after launch with maintenance, updates, and ongoing improvements.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "Every solution is designed to help businesses scale efficiently and sustainably.",
  },
];

const CompanyValues = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      {/* Background */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-brand-light-blue/15 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR VALUES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Principles That Drive
            <span className="block text-blue-600">
              Every Project We Build
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our values define how we collaborate, innovate, and deliver
            meaningful technology solutions that help businesses succeed.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-brand-light-blue/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-brand-primary/5 group-hover:to-brand-light-blue/10" />

                <div className="relative">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                    <Icon
                      size={30}
                      className="text-blue-600 transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {value.description}
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

export default CompanyValues;