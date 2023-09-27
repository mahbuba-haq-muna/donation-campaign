import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Campaign from "../pages/Campaign/Campaign";


const myCreatedRoute = createBrowserRouter([

    {
    
        path: "/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children :[
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch('/cards.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/cards/:id",
                element: <Campaign></Campaign>,
                loader: () => fetch('/cards.json')
            }
        ]
    }
]);  
    

export default myCreatedRoute;