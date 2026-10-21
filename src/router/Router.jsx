import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import About from "../component/HomePage/About";
import Contact from "../component/HomePage/Contact";
import Home from "../pages/Home";
import MoviesList from "../pages/MoviesList";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "movies-list",
                Component: MoviesList
            }
        ]
    }
])

export default router;