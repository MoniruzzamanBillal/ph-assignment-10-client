import React from "react";
import Brand from "../Components/Brand";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      {/* hero Component */}
      <div className="heroContainer  w-[100%] h-[17rem] xsm:h-[20rem] sm:h-[23rem] md:h-[26rem] xmd:h-[29rem] lg:h-[32rem] overflow-auto pt-[3.5rem] xsm:pt-[3.8rem] sm:pt-[4.2rem] ">
        <Slider />
      </div>
      {/* hero Component */}

      {/* brand container  */}
      <div className="brandComponent  ">
        <Brand />
      </div>
      {/* brand container  */}
    </div>
  );
};

export default Home;
