import React from "react";

const ProductDetail = () => {
  return (
    <div className="productDetail bg-green-300 pt-[4rem] ">
      <div className="productDetailWrapper py-4 bg-blue-300 w-[96%] lg:w-[90%] m-auto  ">
        {/* product card  */}
        {/*  */}

        <div className="productCardContainer flex flex-col justify-center items-center ">
          {/* product card left  */}
          <div className="productCardLeft bg-red-400  flex justify-center items-center self-center ">
            <div className="leftImg bg-amber-300 w-[20rem] h-[20rem] ">
              <img
                src="https://i.ibb.co/Wt8sgSm/redmi-note-11.png"
                className=" w-full h-full "
                alt=""
              />
            </div>
          </div>
          {/* product card left  */}

          {/* product card right  */}
          <div className="productCardRight bg-lime-300 w-[90%] xsm:w-[66%] sm:w-[57%] md:w-[52%] xmd:w-[45%] lg:w-[35%] flex flex-col justify-center items-center self-center ">
            {/* product name  */}
            <h1 className=" font-semibold text-sky-600 mb-2 ">
              redmi note 11{" "}
            </h1>
            {/* product name  */}

            {/* brand name  */}
            <h1 className=" mb-1 ">Xiaomi </h1>
            {/* brand name  */}

            {/* product rating  */}
            <h1 className=" mb-1 ">
              {" "}
              <span className=" font-semibold ">rating:</span> 4.5/5{" "}
            </h1>
            {/* product rating  */}

            {/* small description */}
            <h1 className=" mb-2 bg-red-400 w-[90%] m-auto text-center ">
              small description{" "}
            </h1>
            {/* small description */}

            {/* add  to cart button  */}
            <button className=" py-2 px-5 rounded bg-violet-700 text-white font-semibold active:scale-95 ">
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
