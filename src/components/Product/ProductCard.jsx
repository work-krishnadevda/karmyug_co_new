const ProductCard = ({ product }) => {
  return (
    <div
      className="
        min-w-[55vw]
        h-[80vh]
        snap-center
        rounded-3xl
        overflow-hidden
        flex-shrink-0
      "
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProductCard;