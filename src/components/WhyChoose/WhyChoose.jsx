import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeading from "./SectionHeading";
import FeatureCarousel from "./FeatureCarousel";

import whyChooseData from "../../data/whyChooseData";
import useCarousel from "../../hooks/useCarousel";

export default function WhyChoose() {
  const { active, next, previous, setPaused } = useCarousel(
    whyChooseData.length,
  );

  const activeColor = whyChooseData[active].color;

  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          background: `radial-gradient(circle at 80% 30%, ${activeColor}18 0%, transparent 45%)`,
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute inset-0"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <SectionHeading />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            We build websites, enterprise software, AI-powered applications, and
            digital products that help businesses automate operations, improve
            efficiency and scale faster.
          </p>

          {/* Highlights */}

          <div className="mt-10 space-y-4">
            {[
              "Dedicated Project Manager",
              "Transparent Pricing",
              "Weekly Agile Demos",
              "Post Launch Support",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  x: 6,
                }}
                className="flex items-center gap-3"
              >
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background: activeColor,
                  }}
                />

                <span className="text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              style={{
                background: activeColor,
              }}
              className="flex items-center gap-2 rounded-xl px-7 py-4 font-semibold text-white shadow-lg"
            >
              Start Your Project
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700"
            >
              View Portfolio
            </motion.button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative">
          <FeatureCarousel
            features={whyChooseData}
            active={active}
            setPaused={setPaused}
          />

          {/* Navigation */}

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={previous}
              className="rounded-full border bg-white p-3 shadow hover:bg-slate-50"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="rounded-full border bg-white p-3 shadow hover:bg-slate-50"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}

          <div className="mt-8 flex justify-center gap-3">
            {whyChooseData.map((_, index) => (
              <button
                key={index}
                onClick={() => {}}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === index ? "w-10" : "w-2.5 bg-slate-300"
                }`}
                style={{
                  background: active === index ? activeColor : "#CBD5E1",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
