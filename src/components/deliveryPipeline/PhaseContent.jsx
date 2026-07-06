import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const containerVariants = {
  initial: {
    opacity: 0,
    x: 80,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -80,
  },
};

const PhaseContent = ({ phase }) => {
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.article
          key={phase.id}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          className="grid lg:grid-cols-2 gap-16 items-center bg-white rounded-3xl border border-slate-200 p-10 lg:p-14 shadow-sm"
        >
          {/* Left Side */}

          <div>
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: `${phase.color}15`,
                color: phase.color,
              }}
            >
              Phase {phase.step}
            </span>

            <h3 className="text-4xl font-bold text-slate-900 mt-6">
              {phase.heading}
            </h3>

            <p className="mt-6 text-slate-600 leading-8">{phase.description}</p>

            {/* Deliverables */}

            <ul className="mt-10 space-y-4">
              {phase.points.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} color={phase.color} />

                  <span className="text-slate-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Side */}

          <motion.div
            key={phase.image}
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex justify-center"
          >
            <img
              src={phase.image}
              alt={phase.title}
              loading="lazy"
              className="max-w-md w-full"
            />
          </motion.div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
};

export default PhaseContent;
