import { ROUTES } from "@/constants/routes";

export const PRODUCTS = [
  {
    id: "quixivo",
    name: "Quixivo",
    category: "CRM & Sales",
    tagline: "Unified business operations, run from one command center.",
    description:
      "Quixivo brings leads, pipelines, invoicing and team workflows into a single screen, so nothing waits on a second tool.",
    href: ROUTES.QUIXIVO,
    color: "primary",
    stats: [
      { label: "Faster lead response", value: "3.2x" },
      { label: "Tools replaced", value: "6+" },
    ],
    features: [
      "Pipeline & deal management",
      "Drip campaigns & automation",
      "100+ native integrations",
      "Real-time team dashboards",
    ],
    modules: [
      {
        name: "Leads",
        description:
          "Capture and score leads automatically from every channel.",
      },
      {
        name: "Pipelines",
        description: "Visual deal stages your sales team will actually update.",
      },
      {
        name: "Billing",
        description:
          "Quotes, invoices and recurring billing without leaving the CRM.",
      },
      {
        name: "Reports",
        description:
          "Forecast revenue with dashboards built for managers, not analysts.",
      },
    ],
  },
  {
    id: "crane",
    name: "Crane",
    category: "Workflow Automation",
    tagline: "Workflow automation that moves work, not just tickets.",
    description:
      "Crane turns repetitive approvals and handoffs into automated workflows, so work moves the moment it's ready.",
    href: ROUTES.CRANE,
    color: "accent",
    stats: [
      { label: "Manual steps removed", value: "70%" },
      { label: "Avg. approval time", value: "−4 days" },
    ],
    features: [
      "Drag-and-drop workflow builder",
      "Conditional approvals & routing",
      "Audit trail on every action",
      "Slack & email notifications",
    ],
    modules: [
      {
        name: "Builder",
        description: "Design multi-step workflows visually, no code required.",
      },
      {
        name: "Routing",
        description: "Send the right task to the right person, automatically.",
      },
      {
        name: "Reports",
        description: "See exactly where work is stuck, and for how long.",
      },
      {
        name: "Templates",
        description: "Start from prebuilt flows for HR, finance and ops.",
      },
    ],
  },
  {
    id: "valuxpert",
    name: "ValuXpert",
    category: "Valuation & Analytics",
    tagline: "Valuation & analytics built for decisive finance teams.",
    description:
      "ValuXpert models company and asset value with the rigor finance teams need, and the speed founders ask for.",
    href: ROUTES.VALUXPERT,
    color: "mint",
    stats: [
      { label: "Models per analyst", value: "5x" },
      { label: "Reporting time saved", value: "60%" },
    ],
    features: [
      "DCF, comparables & precedent models",
      "Scenario & sensitivity analysis",
      "Auditable, exportable reports",
      "Live market data feeds",
    ],
    modules: [
      {
        name: "Models",
        description:
          "Build DCF and comparable-company models from one workspace.",
      },
      {
        name: "Scenarios",
        description:
          "Stress-test assumptions and compare outcomes side by side.",
      },
      {
        name: "Reports",
        description: "Export board-ready valuation reports in a click.",
      },
    ],
  },
];

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);
