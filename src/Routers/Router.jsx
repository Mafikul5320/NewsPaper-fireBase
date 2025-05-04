import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import MiddlePoint from "../components/MiddlePoint";
import CategoriesNews from "../Pages/CategoriesNews";
import AuthLayout from "../components/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetailsLayout from "../components/NewsDetailsLayout";
import NewsDetails from "../components/NewsDetails";
import PrivateRouter from "../components/PrivateRouter";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        children: [
            {
                index: true,
                Component: MiddlePoint
            },
            {
                path: "categories/:id",
                Component: CategoriesNews,
                loader: () => fetch("/news.json")
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/Login",
                Component: Login
            },
            {
                path: "/auth/Register",
                Component: Register
            }
        ]
    },
    {
        path: "/news",
        Component: NewsDetailsLayout,
        loader: () => fetch("/news.json"),
        children: [
            {
                path: "/news/details/:uid",
                element: <PrivateRouter>
                    <NewsDetails></NewsDetails>
                </PrivateRouter>
            }
        ]
    }
])