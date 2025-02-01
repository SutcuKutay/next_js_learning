import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl">
      <h2 className="mb-5">This is a product card</h2>
      <AddToCart></AddToCart>
    </div>
  );
};

export default ProductCard;
