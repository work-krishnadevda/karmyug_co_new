import { motion } from "framer-motion";

export default function FeatureCard({ feature, position }) {
  const Icon = feature.icon;

  const positions = {
    active: {
      y: 0,
      scale: 1,
      opacity: 1,
      rotate: 0,
      zIndex: 30,
      filter: "blur(0px)",
    },

    second: {
      y: 40,
      scale: 0.95,
      opacity: 0.7,
      rotate: -3,
      zIndex: 20,
      filter: "blur(.4px)",
    },

    third: {
      y: 80,
      scale: 0.9,
      opacity: 0.4,
      rotate: -6,
      zIndex: 10,
      filter: "blur(1px)",
    },
  };

  return (
    <motion.div
      animate={positions[position]}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="absolute w-full"
    >
      <div
        className="rounded-3xl border bg-white p-8 shadow-xl"
        style={{
          borderColor: feature.color,
        }}
      >
        <div
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{
            background: feature.bg,
          }}
        >
          <Icon size={34} color={feature.color} />
        </div>

        <h3 className="text-2xl font-bold">{feature.title}</h3>

        <p className="mt-4 text-slate-600 leading-7">{feature.description}</p>
      </div>
    </motion.div>
  );
}
