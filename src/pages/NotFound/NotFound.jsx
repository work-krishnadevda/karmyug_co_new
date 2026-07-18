import { motion } from "framer-motion";
import { Compass } from "lucide-react";

import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import CTAButton from "@/components/Shared/CTAButton";

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-screen items-center overflow-x-hidden bg-brand-bg">
      <Seo
        title="Page not found"
        description="The page you're looking for doesn't exist or has moved."
        path="/404"
        noindex
      />

      <Container className="relative py-32 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-light-blue/25 blur-[160px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center gap-6"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
            <Compass size={28} aria-hidden="true" />
          </span>
          <p className="font-heading text-7xl font-extrabold text-brand-primary sm:text-8xl">
            404
          </p>
          <h1 className="font-heading text-2xl font-bold text-brand-text sm:text-3xl">
            This page took a wrong turn
          </h1>
          <p className="max-w-md text-base text-brand-text-secondary">
            The page you're looking for doesn't exist, or it may have moved.
            Let's get you back on track.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/" className="cursor-pointer">
              Back to home
            </CTAButton>
            <CTAButton
              to="/contact"
              variant="outline"
              icon={false}
              className="cursor-pointer"
            >
              Contact support
            </CTAButton>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
