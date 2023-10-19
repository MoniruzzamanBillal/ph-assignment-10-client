import React from "react";

const QualityAssurance = () => {
  return (
    <div className="qualityContainer bg-orange-400 py-4  ">
      <div className="qualityWrapper bg-sky-400 w-[99%] xsm:w-[96%] lg:w-[90%] m-auto  ">
        <section className="p-6 my-6 m-auto dark:bg-gray-800 dark:text-gray-100">
          <div className="container bg-red-400 grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            {/*  */}

            <div className="flex justify-between bg-lime-300 m-auto p-4 space-x-0 rounded-lg  dark:bg-gray-900 dark:text-gray-100">
              <div className=" w-[40%] bg-violet-400 flex justify-center  align-middle rounded-lg  dark:bg-violet-400">
                {/* left icon  */}
                <div className="leftIcon bg-pink-300  flex justify-center items-center self-center ">
                  <img
                    src="../../public/images/stats icon/icons8-laptop-and-phone-64.png"
                    alt=""
                  />
                </div>
                {/* left icon  */}
              </div>

              <div className=" w-[59%] flex flex-col justify-between align-middle m-auto bg-lime-300 ">
                <p className="text-sm font-semibold bg-blue-300 mb-2 ">
                  Original product
                </p>
                <p className="bg-orange-400 text-xs font-semibold ">
                  100% Original product that covered warranty by the vendor.
                </p>
              </div>
            </div>

            {/*  */}

            <div className="flex justify-between bg-lime-300 m-auto p-4 space-x-0 rounded-lg  dark:bg-gray-900 dark:text-gray-100">
              <div className=" w-[40%] bg-violet-400 flex justify-center  align-middle rounded-lg  dark:bg-violet-400">
                {/* left icon  */}
                <div className="leftIcon bg-pink-300 flex justify-center items-center ">
                  <img
                    src="../../public/images/stats icon/icons8-shield-64.png"
                    alt=""
                  />
                </div>
                {/* left icon  */}
              </div>

              <div className=" w-[59%] flex flex-col justify-between align-middle m-auto bg-lime-300 ">
                <p className="text-sm font-semibold bg-blue-300 mb-2 ">
                  30 Days Warranty
                </p>
                <p className="bg-orange-400 text-xs font-semibold ">
                  You have the right to return your orders within 30 days.
                </p>
              </div>
            </div>

            {/*  */}

            <div className="flex justify-between bg-lime-300 m-auto p-4 space-x-0 rounded-lg  dark:bg-gray-900 dark:text-gray-100">
              <div className=" w-[40%] bg-violet-400 flex justify-center  align-middle rounded-lg  dark:bg-violet-400">
                {/* left icon  */}
                <div className="leftIcon bg-pink-300 flex justify-center items-center self-center  ">
                  <img
                    src="../../public/images/stats icon/icons8-box-64.png"
                    alt=""
                  />
                </div>
                {/* left icon  */}
              </div>

              <div className=" w-[59%] flex flex-col justify-between align-middle m-auto bg-lime-300 ">
                <p className="text-sm font-semibold bg-blue-300 mb-2 ">
                  Global Shipping
                </p>
                <p className="bg-orange-400 text-xs font-semibold ">
                  Your orders are shipped seamlessly between countries.
                </p>
              </div>
            </div>

            {/*  */}

            <div className="flex justify-between bg-lime-300 m-auto p-4 space-x-0 rounded-lg  dark:bg-gray-900 dark:text-gray-100">
              <div className=" w-[40%] bg-violet-400 flex justify-center  align-middle rounded-lg  dark:bg-violet-400">
                {/* left icon  */}
                <div className="leftIcon bg-pink-300 flex justify-center items-center self-center ">
                  <img
                    src="../../public/images/stats icon/icons8-lock-64.png"
                    alt=""
                  />
                </div>
                {/* left icon  */}
              </div>

              <div className=" w-[59%] flex flex-col justify-between align-middle m-auto bg-lime-300 ">
                <p className="text-sm font-semibold bg-blue-300 mb-2 ">
                  Original product100% Secure
                </p>
                <p className="bg-orange-400 text-xs font-semibold ">
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
