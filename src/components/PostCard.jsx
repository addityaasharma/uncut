import React, { useState } from "react";
import {
    FaHeart,
    FaComment,
    FaShare,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

const PostCard = ({ post }) => {
    const images = Array.isArray(post.images) ? post.images : [];
    const [currentImage, setCurrentImage] = useState(0);
    const [isFollowing, setIsFollowing] = useState(false);
    const [showDots, setShowDots] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes || 0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleFollow = () => {
        setShowDots(true);
        setTimeout(() => {
            setIsFollowing(true);
            setShowDots(false);
        }, 1200);
    };

    const handleLike = () => {
        setLiked(!liked);
        setLikes((prev) => (liked ? prev - 1 : prev + 1));
    };

    const handleComment = () => {
        alert("Comment clicked");
    };

    const handleShare = () => {
        alert("Share clicked");
    };

    return (
        <div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden relative">
            <div className="relative w-full h-72 overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentImage * 100}%)`, width: `${images.length * 100}%` }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Post"
                            className="w-full h-72 object-cover flex-shrink-0"
                        />
                    ))}
                </div>

                <div className="absolute top-2 left-2 flex items-center bg-black/60 rounded-full px-2 py-1 text-white text-sm z-10">
                    <img
                        src={post.userImage}
                        alt="user"
                        className="w-6 h-6 rounded-full mr-2"
                    />
                    @{post.username}
                </div>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full z-10"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full z-10"
                        >
                            <FaChevronRight />
                        </button>

                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-white" : "bg-gray-400"}`}
                                ></div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-sm text-gray-700 font-medium">@{post.username}</h3>
                <p className="text-gray-800 mt-1">{post.caption}</p>

                <div className="flex justify-between items-center mt-3">
                    <div className="flex gap-4 text-gray-600 text-sm">
                        <button onClick={handleLike} className="flex items-center gap-1 hover:text-red-500">
                            <FaHeart className={liked ? "text-red-500" : ""} /> {likes}
                        </button>
                        <button onClick={handleComment} className="flex items-center gap-1 hover:text-blue-500">
                            <FaComment /> {post.comments}
                        </button>
                        <button onClick={handleShare} className="flex items-center gap-1 hover:text-green-500">
                            <FaShare />
                        </button>
                    </div>

                    <div>
                        {isFollowing ? (
                            <span className="text-sm text-green-600 font-semibold">Following</span>
                        ) : showDots ? (
                            <span className="flex items-center text-gray-400 animate-pulse">
                                <FiMoreHorizontal className="text-xl" />
                            </span>
                        ) : (
                            <button
                                onClick={handleFollow}
                                className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
                            >
                                Follow
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;