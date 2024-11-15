import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <h1>News Layout</h1>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<h2>Login </h2>
            },
            {
                path:'/authy/register',
                element:<h2>Regidter</h2>
            }
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default Routers;