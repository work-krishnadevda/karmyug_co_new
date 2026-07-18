import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import CTAButton from "@/components/Shared/CTAButton";
import TestimonialCard from "@/components/Testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            align="left"
            className="mb-0"
          />
          <CTAButton
            to="/testimonials"
            variant="outline"
            className="cursor-pointer"
          >
            View all stories
          </CTAButton>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
