import { motion } from "framer-motion";
import { industries } from "@/data/industries";
import phone1 from "../../assets/images/hero/phone1.webp";
import phone2 from "../../assets/images/hero/phone2.webp";

const storyBeats = [
  {
    label: "Industry-Specific Solutions",
    detail:
      "Every implementation is customized for the operational needs of your business sector.",
  },
  {
    label: "Scalable Digital Platforms",
    detail:
      "Applications that grow alongside your teams, customers, and business operations.",
  },
  {
    label: "Secure & Future Ready",
    detail:
      "Built with enterprise-grade security, performance, and long-term scalability.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

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
        {/* Hero / Story Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — storytelling column */}

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.12 }}
            className="text-center lg:text-left"
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#F8E6A0] backdrop-blur-md"
            >
              Industries We Serve
            </motion.span>

            <motion.h2
              id="why-karmyug-heading"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Technology tailored
              <span className="block text-[#F8E6A0]">
                for every industry we power.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto mt-8 max-w-xl text-lg leading-8 text-blue-50 lg:mx-0"
            >
              Karmyug builds intelligent digital solutions for organizations
              across manufacturing, retail, banking, education, healthcare,
              logistics, and more. Every product is customized to match your
              industry's unique workflows, compliance requirements, and business
              goals.
            </motion.p>

            {/* Story beats — connected timeline instead of flat badge row */}
            <motion.ol
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto mt-12 max-w-xl space-y-7 border-l border-white/20 pl-8 text-left lg:mx-0"
            >
              {storyBeats.map((beat, index) => (
                <motion.li
                  key={beat.label}
                  variants={fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  {/* Connector node */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.35rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#F8E6A0] text-xs font-bold text-[#1E3F73] shadow-[0_0_0_4px_rgba(255,255,255,0.15)]"
                  >
                    {index + 1}
                  </span>

                  <p className="font-semibold text-white">{beat.label}</p>
                  <p className="mt-1 text-sm leading-6 text-blue-50/90">
                    {beat.detail}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          {/* Right — illustration, safely contained so it never clips or overflows */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center overflow-visible sm:max-w-md lg:max-w-lg"
          >
            {/* Glow */}
            <div className="absolute inset-0 m-auto h-[60%] w-[60%] rounded-full bg-[#86C5FF]/30 blur-[100px]" />

            {/* Back Phone */}
            <img
              src={phone2}
              loading="lazy"
              alt="Mobile application designed by Karmyug"
              width={548}
              height={1024}
              className="
                absolute
                left-[8%]
                top-[8%]
                w-[42%]
                max-w-[230px]
                -rotate-12
                drop-shadow-[0_35px_60px_rgba(0,0,0,.25)]
                transition-transform
                duration-500
                hover:scale-105
              "
            />

            {/* Front Phone */}
            <img
              src={phone1}
              loading="lazy"
              alt="Business dashboard software by Karmyug"
              width={596}
              height={1024}
              className="
                absolute
                bottom-[4%]
                right-[6%]
                w-[50%]
                max-w-[300px]
                rotate-6
                drop-shadow-[0_45px_70px_rgba(0,0,0,.35)]
                transition-transform
                duration-500
                hover:scale-105
              "
            />
          </motion.div>
        </div>

        {/* Features */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKarmyug;
