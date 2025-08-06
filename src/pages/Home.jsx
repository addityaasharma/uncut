import React, { useRef } from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import BottomNav from "../components/BottomNav";
import { FaPlus } from "react-icons/fa";

const Home = () => {
    const posts = useSelector((state) => state.posts);
    const fileInputRef = useRef();

    const handleUploadClick = () => {
        fileInputRef.current.click(); // Open file/camera chooser
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("Selected file:", file);
            // You can now upload or preview this file
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 pb-24 relative">
            <div className="p-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Hidden file input */}
            <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />

            {/* Plus Button to open camera/file */}
            <button
                className="fixed bottom-16 right-6 bg-black text-white p-4 rounded-full shadow-xl z-50"
                onClick={handleUploadClick}
            >
                <FaPlus />
            </button>

            <BottomNav />
        </div>
    );
};

export default Home;
