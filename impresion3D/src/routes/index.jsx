import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Calculator from "../Components/Cost Calculator/CalculatorContainer";
import FrequentQuestions from "../Components/frequent questions/FrequentQuestions";
import ListOfProblems from "../Components/list of problems/ListOfProblems";
import Error404 from "../Components/Error404";
import CalculatorDocumentation from "../Components/Cost Calculator/CalculatorDocumentation";

const MyRoutes = ({changeTheme , theme}) => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListOfProblems  changeTheme={changeTheme} theme={theme}/>,
      errorElement: <Error404 />
    },
    {
      path: "/preguntas-frecuentes",
      element: <FrequentQuestions changeTheme={changeTheme} theme={theme}/>
    },
    {
      path: "/calculadora-costos",
      element: <Calculator changeTheme={changeTheme} theme={theme} />
    },
    {
      path: "/calculadora-Documentacion",
      element: <CalculatorDocumentation changeTheme={changeTheme} theme={theme}/>
      }
  ]);

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default MyRoutes;
