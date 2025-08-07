import React, { useState } from "react";
import {
    FaHeart,
    FaComment,
    FaShare,
    FaChevronLeft,
    FaChevronRight,
    FaRocket,
    FaLightbulb
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
        <div className="bg-white border-b border-gray-100 mb-1 overflow-hidden w-full">
            <div className="flex items-center justify-between px-3 py-2 bg-gray-50">
                <div className="flex items-center space-x-2">
                    <img
                        src={post.userImage}
                        alt="user"
                        className="w-7 h-7 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-900">@{post.username}</p>
                        <div className="flex items-center space-x-1">
                            <FaRocket className="text-blue-500 text-xs" />
                            <span className="text-xs text-gray-500">Building</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    {isFollowing ? (
                        <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                            Following
                        </span>
                    ) : showDots ? (
                        <FiMoreHorizontal className="text-gray-400 animate-pulse" />
                    ) : (
                        <button
                            onClick={handleFollow}
                            className="text-xs bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
                        >
                            Follow
                        </button>
                    )}
                </div>
            </div>

            <div className="relative w-full h-64">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{
                        transform: `translateX(-${currentImage * 100}%)`,
                        width: `${images.length * 100}%`
                    }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Post"
                            className="w-full h-64 object-cover flex-shrink-0"
                        />
                    ))}
                </div>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white w-8 h-8 rounded-full flex items-center justify-center"
                        >
                            <FaChevronLeft className="text-xs" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white w-8 h-8 rounded-full flex items-center justify-center"
                        >
                            <FaChevronRight className="text-xs" />
                        </button>

                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1.5 h-1.5 rounded-full ${index === currentImage ? "bg-white" : "bg-white bg-opacity-50"
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="px-3 py-2">
                <p className="text-sm text-gray-800 leading-relaxed">{post.caption}</p>
            </div>

            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleLike}
                        className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors"
                    >
                        <FaHeart className={`text-sm ${liked ? "text-red-500" : ""}`} />
                        <span className="text-xs font-medium">{likes}</span>
                    </button>

                    <button
                        onClick={handleComment}
                        className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors"
                    >
                        <FaComment className="text-sm" />
                        <span className="text-xs font-medium">{post.comments}</span>
                    </button>

                    <button
                        onClick={handleShare}
                        className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition-colors"
                    >
                        <FaShare className="text-sm" />
                        <span className="text-xs font-medium">Share</span>
                    </button>
                </div>

                <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <FaLightbulb className="text-yellow-500" />
                    <span>Startup Journey</span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;