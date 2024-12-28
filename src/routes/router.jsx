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
import MyAssignments from "../Pages/MyAssignments";
import PrivateRoute from "./PrivateRoute";
import AddAssignment from "../Pages/AddAssignment";
import PendingAssignments from "../Pages/PendingAssignments";
import UpdateAssignment from "../Pages/updateAssignment";
import Error from "../Pages/Error";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
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
      element: <PrivateRoute><AssignmentApply></AssignmentApply></PrivateRoute>
    },
    {
      path:'/my-assignments',
      element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
    },
    {
      path:'/addAssignment',
      element: <PrivateRoute><AddAssignment></AddAssignment></PrivateRoute>
    },
    {
      path: '/updateAssignment/:id',
      element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>
    },
    {
      path: '/pending-assignments',
      element:<PrivateRoute><PendingAssignments></PendingAssignments></PrivateRoute>
    }

    ]
    },
  ]);

export default router;