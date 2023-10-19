const CategoryCard = ({ product }) => {
  const { productName, productIMG } = product;

  return (
    <div className="categoryCard  flex flex-col justify-center items-center ">
      <div className="imgContainer  w-[7rem]   ">
        <img
          className=" w-full h-full p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={productIMG}
          alt="Bordered avatar"
        />
      </div>

      <h1 className=" mt-1 text-lg font-semibold ">{productName} </h1>
    </div>
  );
};

export default CategoryCard;
