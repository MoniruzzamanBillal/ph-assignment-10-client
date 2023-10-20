import React from "react";
import CategoryCard from "../Components/CategoryCard";

const productsCategory = [
  {
    productName: "Mobile phone",
    productIMG: "https://i.ibb.co/FzF0q8y/phone.jpg",
  },
  {
    productName: "Earphone",
    productIMG: "https://i.ibb.co/RpK31MH/earphone.jpg",
  },
  {
    productName: "Adapter",
    productIMG: "https://i.ibb.co/CwbG0N8/adapter.jpg",
  },
  {
    productName: "Smart watch",
    productIMG: "https://i.ibb.co/Qm8xg1b/smartwtch.jpg",
  },
  {
    productName: "Power bank",
    productIMG: "https://i.ibb.co/dK0x4ZY/power-bank.jpg",
  },
];

const Category = () => {
  return (
    <div className="categoryContainer bg-[#EEEEEE] py-8  ">
      <div className="categoryWrapper relative  w-[99%] xsm:w-[96%] lg:w-[90%] m-auto ">
        {/* left line  */}
        <div className="leftLine h-[.1rem] sm:w-[26%] md:w-[29%] xmd:w-[32%] lg:w-[35%] absolute transform -translate-x-1/2 -translate-y-1/2 top-5 left-[20%] bg-red-600 "></div>
        {/* left line  */}

        {/* right line  */}
        <div className="rightLine h-[.1rem]  sm:w-[26%] md:w-[29%] xmd:w-[32%] lg:w-[35%] absolute transform -translate-x-1/2 -translate-y-1/2 top-5 left-[80%] bg-blue-600 "></div>
        {/* right line  */}

        <h1 className=" pocificoFont text-gray-700 text-2xl xsm:text-3xl smd:text-4xl mb-7 xsm:mb-8 md:mb-12 pb-1 xsm:pb-2 text-center  ">
          Shop by category
        </h1>

        {/* category card  */}
        <div className="categoryCard  grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 xmd:grid-cols-4 gap-x-3 gap-y-5 ">
          {productsCategory &&
            productsCategory.map((product, ind) => (
              <CategoryCard key={ind} product={product} />
            ))}
        </div>
        {/* category card  */}
      </div>
    </div>
  );
};

export default Category;

// adapter - https://i.ibb.co/CwbG0N8/adapter.jpg
// earphone : https://i.ibb.co/RpK31MH/earphone.jpg
// phone : https://i.ibb.co/FzF0q8y/phone.jpg
// power bank :  https://i.ibb.co/dK0x4ZY/power-bank.jpg
// smart watch : https://i.ibb.co/Qm8xg1b/smartwtch.jpg
