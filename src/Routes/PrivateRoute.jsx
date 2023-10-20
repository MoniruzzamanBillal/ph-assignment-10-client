import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AppContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AppContext);

  if (loading) {
    return (
      <p className="bg-red-600 w-full text-5xl text-center">loading....</p>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={`/login`} />;
};

export default PrivateRoute;
