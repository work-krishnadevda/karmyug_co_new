import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Wraps a product/dashboard screenshot with a subtle 3D tilt + glow on
 * pointer move — used on product overview and feature sections.
 */
export default function HoverImage({ src, alt, className, imgClassName }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setStyle({ rotateX: y * -8, rotateY: x * 8 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({ rotateX: 0, rotateY: 0 })}
      animate={{ rotateX: style.rotateX, rotateY: style.rotateY }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "relative rounded-2xl border border-brand-border bg-white p-2 shadow-[0_30px_60px_-15px_rgba(46,90,167,0.25)]",
        className
      )}
    >
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-light-blue/30 via-transparent to-brand-accent/20 blur-2xl" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("w-full rounded-xl object-cover", imgClassName)}
      />
    </motion.div>
  );
}
