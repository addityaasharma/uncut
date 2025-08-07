import React from "react";
import { FaPlus, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import this
import '../index.css';

const Header = () => {
    const navigate = useNavigate(); // use hook

    const handleBellClick = () => {
        navigate('/notification');
    };

    return (
        <div className="bg-white shadow-sm border-b border-gray-100 w-full">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center -ml-3">
                        <span className="text-white font-bold">U</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Uncutt</h1>
                    </div>
                </div>

                <div className="text-gray-900 cursor-pointer" onClick={handleBellClick}>
                    <FaBell size={22} />
                </div>
            </div>

            <div className="pb-4 w-[100%] ">
                <div className="ml-1 flex space-x-4 overflow-x-auto no-scrollbar">
                    {storyMoments.map((moment) => (
                        <div key={moment.id} className="flex-shrink-0">
                            <div className="flex flex-col items-center space-y-2">
                                <div
                                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md cursor-pointer ${moment.isMe ? "bg-blue-500" : "bg-gray-400"}`}
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

const storyMoments = [
    { id: 1, moment: "Share", user: "You", isMe: true },
    { id: 2, moment: "Win", user: "Sarah" },
    { id: 3, moment: "Idea", user: "Mike" },
    { id: 4, moment: "Goal", user: "Alex" },
    { id: 5, moment: "Success", user: "Emma" },
];

export default Header;
