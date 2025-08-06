// src/components/BottomNav.jsx
import React from "react";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";

const BottomNav = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-3 z-40">
        <FaHome size={22} />
        <FaSearch size={22} />
        <div className="w-16" /> {/* space for floating button */}
        <FaBell size={22} />
        <FaUser size={22} />
    </nav>
);

export default BottomNav;
