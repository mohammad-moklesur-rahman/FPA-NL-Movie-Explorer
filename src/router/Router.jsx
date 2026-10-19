import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import About from "../component/HomePage/About";
import Contact from "../component/HomePage/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout
    },
    {
        path: "about",
        Component: About
    },
    {
        path: "contact",
        Component: Contact
    }
])

export default router;