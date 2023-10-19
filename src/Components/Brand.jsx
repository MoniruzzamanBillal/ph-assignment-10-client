import React from "react";
import BrandCard from "./BrandCard";

const BrandsItem = [
  {
    brandName: "xiaomi",
    imgLink: "https://i.ibb.co/9NNPq9d/xiaomi.jpg",
  },
  {
    brandName: "Walton",
    imgLink: "https://i.ibb.co/k3C2Zj5/walton.jpg",
  },
  {
    brandName: "Samsung",
    imgLink: "https://i.ibb.co/R9sHpjR/samsung.png",
  },
  {
    brandName: "One plus",
    imgLink: "https://i.ibb.co/09HXwYK/oneplus-new8781.jpg",
  },
  {
    brandName: "JBL",
    imgLink: "https://i.ibb.co/XFsyRkx/jbl.png",
  },
  {
    brandName: "Amazfit",
    imgLink: "https://i.ibb.co/n6b2Fnz/amazfit-logot-1.png",
  },
];

const Brand = () => {
  return (
    <div className="brandContainer bg-blue-200 py-6 xsm:py-8 sm:py-9 xmd:py-10 md:py-12 ">
      <div className="brandWrapper w-[99%] xsm:w-[96%] lg:w-[90%] m-auto">
        <h1 className=" pocificoFont text-2xl xsm:text-3xl smd:text-4xl mb-3 xsm:mb-4 smd:mb-6 pb-1 xsm:pb-2 inline-block border-b border-gray-600 ">
          Featured brands
        </h1>

        {/* brand card  */}
        <div className="brandCardContainer  grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 gap-x-3 gap-y-6  ">
          {BrandsItem &&
            BrandsItem.map((ele, ind) => <BrandCard key={ind} ele={ele} />)}
        </div>
        {/* brand card  */}
      </div>
    </div>
  );
};

export default Brand;

// https://i.ibb.co/n6b2Fnz/amazfit-logot-1.png
// https://i.ibb.co/XFsyRkx/jbl.png
// https://i.ibb.co/09HXwYK/oneplus-new8781.jpg
// https://i.ibb.co/R9sHpjR/samsung.png
// https://i.ibb.co/k3C2Zj5/walton.jpg
// https://i.ibb.co/9NNPq9d/xiaomi.jpg
