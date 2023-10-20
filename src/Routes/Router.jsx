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
import UpdateProduct from "../Pages/UpdateProduct";
import CategoryProducts from "../Pages/CategoryProducts";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("http://localhost:5000/all_items"),
        loader: () =>
          fetch(
            "https://brand-shop-gg5mqakxp-md-moniruzzamans-projects.vercel.app/all_items"
          ),
      },

      {
        path: "/addproduct",
        // element: <AddProduct />,
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:name",
        element: <CategoryProducts />,
        // loader: () => fetch("http://localhost:5000/all_items"),
        loader: () =>
          fetch(
            "https://brand-shop-gg5mqakxp-md-moniruzzamans-projects.vercel.app/all_items"
          ),
      },
      {
        path: "/update/:id",
        // element: <UpdateProduct />,
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        // element: <Cart />,
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        // loader: () => fetch("http://localhost:5000/cart"),
        loader: () =>
          fetch(
            "https://brand-shop-gg5mqakxp-md-moniruzzamans-projects.vercel.app/cart"
          ),
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
        loader: ({ params }) =>
          // fetch(`http://localhost:5000/brand/${params.name}`),
          fetch(
            `https://brand-shop-gg5mqakxp-md-moniruzzamans-projects.vercel.app/brand/${params.name}`
          ),
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
        loader: ({ params }) =>
          // fetch(`http://localhost:5000/product/${params.id}`),
          fetch(
            `https://brand-shop-gg5mqakxp-md-moniruzzamans-projects.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);
