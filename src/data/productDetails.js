import {
  Users,
  Calendar,
  Wallet,
  ClipboardCheck,
  BarChart3,
  Smartphone,
  LineChart,
  ScanSearch,
  FileSpreadsheet,
  Building2,
  GraduationCap,
  CreditCard,
  Megaphone,
  Workflow,
  Bot,
  ShieldCheck,
} from "lucide-react";

import valuxpertShot from "@/assets/images/products/valuxpert/valuXpertOverview.webp";
import hrmsShot from "@/assets/images/products/crane/HRMS overview.webp";
import quixivoShot from "@/assets/images/products/quixivo/Quixivo overview.webp";

export const productDetails = {
  hrms: {
    slug: "hrms",
    name: "HRMS Crane",
    tagline: "Workforce Management",
    liveUrl: "https://karmyug-hrms.vercel.app/",
    metaTitle: "HRMS Software for Attendance, Payroll & Recruitment",
    metaDescription:
      "Karmyug HRMS unifies employee management, attendance, payroll, leave, recruitment and self-service into one workforce platform.",
    heroTitle: "Run payroll, attendance and recruitment from one place",
    heroDescription:
      "Karmyug HRMS replaces spreadsheets and disconnected tools with a single system your HR team and employees actually enjoy using.",
    screenshot: hrmsShot,
    overview:
      "Most growing teams start HR on spreadsheets, then bolt on a payroll tool, then a separate leave tracker. HRMS brings employee records, attendance, payroll, leave and recruitment together, so data entered once — a new hire, a salary change, a day of leave — reflects everywhere instantly.",
    problems: [
      "Payroll reconciliation takes days and depends on one person's spreadsheet",
      "Attendance is tracked manually or in a tool that doesn't talk to payroll",
      "Leave requests get lost in chat threads and email",
      "Recruitment pipelines live in someone's inbox, not a shared system",
    ],
    solutions: [
      "Automated payroll runs that pull directly from attendance and leave data",
      "Biometric, geo-tagged or app-based attendance, synced in real time",
      "A self-service portal for leave requests, approvals and balances",
      "A structured recruitment pipeline from application to offer",
    ],
    features: [
      { icon: Users, title: "Employee Management", desc: "Centralized records, documents and org structure for every employee." },
      { icon: Calendar, title: "Attendance", desc: "Multiple check-in methods with automatic shift and overtime rules." },
      { icon: Wallet, title: "Payroll", desc: "Compliant payroll runs with payslips generated automatically." },
      { icon: ClipboardCheck, title: "Leave Management", desc: "Configurable policies, approvals and balance tracking." },
      { icon: FileSpreadsheet, title: "Recruitment", desc: "Job postings, candidate pipelines and interview scheduling." },
      { icon: BarChart3, title: "Analytics", desc: "Headcount, attrition and payroll cost dashboards for leadership." },
      { icon: Smartphone, title: "Mobile App", desc: "Employees check in, apply for leave and view payslips on the go." },
      { icon: ShieldCheck, title: "Self Service", desc: "Employees update their own details without raising a ticket." },
    ],
    benefits: [
      "Cut payroll processing time from days to hours",
      "Reduce HR queries with employee self-service",
      "Stay compliant with statutory payroll rules",
      "Get real-time visibility into workforce costs",
    ],
    industries: ["Manufacturing", "Retail", "IT Services", "Healthcare", "Education", "Logistics"],
    faqs: [
      { q: "Can HRMS handle multiple pay structures and locations?", a: "Yes — HRMS supports multiple salary structures, tax rules and work locations within one account." },
      { q: "Is there a mobile app for employees?", a: "Yes, employees can mark attendance, apply for leave and download payslips from the mobile app." },
      { q: "Can we migrate existing employee data?", a: "Our onboarding team helps import existing employee, attendance and payroll history during setup." },
    ],
  },

  valuxpert: {
    slug: "valuxpert",
    name: "ValuXpert",
    tagline: "Valuation & Analytics",
    liveUrl: "https://valuxpert-landing-page.vercel.app/",
    metaTitle: "ValuXpert — Valuation Workflow & Business Intelligence Software",
    metaDescription:
      "ValuXpert streamlines valuation inspections, reporting and business intelligence for asset valuation and appraisal teams.",
    heroTitle: "Turn valuation inspections into reports in hours, not weeks",
    heroDescription:
      "ValuXpert digitizes the entire valuation workflow — from field inspection to final report — with built-in analytics for every engagement.",
    screenshot: valuxpertShot,
    overview:
      "Valuation teams juggle field inspections, photo evidence, comparable data and report formatting across separate tools. ValuXpert brings inspection capture, valuation models and reporting into one workflow, so analysts spend time on judgment calls, not formatting.",
    problems: [
      "Field inspection data arrives as scattered photos and notes",
      "Valuation reports are assembled manually in Word or Excel",
      "There's no central view of valuation trends across engagements",
      "Reviewers can't easily audit how a valuation figure was reached",
    ],
    solutions: [
      "A mobile inspection app that captures structured data and photos on-site",
      "Report templates that auto-populate from inspection and comparable data",
      "A business intelligence dashboard across all active engagements",
      "A full audit trail from raw inspection to final signed-off report",
    ],
    features: [
      { icon: ScanSearch, title: "Field Inspections", desc: "Structured, photo-backed inspection capture from any device." },
      { icon: FileSpreadsheet, title: "Automated Reporting", desc: "Report generation from inspection and comparable data." },
      { icon: LineChart, title: "Valuation Models", desc: "Configurable valuation methods per asset class." },
      { icon: BarChart3, title: "Business Intelligence", desc: "Portfolio-level dashboards across engagements and clients." },
      { icon: ClipboardCheck, title: "Review & Sign-off", desc: "Structured reviewer workflow with a full audit trail." },
      { icon: Building2, title: "Multi-Asset Support", desc: "Real estate, machinery, and business valuation in one system." },
    ],
    benefits: [
      "Cut report turnaround time significantly",
      "Standardize valuation quality across analysts",
      "Get portfolio-level visibility for leadership",
      "Reduce review cycles with a built-in audit trail",
    ],
    industries: ["Banking & NBFC", "Real Estate", "Insurance", "Manufacturing", "Legal & Advisory"],
    faqs: [
      { q: "Does ValuXpert support different asset classes?", a: "Yes — real estate, machinery, plant and business valuation each have configurable templates." },
      { q: "Can multiple analysts collaborate on one engagement?", a: "Yes, with role-based access for inspectors, analysts and reviewers." },
      { q: "Is there an offline mode for field inspections?", a: "The mobile inspection app supports offline capture that syncs once back online." },
    ],
  },

  quixivo: {
    slug: "quixivo",
    name: "Quixivo",
    tagline: "Institute Management",
    liveUrl: "https://quixivo.vercel.app/",
    metaTitle: "Quixivo — Institute & Student Management Software",
    metaDescription:
      "Quixivo manages admissions, fees, attendance and communication for schools, colleges and coaching institutes in one platform.",
    heroTitle: "Give your institute one system for students, fees and staff",
    heroDescription:
      "Quixivo replaces registers and scattered spreadsheets with a single platform for admissions, fees, attendance and parent communication.",
    screenshot: quixivoShot,
    overview:
      "Institutes typically manage admissions in one place, fees in another, and communicate with parents over WhatsApp or SMS separately. Quixivo unifies these into one system, so front-office staff, teachers and parents all see the same up-to-date information.",
    problems: [
      "Admissions and student records live in separate spreadsheets",
      "Fee collection and reminders are handled manually",
      "Attendance is recorded on paper or in disconnected apps",
      "Parent communication is inconsistent across staff",
    ],
    solutions: [
      "A single student record from admission through graduation",
      "Automated fee reminders and online payment collection",
      "Digital attendance with instant parent notifications",
      "A structured communication channel for announcements and updates",
    ],
    features: [
      { icon: GraduationCap, title: "Admissions", desc: "Digital enquiry-to-admission pipeline with document tracking." },
      { icon: CreditCard, title: "Fee Management", desc: "Fee plans, online payments and automated reminders." },
      { icon: Calendar, title: "Attendance", desc: "Class-wise digital attendance with parent notifications." },
      { icon: Megaphone, title: "Communication", desc: "Announcements and updates sent directly to parents." },
      { icon: BarChart3, title: "Analytics", desc: "Enrollment, fee collection and attendance dashboards." },
      { icon: Smartphone, title: "Parent App", desc: "Parents track attendance, fees and updates from their phone." },
    ],
    benefits: [
      "Reduce front-office admin workload",
      "Improve on-time fee collection",
      "Keep parents informed automatically",
      "Get a single source of truth for every student",
    ],
    industries: ["Schools", "Colleges", "Coaching Institutes", "Training Centers"],
    faqs: [
      { q: "Can Quixivo handle multiple campuses?", a: "Yes, Quixivo supports multi-branch institutes under one account with branch-level reporting." },
      { q: "Does it support online fee payments?", a: "Yes, parents can pay fees online with automatic receipt generation." },
      { q: "Is there a parent-facing app?", a: "Yes, parents get a dedicated app for attendance, fees and announcements." },
    ],
  },
};

export const productIcons = { Workflow, Bot };
