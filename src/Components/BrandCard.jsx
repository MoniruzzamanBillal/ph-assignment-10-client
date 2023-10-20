import React from "react";
import { useNavigate } from "react-router-dom";
const BrandCard = ({ brand }) => {
  const navigate = useNavigate();
  const { brandName, imgLink, advertiseImg } = brand;

  const handleClick = (brand_name) => {
    // console.log("clicked");
    // console.log(brand_name);

    navigate(`/brand/${brand_name}`);
  };

  return (
    <div>
      <div
        className=" w-[78%] xsm:w-auto  max-w-sm bg-gray-100 border border-gray-200 cursor-pointer shadow transform hover:scale-105 hover:drop-shadow-lg duration-300  rounded-lg overflow-auto  m-auto "
        onClick={() => handleClick(brandName)}
      >
        <div className="brandImg bg-red-400 m-auto w-[100%] h-[8rem] sm:h-[9rem] xmd:h-[12rem]  ">
          <img className=" w-full h-full " src={imgLink} alt="" />
        </div>
        <div className="  ">
          <p className=" youngSerifFont text-center mt-3 mb-1 text-xl xmd:text-2xl font-normal text-gray-900">
            {brandName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
