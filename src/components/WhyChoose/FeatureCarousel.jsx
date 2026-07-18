import { AnimatePresence, motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const FeatureCarousel = ({ features, active, setPaused }) => {
  const total = features.length;

  const getPosition = (index) => {
    if (index === active) return "active";
    if (index === (active + 1) % total) return "second";
    if (index === (active + 2) % total) return "third";
    return "hidden";
  };

  return (
    <div
      className="relative h-[460px] w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        {features.map((feature, index) => {
          const position = getPosition(index);

          if (position === "hidden") return null;

          return (
            <motion.div
              key={feature.id}
              layout
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            >
              <FeatureCard feature={feature} position={position} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FeatureCarousel;
