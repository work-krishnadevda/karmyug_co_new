import { motion } from "framer-motion";

import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import CTAButton from "@/components/Shared/CTAButton";
import HoverImage from "@/components/Shared/HoverImage";
import FeatureCard from "@/components/Product/FeatureCard";
import ModuleCard from "@/components/Product/ModuleCard";
import ProductCTA from "@/components/Product/ProductCTA";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/**
 * Single data-driven template shared by every product detail page
 * (HRMS, ValuXpert, Quixivo). Each page only supplies its `product`
 * object from src/data/productDetails.js — no per-product markup
 * duplication, per the project's code-quality requirements.
 */
export default function ProductLanding({ product, HeroSlot, SignatureSlot }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo
        title={product.metaTitle}
        description={product.metaDescription}
        path={`/products/${product.slug}`}
        schema={faqSchema}
      />

      {/* Hero — each product supplies its own HeroSlot for a distinct first impression;
          falls back to this shared template if none is given. */}
      {HeroSlot ? (
        <HeroSlot product={product} />
      ) : (
        <section className="relative bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="pointer-events-none absolute -top-24 left-0 h-[380px] w-[380px] rounded-full bg-brand-light-blue/25 blur-[150px]" />
          <div className="pointer-events-none absolute -bottom-16 right-0 h-[320px] w-[320px] rounded-full bg-brand-accent/15 blur-[140px]" />
          <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex rounded-full border border-brand-primary/15 bg-brand-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                {product.tagline}
              </span>
              <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                {product.heroTitle}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-text-secondary sm:text-lg">
                {product.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton
                  to="/contact?intent=schedule"
                  variant="primary"
                  size="lg"
                  className="cursor-pointer"
                >
                  Book a Demo
                </CTAButton>
                <CTAButton
                  to="/products"
                  variant="outline"
                  size="lg"
                  icon={false}
                  className="cursor-pointer"
                >
                  Compare products
                </CTAButton>
                {product.liveUrl && (
                  <CTAButton
                    href={product.liveUrl}
                    variant="ghost"
                    size="lg"
                    className="cursor-pointer"
                  >
                    Visit Live Product
                  </CTAButton>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <HoverImage
                src={product.screenshot}
                alt={`${product.name} product dashboard`}
              />
            </motion.div>
          </Container>
        </section>
      )}

      {/* Signature section — a product-specific visual story slotted between
          Overview and Features. Optional; omitted products just skip it. */}
      {SignatureSlot && <SignatureSlot product={product} />}

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Overview"
            title={`Why teams choose ${product.name}`}
            align="left"
          />
          <p className="mt-6 text-base leading-relaxed text-brand-text-secondary sm:text-lg">
            {product.overview}
          </p>
        </Container>
      </section>

      {/* Problems / Solutions */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-text sm:text-2xl">
                Before {product.name}
              </h2>
              <ul className="mt-5 space-y-3">
                {product.problems.map((problem) => (
                  <ModuleCard key={problem} text={problem} tone="warning" />
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-text sm:text-2xl">
                With {product.name}
              </h2>
              <ul className="mt-5 space-y-3">
                {product.solutions.map((solution) => (
                  <ModuleCard key={solution} text={solution} tone="positive" />
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Everything included, out of the box"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits + Industries */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-brand-text sm:text-2xl">
              Benefits
            </h2>
            <ul className="mt-5 space-y-3">
              {product.benefits.map((benefit) => (
                <ModuleCard key={benefit} text={benefit} />
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-brand-text sm:text-2xl">
              Built for
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {product.industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-brand-border bg-brand-bg px-4 py-2 text-sm font-medium text-brand-text"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            className="mb-8"
          />
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-brand-border bg-white px-6"
          >
            {product.faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      <ProductCTA name={product.name} />
    </main>
  );
}
