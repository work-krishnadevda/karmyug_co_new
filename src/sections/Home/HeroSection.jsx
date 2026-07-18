import { motion } from "framer-motion";
import RotatingWord from "../../components/Shared/RotatingWord";
import LogoMarquee from "../../components/Shared/LogoMarquee";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-x-hidden min-h-screen pt-20 md:pt-28 flex items-center justify-center bg-white">
      {/* Responsive Glows */}
      <div className="absolute left-0 top-0 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-blue-400/40 blur-[100px] md:blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-cyan-400/40 blur-[100px] md:blur-[180px]" />

      {/* Dots */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.4) 0.8px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white/80 backdrop-blur-md shadow-sm text-xs md:text-sm font-semibold text-slate-700"
        >
          Trusted by Businesses Across India
        </motion.div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-extrabold tracking-[-0.05em] leading-[1.1] md:leading-[0.92] text-slate-800 px-2">
          Build Smarter Businesses
          <br />
          with AI-Powered
          <br />
          <RotatingWord />
        </h1>

        <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-medium px-4">
          Karmyug Solutions helps organizations streamline operations, automate
          workflows, and accelerate growth through intelligent software products
          and AI-powered solutions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_25px_rgba(37,99,235,0.25)]"
          >
            Start for FREE
          </Link>
          <Link
            to="/contact?intent=schedule"
            className="w-full sm:w-auto bg-white border border-slate-300 hover:border-[#2563EB] hover:text-[#2563EB] text-slate-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
          >
            Schedule a Demo
          </Link>
        </div>

        <LogoMarquee />
      </div>
    </section>
  );
}
