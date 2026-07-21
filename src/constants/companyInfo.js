export const COMPANY_INFO = {
  name: "Karmyug",
  tagline: "One suite. Every workflow, on the same page.",
  description:
    "Karmyug builds the operating suite for growing teams — sales, work and valuation, unified under one roof.",
  email: "official@karmyug.co",
  supportEmail: "official@karmyug.co",
  phone: " +91 8770924535, +91  8962241437",
  // Dedicated number used by every "Schedule a Call" button site-wide so it
  // opens the phone dialer directly (tel:) instead of email or a modal.
  scheduleCallNumber: "+918770924535",
  address: "A12 Takshila Parisar, 80 Feet Road, Ratlam, Madhya Pradesh, 457001",
  social: {
    linkedin:
      "https://www.linkedin.com/company/karmyugtechzone/posts/?feedView=all",
    twitter: "https://x.com/KarmyugTechz",
    youtube: "https://www.youtube.com/@karmyugtechzone-u5g",
    github: "https://github.com/karmyug",
    instagram:
      "https://www.instagram.com/karmyug_techzone?igsh=M2twbHFrcm00bG11",
  },
};

// Ready-to-use tel: href for every "Schedule a Call" button — importing this
// instead of re-deriving it keeps the number consistent across the site.
export const SCHEDULE_CALL_HREF = `tel:${COMPANY_INFO.scheduleCallNumber}`;

// EmailJS config for the contact form (src/pages/Contact/Contact.jsx).
// Set these three values as Vite env vars to send real emails to
// official@karmyug.co: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID,
// VITE_EMAILJS_PUBLIC_KEY (see README for the one-time EmailJS setup).
// Until they're set, the form automatically falls back to opening a
// pre-filled mailto draft, so it always works with zero configuration.
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

export const isEmailjsConfigured = Boolean(
  EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey
);
