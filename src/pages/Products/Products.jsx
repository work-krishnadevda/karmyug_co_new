import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import CTAButton from "@/components/Shared/CTAButton";
import { products } from "@/data/products";

export default function Products() {
  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo
        title="Products"
        description="HRMS, ValuXpert and Quixivo — the Karmyug product suite for workforce management, valuation workflows and institute administration."
        path="/products"
      />

      <section className="relative bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-brand-light-blue/25 blur-[160px]" />
        <Container className="relative">
          <SectionHeading
            as="h1"
            eyebrow="Products"
            title="Three products. One suite of workflows."
            description="Every Karmyug product is built to work standalone or together — pick what your team needs today, add the rest when you're ready."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={product.href}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-brand-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-[0_24px_50px_-20px_rgba(46,90,167,0.25)]"
                >
                  <div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold text-brand-text ${product.color}`}
                    >
                      Product
                    </span>
                    <h2 className="mt-5 font-heading text-2xl font-bold text-brand-text">
                      {product.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-brand-text-secondary">
                      {product.description}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-primary">
                    Explore {product.title}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-24">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-primary px-6 py-14 text-center sm:px-16">
            <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
              Want a guided walkthrough?
            </h2>
            <p className="max-w-xl text-sm text-white/80 sm:text-base">
              Book a 20-minute demo and we'll show you the product that matches
              your workflow.
            </p>
            <CTAButton
              to="/contact?intent=schedule"
              variant="accent"
              size="lg"
              className="cursor-pointer"
            >
              Book a Demo
            </CTAButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
