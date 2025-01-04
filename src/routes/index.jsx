import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Calculator from "../Components/Cost Calculator/CalculatorContainer";
import Error404 from "../Components/Error404";
import CalculatorDocumentation from "../Components/Cost Calculator/CalculatorDocumentation";

const MyRoutes = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Calculator/>
    },
    {
      path: "/calculadora-Documentacion",
      element: <CalculatorDocumentation />
      }
      

  ]);

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default MyRoutes;
