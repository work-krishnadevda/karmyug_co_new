import { motion } from "framer-motion";

const TimelineItem = ({ step, index, activeStep, onClick }) => {
  const active = index <= activeStep;

  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center group"
    >
      <motion.div
        animate={{
          background: active ? step.color : "#ffffff",
          scale: index === activeStep ? 1.15 : 1,
          color: active ? "#fff" : "#64748B",
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative z-10 w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center font-bold shadow-sm"
      >
        {step.step}
      </motion.div>

      <h3
        className={`mt-4 font-semibold transition-colors ${
          index === activeStep ? "text-slate-900" : "text-slate-500"
        }`}
      >
        {step.title}
      </h3>
    </button>
  );
};

export default TimelineItem;
