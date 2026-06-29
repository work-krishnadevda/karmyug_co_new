import React from "react";
import { motion } from "framer-motion";

// Add your imports here, e.g., import DiscoveryIcon from "...";
const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We learn your goals.",
    color: "bg-blue-100",
  },
  {
    id: "02",
    title: "Design",
    desc: "UI mockups aligned.",
    color: "bg-indigo-100",
  },
  {
    id: "03",
    title: "Develop",
    desc: "Agile sprints.",
    color: "bg-purple-100",
  },
  {
    id: "04",
    title: "Launch",
    desc: "Deployment & Support.",
    color: "bg-pink-100",
  },
  {
    id: "05",
    title: "Scale",
    desc: "Growth monitoring.",
    color: "bg-orange-100",
  },
  {
    id: "06",
    title: "Support",
    desc: "Ongoing maintenance.",
    color: "bg-emerald-100",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h1
          className="
      mt-5
      text-5xl md:text-7xl
      font-black
      tracking-tight
      leading-none
    "
        >
          <span
            className="
        block
        bg-gradient-to-r
        from-blue-600
        via-sky-500
        to-cyan-500
        bg-clip-text
        text-transparent
        transition-all
        duration-500
        hover:tracking-wide
      "
          >
            How We Work
          </span>
        </h1>

        <div className="relative w-full h-[600px] flex items-center justify-center">
          {/* Central Hub */}
          <motion.div
            className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl z-20"
            whileHover={{ scale: 1.05 }}
          >
            Karmyug
          </motion.div>

          {/* Orbiting Animation Container */}
          <motion.div
            className="absolute w-[500px] h-[500px] border border-dashed border-blue-200 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {steps.map((step, index) => {
              const angle = (index / steps.length) * 360;

              return (
                <motion.div
                  key={step.id}
                  className="absolute top-1/2 left-1/2 -ml-12 -mt-12 w-24 h-24 rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer border border-white bg-white"
                  style={{
                    // This centers the item on the origin first
                    transformOrigin: "center center",
                    // Rotate the position, then move it out exactly to the 250px radius
                    transform: `rotate(${angle}deg) translateY(-250px)`,
                  }}
                >
                  {/* Counter-rotate the inner content so it stays upright 
         The outer div rotates, so we must rotate the inner div 
         the opposite way to keep it readable.
      */}
                  <motion.div
                    style={{ rotate: -angle }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center mb-1`}
                    >
                      <span className="text-blue-700 font-bold text-[10px]">
                        {step.id}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase">
                      {step.title}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
