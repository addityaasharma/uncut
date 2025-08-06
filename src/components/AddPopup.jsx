// src/components/AddPopup.jsx
import React from "react";
import { FaVideo, FaCamera, FaPen } from "react-icons/fa";

const AddPopup = ({ visible }) => {
    if (!visible) return null;

    return (
        <div className="absolute bottom-[90px] right-6 bg-white/40 backdrop-blur-lg rounded-xl shadow-lg p-3 w-52 space-y-3 z-50 border border-white/30 text-black">
            <button className="w-full flex items-center gap-2 hover:bg-white/60 hover:text-black p-2 rounded-md transition">
                <FaVideo /> Upload Video
            </button>
            <button className="w-full flex items-center gap-2 hover:bg-white/60 hover:text-black p-2 rounded-md transition">
                <FaCamera /> Open Camera
            </button>
            <button className="w-full flex items-center gap-2 hover:bg-white/60 hover:text-black p-2 rounded-md transition">
                <FaPen /> Draw
            </button>
        </div>
    );
};

export default AddPopup;
