import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const CategoryProducts = () => {
  const { name } = useParams();
  const responseData = useLoaderData();
  const [allProducts, setAllProducts] = useState(responseData);
  const [filterProducts, setFilterProducts] = useState([]);

  //   console.log(name);
  // console.log(responseData);

  useEffect(() => {
    const expected = allProducts.filter((product) => product.category === name);

    // console.log(expected);
    setFilterProducts(expected);
  }, []);

  return (
    <div className="brandContainer bg-[#CFF5E7]  pt-[4rem]  ">
      <div className="brandWrapper py-6  w-[99%] xsm:w-[96%] lg:w-[90%] m-auto">
        <h1 className=" pocificoFont text-2xl xsm:text-3xl smd:text-4xl mb-4 xsm:mb-6 smd:mb-7 pb-1 xsm:pb-2 inline-block border-b border-gray-600  ">
          Our products{" "}
        </h1>

        <div className="productCardContainer  grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 lg:grid-cols-4  gap-x-4 gap-y-6  ">
          {filterProducts &&
            filterProducts.map((product, ind) => (
              <ProductCard product={product} key={ind} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
