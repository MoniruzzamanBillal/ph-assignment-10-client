import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const CategoryProducts = () => {
  const { name } = useParams();
  const responseData = useLoaderData();
  const [allProducts, setAllProducts] = useState(responseData);
  const [filterProducts, setFilterProducts] = useState([]);
  const navigate = useNavigate();

  //   console.log(name);
  // console.log(responseData);

  useEffect(() => {
    const expected = allProducts.filter((product) => product.category === name);

    // console.log(expected);
    setFilterProducts(expected);
  }, []);

  console.log(filterProducts);

  const CoomingSoon = () => {
    return (
      <div className="flex w-full robotoFont mt-6 flex-col items-center justify-center   px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          No products available
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          We run out of product.We will notify you when we get stock.
        </p>

        <button
          className=" bg-violet-600 hover:bg-violet-800 py-2 px-5 rounded text-white font-semibold "
          onClick={() => navigate("/")}
        >
          Go back to home page
        </button>
      </div>
    );
  };

  return (
    <div className="brandContainer bg-[#CFF5E7]  pt-[4rem]  ">
      <div className="brandWrapper py-6  w-[99%] xsm:w-[96%] lg:w-[90%] m-auto">
        <h1 className=" pocificoFont text-2xl xsm:text-3xl smd:text-4xl mb-4 xsm:mb-6 smd:mb-7 pb-1 xsm:pb-2 inline-block border-b border-gray-600  ">
          Our products{" "}
        </h1>

        <div
          className={`productCardContainer    ${
            filterProducts && filterProducts.length > 0
              ? "grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 lg:grid-cols-4  gap-x-4 gap-y-6 "
              : "flex justify-center items-center "
          }  `}
        >
          {filterProducts && filterProducts.length > 0 ? (
            filterProducts.map((product, ind) => (
              <ProductCard product={product} key={ind} />
            ))
          ) : (
            <CoomingSoon />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
