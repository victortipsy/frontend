import React from "react";
import { useRoutes } from "react-router-dom";
import Cart from "../Cart/Cart";
import HomeScreen from "../HomeScreen/HomeScreen";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return element;
};

export default AllRoutes;
