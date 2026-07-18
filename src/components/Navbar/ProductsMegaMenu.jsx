import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MegaMenu({ open, products }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.25 }}
          className="
          absolute
          left-1/2
          -translate-x-1/2
          top-full
          mt-4
          w-[750px]
          rounded-3xl
          bg-white
          shadow-2xl
          border border-[--brand-border]
          p-8
          "
        >
          <div className="grid grid-cols-3 gap-4">
            {products.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`
                group
                ${item.color}
                rounded-2xl
                p-5
                border border-transparent
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[color-mix(in_srgb,var(--brand-primary)_25%,transparent)]
                hover:shadow-lg
                `}
              >
                <h3 className="font-bold text-base text-[--brand-text] mb-2">{item.title}</h3>

                <p className="text-sm text-[--brand-text-secondary] leading-relaxed">
                  {item.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[--brand-primary] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  View product
                  <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-[--brand-bg] px-5 py-4">
            <p className="text-sm text-[--brand-text-secondary]">
              Not sure which product fits your workflow?
            </p>
            <Link
              to="/contact?intent=schedule"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[--brand-primary] hover:text-[--brand-primary-dark] transition-colors"
            >
              Talk to our team
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
