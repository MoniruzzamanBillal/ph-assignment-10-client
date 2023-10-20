import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AppContext } from "../Context/AuthContext";

const ProductDetail = () => {
  const { user } = useContext(AppContext);

  const { id } = useParams();
  const responseData = useLoaderData();

  const [productDetail, getProductDetail] = useState(responseData);
  const loggedUser = user.uid;
  // console.log(user.uid);
  // console.log(responseData);

  const {
    brandName,
    category,
    price,
    productDescription,
    productImg,
    productName,
    rating,
    _id,
  } = productDetail;

  const handleCart = (id) => {
    // console.log("click");
    // console.log(id);
    // console.log(loggedUser);
    const newItemObj = {
      id,
      loggedUser,
    };

    // console.log(newItemObj);

    const fetchMethod = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItemObj),
    };

    fetch(`http://localhost:5000/addcart`, fetchMethod)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("item added successfully");
        }
      })
      .catch((error) => console.log(error));

    //
  };

  return (
    <div className="productDetail bg-[#EAFDFC] pt-[4rem] ">
      <div className="productDetailWrapper py-12  w-[96%] lg:w-[90%] m-auto  ">
        {/* product card  */}
        {/*  */}

        <div className="productCardContainer flex flex-col md:flex-row justify-center items-center ">
          {/* product card left  */}
          <div className="productCardLeft   flex justify-center items-center self-center ">
            <div className="leftImg  w-[20rem] md:w-[24rem] h-[18rem] md:h-[22rem] ">
              <img src={productImg} className=" w-full h-full " alt="" />
            </div>
          </div>
          {/* product card left  */}

          {/* product card right  */}
          <div className="productCardRight py-4 md:py-0 bg-[#BFEAF5] w-[90%] xsm:w-[66%] sm:w-[57%] md:w-[52%] xmd:w-[45%] lg:w-[35%] flex flex-col justify-center items-center self-center ">
            {/* product name  */}
            <h1 className=" font-semibold text-sky-600 mb-2 ">{productName}</h1>
            {/* product name  */}

            {/* brand name  */}
            <h1 className=" mb-1 ">
              {" "}
              <span className="font-semibold">Brand:</span> {brandName}{" "}
            </h1>
            {/* brand name  */}

            {/* product rating  */}
            <h1 className=" mb-1 ">
              {" "}
              <span className=" font-semibold ">rating:</span> {rating}/5{" "}
            </h1>
            {/* product rating  */}
            {/* product price  */}
            <h1 className=" mb-3 md:mb-1 ">
              {" "}
              <span className=" font-semibold ">Price:</span> {price} $
            </h1>
            {/* product price  */}

            {/* small description */}
            <h1 className=" mb-8 md:mb-2 font-semibold w-[90%] m-auto text-start text-xs md:text-sm ">
              {productDescription}
            </h1>
            {/* small description */}

            {/* add  to cart button  */}
            <button
              className=" py-2 px-5 rounded bg-violet-700 text-white font-semibold active:scale-95 "
              onClick={() => handleCart(_id)}
            >
              Add to cart
            </button>
            {/* add  to cart button  */}

            {/*  */}
          </div>
          {/* product card right  */}
        </div>

        {/*  */}

        {/* product card  */}
      </div>
    </div>
  );
};

export default ProductDetail;
