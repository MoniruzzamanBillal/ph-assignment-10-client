import React from "react";
import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <Carousel slideInterval={4000}>
      <img
        src="/images/slider image/Amazfit_Pop_3s_and_3r_Big_Banner_1_.jpg"
        className="w-full h-full "
      />

      <img
        src="/images/slider image/Samsung_55_4K_Big_Banner_1__1.jpg"
        className="w-full"
      />

      <img src="/images/slider image/dolby-sound-eng.jpg" className="w-full" />

      <img src="/images/slider image/tamarind-desktop.jpg" className="w-full" />
    </Carousel>
  );
};

export default Slider;
