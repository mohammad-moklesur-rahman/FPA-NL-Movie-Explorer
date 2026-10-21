import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="bg-[#B8CFB3] p-4">
            <div className="container m-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">NL-MEx</Link>
                <ul className="font-semibold hidden md:block">
                    <NavLink to="/">Home</NavLink>
                    <NavLink className="mx-8" to="/about">About Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </ul>
                <button onClick={() => navigate("/movies-list")} className="bg-blue-600 px-4 py-1 rounded-2xl text-white font-semibold hover:bg-gray-100 hover:text-gray-950 cursor-pointer transition-all">Movies</button>
            </div>
        </div>
        </>
    );
};

export default Navbar;