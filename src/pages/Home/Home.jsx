import Seo from "@/components/Shared/Seo";
import { COMPANY_INFO } from "@/constants/companyInfo";
import HeroSection from "@/sections/Home/HeroSection";
import ProductsHeading from "@/sections/Home/ProductsHeading";
import ProductsShowcase from "@/sections/Home/ProductsShowcase";
import Stats from "@/sections/Home/Stats";
import CoreServices from "@/sections/Home/CoreServices";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import WhyKarmyug from "@/sections/Home/WhyKarmyug";
import DeliveryPipeline from "@/components/deliveryPipeline/DeliveryPipeline";
import FeaturedProjects from "@/sections/Home/FeaturedProjects";

import TestimonialsPreview from "@/sections/Home/TestimonialsPreview";
import CTASection from "@/sections/Home/CTASection";
import TeamSection from "@/components/Team/TeamSection";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_INFO.name,
  url: "https://karmyug.co/",
  logo: "https://karmyug.co/karmyuglogo.png",
  description: COMPANY_INFO.description,
  email: COMPANY_INFO.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: COMPANY_INFO.address,
  },
  sameAs: Object.values(COMPANY_INFO.social),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_INFO.name,
  url: "https://karmyug.co/",
};

export default function Home() {
  return (
    <main id="main-content" className="overflow-x-hidden">
      <Seo
        title="AI-Powered Business Software"
        description="Karmyug Solutions builds HRMS, ValuXpert and Quixivo — AI-powered software for workforce management, valuation workflows and institute administration."
        path="/"
        schema={[organizationSchema, websiteSchema]}
      />
      <HeroSection />
      <ProductsHeading />
      <ProductsShowcase />
      <Stats />
      <WhyChoose />
      <CoreServices />
      <WhyKarmyug />
      <DeliveryPipeline />
      <FeaturedProjects />

      <TeamSection />
      <TestimonialsPreview />
      <CTASection />
    </main>
  );
}
