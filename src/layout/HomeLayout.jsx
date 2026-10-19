import Footer from "../component/Footer";
import Banner from "../component/HomePage/Banner";
import Navbar from "../component/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Footer />
        </div>
    );
};

export default HomeLayout;