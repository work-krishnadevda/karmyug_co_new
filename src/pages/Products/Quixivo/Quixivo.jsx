import ProductLanding from "@/components/Product/ProductLanding";
import { productDetails } from "@/data/productDetails";
import QuixivoHero from "@/sections/Quixivo/Hero";
import QuixivoAudiences from "@/sections/Quixivo/Workflows";

export default function Quixivo() {
  return (
    <ProductLanding
      product={productDetails.quixivo}
      HeroSlot={QuixivoHero}
      SignatureSlot={QuixivoAudiences}
    />
  );
}
