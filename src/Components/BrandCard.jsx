import React from "react";

const BrandCard = ({ ele }) => {
  const { brandName, imgLink } = ele;

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 cursor-pointer shadow transform hover:scale-105 hover:drop-shadow-lg duration-300  rounded-lg overflow-auto  m-auto ">
        <div className="brandImg bg-red-400 m-auto w-[100%] h-[9rem] xmd:h-[12rem]  ">
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
