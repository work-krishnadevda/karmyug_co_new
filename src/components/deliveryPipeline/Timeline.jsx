import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

const Timeline = ({ steps, activeStep, setActiveStep }) => {
  const progress = (activeStep / (steps.length - 1)) * 100;

  return (
    <div className="relative">
      {/* Background Line */}

      <div className="absolute top-6 left-0 w-full h-[3px] bg-slate-200 rounded-full" />

      {/* Progress */}

      <motion.div
        className="absolute top-6 left-0 h-[3px] rounded-full"
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: 0.5,
        }}
        style={{
          background: "linear-gradient(90deg,#20878E,#92C4C6,#F3C375,#D66F29)",
        }}
      />

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-10">
        {steps.map((step, index) => (
          <TimelineItem
            key={step.id}
            step={step}
            index={index}
            activeStep={activeStep}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
