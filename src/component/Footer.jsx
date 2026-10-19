import { Link } from "react-router";

const Footer = () => {
    return (
        <>
            <footer className="flex justify-center items-center py-8 bg-gray-950">
                <div>
                    <Link to="/" className="text-2xl font-bold text-blue-600">NL-MEx</Link>
                    <p className="text-gray-500 pt-2">© 2026 NL-MEx</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;