import features from "../../data/features";
import phone1 from "../../assets/images/hero/phone1.png";
import phone2 from "../../assets/images/hero/phone2.png";

const WhyKarmyug = () => {
  return (
    <section
      id="why-karmyug"
      aria-labelledby="why-karmyug-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#2E5AA7] via-[#4E8DE7] to-[#86C5FF] py-20 md:py-28"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-44 -left-44 h-[500px] w-[500px] rounded-full bg-[#FFA62B]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#F8E6A0]/30 blur-[140px]" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#F8E6A0] backdrop-blur-md">
              Why Choose Karmyug
            </span>

            <h2
              id="why-karmyug-heading"
              className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Technology That
              <span className="block text-[#F8E6A0]">
                Accelerates Business Growth
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-blue-50 lg:mx-0">
              Karmyug delivers custom software, enterprise solutions, AI-powered
              automation, CRM, ERP, HRMS, and scalable web applications that
              help businesses automate workflows, improve efficiency, and
              achieve sustainable growth.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <button
                className="
                  rounded-full
                  bg-[#FFA62B]
                  px-8
                  py-4
                  font-semibold
                  text-[#173B73]
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ffb847]
                  hover:shadow-2xl
                "
              >
                Start Your Project
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white/20
                "
              >
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right */}

          <div className="relative flex h-[520px] items-center justify-center sm:h-[580px]">
            {/* Glow */}

            <div className="absolute h-[420px] w-[420px] rounded-full bg-[#86C5FF]/30 blur-[100px]" />

            {/* Back Phone */}

            <img
              src={phone2}
              loading="lazy"
              alt="Mobile application designed by Karmyug"
              className="
                absolute
                left-2
                top-16
                w-[180px]
                rotate-[-12deg]
                drop-shadow-[0_35px_60px_rgba(0,0,0,.25)]
                transition-all
                duration-500
                hover:scale-105
                sm:left-10
                sm:w-[230px]
                lg:left-16
                lg:w-[280px]
              "
            />

            {/* Front Phone */}

            <img
              src={phone1}
              loading="lazy"
              alt="Business dashboard software by Karmyug"
              className="
                absolute
                bottom-0
                right-2
                w-[220px]
                rotate-[8deg]
                drop-shadow-[0_45px_70px_rgba(0,0,0,.35)]
                transition-all
                duration-500
                hover:scale-105
                sm:right-6
                sm:w-[280px]
                lg:right-12
                lg:w-[340px]
              "
            />
          </div>
        </div>

        {/* Features */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/90
                  p-8
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#86C5FF]
                    transition-all
                    duration-300
                    group-hover:bg-[#2E5AA7]
                    group-hover:rotate-6
                  "
                >
                  <Icon
                    size={30}
                    className="text-[#2E5AA7] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#1E3F73]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKarmyug;
