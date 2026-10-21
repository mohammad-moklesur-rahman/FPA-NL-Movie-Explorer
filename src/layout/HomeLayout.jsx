import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;