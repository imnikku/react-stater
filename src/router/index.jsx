import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Pagenotfound from '../pages/Pagenotfound'
import Layout from "../layout/layout";
const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',     
                element: <Home />
            },
        ]

    }, {
        path: '*',
        element: <Pagenotfound />
    }

])

export default router;