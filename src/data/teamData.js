/**
 * Meet Our Team — data source.
 *
 * Replace the `linkedin` URLs with the actual LinkedIn profile URLs.
 * Replace `photo: null` with imported images when available.
 */
import ShubhamPandey from "@/assets/Team/Shubham Pandey.webp";
import KrishnaSinghDevda from "@/assets/Team/Krishna Singh Devda.webp";
import VijaySinghSisodiya from "@/assets/Team/Vijay Singh Sisodiya.webp";
import AshishPandey from "@/assets/Team/Ashish Pandey.webp";
import TamannaParihar from "@/assets/Team/Tamanna Parihar.webp";
import DharmrajPatidar from "@/assets/Team/Dharmraj Patidar.webp";
import DeepakKeer from "@/assets/Team/Deepak Keer.webp";
import NehaGandhi from "@/assets/Team/Neha Gandhi.webp";
import PawanChouhan from "@/assets/Team/Pawan Chouhan.webp";
import RishabhSharma from "@/assets/Team/Rishabh Sharma.webp";

const BRAND_COLORS = ["2E5AA7", "86C5FF", "FFA62B", "234A8C"];

export const team = [
  {
    id: "member-01",
    name: "Shubham Pandey",
    role: "Co-founder | CEO",
    description:
      "Drives strategic decisions, balances priorities, and keeps every effort aligned with the company's vision and long-term goals.",
    linkedin: "https://www.linkedin.com/in/shubham-pandey-cofounder/",
    photo: ShubhamPandey,
  },
  {
    id: "member-02",
    name: "Krishna Singh Devda",
    role: "Full Stack Product Engineer",
    description:
      "Diagnoses challenges quickly and delivers reliable full-stack solutions that keep products and projects moving forward.",
    linkedin: "https://www.linkedin.com/in/krishna-singh-devda/",
    photo: KrishnaSinghDevda,
  },
  {
    id: "member-03",
    name: "Vijay Singh Sisodiya",
    role: "Forward Deployed Engineer",
    description:
      "Adaptable across multiple domains, confidently solving diverse technical and business challenges for clients.",
    linkedin: "https://www.linkedin.com/in/vijay-singh-b97469369/",
    photo: VijaySinghSisodiya,
  },
  {
    id: "member-04",
    name: "Ashish Pandey",
    role: "Director of Creative & Digital Media",
    description:
      "Leads creative direction with resilience, transforming challenges into impactful digital experiences and compelling brand stories.",
    linkedin: "https://www.linkedin.com/in/aashishpandeycreative",
    photo: AshishPandey,
  },
  {
    id: "member-05",
    name: "Tamanna Parihar",
    role: "HR Manager",
    description:
      "Builds strong teams by identifying great talent, nurturing growth, and helping every employee perform at their best.",
    linkedin: "https://www.linkedin.com/in/tamanna-parihar-768461403",
    photo: TamannaParihar,
  },
  {
    id: "member-06",
    name: "Dharmraj Patidar",
    role: "Junior JavaScript Developer",
    description:
      "Focused on delivering practical solutions, solving problems efficiently, and shipping reliable features with precision.",
    linkedin: "https://www.linkedin.com/in/dharmarajpatidar",
    photo: DharmrajPatidar,
  },
  {
    id: "member-07",
    name: "Deepak Keer",
    role: "Junior JavaScript Developer",
    description:
      "Continuously explores new technologies, learns rapidly, and applies fresh knowledge to strengthen the team's capabilities.",
    linkedin: "https://www.linkedin.com/in/deepak-keer-1276a4361",
    photo: DeepakKeer,
  },
  {
    id: "member-08",
    name: "Neha Gandhi",
    role: "Junior JavaScript Developer",
    description:
      "Analyzes every detail with curiosity, asks the right questions, and uncovers solutions others often overlook.",
    linkedin: "https://www.linkedin.com/in/neha-gandhi-103529399",
    photo: NehaGandhi,
  },
  {
    id: "member-09",
    name: "Pawan Chouhan",
    role: "Junior JavaScript Developer",
    description:
      "Transforms complex challenges into simple, efficient solutions through determination, speed, and sharp problem-solving skills.",
    linkedin: "https://www.linkedin.com/in/pawan-chouhan31",
    photo: PawanChouhan,
  },
  {
    id: "member-10",
    name: "Rishabh Sharma",
    role: "Junior JavaScript Developer",
    description:
      "Delivers consistent, high-quality results with quiet confidence, letting impactful work speak louder than words.",
    linkedin: "https://www.linkedin.com/in/rishabh-sharma-63a439366",
    photo: RishabhSharma,
  },
].map((member, index) => ({
  ...member,
  accentColor: BRAND_COLORS[index % BRAND_COLORS.length],
}));
