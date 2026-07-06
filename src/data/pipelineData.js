import discover from "../assets/pipeline/discover.png";
import design from "../assets/pipeline/design.png";
import develop from "../assets/pipeline/develop.png";
import launch from "../assets/pipeline/launch.png";
import scale from "../assets/pipeline/scale.png";
import support from "../assets/pipeline/support.png";

const pipeline = [
  {
    id: 1,
    step: "01",
    title: "Discovery",
    heading: "Discover & Strategize",
    description:
      "We dive deep into your business goals, audience, competitors, and technical requirements to create a clear project roadmap.",

    image: discover,

    color: "#145C61",

    points: [
      "Business Consultation",
      "Requirement Gathering",
      "Technical Planning",
      "Project Roadmap",
    ],
  },

  {
    id: 2,
    step: "02",
    title: "Design",
    heading: "Design Meaningful Experiences",
    description:
      "Our designers craft intuitive user journeys and visually engaging interfaces that align with your brand identity.",

    image: design,

    color: "#5F999C",

    points: [
      "Wireframes",
      "UI/UX Design",
      "Interactive Prototype",
      "Design System",
    ],
  },

  {
    id: 3,
    step: "03",
    title: "Develop",
    heading: "Build with Modern Technology",
    description:
      "Using agile methodologies, we build scalable, secure, and high-performance applications with complete transparency.",

    image: develop,

    color: "#CFB7A7",

    points: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Quality Assurance",
    ],
  },

  {
    id: 4,
    step: "04",
    title: "Launch",
    heading: "Deploy with Confidence",
    description:
      "Before launch, every feature is tested thoroughly to ensure your product is secure, optimized, and production-ready.",

    image: launch,

    color: "#C9913A",

    points: [
      "Performance Testing",
      "Security Audit",
      "Cloud Deployment",
      "Go-Live Support",
    ],
  },

  {
    id: 5,
    step: "05",
    title: "Scale",
    heading: "Grow & Optimize",
    description:
      "After launch, we analyze user behavior, improve performance, and implement new features to accelerate business growth.",

    image: scale,

    color: "#A94C17",

    points: [
      "SEO Optimization",
      "Analytics & Insights",
      "Performance Tuning",
      "Feature Enhancements",
    ],
  },

  {
    id: 6,
    step: "06",
    title: "Support",
    heading: "Long-Term Partnership",
    description:
      "We provide continuous maintenance, proactive monitoring, and dedicated support to keep your digital products running smoothly.",

    image: support,

    color: "#145C61",

    points: [
      "24/7 Monitoring",
      "Regular Updates",
      "Bug Fixes",
      "Technical Support",
    ],
  },
];

export default pipeline;
