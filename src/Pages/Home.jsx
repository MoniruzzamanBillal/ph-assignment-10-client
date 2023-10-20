import React from "react";
import Brand from "../Components/Brand";
import Slider from "../Components/Slider";
import Products from "./Products";
import Category from "./Category";
import Stats from "./Stats";
import QualityAssurance from "./QualityAssurance";
import Contactus from "./Contactus";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const all_product = useLoaderData();

  console.log(all_product);

  return (
    <div>
      {/* hero Component */}
      <div className="heroContainer  w-[100%] h-[17rem] xsm:h-[20rem] sm:h-[23rem] md:h-[26rem] xmd:h-[29rem] lg:h-[32rem] overflow-auto pt-[3.5rem] xsm:pt-[3.8rem] sm:pt-[4rem] ">
        <Slider />
      </div>
      {/* hero Component */}

      {/* brand container  */}
      <div className="brandComponent  ">
        <Brand />
      </div>
      {/* brand container  */}

      {/* shop by category container  */}
      <div className="shopByCategory">
        <Category />
      </div>
      {/* shop by category container  */}

      {/* products container  */}
      <div className="productContainer">
        <Products all_product={all_product} />
      </div>
      {/* products container  */}

      {/* stats container  */}
      <div className="statsContainer">
        <Stats />
      </div>
      {/* stats container  */}

      {/* quality container  */}
      <div className="qualityAssurance">
        <QualityAssurance />
      </div>
      {/* quality container  */}

      {/* contact us conytainer  */}
      <div className="contactUs">
        <Contactus />
      </div>
      {/* contact us conytainer  */}

      {/*  */}
    </div>
  );
};

export default Home;
