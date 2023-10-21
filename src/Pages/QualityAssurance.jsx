import React from "react";

import { AiOutlineLaptop } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { BsShieldShaded, BsBoxSeam } from "react-icons/bs";

const QualityAssurance = () => {
  return (
    <div className="qualityContainer bg-[#F1D4E5] dark:bg-[#4B527E]  py-4  ">
      <div className="qualityWrapper  w-[99%] xsm:w-[96%] lg:w-[90%] m-auto  ">
        <section className="p-6 my-6 m-auto ">
          <div className="container  grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            {/*  */}

            <div className="flex justify-between bg-[#EEEEEE] m-auto p-4 space-x-0 rounded-lg  ">
              <div className=" w-[40%]  flex justify-center  align-middle rounded-lg  ">
                {/* left icon  */}
                <div className="leftIcon   flex justify-center items-center self-center ">
                  <AiOutlineLaptop className=" text-6xl " />
                </div>
                {/* left icon  */}
              </div>

              <div className=" w-[59%] flex flex-col justify-between align-middle m-auto  ">
                <p className="text-sm font-semibold  mb-2 ">Original product</p>
                <p className=" text-xs font-semibold ">
                  100% Original product that covered warranty by the vendor.
                </p>
              </div>
            </div>

            {/*  */}

            <div className="flex justify-between bg-[#EEEEEE] m-auto p-4 space-x-0 rounded-lg  ">
              <div className=" w-[40%]  flex justify-center  align-middle rounded-lg  ">
                {/* left icon  */}
                <div className="leftIcon  flex justify-center items-center ">
                  <BsShieldShaded className=" text-6xl " />
                </div>
                {/* left icon  */}
              </div>

              <div className=" w-[59%] flex flex-col justify-between align-middle m-auto ">
                <p className="text-sm font-semibold  mb-2 ">30 Days Warranty</p>
                <p className=" text-xs font-semibold ">
                  You have the right to return your orders within 30 days.
                </p>
              </div>
            </div>

            {/*  */}

            <div className="flex justify-between bg-[#EEEEEE] m-auto p-4 space-x-0 rounded-lg  ">
              <div className=" w-[40%]  flex justify-center  align-middle rounded-lg  ">
                {/* left icon  */}
                <div className="leftIcon  flex justify-center items-center self-center  ">
                  <BsBoxSeam className=" text-6xl " />
                </div>
                {/* left icon  */}
              </div>

              <div className=" w-[59%] flex flex-col justify-between align-middle m-auto ">
                <p className="text-sm font-semibold  mb-2 ">Global Shipping</p>
                <p className=" text-xs font-semibold ">
                  Your orders are shipped seamlessly between countries.
                </p>
              </div>
            </div>

            {/*  */}

            <div className="flex justify-between bg-[#EEEEEE] m-auto p-4 space-x-0 rounded-lg  ">
              <div className=" w-[40%]  flex justify-center  align-middle rounded-lg  ">
                {/* left icon  */}
                <div className="leftIcon flex justify-center items-center self-center ">
                  <BiLock className=" text-6xl " />
                </div>
                {/* left icon  */}
              </div>

              <div className=" w-[59%] flex flex-col justify-between align-middle m-auto bg-[#EEEEEE]">
                <p className="text-sm font-semibold  mb-2 ">
                  Original product100% Secure
                </p>
                <p className=" text-xs font-semibold ">
                  Your payments are secure with our private security network.
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default QualityAssurance;
