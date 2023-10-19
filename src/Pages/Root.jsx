import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import AppProvider from "../Context/AuthContext";

const Root = () => {
  return (
    <div className="mainContainer">
      <AppProvider>
        <div className="navComponent bg-red-200 ">
          <NavBar />
        </div>

        <Outlet />

        <div className="footerContainer bg-amber-200 ">
          <Footer />
        </div>
      </AppProvider>
    </div>
  );
};

export default Root;
