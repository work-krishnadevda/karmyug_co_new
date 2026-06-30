import {
  Code2,
  Megaphone,
  TrendingUp,
  Users,
  BriefcaseBusiness,
  Boxes,
  Bot,
  Globe,
  MonitorSmartphone,
  Palette,
  CloudCog,
  ShieldCheck,
} from "lucide-react";

// import itSolutions from "@/assets/services/it-solutions.webp";
// import digitalMarketing from "@/assets/services/digital-marketing.webp";
// import businessGrowth from "@/assets/services/business-growth.webp";
// import crm from "@/assets/services/crm.webp";
// import hrms from "@/assets/services/hrms.webp";
// import erp from "@/assets/services/erp.webp";
// import ai from "@/assets/services/ai.webp";
// import support from "@/assets/services/global-support.webp";
// import webApp from "@/assets/services/web-app.webp";
// import branding from "@/assets/services/branding.webp";
// import cloud from "@/assets/services/cloud.webp";
// import cybersecurity from "@/assets/services/cybersecurity.webp";

export const services = [
  {
    id: 1,
    slug: "it-solutions",

    showOnHome: true,

    title: "IT Solutions",

    badge: "Software",

    icon: Code2,

    // image: itSolutions,

    color: "#F5A000",

    metaTitle: "Custom IT Solutions | Software Development Company",

    metaDescription:
      "Build secure, scalable and high-performance software solutions including enterprise applications, portals, web systems and digital transformation services.",

    keywords: [
      "IT Solutions",
      "Software Development",
      "Enterprise Software",
      "Custom Software",
      "Business Applications",
    ],

    shortDescription:
      "Custom software, enterprise applications and digital platforms engineered for scalability, performance and long-term business growth.",

    description:
      "Our IT solutions help businesses streamline operations through secure, scalable and modern software development. From startup MVPs to enterprise-grade applications, we design, develop and maintain custom digital solutions tailored to your workflows, helping improve efficiency, automation and customer experience.",

    features: [
      "Custom Software Development",
      "Enterprise Applications",
      "Business Process Automation",
      "API Integration",
      "System Modernization",
      "Technical Consulting",
    ],
  },

  {
    id: 2,

    slug: "digital-marketing",

    showOnHome: true,

    title: "Digital Marketing",

    badge: "Marketing",

    icon: Megaphone,

    // image: digitalMarketing,

    color: "#F5A000",

    metaTitle: "Digital Marketing Services | SEO | PPC | Social Media",

    metaDescription:
      "Drive qualified leads through SEO, Google Ads, Meta Ads, content marketing, social media management and conversion optimization.",

    keywords: [
      "Digital Marketing",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Lead Generation",
    ],

    shortDescription:
      "Increase online visibility, generate qualified leads and maximize ROI with data-driven digital marketing campaigns.",

    description:
      "Our digital marketing services combine technical SEO, Local SEO, Google Ads, Meta Ads, social media marketing, content strategy and performance analytics to help businesses rank higher, generate quality leads and grow sustainably.",

    features: [
      "SEO & Local SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
  },

  {
    id: 3,

    slug: "business-growth",

    showOnHome: true,

    title: "Business Growth",

    badge: "Growth",

    icon: TrendingUp,

    // image: businessGrowth,

    color: "#F5A000",

    metaTitle: "Business Growth Solutions & Process Automation",

    metaDescription:
      "Scale your business through automation, dashboards, analytics and workflow optimization that improve productivity and profitability.",

    keywords: [
      "Business Growth",
      "Automation",
      "Workflow",
      "Business Strategy",
      "Analytics",
    ],

    shortDescription:
      "Scale operations through intelligent automation, KPI dashboards and strategic digital transformation.",

    description:
      "We help organizations improve productivity by automating repetitive workflows, creating business dashboards, identifying growth opportunities and implementing scalable digital strategies that reduce costs while improving operational efficiency.",

    features: [
      "Business Strategy",
      "Workflow Automation",
      "KPI Dashboards",
      "Performance Analytics",
      "Digital Transformation",
      "Business Consulting",
    ],
  },

  {
    id: 4,

    slug: "crm-development",

    showOnHome: true,

    title: "CRM Development",

    badge: "CRM",

    icon: Users,

    // image: crm,

    color: "#F5A000",

    metaTitle: "Custom CRM Development Company",

    metaDescription:
      "Develop intelligent CRM software for customer management, lead tracking, sales automation and business growth.",

    keywords: [
      "CRM Development",
      "CRM Software",
      "Sales CRM",
      "Lead Management",
      "Customer Management",
    ],

    shortDescription:
      "Centralize customers, leads and sales operations using a custom CRM platform designed around your business.",

    description:
      "Our CRM solutions simplify lead management, sales pipelines, follow-ups, quotations, customer interactions and reporting. We integrate WhatsApp, email automation and role-based dashboards to improve sales efficiency and customer relationships.",

    features: [
      "Lead Management",
      "Sales Pipeline",
      "Customer Database",
      "WhatsApp Integration",
      "Email Automation",
      "Role Based Access",
    ],
  },

  {
    id: 5,

    slug: "hrms-development",

    showOnHome: true,

    title: "HRMS Development",

    badge: "HRMS",

    icon: BriefcaseBusiness,

    // image: hrms,

    color: "#F5A000",

    metaTitle: "HRMS Software Development Company",

    metaDescription:
      "Modern HRMS software for payroll, attendance, employee management, onboarding and leave management.",

    keywords: [
      "HRMS",
      "Payroll Software",
      "Attendance",
      "Employee Management",
      "Leave Management",
    ],

    shortDescription:
      "Digitize HR operations with an intelligent HRMS platform for employee management and payroll automation.",

    description:
      "Our HRMS software simplifies employee onboarding, attendance, payroll processing, leave management, document storage and workforce analytics, enabling HR teams to manage operations efficiently from a single secure platform.",

    features: [
      "Employee Management",
      "Payroll",
      "Attendance",
      "Leave Management",
      "Onboarding",
      "Reports & Analytics",
    ],
  },

  {
    id: 6,

    slug: "erp-development",

    showOnHome: false,

    title: "ERP Systems",

    badge: "ERP",

    icon: Boxes,

    // image: erp,

    color: "#F5A000",

    metaTitle: "Custom ERP Software Development",

    metaDescription:
      "Enterprise ERP software for inventory, finance, manufacturing, procurement and operations management.",

    keywords: [
      "ERP",
      "Enterprise Software",
      "Inventory Management",
      "Accounting",
      "Manufacturing ERP",
    ],

    shortDescription:
      "Integrate finance, inventory, procurement and operations into one powerful ERP solution.",

    description:
      "Our ERP software helps businesses manage inventory, finance, procurement, manufacturing, sales and reporting through one centralized enterprise platform that improves efficiency and data visibility.",

    features: [
      "Inventory Management",
      "Finance Module",
      "Procurement",
      "Manufacturing",
      "Accounting",
      "Advanced Reporting",
    ],
  },
  {
    id: 7,

    slug: "ai-automation",

    showOnHome: true,

    title: "AI Automation",

    badge: "AI",

    icon: Bot,

    // image: ai,

    color: "#F5A000",

    metaTitle: "AI Automation Solutions | AI Chatbots & Business Automation",

    metaDescription:
      "Automate business operations with AI chatbots, intelligent workflows, document processing, lead scoring and custom AI solutions.",

    keywords: [
      "AI Automation",
      "Artificial Intelligence",
      "AI Chatbot",
      "Workflow Automation",
      "Business Automation",
    ],

    shortDescription:
      "Transform repetitive tasks into intelligent automated workflows powered by Artificial Intelligence.",

    description:
      "Our AI automation solutions help businesses reduce manual work, improve decision-making and increase productivity through AI-powered chatbots, workflow automation, intelligent document processing, predictive analytics and lead scoring systems.",

    features: [
      "AI Chatbots",
      "Workflow Automation",
      "Lead Scoring",
      "Document Processing",
      "AI Assistants",
      "Predictive Analytics",
    ],
  },

  {
    id: 8,

    slug: "global-support",

    showOnHome: false,

    title: "Global Support",

    badge: "Support",

    icon: Globe,

    // image: support,

    color: "#F5A000",

    metaTitle: "Global IT Support & Technical Assistance",

    metaDescription:
      "24/7 technical support, multilingual customer assistance and infrastructure monitoring for businesses worldwide.",

    keywords: [
      "Technical Support",
      "Global Support",
      "IT Support",
      "24/7 Support",
      "Maintenance",
    ],

    shortDescription:
      "Reliable global technical support to keep your digital products running around the clock.",

    description:
      "Our support services ensure your applications remain secure, stable and optimized through proactive monitoring, issue resolution, infrastructure maintenance and multilingual customer assistance.",

    features: [
      "24/7 Technical Support",
      "Application Maintenance",
      "Infrastructure Monitoring",
      "Performance Optimization",
      "Issue Resolution",
      "Global Assistance",
    ],
  },

  {
    id: 9,

    slug: "web-app-development",

    showOnHome: true,

    title: "Web & App Development",

    badge: "Development",

    icon: MonitorSmartphone,

    // image: webApp,

    color: "#F5A000",

    metaTitle: "Website & Web Application Development Company",

    metaDescription:
      "Build responsive websites, business portals, dashboards and Progressive Web Apps using modern technologies like React and Node.js.",

    keywords: [
      "Website Development",
      "Web Application",
      "React Development",
      "Node.js",
      "PWA",
    ],

    shortDescription:
      "Modern websites and scalable web applications designed for speed, security and exceptional user experience.",

    description:
      "We develop high-performance websites, admin dashboards, customer portals and Progressive Web Applications using React, Node.js and modern cloud technologies with SEO, responsiveness and scalability built in.",

    features: [
      "Responsive Websites",
      "React Development",
      "Node.js Backend",
      "Progressive Web Apps",
      "Admin Dashboards",
      "API Development",
    ],
  },

  {
    id: 10,

    slug: "brand-content",

    showOnHome: false,

    title: "Brand & Content",

    badge: "Branding",

    icon: Palette,

    // image: branding,

    color: "#F5A000",

    metaTitle: "Brand Identity & Content Marketing Services",

    metaDescription:
      "Build a memorable brand with professional logo design, content strategy, copywriting and visual identity services.",

    keywords: [
      "Brand Identity",
      "Branding",
      "Content Marketing",
      "Logo Design",
      "Content Strategy",
    ],

    shortDescription:
      "Create a strong digital identity with professional branding and content marketing solutions.",

    description:
      "Our branding specialists develop impactful visual identities, logo systems, content strategies, website copy and marketing assets that strengthen brand recognition and build long-term customer trust.",

    features: [
      "Logo Design",
      "Brand Guidelines",
      "Content Strategy",
      "Website Copywriting",
      "Marketing Assets",
      "Social Content",
    ],
  },

  {
    id: 11,

    slug: "cloud-devops",

    showOnHome: false,

    title: "Cloud & DevOps",

    badge: "Cloud",

    icon: CloudCog,

    // image: cloud,

    color: "#F5A000",

    metaTitle: "Cloud Infrastructure & DevOps Services",

    metaDescription:
      "Deploy scalable cloud infrastructure with AWS, Docker, Kubernetes, CI/CD automation and monitoring solutions.",

    keywords: ["Cloud", "DevOps", "AWS", "Docker", "CI/CD"],

    shortDescription:
      "Cloud infrastructure and DevOps solutions that deliver secure, scalable and highly available applications.",

    description:
      "Our cloud engineers build secure infrastructure, automate deployments, implement CI/CD pipelines, configure monitoring systems and optimize cloud environments to ensure maximum uptime and performance.",

    features: [
      "AWS Deployment",
      "Docker",
      "CI/CD Pipelines",
      "Cloud Migration",
      "Monitoring",
      "Backup & Recovery",
    ],
  },

  {
    id: 12,

    slug: "cybersecurity",

    showOnHome: true,

    title: "Cybersecurity",

    badge: "Security",

    icon: ShieldCheck,

    // image: cybersecurity,

    color: "#F5A000",

    metaTitle: "Cybersecurity Services | Security Audit & Data Protection",

    metaDescription:
      "Protect your business with security audits, penetration testing, SSL implementation, firewall protection and compliance consulting.",

    keywords: [
      "Cybersecurity",
      "Security Audit",
      "Penetration Testing",
      "SSL",
      "Data Protection",
    ],

    shortDescription:
      "Comprehensive cybersecurity solutions to secure applications, infrastructure and sensitive business data.",

    description:
      "We safeguard your digital ecosystem through security audits, vulnerability assessments, penetration testing, firewall configuration, SSL implementation and compliance consulting to reduce cyber risks and protect valuable business assets.",

    features: [
      "Security Audits",
      "Penetration Testing",
      "SSL Implementation",
      "Firewall & WAF",
      "Compliance Consulting",
      "Risk Assessment",
    ],
  },
];
