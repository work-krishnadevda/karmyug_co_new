import { BriefcaseBusiness, Presentation, Lock } from "lucide-react";

/**
 * Single source of truth for every meeting type.
 * Every component (tabs, info panel, embed, contact form) reads from this
 * object instead of redefining title/duration/link on its own.
 *
 * To add a new meeting type, add one entry here — nothing else needs to change.
 */
export const MEETINGS = {
  consultation: {
    id: "consultation",
    title: "Quick Consultation",
    shortLabel: "Consultation",
    duration: "15 min",
    icon: BriefcaseBusiness,
    description:
      "Discuss your hiring needs, product questions, or how to get started with Karmyug.",
    calLink: "karmyug.co/15min",
  },
  demo: {
    id: "demo",
    title: "Product Demo",
    shortLabel: "Demo",
    duration: "30 min",
    icon: Presentation,
    description:
      "A complete walkthrough of the Karmyug platform, tailored to your workflow.",
    calLink: "karmyug.co/30min",
  },
  secret: {
    id: "secret",
    title: "Private Strategy Call",
    shortLabel: "Strategy Call",
    duration: "Custom",
    icon: Lock,
    description:
      "Exclusive discussion for enterprise partnerships, investors, and confidential projects.",
    calLink: "karmyug.co/secret",
  },
};

export const MEETING_LIST = Object.values(MEETINGS);

export const DEFAULT_MEETING = "consultation";