import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { Carousel } from "flowbite-react";
import { useParams } from "react-router-dom";
import { BrandsItem } from "../Utility/BrandName";

const BrandDetail = () => {
  const { name } = useParams();
  const [filterData, setFilterData] = useState([]);

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

  // console.log(filterData);

  return (
    <div className="brandDetailContainer bg-green-300 pt-[4rem] ">
      <div className="brandDetailWrapper py-4 bg-blue-300 w-[99%] xsm:w-[96%] lg:w-[90%] m-auto  ">
        {/* advertise slider  */}
        <div className="advertiseSlider bg-red-400 mb-6  w-[100%] h-[17rem] xsm:h-[20rem] sm:h-[23rem] md:h-[26rem] xmd:h-[29rem] lg:h-[32rem] overflow-auto ">
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
        <div className="allProductsContainer bg-lime-300 ">
          <h1 className=" text-3xl mb-3 font-semibold ">Our products </h1>

          {/*  */}

          {/* all products card  */}
          <div className="products bg-pink-300 grid grid-cols-3 gap-x-4 gap-y-6 ">
            <ProductCard />
          </div>
          {/* all products card  */}
        </div>
        {/* all products of brand  */}
      </div>
    </div>
  );
};

export default BrandDetail;
