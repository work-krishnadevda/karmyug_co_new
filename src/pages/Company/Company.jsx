import Seo from "@/components/Shared/Seo";
import CompanyHero from "./CompanyHero";
import WhoWeAre from "./WhoWeAre";
import MissionVision from "./MissionVision";
import AIPhilosophy from "./AIPhilosophy";
import WhyChooseUs from "./WhyChooseUs";
import CompanyValues from "./CompanyValues";
import CompanyJourney from "./CompanyJourney";
// import CompanyStats from "./CompanyStats";
import CompanyCTA from "./CompanyCTA";
const Company = () => {
  return (
    <main id="main-content" className="bg-white overflow-x-hidden">
      <Seo
        title="About Karmyug"
        description="Meet Karmyug Solutions — our mission, values and the AI-first approach behind HRMS, ValuXpert and Quixivo."
        path="/company"
      />
      <CompanyHero />
      <WhoWeAre />
      <MissionVision />
      <AIPhilosophy />
      <WhyChooseUs />
      <CompanyValues />
      <CompanyJourney />
       {/* <CompanyStats /> */}
      <CompanyCTA /> 
    </main>
  );
};
export default Company;