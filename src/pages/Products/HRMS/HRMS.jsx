import ProductLanding from "@/components/Product/ProductLanding";
import { productDetails } from "@/data/productDetails";
import HRMSHero from "@/sections/Crane/Hero";
import HRMSWorkflow from "@/sections/Crane/Workflows";

export default function HRMS() {
  return (
    <ProductLanding
      product={productDetails.hrms}
      HeroSlot={HRMSHero}
      SignatureSlot={HRMSWorkflow}
    />
  );
}
