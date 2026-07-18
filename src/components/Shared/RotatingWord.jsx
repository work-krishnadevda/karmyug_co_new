import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [
  "Automation",
  "Workflows",
  "Operations",
  "Intelligence",
  "Growth",
];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className="
      relative
      inline-block
      h-[1.2em]
      overflow-hidden
      align-middle
    "
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="
    inline-flex
    items-center
    justify-center
    text-[#2563EB]
    whitespace-nowrap
  "
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
