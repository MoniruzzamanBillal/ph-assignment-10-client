import React from "react";
import ProductCard from "../Components/ProductCard";

const Products = ({ all_product }) => {
  // console.log(all_product);

  return (
    <div className="brandContainer bg-[#DAFFFB] py-6 ">
      <div className="brandWrapper  w-[99%] xsm:w-[96%] lg:w-[90%] m-auto">
        <h1 className=" pocificoFont text-2xl xsm:text-3xl smd:text-4xl mb-6 smd:mb-7 pb-1 xsm:pb-2 inline-block border-b border-gray-600  ">
          Our products{" "}
        </h1>

        <div className="productCardContainer  grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6  m-auto ">
          {all_product.map((product, ind) => (
            <ProductCard product={product} key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
