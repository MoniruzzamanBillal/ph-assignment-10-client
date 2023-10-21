import React from "react";
import BrandCard from "./BrandCard";
import { BrandsItem } from "../Utility/BrandName";

const Brand = () => {
  return (
    <div className="brandContainer bg-[#93B1A6] py-6 xsm:py-8 sm:py-9 xmd:py-10 md:py-12 dark:bg-[#252B48] ">
      <div className="brandWrapper w-[96%] lg:w-[90%] m-auto">
        <h1 className=" pocificoFont text-2xl xsm:text-3xl smd:text-4xl mb-8 smd:mb-6 pb-1 xsm:pb-2 inline-block border-b border-gray-200 dark:text-white ">
          Featured brands
        </h1>

        {/* brand card  */}
        <div className="brandCardContainer  grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 gap-x-3 gap-y-6  ">
          {BrandsItem &&
            BrandsItem.map((brand, ind) => (
              <BrandCard key={ind} brand={brand} />
            ))}
        </div>
        {/* brand card  */}
      </div>
    </div>
  );
};

export default Brand;
