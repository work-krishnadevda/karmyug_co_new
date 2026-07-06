import { motion } from "framer-motion";

const SectionHeading = () => {
  return (
    <header className="relative mx-auto mb-20 max-w-3xl text-center">
      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#2E5AA7]"
      >
        Why Choose Karmyug
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl"
      >
        Your Success Is
        <span className="block text-[#2E5AA7]">Our Mission</span>
      </motion.h2>

      {/* Gradient Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 120 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-[#2E5AA7] via-[#86C5FF] to-[#FFA62B]"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600"
      >
        We build modern websites, scalable web applications, mobile apps,
        enterprise software, and AI-powered digital solutions that help
        businesses automate operations, improve efficiency, and grow with
        confidence.
      </motion.p>

      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-blue-100 blur-3xl opacity-50" />
        <div className="absolute right-0 top-10 h-40 w-40 rounded-full bg-orange-100 blur-3xl opacity-40" />
      </div>
    </header>
  );
};

export default SectionHeading;
