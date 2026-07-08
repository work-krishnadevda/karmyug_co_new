import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  CalendarDays,
  FolderKanban,
  Users,
  Headset,
} from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    number: 8,
    suffix: "+",
    title: "Years Experience",
    description: "Building reliable software solutions.",
  },
  {
    icon: FolderKanban,
    number: 10,
    suffix: "+",
    title: "Projects Delivered",
    description: "Successfully completed projects.",
  },
  {
    icon: Users,
    number: 100,
    suffix: "%",
    title: "Client Focus",
    description: "Customer success is our priority.",
  },
  {
    icon: Headset,
    number: 24,
    suffix: "/7",
    title: "Support",
    description: "Long-term technical assistance.",
  },
];

const CompanyStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-slate-900 py-28"
    >
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-600/20 px-5 py-2 text-blue-300 font-semibold">

            OUR IMPACT

          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">

            Numbers That Reflect
            <span className="block text-blue-400">

              Our Commitment

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">

            We measure success by the value we create for our clients
            through innovation, quality, and long-term partnerships.

          </p>

        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition duration-300 hover:-translate-y-3 hover:border-blue-400 hover:bg-white/10"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">

                  <Icon
                    size={30}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="mt-8 text-5xl font-bold text-white">

                  {inView && (
                    <CountUp
  end={item.number}
  duration={2}
/>
                  )}

                  {item.suffix}

                </h3>

                <h4 className="mt-4 text-xl font-semibold text-white">

                  {item.title}

                </h4>

                <p className="mt-3 leading-7 text-slate-300">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default CompanyStats;