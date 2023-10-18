import React from "react";
import Brand from "../Components/Brand";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      {/* hero Component */}
      <div className="heroContainer  h-[30rem]  pt-[4.2rem] ">
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
