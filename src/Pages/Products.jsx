import React from "react";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  return (
    <div className="brandContainer bg-red-300 py-6 ">
      <div className="brandWrapper bg-violet-300 w-[99%] xsm:w-[96%] lg:w-[90%] m-auto">
        <h1 className=" pocificoFont text-2xl xsm:text-3xl smd:text-4xl mb-4 xsm:mb-6 smd:mb-7 pb-1 xsm:pb-2 inline-block border-b border-gray-600  ">
          Our products{" "}
        </h1>

        <div className="productCardContainer bg-lime-400 grid grid-cols-4 gap-x-4 gap-y-6  ">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
