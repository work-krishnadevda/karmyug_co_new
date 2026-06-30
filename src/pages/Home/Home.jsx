import ProductsShowcase from "@/sections/Home/ProductsShowcase";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../sections/Home/HeroSection";
import ProductsHeading from "../../sections/Home/ProductsHeading";
import HowWeWork from "@/sections/Home/Stats";
import CoreServices from "@/sections/Home/CoreServices";
import WhyKarmyug from "@/sections/Home/WhyKarmyug";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsHeading />
      <ProductsShowcase />
      <HowWeWork />
      <CoreServices />
      <WhyKarmyug />
    </>
  );
}
