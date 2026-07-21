import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
} from "@/components/Shared/SocialIcons";

import Container from "@/components/Shared/Container";
import { COMPANY_INFO } from "@/constants/companyInfo";
import Karmyuglogo from "@/assets/logos/Karmyuglogo.webp";

const FOOTER_LINKS = {
  Products: [
    { label: "HRMS", to: "/products/hrms" },
    { label: "ValuXpert", to: "/products/valuxpert" },
    { label: "Quixivo", to: "/products/quixivo" },
    { label: "All products", to: "/products" },
  ],
  Company: [
    { label: "About us", to: "/company/about" },
    { label: "Partners", to: "/company/partners" },
    { label: "Blog", to: "/company/blog" },
  ],
  Services: [
    { label: "AI Automation", to: "/services/ai-automation" },
    { label: "Cloud & DevOps", to: "/services/cloud-devops" },
    { label: "HRMS Development", to: "/services/hrms-development" },
    { label: "All services", to: "/services" },
  ],
  Resources: [
    { label: "Testimonials", to: "/testimonials" },
    { label: "Contact us", to: "/contact" },
    { label: "Privacy policy", to: "/privacy-policy" },
    { label: "Terms of service", to: "/terms" },
  ],
};

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

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    // No backend wired yet — acknowledge locally so the control never feels dead.
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return (
      <p className="flex items-center gap-2 text-sm font-medium text-brand-light-blue">
        <CheckCircle2 size={18} aria-hidden="true" />
        You're subscribed — welcome aboard.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <label htmlFor="footer-newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 outline-none transition-colors focus-visible:border-brand-light-blue"
      />
      <button
        type="submit"
        aria-label="Subscribe to the newsletter"
        className="flex shrink-0 items-center justify-center rounded-xl bg-brand-accent px-3.5 py-2.5 text-brand-text transition-transform hover:scale-105 cursor-pointer"
      >
        <ArrowRight size={18} />
      </button>
    </form>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0b1730] text-slate-300">
      {/* ambient brand glow, matches hero treatment for visual continuity */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-brand-primary/30 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-brand-accent/10 blur-[160px]" />

      <Container className="relative py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={Karmyuglogo}
                alt="Karmyug"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                KARMYUG
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {COMPANY_INFO.description}
            </p>

            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail
                    size={16}
                    className="text-brand-light-blue"
                    aria-hidden="true"
                  />
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone
                    size={16}
                    className="text-brand-light-blue"
                    aria-hidden="true"
                  />
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin
                  size={16}
                  className="shrink-0 text-brand-light-blue"
                  aria-hidden="true"
                />
                {COMPANY_INFO.address}
              </li>
            </ul>

            <div className="flex gap-3 pt-1">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white text-[#0b1730] transition-all hover:border-brand-light-blue/50  font-bold"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  {heading}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-slate-400 transition-colors hover:text-brand-light-blue"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            © {year} {COMPANY_INFO.name} Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
