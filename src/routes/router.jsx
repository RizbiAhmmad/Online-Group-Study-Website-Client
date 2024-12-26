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
import EvaluateAssignment from "../Pages/EvaluateAssignment";
import UpdateAssignment from "../Pages/updateAssignment";


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
      element: <PrivateRoute><AssignmentApply></AssignmentApply></PrivateRoute>
    },
    {
      path:'/myassignments',
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
    },
    // {
    //   path:'/evaluate-assignment/:id',
    //   element:<PrivateRoute><EvaluateAssignment></EvaluateAssignment></PrivateRoute>
    // }

    ]
    },
  ]);

export default router;