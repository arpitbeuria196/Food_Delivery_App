import { LOGO_URL } from "../utils/constants";
import { FaCartArrowDown } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [loginStatus, setLoginStatus] = useState("Login");
    const isOnline = useOnlineStatus(false);
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items || []);

    const toggleLoginStatus = () => {
        setLoginStatus((prevStatus) => (prevStatus === "Login" ? "Logout" : "Login"));
    };

    return (
        <header className="bg-white shadow-md">
            <div className="flex justify-between items-center bg-gradient-to-r from-pink-400 to-purple-500 p-4">
                {/* Logo */}
                <div className="logo-container">
                    <img className="w-32" src={LOGO_URL} alt="Tasty Trails Logo" />
                </div>

                {/* Navigation Items */}
                <nav className="nav-items">
                    <ul className="flex space-x-8 text-lg font-medium text-white items-center">
                        <li className="flex items-center">
                            <span className="mr-2">Online Status: {isOnline ? "🟢" : "🔴"}</span>
                        </li>
                        <li className="hover:text-yellow-300 transition-colors">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-yellow-300 transition-colors">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="hover:text-yellow-300 transition-colors">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="flex items-center hover:text-yellow-300 transition-colors">
                            <Link to="/cart" className="flex items-center">
                                <FaCartArrowDown className="text-2xl mr-1" />
                                Cart - ({cartItems.length} items)
                            </Link>
                        </li>
                        <li className="hover:text-yellow-300 transition-colors">
                            <button
                                onClick={toggleLoginStatus}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-200"
                            >
                                {loginStatus}
                            </button>
                        </li>
                        <li className="text-lg text-white">{loggedInUser}</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
