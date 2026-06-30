import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
          border
          p-8
          "
        >
          <div className="grid grid-cols-2 gap-5">
            {products.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`
                ${item.color}
                rounded-2xl
                p-5
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-lg
                `}
              >
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
