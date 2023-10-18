import React from "react";
import Hero from "../Components/Hero";
import Brand from "../Components/Brand";

const Home = () => {
  return (
    <div>
      {/* hero Component */}
      <div className="heroContainer  pt-[4.2rem] ">
        <Hero />
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
