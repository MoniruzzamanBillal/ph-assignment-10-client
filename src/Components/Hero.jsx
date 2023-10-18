import React from "react";

const Hero = () => {
  return (
    <div>
      {/* hero silder  */}

      <div className="bannerContainer">
        <div className="carousel w-full h-[30rem] bg-red-500 ">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/images/slider image/Amazfit_Pop_3s_and_3r_Big_Banner_1_.jpg"
              className="w-full h-full "
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* slider 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="/images/slider image/Samsung_55_4K_Big_Banner_1__1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* slider 2 */}

          {/* slider 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="/images/slider image/dolby-sound-eng.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* slider 3 */}

          {/* slider 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="/images/slider image/gadget_Big_Banner_1_.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* slider 4 */}

          {/* slider 5  */}
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src="/images/slider image/tamarind-desktop.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 ">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* slider 5  */}
        </div>
      </div>

      {/* hero silder  */}
    </div>
  );
};

export default Hero;
