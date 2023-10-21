import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { Carousel } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";
import { BrandsItem } from "../Utility/BrandName";

const BrandDetail = () => {
  const responseData = useLoaderData();
  const { name } = useParams();

  const [filterData, setFilterData] = useState([]);
  const [phoneData, setPhoneData] = useState(responseData);

  // console.log(responseData);
  // console.log(name);

  // console.log(BrandsItem);

  useEffect(() => {
    const findData = BrandsItem.filter((brand) => brand.brandName === name);

    // console.log(findData);
    // console.log(findData.advertiseImg);

    if (findData) {
      setFilterData(findData);
    }
  }, []);

  // console.log(phoneData);

  const CoomingSoon = () => {
    return (
      <div className="flex w-full robotoFont mt-6 flex-col items-center justify-center   px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 text-lg mb-8">
          We run out of product.We will notify you when we get stock.
        </p>
      </div>
    );
  };

  return (
    <div className="brandDetailContainer bg-[#CFF5E7] pt-[4rem] ">
      {/* <div className="brandDetailWrapper py-4 bg-blue-300 w-[99%] xsm:w-[96%] lg:w-[90%] m-auto  "> */}
      <div className="brandDetailWrapper pb-7  m-auto  ">
        {/* advertise slider  */}
        <div className="advertiseSlider  mb-6  w-[100%] h-[17rem] xsm:h-[20rem] sm:h-[23rem] md:h-[26rem] xmd:h-[29rem] lg:h-[32rem] overflow-auto ">
          {/* slider  */}

          {filterData &&
            filterData.map((data) => (
              <Carousel slideInterval={5000}>
                {data.advertiseImg.map((advertise, ind) => (
                  <div key={ind} className=" w-full h-full  ">
                    <img
                      alt="..."
                      src={advertise.img}
                      className=" w-full h-full bg-cover "
                    />
                  </div>
                ))}
              </Carousel>
            ))}

          {/* slider  */}
        </div>
        {/* advertise slider  */}

        {/* all products of brand  */}
        <div className="allProductsContainer  w-[99%] xsm:w-[96%] lg:w-[90%] m-auto ">
          <h1 className=" pocificoFont text-4xl pt-5 pb-9 font-semibold ">
            Our products{" "}
          </h1>

          {/*  */}

          {/* all products card  */}
          <div
            className={` products ${
              phoneData.length > 0
                ? "grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6"
                : "flex justify-center items-center"
            }   `}
          >
            {phoneData && phoneData.length > 0 ? (
              phoneData.map((product, ind) => (
                <ProductCard key={ind} product={product} />
              ))
            ) : (
              <div className="comingsoon flex justify-center items-center  ">
                <CoomingSoon />
              </div>
            )}

            {/* <ProductCard /> */}
          </div>
          {/* all products card  */}
        </div>
        {/* all products of brand  */}
      </div>
    </div>
  );
};

export default BrandDetail;
