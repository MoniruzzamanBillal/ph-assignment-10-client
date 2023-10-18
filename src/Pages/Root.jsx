import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="mainContainer">
      <div className="navComponent bg-red-200 ">
        <NavBar />
      </div>

      <Outlet />

      <div className="footerContainer bg-amber-200 ">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
