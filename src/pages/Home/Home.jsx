import ProductsShowcase from "@/sections/Home/ProductsShowcase";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../sections/Home/HeroSection";
import ProductsHeading from "../../sections/Home/ProductsHeading";

import CoreServices from "@/sections/Home/CoreServices";
import WhyKarmyug from "@/sections/Home/WhyKarmyug";
import DeliveryPipeline from "@/components/deliveryPipeline/DeliveryPipeline";
import WhyChoose from "@/components/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsHeading />
      <ProductsShowcase />
      <WhyChoose />
      <CoreServices />
      <WhyKarmyug />
      <DeliveryPipeline />
    </>
  );
}
