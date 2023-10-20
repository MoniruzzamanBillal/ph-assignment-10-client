import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AuthContext";

const ProductCard = ({ product }) => {
  const { user } = useContext(AppContext);

  const navigate = useNavigate();

  const {
    brandName,
    category,
    price,
    productDescription,
    productImg,
    productName,
    rating,
    _id,
  } = product;

  // for disable state
  const handleDisable = () => {
    alert("login to see details");
  };

  const handleDetail = (id) => {
    navigate(`/product/${id}`);
  };

  // for update
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="productCardContainer  m-auto ">
      <div className="productCardWrapper">
        {/* card  */}

        <div class=" relative max-w-sm overflow-auto hover:shadow-md hover:scale-105 duration-500  bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {/* product imag  */}
          <div className="productImg bg-red-500   ">
            <div className="productImgWrapper bg-blue-500 w-[100%] h-[16rem] m-auto  ">
              <img class=" w-full h-full " src={productImg} alt="" />
            </div>
          </div>
          {/* product imag  */}

          <div class=" detailsBody p-3 ">
            {/* brand name  */}
            <div className="brandContainer inline whitespace-nowrap bg-yellow-200  absolute transform -translate-x-1/2 -translate-y-1/2 top-3 left-[88%]  ">
              <h1 className=" dancingFont font-semibold text-sm ">
                {brandName}
              </h1>
            </div>
            {/* brand name  */}

            {/* product name  */}
            <h1 className=" robotoFont font-semibold  text-sm mb-2 ">
              {productName}
            </h1>
            {/* product name  */}

            {/* product type  */}

            <div className="categoryContainer  whitespace-nowrap bg-yellow-200  absolute transform -translate-x-1/2 -translate-y-1/2 top-3 left-[20%]  ">
              <h1 className=" robotoFont text-xs font-semibold ">{category}</h1>
            </div>

            {/* product type  */}

            {/* product price  */}
            <h1 className="robotoFont text-sm font-semibold mb-2 ">
              price : {price} $
            </h1>
            {/* product price  */}

            {/* product rating  */}
            <h1 className="robotoFont text-sm font-semibold mb-4 ">
              rating:{rating}/5
            </h1>
            {/* product rating  */}

            {/* details button  */}
            <div className="detailBtn bg-red-400 mb-1 active:scale-95 cursor-pointer rounded text-center  ">
              <button
                className="robotoFont py-1.5 bg-violet-500 rounded w-full font-semibold text-gray-50 "
                onClick={user ? () => handleDetail(_id) : () => handleDisable()}
              >
                Details
              </button>
            </div>
            {/* details button  */}

            {/* update button  */}
            <div
              className="updateBtn bg-lime-400 active:scale-95 cursor-pointer rounded text-center  "
              onClick={() => handleUpdate(_id)}
            >
              <button className="robotoFont py-1.5 font-semibold text-gray-50 ">
                Update
              </button>
            </div>

            {/* update button  */}
          </div>
        </div>

        {/* card  */}
      </div>
    </div>
  );
};

export default ProductCard;
