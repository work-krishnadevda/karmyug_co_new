import { useRef, useEffect } from "react";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleWheel = (e) => {
      e.preventDefault();

      slider.scrollBy({
        left: e.deltaY,
        behavior: "smooth",
      });
    };

    slider.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="
        flex
        gap-10
        overflow-x-auto
        overflow-y-hidden
        snap-x
        snap-mandatory
        scrollbar-hide
        scroll-smooth
        px-20
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductSlider;