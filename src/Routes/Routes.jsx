import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ContactFrom from "../pages/Home/ContactFrom/ContactFrom";
import About from "../pages/Home/About/About";
import Skill from "../pages/Home/Skill/Skill";
import Projects from "../pages/Home/Projects/Projects";
import Error from "../pages/Error/Error";
     export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/contact',
            element:<ContactFrom></ContactFrom>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/skill',
            element:<Skill></Skill>
        },
        {
            path:'/projects',
            element:<Projects></Projects>
        }
      ]
    },
])
