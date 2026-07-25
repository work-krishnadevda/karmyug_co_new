import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import {
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
} from "@/components/Shared/SocialIcons";
import OfficeMap from "@/assets/map image.png";
import Seo from "@/components/Shared/Seo";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import CTAButton from "@/components/Shared/CTAButton";
import {
  COMPANY_INFO,
  SCHEDULE_CALL_HREF,
  EMAILJS_CONFIG,
  isEmailjsConfigured,
} from "@/constants/companyInfo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How quickly can we get started?",
    a: "Most engagements kick off within a week of scoping. For HRMS, ValuXpert and Quixivo, onboarding is typically live within 2-4 weeks depending on data migration needs.",
  },
  {
    q: "Do you offer a trial or demo before we commit?",
    a: "Yes — every product page has a demo request, and we're happy to walk your team through a live environment before any contract is signed.",
  },
  {
    q: "Can Karmyug build something custom outside these three products?",
    a: "Absolutely. HRMS, ValuXpert and Quixivo are our flagship products, but a large share of our work is custom software, AI automation and enterprise integrations.",
  },
  {
    q: "What does support look like after launch?",
    a: "Every plan includes post-launch support with a dedicated point of contact. Response times and SLAs are agreed during scoping and vary by plan.",
  },
];

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: COMPANY_INFO.address,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat, 10 AM – 7 PM IST",
    href: undefined,
  },
];

const SOCIALS = [
  { icon: LinkedinIcon, href: COMPANY_INFO.social.linkedin, label: "LinkedIn" },
  {
    icon: TwitterIcon,
    href: COMPANY_INFO.social.twitter,
    label: "Twitter / X",
  },
  { icon: YoutubeIcon, href: COMPANY_INFO.social.youtube, label: "YouTube" },
  {
    icon: InstagramIcon,
    href: COMPANY_INFO.social.instagram,
    label: "Instagram",
  },
];

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 const handleChange = (field) => (event) => {
  let value = event.target.value;

  if (field === "phone") {
    value = value.replace(/\D/g, "").slice(0, 10);
  }

  setForm((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("Please fill in your name, email, phone number and message.");
      return;
    }
    setError("");
    setLoading(true);

    // Preferred path: EmailJS, a lightweight client-side email service, so the
    // message is delivered to official@karmyug.co without a custom backend.
    if (isEmailjsConfigured) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            to_email: COMPANY_INFO.email,
            from_name: form.name,
            from_email: form.email,
            phone: form.phone,
            message: form.message,
          },
          { publicKey: EMAILJS_CONFIG.publicKey },
        );
        setSubmitted(true);
        setForm(INITIAL_FORM);
      } catch {
        setError(
          "We couldn't send that automatically — please try again, or email us directly at " +
            COMPANY_INFO.email,
        );
      } finally {
        setLoading(false);
      }
      return;
    }

    // Fallback while EmailJS isn't configured yet: open a pre-filled mailto
    // draft so the message is never silently lost, while still showing an
    // in-page success state.
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email}, ${form.phone})`,
    );
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-border bg-white p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-success" aria-hidden="true" />
        <h3 className="font-heading text-xl font-bold text-brand-text">
          {isEmailjsConfigured ? "Message sent" : "Message ready to send"}
        </h3>
        <p className="max-w-sm text-sm text-brand-text-secondary">
          {isEmailjsConfigured
            ? `Thanks for reaching out — our team will reply to you at ${COMPANY_INFO.email} within one business day.`
            : `Your email client should have opened with a pre-filled draft to ${COMPANY_INFO.email}. Send it and our team will reply within one business day.`}
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="cursor-pointer"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-brand-text">
          Full name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={handleChange("name")}
          placeholder="Jane Doe"
          className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition-colors focus-visible:border-brand-primary"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-brand-text">
          Work email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange("email")}
          placeholder="jane@company.com"
          className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition-colors focus-visible:border-brand-primary"
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-brand-text"
        >
          Phone number
        </label>
       <input
  id="phone"
  type="tel"
  required
  value={form.phone}
  onChange={handleChange("phone")}
  placeholder="9876543210"
  inputMode="numeric"
  maxLength={10}
  className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition-colors focus-visible:border-brand-primary"
/>
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-brand-text"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Tell us a bit about your team and what you're looking to solve..."
          className="resize-none rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition-colors focus-visible:border-brand-primary"
        />
      </div>

      {error && (
        <p
          role="alert"
          className="sm:col-span-2 text-sm font-medium text-destructive"
        >
          {error}
        </p>
      )}

      <div className="sm:col-span-2">
        <CTAButton
          type="submit"
          size="lg"
          disabled={loading}
          className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              Sending...
            </span>
          ) : (
            "Send message"
          )}
        </CTAButton>
      </div>
    </form>
  );
}

function ScheduleDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule a call</DialogTitle>
          <DialogDescription>
            Tap below to call us directly — our team is available Mon–Sat,
            10 AM–7 PM IST.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <CTAButton
            href={SCHEDULE_CALL_HREF}
            icon={false}
            className="cursor-pointer"
          >
            Call {COMPANY_INFO.scheduleCallNumber}
          </CTAButton>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [scheduleOpen, setScheduleOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("intent") === "schedule") setScheduleOpen(true);
  }, [searchParams]);

  return (
    <main id="main-content" className="overflow-x-hidden bg-brand-bg">
      <Seo
        title="Contact"
        description="Get in touch with Karmyug Solutions — email, call or schedule time with our team to discuss HRMS, ValuXpert or Quixivo."
        path="/contact"
      />

      <ScheduleDialog open={scheduleOpen} onOpenChange={setScheduleOpen} />

      {/* Hero */}
      <section className="relative bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-accent/15 blur-[160px]" />
        <Container className="relative">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            align="left"
            title="Let's build something that fits your team"
            description="Whether it's HRMS, ValuXpert, Quixivo, or a custom build — tell us what you're working on and we'll point you in the right direction."
          />
          <div className="mt-8">
            <CTAButton
              href={SCHEDULE_CALL_HREF}
              variant="accent"
              className="cursor-pointer"
            >
              Schedule a Call
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Info cards */}
      <section className="pb-4">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  className="flex flex-col gap-3 rounded-2xl border border-brand-border bg-white p-6 transition-colors hover:border-brand-primary/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-secondary">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-brand-text">
                      {value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Form + Map */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-brand-border bg-white p-6 sm:p-8"
          >
            <h2 className="font-heading text-xl font-bold text-brand-text">
              Send us a message
            </h2>

            <p className="mt-1 text-sm text-brand-text-secondary">
              We typically reply within one business day.
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>

          {/* Office & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Office Map */}
            <a
              href="https://www.google.com/maps/place/Karmyug+Techzone+%7C+Best+IT+Training+Institute,+Computer+Courses+%26+Web+Development+in+Ratlam/@23.3395439,75.0218576,17z/data=!3m1!4b1!4m6!3m5!1s0x3963ffafc8ae38f9:0x6f48cfb9cc11731c!8m2!3d23.3395439!4d75.0244325!16s%2Fg%2F11lng4h7_w?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-brand-border bg-white"
            >
              <img
                src={OfficeMap}
                alt={`Map showing ${COMPANY_INFO.address}`}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-[380px]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="mt-2 text-sm font-medium text-white">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-between rounded-2xl border border-brand-border bg-white p-5">
              <p className="text-sm font-medium text-brand-text-secondary">
                Follow us
              </p>

              <div className="flex gap-2">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border text-brand-text-secondary transition-all duration-300 hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear often"
            description="Can't find what you're looking for? Send us a message above."
            className="mb-10"
          />
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQS.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`faq-${index}`}
                className="rounded-2xl border border-brand-border bg-brand-bg px-5"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-brand-text sm:text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-brand-text-secondary">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-brand-primary px-6 py-14 text-center sm:px-16"
          >
            <div className="pointer-events-none absolute -top-16 left-10 h-56 w-56 rounded-full bg-white/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-brand-accent/20 blur-[120px]" />
            <div className="relative flex flex-col items-center gap-5">
              <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                Still deciding? Let's talk it through.
              </h2>
              <p className="max-w-lg text-sm text-white/80 sm:text-base">
                A 15-minute call is usually enough to tell you whether Karmyug
                is the right fit.
              </p>
              <CTAButton
                href={SCHEDULE_CALL_HREF}
                variant="accent"
                size="lg"
                className="cursor-pointer"
              >
                Schedule a Call
              </CTAButton>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
