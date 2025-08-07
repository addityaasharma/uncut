import React, { useState, useRef } from "react";
import {
    FaHeart,
    FaComment,
    FaShare,
    FaChevronLeft,
    FaChevronRight,
    FaRocket
} from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

const PostCard = ({ post }) => {
    const images = Array.isArray(post.images) ? post.images : [];
    const [currentImage, setCurrentImage] = useState(0);
    const [isFollowing, setIsFollowing] = useState(false);
    const [showDots, setShowDots] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes || 0);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const isDragging = useRef(false);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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

    const handleComment = () => alert("Comment clicked");
    const handleShare = () => alert("Share clicked");

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleMouseDown = (e) => {
        isDragging.current = true;
        touchStartX.current = e.clientX;
    };

    const handleMouseUp = (e) => {
        if (!isDragging.current) return;
        touchEndX.current = e.clientX;
        isDragging.current = false;
        handleSwipe();
    };

    const handleSwipe = () => {
        const distance = touchStartX.current - touchEndX.current;
        const threshold = 50;

        if (distance > threshold) {
            nextImage();
        } else if (distance < -threshold) {
            prevImage();
        }
    };

    return (
        <div className="bg-white border border-gray-200 mb-1 overflow-hidden w-full max-w-xl mx-auto transition hover:shadow-xl">
            <div className="flex items-center justify-between px-4 py-4 bg-gray-50">
                <div className="flex items-center space-x-3">
                    <img
                        src={post.userImage}
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500"
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-900">@{post.username}</p>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <FaRocket className="text-blue-500 text-xs" />
                            <span>Building</span>
                        </div>
                    </div>
                </div>

                <div>
                    {isFollowing ? (
                        <span className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full font-medium">
                            Following
                        </span>
                    ) : showDots ? (
                        <FiMoreHorizontal className="text-gray-400 animate-pulse" />
                    ) : (
                        <button
                            onClick={handleFollow}
                            className="text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition"
                        >
                            Follow
                        </button>
                    )}
                </div>
            </div>

            {/* Image Carousel */}
            <div
                className="relative w-full h-72 bg-gray-100 overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{
                        transform: `translateX(-${currentImage * 100}%)`,
                        width: `${images.length * 100}%`,
                    }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Post"
                            className="w-full h-72 object-cover flex-shrink-0 select-none"
                            draggable="false"
                        />
                    ))}
                </div>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/70"
                        >
                            <FaChevronLeft className="text-base" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/70"
                        >
                            <FaChevronRight className="text-base" />
                        </button>

                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2.5 h-2.5 rounded-full ${index === currentImage
                                        ? "bg-white"
                                        : "bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Caption */}
            <div className="px-4 py-3">
                <p className="text-sm text-gray-800 leading-relaxed">{post.caption}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                    <button
                        onClick={handleLike}
                        className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors"
                    >
                        <FaHeart className={`text-xl ${liked ? "text-red-500" : ""}`} />
                        <span className="text-sm font-semibold">{likes}</span>
                    </button>

                    <button
                        onClick={handleComment}
                        className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors"
                    >
                        <FaComment className="text-xl" />
                        <span className="text-sm font-semibold">{post.comments}</span>
                    </button>

                    <button
                        onClick={handleShare}
                        className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition-colors"
                    >
                        <FaShare className="text-xl" />
                        <span className="text-sm font-semibold">Share</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
