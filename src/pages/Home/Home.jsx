import ProductsShowcase from "@/sections/Home/ProductsShowcase";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../sections/Home/HeroSection";
import ProductsHeading from "../../sections/Home/ProductsHeading";
import HowWeWork from "@/sections/Home/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsHeading />
      <ProductsShowcase />
      <HowWeWork />
    </>
  );
}
