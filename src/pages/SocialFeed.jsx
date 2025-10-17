import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Home, TrendingUp, Users, Bell, Settings, Search, Plus, X,
    ThumbsUp, MessageSquare, Share2, Bookmark, MoreVertical,
    Briefcase, Award, Target, Zap, ChevronRight, Globe, Lock
} from 'lucide-react'

const SocialPlatform = () => {
    const [activeNav, setActiveNav] = useState('feed')
    const [likedPosts, setLikedPosts] = useState({})

    const trendingTopics = [
        { tag: 'SeriesA', posts: '2.5K posts', color: 'bg-purple-100 text-purple-600' },
        { tag: 'ProductLaunch', posts: '1.8K posts', color: 'bg-pink-100 text-pink-600' },
        { tag: 'Fundraising', posts: '3.2K posts', color: 'bg-orange-100 text-orange-600' },
        { tag: 'StartupLife', posts: '5.1K posts', color: 'bg-blue-100 text-blue-600' }
    ]

    const quickStats = [
        { label: 'Your Reach', value: '24.5K', icon: TrendingUp, color: 'purple' },
        { label: 'Connections', value: '1,234', icon: Users, color: 'pink' },
        { label: 'Milestones', value: '12', icon: Award, color: 'orange' }
    ]

    const posts = [
        {
            id: 1,
            author: {
                name: 'TechVenture',
                handle: '@techventure',
                avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop',
                verified: true,
                role: 'Series B Startup'
            },
            content: 'Excited to announce our $50M Series B funding! 🚀 This milestone marks a new chapter in our journey to revolutionize the tech industry. Huge thanks to our investors and team!',
            timestamp: '2 hours ago',
            image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=400&fit=crop',
            tags: ['SeriesB', 'Funding', 'Milestone'],
            engagement: { likes: 1243, comments: 89, shares: 45 },
            category: 'Funding'
        },
        {
            id: 2,
            author: {
                name: 'InnovateCo',
                handle: '@innovate',
                avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop',
                verified: false,
                role: 'Product Studio'
            },
            content: 'Behind the scenes of our new product launch event. The energy was incredible! Special thanks to our amazing community for all the support 💜',
            timestamp: '5 hours ago',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
            tags: ['ProductLaunch', 'Community'],
            engagement: { likes: 856, comments: 54, shares: 28 },
            category: 'Product'
        },
        {
            id: 3,
            author: {
                name: 'Startup Hub',
                handle: '@startuphub',
                avatar: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop',
                verified: true,
                role: 'Accelerator'
            },
            content: 'Team culture is everything. Here\'s how we maintain a healthy work environment while scaling rapidly. Check out our latest blog post! 🏢✨',
            timestamp: '1 day ago',
            tags: ['Culture', 'Team', 'Growth'],
            engagement: { likes: 2104, comments: 142, shares: 67 },
            category: 'Culture'
        }
    ]

    const connections = [
        { name: 'Sarah Chen', role: 'Founder @ StartupXYZ', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
        { name: 'Mike Johnson', role: 'VC @ Innovation Fund', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
        { name: 'Emma Wilson', role: 'CEO @ TechFlow', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' }
    ]

    const toggleLike = (postId) => {
        setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-200 p-6 hidden lg:flex flex-col z-40">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                        Uncut
                    </h1>
                    <p className="text-sm text-gray-600">Your Startup, Your Story</p>
                </div>

                <nav className="space-y-2 flex-1">
                    {[
                        { id: 'feed', icon: Home, label: 'Feed', badge: null },
                        { id: 'trending', icon: TrendingUp, label: 'Trending', badge: 'Hot' },
                        { id: 'network', icon: Users, label: 'Network', badge: null },
                        { id: 'notifications', icon: Bell, label: 'Notifications', badge: '12' },
                        { id: 'settings', icon: Settings, label: 'Settings', badge: null }
                    ].map(item => {
                        const Icon = item.icon
                        const isActive = activeNav === item.id
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveNav(item.id)}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                {item.badge && (
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-purple-100 text-purple-600'
                                        }`}>
                                        {item.badge}
                                    </span>
                                )}
                            </button>
                        )
                    })}
                </nav>

                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" />
                    Share Your Story
                </button>

                <div className="mt-6 p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                            JD
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">John Doe</p>
                            <p className="text-xs text-gray-600">Founder @ Uncut</p>
                        </div>
                    </div>
                    <div className="flex gap-3 text-center text-sm">
                        <div>
                            <p className="font-bold text-purple-600">234</p>
                            <p className="text-xs text-gray-600">Posts</p>
                        </div>
                        <div>
                            <p className="font-bold text-purple-600">12.5K</p>
                            <p className="text-xs text-gray-600">Reach</p>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="lg:ml-72">
                <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent lg:hidden">
                                Uncut
                            </h1>

                            <div className="flex-1 max-w-2xl mx-4 hidden md:block">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search startups, topics, or people..."
                                        className="w-full pl-12 pr-4 py-2.5 bg-gray-100 rounded-full focus:ring-2 focus:ring-purple-500 focus:bg-white outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="p-2 hover:bg-gray-100 rounded-full relative lg:hidden">
                                    <Bell className="w-6 h-6 text-gray-700" />
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                                </button>
                                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all hidden sm:flex items-center gap-2">
                                    <Plus className="w-4 h-4" />
                                    New Post
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="grid grid-cols-3 gap-4">
                                {quickStats.map((stat, idx) => {
                                    const Icon = stat.icon
                                    return (
                                        <motion.div
                                            key={idx}
                                            className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <Icon className={`w-6 h-6 text-${stat.color}-600 mb-2`} />
                                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-xs text-gray-600">{stat.label}</p>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 self-start">
                                        JD
                                    </div>

                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="What is happening in your startup.."
                                            className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-3 text-sm sm:text-base"
                                        />

                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                                            <div className="flex flex-wrap gap-2">
                                                <button className="px-3 py-1.5 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-100 transition-all">
                                                    Milestone
                                                </button>
                                                <button className="px-3 py-1.5 bg-pink-50 text-pink-600 rounded-lg text-sm font-medium hover:bg-pink-100 transition-all">
                                                    Update
                                                </button>
                                                <button className="px-3 py-1.5 bg-orange-50 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-100 transition-all">
                                                    Question
                                                </button>
                                            </div>

                                            <button className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                                                Post
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {posts.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                    <div className="p-6 pb-4">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex gap-3">
                                                <img
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-bold text-gray-900">{post.author.name}</h3>
                                                        {post.author.verified && (
                                                            <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                        <span className="px-2 py-0.5 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full">
                                                            {post.category}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{post.author.role} • {post.timestamp}</p>
                                                </div>
                                            </div>
                                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                                                <MoreVertical className="w-5 h-5 text-gray-600" />
                                            </button>
                                        </div>

                                        <p className="text-gray-900 leading-relaxed mb-3">{post.content}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {post.image && (
                                        <img
                                            src={post.image}
                                            alt="Post content"
                                            className="w-full object-cover max-h-96"
                                        />
                                    )}

                                    <div className="p-6 pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex gap-6">
                                                <button
                                                    onClick={() => toggleLike(post.id)}
                                                    className={`flex items-center gap-2 transition-all ${likedPosts[post.id] ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                                                        }`}
                                                >
                                                    <ThumbsUp className={`w-5 h-5 ${likedPosts[post.id] ? 'fill-purple-600' : ''}`} />
                                                    <span className="text-sm font-semibold">
                                                        {likedPosts[post.id] ? post.engagement.likes + 1 : post.engagement.likes}
                                                    </span>
                                                </button>
                                                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all">
                                                    <MessageSquare className="w-5 h-5" />
                                                    <span className="text-sm font-semibold">{post.engagement.comments}</span>
                                                </button>
                                                <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all">
                                                    <Share2 className="w-5 h-5" />
                                                    <span className="text-sm font-semibold">{post.engagement.shares}</span>
                                                </button>
                                            </div>
                                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                                                <Bookmark className="w-5 h-5 text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="hidden lg:block space-y-6">
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-gray-900">Trending Topics</h3>
                                    <Zap className="w-5 h-5 text-orange-500" />
                                </div>
                                <div className="space-y-3">
                                    {trendingTopics.map((topic, idx) => (
                                        <div
                                            key={idx}
                                            className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-semibold text-gray-900">#{topic.tag}</p>
                                                    <p className="text-xs text-gray-600">{topic.posts}</p>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-gray-400" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4">Active Now</h3>
                                <div className="space-y-3">
                                    {connections.map((connection, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-all">
                                            <div className="relative">
                                                <img
                                                    src={connection.avatar}
                                                    alt={connection.name}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-sm text-gray-900 truncate">{connection.name}</p>
                                                <p className="text-xs text-gray-600 truncate">{connection.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-xs text-gray-500 space-y-2">
                                <div className="flex flex-wrap gap-2">
                                    <a href="#" className="hover:text-purple-600">About</a>
                                    <span>•</span>
                                    <a href="#" className="hover:text-purple-600">Careers</a>
                                    <span>•</span>
                                    <a href="#" className="hover:text-purple-600">Privacy</a>
                                    <span>•</span>
                                    <a href="#" className="hover:text-purple-600">Terms</a>
                                </div>
                                <p>© 2025 Uncut. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50">
                <div className="flex items-center justify-around py-3">
                    <button className="p-2 text-purple-600">
                        <Home className="w-6 h-6" />
                    </button>
                    <button className="p-2 text-gray-600">
                        <TrendingUp className="w-6 h-6" />
                    </button>
                    <button className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full -mt-6 shadow-lg">
                        <Plus className="w-6 h-6" />
                    </button>
                    <button className="relative p-2 text-gray-600">
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <button className="p-2 text-gray-600">
                        <Users className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SocialPlatform