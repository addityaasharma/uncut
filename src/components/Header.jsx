import React from "react";
import { FaPlus } from "react-icons/fa";
import { Bell } from "lucide-react";
import { BellDot } from "lucide-react"; 
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";


const storyMoments = [
    { id: 1, moment: "Share", user: "You", isMe: true },
    { id: 2, moment: "Win", user: "Sarah" },
    { id: 3, moment: "Idea", user: "Mike" },
    { id: 4, moment: "Goal", user: "Alex" },
    { id: 5, moment: "Success", user: "Emma" },
];

const Header = () => {
    return (
        <div className="bg-white shadow-sm border-b border-gray-100">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">U</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Uncutt</h1>
                        <p className="text-xs text-gray-600">Share your story</p>
                    </div>
                </div>

                <div className="text-gray-900 mr-2">
                    <FaBell size={22} />
                </div>
            </div>

            {/* Story section */}
            <div className="px-4 pb-4">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                    {storyMoments.map((moment) => (
                        <div key={moment.id} className="flex-shrink-0">
                            <div className="flex flex-col items-center space-y-2">
                                <div
                                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md cursor-pointer ${
                                        moment.isMe ? "bg-blue-500" : "bg-gray-400"
                                    }`}
                                >
                                    {moment.isMe ? (
                                        <FaPlus className="text-white text-lg" />
                                    ) : (
                                        <span className="text-white font-bold">
                                            {moment.moment.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <div className="text-center">
                                    <p className="text-xs font-medium text-gray-800">{moment.moment}</p>
                                    <p className="text-xs text-gray-500">{moment.user}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
