import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDeatils from "../pages/NewsDeatils";
import PrivateRoute from "./PrivateRoute";

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
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news/:id',
        element: (
            <PrivateRoute>
                <NewsDeatils></NewsDeatils>
            </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>,
            }
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default Routers;