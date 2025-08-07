import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import BottomNav from "../components/BottomNav";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Header.jsx";

const Home = () => {
    const posts = useSelector((state) => state.posts);
    const fileInputRef = useRef();

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("Selected file:", file);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 pb-24 relative">
            <div>
                <Header />
            </div>

            <div className="pt-1">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />

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