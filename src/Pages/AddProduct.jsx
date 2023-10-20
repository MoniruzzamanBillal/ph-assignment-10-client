import React from "react";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit click");
    const form = e.target;

    const brandName = form.brand.value;
    const productName = form.productName.value;
    const productImg = form.image.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const productDescription = form.description.value;

    const newItemObj = {
      brandName,
      productName,
      productImg,
      category,
      price,
      rating,
      productDescription,
    };

    console.log(newItemObj);

    const fetchMethod = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItemObj),
    };

    fetch(`http://localhost:5000/product`, fetchMethod)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("item added successfully");
        }
      })
      .catch((error) => console.log(error));

    form.brand.value = "";
    form.productName.value = "";
    form.image.value = "";
    form.category.value = "";
    form.price.value = "";
    form.rating.value = "";
    form.description.value = "";
  };

  return (
    <div className=" addProductContainer  pt-[3.1rem] xsm:pt-[3.5rem] sm:pt-[3.7rem] ">
      {/*  */}
      <div
        className=" py-4 relative mainContiner flex flex-col  w-full items-center justify-center bg-gray-900 bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url('https://i.ibb.co/LZKzL52/pexels-garrett-morrow-682933.jpg')`,
        }}
      >
        <h1 className="   robotoFont font-semibold text-4xl pb-2 mb-6 text-[#00ffe5] border-b border-[#00ffe5]  ">
          Add your Product
        </h1>

        {/* form  */}
        <div className="formContainer w-[85%] xsm:w-[65%] sm:w-[58%] md:w-[50%] xmd:w-[46%] lg:w-[39%] rounded bg-gray-200 bg-opacity-60  shadow-lg backdrop-blur px-4 py-5 sm:px-5 sm:py-7 md:px-6 md:py-8 ">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* brand name  */}

              <div className="sm:col-span-2">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Brand name
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Type brand name"
                  required=""
                />
              </div>
              {/* brand name  */}

              {/* product name  */}
              <div className="w-full">
                <label
                  htmlFor="productName"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Type product name"
                  required=""
                />
              </div>
              {/* product name  */}

              {/* product image  */}
              <div className="w-full">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Product image
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Type product image url"
                  required=""
                />
              </div>
              {/* product image  */}

              {/* product category  */}
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                >
                  <option value="">Select category</option>
                  <option value="Mobile phone">Mobile phone</option>
                  <option value="Earphone">Earphone</option>
                  <option value="Adapter">Adapter</option>
                  <option value="Smart watch">Smart watch</option>
                  <option value="Power bank">Power bank</option>
                </select>
              </div>

              {/* product category  */}

              {/* product price  */}
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Price
                </label>
                <input
                  onWheel={(e) => e.target.blur()}
                  name="price"
                  type="number"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm remove-arrow rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="$2999"
                  required=""
                />
              </div>
              {/* product price  */}

              {/* rating  */}
              <div>
                <label
                  htmlFor="rating"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Product rating
                </label>
                <input
                  type="text"
                  name="rating"
                  id="rating"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="rating"
                  required=""
                />
              </div>
              {/* rating  */}

              {/* short description  */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Give short description about product"
                ></textarea>
              </div>

              {/* short description  */}
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-violet-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-violet-800"
            >
              Add product
            </button>
          </form>
        </div>
        {/* form  */}
      </div>
      {/*  */}
    </div>
  );
};

export default AddProduct;
