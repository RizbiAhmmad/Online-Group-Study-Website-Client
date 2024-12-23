import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AssignmentDetails from "../Pages/AssignmentDetails";
import Assignments from "../Pages/Assignments";
import AssignmentApply from "../Pages/AssignmentApply";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[{
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
      path: '/assignments',
      element: <Assignments></Assignments>
    },
    {
      path:'/assignments/:id',
      element: <AssignmentDetails></AssignmentDetails>,
      loader: ({params}) =>fetch (`http://localhost:5000/Assignments/${params.id}`)
    },
    {
      path: '/assignmentApply/:id',
      element: <AssignmentApply></AssignmentApply>
    }
    ]
    },
  ]);

export default router;