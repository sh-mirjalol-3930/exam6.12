import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/layout/MainLayout";
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import Liked from "../pages/liked/Liked";
import Cart from "../pages/cart/Cart";
import DetailProduct from "../pages/detail/Detail";
import OrderForm from "../pages/order/OrderForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"detail",
                element:<Detail/>
            },
            {
                path:"liked",
                element:<Liked/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"order",
                element:<OrderForm/>
            },
            {
                path:"products/:id",
                element:<DetailProduct/>
            },
        ]
    }
])