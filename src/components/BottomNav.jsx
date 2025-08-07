import React from "react";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
    const { pathname } = useLocation();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-3 z-40">
            <Link to="/" className={pathname === "/" ? "text-black" : "text-gray-500"}>
                <FaHome size={22} />
            </Link>
            <FaSearch size={22} />
            <div className="w-16" />
            <Link
                to="/notification"
                className={pathname === "/notification" ? "text-black" : "text-gray-500"}
            >
                <FaBell size={22} />
            </Link>
            <FaUser size={22} />
        </nav>
    );
};

export default BottomNav;
