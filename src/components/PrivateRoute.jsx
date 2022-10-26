import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuth }) => {
  if (!isAuth.token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
