import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <>
      <Outlet></Outlet>;
    </>
  );
};

export default PrivateRoute;
