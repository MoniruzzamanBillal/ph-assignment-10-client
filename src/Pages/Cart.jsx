import React from "react";

const Cart = () => {
  return (
    <div>
      {/*  */}
      {/*  */}
      <div class=" bg-gray-100 pt-20 pb-10">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {/* left side  */}
          <div class=" leftSide rounded-lg   md:w-2/3">
            {/* item container  */}
            <div class=" ItemContainer justify-between mb-6 rounded-lg bg-gray-50 p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="product-image"
                class="w-full rounded-lg sm:w-40"
              />
              <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-lg font-bold text-gray-900">item name</h2>
                  {/* <p class="mt-1 text-xs text-gray-700">36EU - 4US</p> */}
                  <p class="mt-1 text-xs text-gray-700">item price</p>
                </div>
                <div class="  flex justify-center items-center mt-4  sm:mt-0 ">
                  <div className="removeButton  ">
                    <button className=" bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded active:scale-95 ">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* item container  */}
          </div>
          {/* left side  */}
          {/* right side , subtotal  */}
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">$129.99</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">$4.99</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
          {/* right side , subtotal  */}
        </div>
      </div>
      {/*  */}
      {/*  */}
    </div>
  );
};

export default Cart;
