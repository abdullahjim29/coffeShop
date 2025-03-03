import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CoffeDetails from "../pages/CoffeDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2>Error 404</h2>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/coffe-details',
                element: <CoffeDetails/>
            }
        ]
    },
])

export default router;