import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

//All

const AppLayout = () => {
    return (
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
        {
            path: "/",
            element: <Body />,
        },
            {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path:"/restaurants/:resId",
            element: <RestaurantMenu />,
        }
    ],
        errorElement: <Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);