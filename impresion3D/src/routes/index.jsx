import Calculator from "../Components/Cost Calculator/Calculator";
import FrequentQuestions from "../Components/frequent questions/FrequentQuestions";
import ListOfProblems from "../Components/list of problems/ListOfProblems";
import Error404 from "../Components/Error404";
import {
    createBrowserRouter,
    Form,
    RouterProvider,
    
  } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ListOfProblems/>,
        errorElement: <Error404/>
    },
    {
        path:"/preguntas-frecuentes",
        element: <FrequentQuestions/>
    },
    {
        path:"/calculadora-costos",
        element: <Calculator/> 
    }
])

const MyRoutes = ()=> <RouterProvider router={router}  /> 

export default MyRoutes