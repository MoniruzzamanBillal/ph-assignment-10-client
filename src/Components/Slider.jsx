import React from "react";
import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <Carousel className=" w-full " slideInterval={10000}>
      {/* img 1 */}
      <div className="img1  w-full h-full ">
        <img
          src="/images/slider image/Amazfit_Pop_3s_and_3r_Big_Banner_1_.jpg"
          className="w-full h-full "
        />
      </div>
      {/* img 1 */}

      {/* img 2 */}
      <div className="img2  w-full h-full ">
        <img
          src="/images/slider image/Samsung_55_4K_Big_Banner_1__1.jpg"
          className="w-full h-full "
        />
      </div>
      {/* img 2 */}

      {/* img 3 */}
      <div className="img3  w-full h-full ">
        <img
          src="/images/slider image/dolby-sound-eng.jpg"
          className="w-full h-full "
        />
      </div>
      {/* img 3 */}

      {/* img 4 */}
      <div className="img4  w-full h-full ">
        <img
          src="/images/slider image/tamarind-desktop.jpg"
          className="w-full h-full "
        />
      </div>
      {/* img 4 */}
    </Carousel>
  );
};

export default Slider;
