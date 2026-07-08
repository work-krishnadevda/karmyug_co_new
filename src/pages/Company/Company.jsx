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
    <main className="bg-white overflow-x-hidden">
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