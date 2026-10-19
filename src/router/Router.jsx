import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout
    }
])

export default router;