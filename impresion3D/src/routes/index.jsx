import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Calculator from "../Components/Cost Calculator/Calculator";
import FrequentQuestions from "../Components/frequent questions/FrequentQuestions";
import ListOfProblems from "../Components/list of problems/ListOfProblems";
import Error404 from "../Components/Error404";


const MyRoutes = ({changeTheme}) => {
  
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log('cambio')
  };

 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListOfProblems  changeTheme={changeTheme}/>,
      errorElement: <Error404 />
    },
    {
      path: "/preguntas-frecuentes",
      element: <FrequentQuestions />
    },
    {
      path: "/calculadora-costos",
      element: <Calculator />
    }
  ]);

  return (
    // Envuelve el componente ThemeSwitch con RouterProvider y pasa la función de cambio de tema como prop
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default MyRoutes;
