import Container from "@/components/Shared/Container";
import CTAButton from "@/components/Shared/CTAButton";

export default function ProductCTA({ name }) {
  return (
    <section className="bg-white pb-24">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-primary px-6 py-14 text-center sm:px-16">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            See {name} on your own data
          </h2>
          <p className="max-w-xl text-sm text-white/80 sm:text-base">
            Book a 20-minute walkthrough — we'll show you the exact workflow
            your team will use daily.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton
              to="/contact?intent=schedule"
              variant="accent"
              size="lg"
              className="cursor-pointer"
            >
              Book a Demo
            </CTAButton>
            <CTAButton
              to="/contact"
              variant="outline"
              size="lg"
              icon={false}
              className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20 cursor-pointer"
            >
              Talk to Sales
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
