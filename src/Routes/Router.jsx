import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Brand from "../Pages/Brand";
import AddProduct from "../Pages/AddProduct";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Test from "../Components/Test";
import Register from "../Pages/Register";
import AboutUs from "../Pages/AboutUs";
import BrandDetail from "../Pages/BrandDetail";
import ProductDetail from "../Pages/ProductDetail";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/brand/:name",
        element: <BrandDetail />,
      },
      {
        path: "/brand/product",
        element: <ProductDetail />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);
