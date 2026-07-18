import Seo from "@/components/Shared/Seo";
import CompanyHero from "./CompanyHero";
import WhoWeAre from "./WhoWeAre";
import MissionVision from "./MissionVision";
import AIPhilosophy from "./AIPhilosophy";
import TeamSection from "@/components/Team/TeamSection";
import CompanyCTA from "./CompanyCTA";

export default function About() {
  return (
    <main id="main-content" className="overflow-x-hidden bg-white">
      <Seo
        title="About Us"
        description="Learn about Karmyug Solutions — our mission, values and the AI-first approach behind HRMS, ValuXpert and Quixivo."
        path="/company/about"
      />
      <CompanyHero />
      <WhoWeAre />
      <MissionVision />
      <AIPhilosophy />
      <TeamSection />
      <CompanyCTA />
    </main>
  );
}
