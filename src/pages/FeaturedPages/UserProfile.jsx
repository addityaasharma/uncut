import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    MapPin, Link as LinkIcon, Calendar, Mail, Phone, Globe,
    Briefcase, Award, Target, TrendingUp, Users, Heart,
    MessageSquare, Share2, Bookmark, MoreVertical, Edit,
    Settings, Camera, Check, Star, Zap, ExternalLink,
    ThumbsUp, ChevronRight, Plus, Building, GraduationCap,
    X, Save
} from 'lucide-react'

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('posts')
    const [isFollowing, setIsFollowing] = useState(false)
    const [likedPosts, setLikedPosts] = useState({})
    const [showEditModal, setShowEditModal] = useState(false)

    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        username: '@johndoe',
        role: 'Founder & CEO',
        company: 'Uncut',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop',
        verified: true,
        bio: 'Building the future of startup networking 🚀 | Ex-Google | Angel Investor | Mentor at Y Combinator',
        location: 'San Francisco, CA',
        website: 'uncut.io',
        email: 'john@uncut.io',
        phone: '+1 (555) 123-4567',
        joined: 'January 2023',
        stats: {
            followers: '12.5K',
            following: '856',
            posts: '234',
            reach: '2.4M'
        }
    })

    const achievements = [
        { icon: Award, label: 'Top Contributor', color: 'purple' },
        { icon: Star, label: 'Verified', color: 'blue' },
        { icon: Zap, label: 'Early Adopter', color: 'yellow' },
        { icon: Target, label: 'Milestone Master', color: 'green' }
    ]

    const skills = [
        'Product Strategy', 'Fundraising', 'Team Building', 'Product-Market Fit',
        'Growth Hacking', 'Venture Capital', 'Leadership', 'AI/ML'
    ]

    const experience = [
        {
            title: 'Founder & CEO',
            company: 'Uncut',
            period: '2023 - Present',
            logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop'
        },
        {
            title: 'Product Lead',
            company: 'Google',
            period: '2019 - 2023',
            logo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=100&h=100&fit=crop'
        },
        {
            title: 'Senior Engineer',
            company: 'Meta',
            period: '2016 - 2019',
            logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop'
        }
    ]

    const posts = [
        {
            id: 1,
            content: 'Excited to announce our $50M Series B funding! 🚀 This milestone marks a new chapter in our journey to revolutionize the tech industry. Huge thanks to our investors and team!',
            timestamp: '2 hours ago',
            image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=400&fit=crop',
            tags: ['SeriesB', 'Funding', 'Milestone'],
            engagement: { likes: 1243, comments: 89, shares: 45 }
        },
        {
            id: 2,
            content: 'Behind the scenes of our new product launch event. The energy was incredible! Special thanks to our amazing community for all the support 💜',
            timestamp: '1 day ago',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
            tags: ['ProductLaunch', 'Community'],
            engagement: { likes: 856, comments: 54, shares: 28 }
        },
        {
            id: 3,
            content: 'Team culture is everything. Here\'s how we maintain a healthy work environment while scaling rapidly. Check out our latest blog post! 🏢✨',
            timestamp: '3 days ago',
            tags: ['Culture', 'Team', 'Growth'],
            engagement: { likes: 2104, comments: 142, shares: 67 }
        }
    ]

    const media = [
        'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop'
    ]

    const connections = [
        { name: 'Sarah Chen', role: 'Founder @ StartupXYZ', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', mutual: 45 },
        { name: 'Mike Johnson', role: 'VC @ Innovation Fund', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', mutual: 32 },
        { name: 'Emma Wilson', role: 'CEO @ TechFlow', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', mutual: 28 },
        { name: 'Alex Turner', role: 'Product Manager', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', mutual: 19 },
        { name: 'Jessica Lee', role: 'Designer @ Creative Co', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop', mutual: 15 },
        { name: 'David Kim', role: 'Engineer @ TechCorp', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', mutual: 12 }
    ]

    const toggleLike = (postId) => {
        setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }))
    }

    const tabs = [
        { id: 'posts', label: 'Posts', count: profileData.stats.posts },
        { id: 'media', label: 'Media', count: '48' },
        { id: 'about', label: 'About', count: null }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-b-3xl shadow-sm overflow-hidden"
                >
                    <div className="relative h-48 sm:h-64 md:h-80">
                        <img
                            src={profileData.coverImage}
                            alt="Cover"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg">
                            <Camera className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>

                    <div className="px-4 sm:px-6 lg:px-8 pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-16 sm:-mt-20">
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                                <div className="relative">
                                    <img
                                        src={profileData.avatar}
                                        alt={profileData.name}
                                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-4 border-white shadow-xl"
                                    />
                                    <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                                        <Camera className="w-4 h-4 text-gray-700" />
                                    </button>
                                    {profileData.verified && (
                                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                                            <Check className="w-6 h-6 text-white" />
                                        </div>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{profileData.name}</h1>
                                    </div>
                                    <p className="text-gray-600 mb-1">{profileData.username}</p>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Briefcase className="w-4 h-4 text-purple-600" />
                                        <span className="font-semibold text-gray-900">{profileData.role}</span>
                                        <span className="text-gray-500">at</span>
                                        <span className="font-semibold text-gray-900">{profileData.company}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 sm:mb-2">
                                <button
                                    onClick={() => setIsFollowing(!isFollowing)}
                                    className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${isFollowing
                                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg'
                                        }`}
                                >
                                    {isFollowing ? 'Following' : 'Follow'}
                                </button>
                                <button className="px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                                    Message
                                </button>
                                <button
                                    onClick={() => setShowEditModal(true)}
                                    className="p-2.5 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                                >
                                    <Settings className="w-5 h-5 text-gray-700" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-4 gap-4">
                            {Object.entries(profileData.stats).map(([key, value]) => (
                                <div key={key} className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all cursor-pointer">
                                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                                        {value}
                                    </p>
                                    <p className="text-sm text-gray-600 capitalize mt-1">{key}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="mt-6 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
                                <div className="border-b border-gray-200">
                                    <div className="flex">
                                        {tabs.map(tab => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`flex-1 px-6 py-4 font-semibold transition-all relative ${activeTab === tab.id
                                                        ? 'text-purple-600'
                                                        : 'text-gray-600 hover:text-gray-900'
                                                    }`}
                                            >
                                                <span>{tab.label}</span>
                                                {tab.count && (
                                                    <span className="ml-2 text-sm text-gray-500">({tab.count})</span>
                                                )}
                                                {activeTab === tab.id && (
                                                    <motion.div
                                                        layoutId="activeTab"
                                                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500"
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <AnimatePresence mode="wait">
                                        {activeTab === 'posts' && (
                                            <motion.div
                                                key="posts"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="space-y-6"
                                            >
                                                {posts.map((post, idx) => (
                                                    <motion.div
                                                        key={post.id}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                                                    >
                                                        <div className="flex items-start justify-between mb-3">
                                                            <div className="flex gap-3">
                                                                <img
                                                                    src={profileData.avatar}
                                                                    alt={profileData.name}
                                                                    className="w-10 h-10 rounded-full object-cover"
                                                                />
                                                                <div>
                                                                    <p className="font-bold text-gray-900">{profileData.name}</p>
                                                                    <p className="text-sm text-gray-600">{post.timestamp}</p>
                                                                </div>
                                                            </div>
                                                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                                                                <MoreVertical className="w-5 h-5 text-gray-600" />
                                                            </button>
                                                        </div>

                                                        <p className="text-gray-900 leading-relaxed mb-3">{post.content}</p>

                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            {post.tags.map(tag => (
                                                                <span key={tag} className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer">
                                                                    #{tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {post.image && (
                                                            <img
                                                                src={post.image}
                                                                alt="Post content"
                                                                className="w-full rounded-xl object-cover max-h-96 mb-4"
                                                            />
                                                        )}

                                                        <div className="flex items-center gap-6">
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
                                                            <button className="ml-auto p-2 hover:bg-gray-100 rounded-lg transition-all">
                                                                <Bookmark className="w-5 h-5 text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}

                                        {activeTab === 'media' && (
                                            <motion.div
                                                key="media"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                                            >
                                                {media.map((image, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`Media ${idx + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}

                                        {activeTab === 'about' && (
                                            <motion.div
                                                key="about"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="space-y-6"
                                            >
                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                        <Users className="w-5 h-5 text-purple-600" />
                                                        About
                                                    </h3>
                                                    <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
                                                </div>

                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-3">Contact Information</h3>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3 text-gray-700">
                                                            <MapPin className="w-5 h-5 text-purple-600" />
                                                            <span>{profileData.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-gray-700">
                                                            <Mail className="w-5 h-5 text-purple-600" />
                                                            <span>{profileData.email}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-gray-700">
                                                            <Phone className="w-5 h-5 text-purple-600" />
                                                            <span>{profileData.phone}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-gray-700">
                                                            <Globe className="w-5 h-5 text-purple-600" />
                                                            <a href={`https://${profileData.website}`} className="text-purple-600 hover:underline">
                                                                {profileData.website}
                                                            </a>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-gray-700">
                                                            <Calendar className="w-5 h-5 text-purple-600" />
                                                            <span>Joined {profileData.joined}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-3">Skills</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {skills.map(skill => (
                                                            <span
                                                                key={skill}
                                                                className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg text-sm font-medium"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-3">Experience</h3>
                                                    <div className="space-y-4">
                                                        {experience.map((exp, idx) => (
                                                            <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                                                                <img
                                                                    src={exp.logo}
                                                                    alt={exp.company}
                                                                    className="w-12 h-12 rounded-lg object-cover"
                                                                />
                                                                <div>
                                                                    <p className="font-semibold text-gray-900">{exp.title}</p>
                                                                    <p className="text-sm text-gray-600">{exp.company}</p>
                                                                    <p className="text-xs text-gray-500 mt-1">{exp.period}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 p-6"
                            >
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-purple-600" />
                                    Achievements
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {achievements.map((achievement, idx) => {
                                        const Icon = achievement.icon
                                        return (
                                            <div
                                                key={idx}
                                                className={`p-4 bg-gradient-to-br from-${achievement.color}-100 to-${achievement.color}-50 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer`}
                                            >
                                                <Icon className={`w-8 h-8 text-${achievement.color}-600 mx-auto mb-2`} />
                                                <p className="text-xs font-semibold text-gray-900">{achievement.label}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-gray-900">Connections</h3>
                                    <button className="text-sm text-purple-600 hover:text-purple-700 font-semibold">
                                        View all
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {connections.slice(0, 4).map((connection, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all"
                                        >
                                            <img
                                                src={connection.avatar}
                                                alt={connection.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-sm text-gray-900 truncate">{connection.name}</p>
                                                <p className="text-xs text-gray-600 truncate">{connection.role}</p>
                                                <p className="text-xs text-purple-600 mt-0.5">{connection.mutual} mutual</p>
                                            </div>
                                            <button className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-all">
                                                Connect
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-6 text-white"
                            >
                                <h3 className="font-bold mb-2">Share Your Profile</h3>
                                <p className="text-sm text-white/90 mb-4">Let others discover your startup journey</p>
                                <button className="w-full py-2.5 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-lg transition-all">
                                    Generate QR Code
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showEditModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setShowEditModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
                                <button
                                    onClick={() => setShowEditModal(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                                >
                                    <X className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={profileData.name}
                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={profileData.username}
                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Bio
                                    </label>
                                    <textarea
                                        rows={4}
                                        defaultValue={profileData.bio}
                                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Role
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={profileData.role}
                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={profileData.company}
                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={profileData.location}
                                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            defaultValue={profileData.email}
                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            defaultValue={profileData.phone}
                                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        defaultValue={profileData.website}
                                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        onClick={() => setShowEditModal(false)}
                                        className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => setShowEditModal(false)}
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                    >
                                        <Save className="w-5 h-5" />
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ProfilePage