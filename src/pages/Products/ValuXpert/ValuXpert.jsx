import ProductLanding from "@/components/Product/ProductLanding";
import { productDetails } from "@/data/productDetails";
import ValuXpertHero from "@/sections/ValuXpert/Hero";
import ValuXpertAnalytics from "@/sections/ValuXpert/Analytics";

export default function ValuXpert() {
  return (
    <ProductLanding
      product={productDetails.valuxpert}
      HeroSlot={ValuXpertHero}
      SignatureSlot={ValuXpertAnalytics}
    />
  );
}
