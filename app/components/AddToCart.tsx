"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-success text-white"
        onClick={() => {
          console.log("Add to cart");
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
