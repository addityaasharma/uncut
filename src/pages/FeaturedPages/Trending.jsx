import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    TrendingUp, Flame, Zap, Users, MessageSquare, Share2, ThumbsUp,
    Bookmark, MoreVertical, Hash, Eye, Clock, ArrowUp, Filter,
    Star, Award, Target, Rocket, Calendar, Globe, ChevronRight,
    Play, Image, FileText, Video, Mic, ExternalLink, Check
} from 'lucide-react'

const TrendingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedTimeframe, setSelectedTimeframe] = useState('today')
    const [likedPosts, setLikedPosts] = useState({})
    const [bookmarkedPosts, setBookmarkedPosts] = useState({})

    const categories = [
        { id: 'all', label: 'All', icon: Globe },
        { id: 'funding', label: 'Funding', icon: Target },
        { id: 'product', label: 'Product', icon: Rocket },
        { id: 'team', label: 'Team', icon: Users },
        { id: 'milestone', label: 'Milestones', icon: Award }
    ]

    const timeframes = [
        { id: 'today', label: 'Today' },
        { id: 'week', label: 'This Week' },
        { id: 'month', label: 'This Month' },
        { id: 'year', label: 'This Year' }
    ]

    const trendingTopics = [
        {
            rank: 1,
            tag: 'SeriesB',
            posts: '3.2K posts',
            trend: '+245%',
            color: 'purple',
            description: 'Major funding announcements'
        },
        {
            rank: 2,
            tag: 'AIStartup',
            posts: '2.8K posts',
            trend: '+198%',
            color: 'blue',
            description: 'AI-powered solutions'
        },
        {
            rank: 3,
            tag: 'ProductLaunch',
            posts: '2.5K posts',
            trend: '+187%',
            color: 'pink',
            description: 'New product releases'
        },
        {
            rank: 4,
            tag: 'RemoteWork',
            posts: '2.1K posts',
            trend: '+156%',
            color: 'green',
            description: 'Remote-first culture'
        },
        {
            rank: 5,
            tag: 'Sustainability',
            posts: '1.9K posts',
            trend: '+142%',
            color: 'emerald',
            description: 'Green tech initiatives'
        },
        {
            rank: 6,
            tag: 'WebDev',
            posts: '1.7K posts',
            trend: '+128%',
            color: 'orange',
            description: 'Web development trends'
        },
        {
            rank: 7,
            tag: 'StartupLife',
            posts: '1.5K posts',
            trend: '+115%',
            color: 'red',
            description: 'Founder stories'
        },
        {
            rank: 8,
            tag: 'Growth',
            posts: '1.3K posts',
            trend: '+98%',
            color: 'indigo',
            description: 'Growth strategies'
        }
    ]

    const trendingPosts = [
        {
            id: 1,
            rank: 1,
            author: {
                name: 'TechVenture AI',
                handle: '@techventureai',
                avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop',
                verified: true
            },
            content: 'Just closed our $75M Series B led by Sequoia! 🚀 This is a game-changer for AI-powered startups. We\'re revolutionizing how businesses leverage artificial intelligence. Excited for this new chapter!',
            timestamp: '2 hours ago',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
            tags: ['SeriesB', 'AIStartup', 'Funding'],
            engagement: {
                likes: 15243,
                comments: 892,
                shares: 1205,
                views: 245000
            },
            category: 'funding',
            trendScore: 98
        },
        {
            id: 2,
            rank: 2,
            author: {
                name: 'GreenTech Solutions',
                handle: '@greentechsol',
                avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop',
                verified: true
            },
            content: 'Our carbon-neutral platform just hit 1 MILLION users! 🌱 Proving that sustainability and profitability can go hand-in-hand. Thanks to everyone who believed in our mission from day one.',
            timestamp: '4 hours ago',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop',
            tags: ['Sustainability', 'Milestone', 'GreenTech'],
            engagement: {
                likes: 12856,
                comments: 654,
                shares: 892,
                views: 198000
            },
            category: 'milestone',
            trendScore: 95
        },
        {
            id: 3,
            rank: 3,
            author: {
                name: 'DevFlow',
                handle: '@devflow',
                avatar: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop',
                verified: false
            },
            content: 'Launching our new developer platform TODAY! 🎉 Built by developers, for developers. Real-time collaboration, AI-assisted coding, and seamless deployment. Free tier available now!',
            timestamp: '6 hours ago',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
            tags: ['ProductLaunch', 'WebDev', 'DevTools'],
            engagement: {
                likes: 9834,
                comments: 523,
                shares: 678,
                views: 156000
            },
            category: 'product',
            trendScore: 92
        },
        {
            id: 4,
            rank: 4,
            author: {
                name: 'Remote Hub',
                handle: '@remotehub',
                avatar: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100&h=100&fit=crop',
                verified: true
            },
            content: 'We\'re now 100% remote with team members in 45 countries! 🌍 Here\'s what we learned about building culture without an office. Thread 🧵',
            timestamp: '8 hours ago',
            tags: ['RemoteWork', 'Culture', 'Team'],
            engagement: {
                likes: 8234,
                comments: 445,
                shares: 589,
                views: 134000
            },
            category: 'team',
            trendScore: 88
        },
        {
            id: 5,
            rank: 5,
            author: {
                name: 'StartupStories',
                handle: '@startupstories',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                verified: true
            },
            content: 'From garage to $100M valuation in 18 months. Here\'s the unfiltered story of our journey, the mistakes we made, and the lessons we learned. 🚀',
            timestamp: '12 hours ago',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
            tags: ['StartupLife', 'Growth', 'Journey'],
            engagement: {
                likes: 7456,
                comments: 398,
                shares: 512,
                views: 112000
            },
            category: 'milestone',
            trendScore: 85
        },
        {
            id: 6,
            rank: 6,
            author: {
                name: 'InnovateCo',
                handle: '@innovateco',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                verified: false
            },
            content: 'Our team doubled in size this quarter! 📈 We\'re hiring for 50+ positions across engineering, product, and design. Remote-friendly. Apply now!',
            timestamp: '1 day ago',
            tags: ['Hiring', 'Team', 'Growth'],
            engagement: {
                likes: 6234,
                comments: 287,
                shares: 423,
                views: 98000
            },
            category: 'team',
            trendScore: 82
        }
    ]

    const creators = [
        {
            name: 'Sarah Chen',
            handle: '@sarahchen',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
            role: 'Founder @ StartupXYZ',
            followers: '45.2K',
            trending: true
        },
        {
            name: 'Mike Johnson',
            handle: '@mikej',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
            role: 'VC @ Innovation Fund',
            followers: '38.5K',
            trending: true
        },
        {
            name: 'Emma Wilson',
            handle: '@emmaw',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
            role: 'CEO @ TechFlow',
            followers: '32.1K',
            trending: true
        }
    ]

    const toggleLike = (postId) => {
        setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }))
    }

    const toggleBookmark = (postId) => {
        setBookmarkedPosts(prev => ({ ...prev, [postId]: !prev[postId] }))
    }

    const filteredPosts = trendingPosts.filter(post =>
        selectedCategory === 'all' || post.category === selectedCategory
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                            <Flame className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                                Trending Now
                            </h1>
                            <p className="text-gray-600">Discover what's hot in the startup world</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {categories.map(category => {
                                const Icon = category.icon
                                const isActive = selectedCategory === category.id
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all ${isActive
                                                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {category.label}
                                    </button>
                                )
                            })}
                        </div>

                        <div className="flex gap-2 sm:ml-auto">
                            {timeframes.map(timeframe => (
                                <button
                                    key={timeframe.id}
                                    onClick={() => setSelectedTimeframe(timeframe.id)}
                                    className={`px-4 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all ${selectedTimeframe === timeframe.id
                                            ? 'bg-white text-orange-600 border-2 border-orange-200 shadow-sm'
                                            : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    {timeframe.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                            <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
                            <p className="text-3xl font-bold mb-1">2.4M</p>
                            <p className="text-sm text-white/80">Total Interactions</p>
                            <div className="flex items-center gap-1 mt-2 text-sm">
                                <ArrowUp className="w-4 h-4" />
                                <span>+24% from yesterday</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                            <Flame className="w-8 h-8 mb-3 opacity-80" />
                            <p className="text-3xl font-bold mb-1">156</p>
                            <p className="text-sm text-white/80">Trending Topics</p>
                            <div className="flex items-center gap-1 mt-2 text-sm">
                                <ArrowUp className="w-4 h-4" />
                                <span>+12 new topics</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                            <Users className="w-8 h-8 mb-3 opacity-80" />
                            <p className="text-3xl font-bold mb-1">45K</p>
                            <p className="text-sm text-white/80">Active Users</p>
                            <div className="flex items-center gap-1 mt-2 text-sm">
                                <ArrowUp className="w-4 h-4" />
                                <span>+18% engagement</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex gap-3 flex-1">
                                                <div className="relative">
                                                    <img
                                                        src={post.author.avatar}
                                                        alt={post.author.name}
                                                        className="w-12 h-12 rounded-full object-cover"
                                                    />
                                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                        {post.rank}
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-bold text-gray-900">{post.author.name}</h3>
                                                        {post.author.verified && (
                                                            <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                                                                <Check className="w-3 h-3 text-white" />
                                                            </div>
                                                        )}
                                                        <div className="flex items-center gap-1 px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full">
                                                            <Flame className="w-3 h-3" />
                                                            <span className="text-xs font-bold">{post.trendScore}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <span>{post.author.handle}</span>
                                                        <span>•</span>
                                                        <span>{post.timestamp}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                                                <MoreVertical className="w-5 h-5 text-gray-600" />
                                            </button>
                                        </div>

                                        <p className="text-gray-900 leading-relaxed mb-3">{post.content}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-semibold hover:shadow-md transition-all cursor-pointer"
                                                >
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

                                    <div className="p-6 border-t border-gray-100">
                                        <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Eye className="w-4 h-4" />
                                                <span className="font-semibold">{(post.engagement.views / 1000).toFixed(1)}K views</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <TrendingUp className="w-4 h-4 text-orange-500" />
                                                <span className="font-semibold text-orange-600">Trending</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-6">
                                                <button
                                                    onClick={() => toggleLike(post.id)}
                                                    className={`flex items-center gap-2 transition-all ${likedPosts[post.id] ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                                                        }`}
                                                >
                                                    <ThumbsUp className={`w-5 h-5 ${likedPosts[post.id] ? 'fill-orange-600' : ''}`} />
                                                    <span className="text-sm font-semibold">
                                                        {likedPosts[post.id] ? post.engagement.likes + 1 : post.engagement.likes}
                                                    </span>
                                                </button>
                                                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-all">
                                                    <MessageSquare className="w-5 h-5" />
                                                    <span className="text-sm font-semibold">{post.engagement.comments}</span>
                                                </button>
                                                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-all">
                                                    <Share2 className="w-5 h-5" />
                                                    <span className="text-sm font-semibold">{post.engagement.shares}</span>
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => toggleBookmark(post.id)}
                                                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                                            >
                                                <Bookmark className={`w-5 h-5 ${bookmarkedPosts[post.id] ? 'fill-orange-600 text-orange-600' : 'text-gray-600'}`} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl border-2 border-gray-200 p-6 sticky top-6"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Hash className="w-5 h-5 text-orange-600" />
                                <h3 className="font-bold text-gray-900">Trending Topics</h3>
                            </div>
                            <div className="space-y-3">
                                {trendingTopics.map((topic, idx) => (
                                    <motion.div
                                        key={topic.tag}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-md transition-all cursor-pointer border border-gray-100"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-bold text-orange-600">#{topic.rank}</span>
                                                <div>
                                                    <p className="font-bold text-gray-900">#{topic.tag}</p>
                                                    <p className="text-xs text-gray-600">{topic.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-600">{topic.posts}</span>
                                            <span className="flex items-center gap-1 text-green-600 font-semibold">
                                                <ArrowUp className="w-3 h-3" />
                                                {topic.trend}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <button className="w-full mt-4 py-2.5 text-orange-600 font-semibold hover:bg-orange-50 rounded-xl transition-all">
                                View all topics
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl border-2 border-gray-200 p-6"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="w-5 h-5 text-orange-600" />
                                <h3 className="font-bold text-gray-900">Trending Creators</h3>
                            </div>
                            <div className="space-y-4">
                                {creators.map((creator, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="relative">
                                            <img
                                                src={creator.avatar}
                                                alt={creator.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                                                <Flame className="w-3 h-3 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-sm text-gray-900 truncate">{creator.name}</p>
                                            <p className="text-xs text-gray-600 truncate">{creator.role}</p>
                                            <p className="text-xs text-orange-600 font-semibold">{creator.followers} followers</p>
                                        </div>
                                        <button className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-all">
                                            Follow
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white"
                        >
                            <Zap className="w-8 h-8 mb-3 opacity-90" />
                            <h3 className="font-bold text-lg mb-2">Stay On Top</h3>
                            <p className="text-sm text-white/90 mb-4">
                                Get notified when topics you care about start trending
                            </p>
                            <button className="w-full py-2.5 bg-white text-orange-600 rounded-xl font-semibold hover:shadow-lg transition-all">
                                Set Preferences
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingPage