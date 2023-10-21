import { useNavigate } from "react-router-dom";

const CategoryCard = ({ product }) => {
  const { productName, productIMG } = product;

  // console.log(productName);

  const navigate = useNavigate();

  const handleCategory = () => {
    navigate(`/category/${productName}`);
  };

  return (
    <div className="categoryCard  flex flex-col justify-center items-center  ">
      <div
        className="imgContainer  w-[7rem]   "
        onClick={() => handleCategory()}
      >
        <img
          className=" w-full h-full p-1 cursor-pointer rounded-full ring-2  ring-gray-300 dark:ring-gray-500"
          src={productIMG}
          alt="Bordered avatar"
        />
      </div>

      <h1
        className=" mt-1 text-lg font-semibold cursor-pointer dark:text-gray-100 "
        onClick={() => handleCategory()}
      >
        {productName}{" "}
      </h1>
    </div>
  );
};

export default CategoryCard;
