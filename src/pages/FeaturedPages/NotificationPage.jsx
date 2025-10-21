import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Bell, X, Check, ThumbsUp, MessageSquare, Users, Share2,
    Award, Target, TrendingUp, Zap, Heart, UserPlus, AtSign,
    Briefcase, Calendar, DollarSign, Filter, Settings, Search
} from 'lucide-react'

const NotificationPage = () => {
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'like',
            user: {
                name: 'Sarah Chen',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                verified: true
            },
            content: 'liked your post about Series A funding',
            time: '2m ago',
            read: false,
            postPreview: 'Excited to announce our $50M Series B funding! 🚀 This milestone marks...',
            timestamp: Date.now() - 120000
        },
        {
            id: 2,
            type: 'comment',
            user: {
                name: 'Mike Johnson',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                verified: false
            },
            content: 'commented on your post',
            comment: 'Congratulations! This is huge for the industry. Would love to connect and discuss your journey.',
            time: '15m ago',
            read: false,
            postPreview: 'Behind the scenes of our new product launch event...',
            timestamp: Date.now() - 900000
        },
        {
            id: 3,
            type: 'follow',
            user: {
                name: 'Emma Wilson',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                verified: true
            },
            content: 'started following you',
            time: '45m ago',
            read: false,
            timestamp: Date.now() - 2700000
        },
        {
            id: 4,
            type: 'milestone',
            content: 'You reached 10,000 followers! 🎉',
            description: 'Your content is resonating with the community',
            time: '1h ago',
            read: false,
            icon: Award,
            timestamp: Date.now() - 3600000
        },
        {
            id: 5,
            type: 'mention',
            user: {
                name: 'TechVenture',
                avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop',
                verified: true
            },
            content: 'mentioned you in a post',
            postPreview: 'Huge shoutout to @johndoe for the amazing collaboration on our latest project!',
            time: '2h ago',
            read: true,
            timestamp: Date.now() - 7200000
        },
        {
            id: 6,
            type: 'share',
            user: {
                name: 'Alex Turner',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
                verified: false
            },
            content: 'shared your post',
            time: '3h ago',
            read: true,
            postPreview: 'Team culture is everything. Here\'s how we maintain a healthy work environment...',
            timestamp: Date.now() - 10800000
        },
        {
            id: 7,
            type: 'investment',
            content: 'New investor expressed interest in your startup',
            description: 'Innovation Fund wants to schedule a call',
            time: '5h ago',
            read: true,
            icon: DollarSign,
            timestamp: Date.now() - 18000000
        },
        {
            id: 8,
            type: 'like',
            user: {
                name: 'Jessica Lee',
                avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
                verified: false
            },
            content: 'and 23 others liked your post',
            time: '8h ago',
            read: true,
            postPreview: 'The journey from idea to product-market fit...',
            timestamp: Date.now() - 28800000
        },
        {
            id: 9,
            type: 'event',
            content: 'Upcoming event: Startup Summit 2025',
            description: 'Join us tomorrow at 10 AM for networking',
            time: '12h ago',
            read: true,
            icon: Calendar,
            timestamp: Date.now() - 43200000
        },
        {
            id: 10,
            type: 'trending',
            content: 'Your post is trending in #ProductLaunch',
            description: '2.5K views in the last hour',
            time: '1d ago',
            read: true,
            icon: TrendingUp,
            timestamp: Date.now() - 86400000
        }
    ])

    const [searchQuery, setSearchQuery] = useState('')

    const filters = [
        { id: 'all', label: 'All', icon: Bell },
        { id: 'unread', label: 'Unread', icon: Zap },
        { id: 'mentions', label: 'Mentions', icon: AtSign },
        { id: 'engagement', label: 'Engagement', icon: Heart }
    ]

    const markAsRead = (notificationId) => {
        setNotifications(prev =>
            prev.map(notif =>
                notif.id === notificationId ? { ...notif, read: true } : notif
            )
        )
    }

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(notif => ({ ...notif, read: true })))
    }

    const deleteNotification = (notificationId) => {
        setNotifications(prev => prev.filter(notif => notif.id !== notificationId))
    }

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'like': return ThumbsUp
            case 'comment': return MessageSquare
            case 'follow': return UserPlus
            case 'mention': return AtSign
            case 'share': return Share2
            default: return Bell
        }
    }

    const getNotificationColor = (type) => {
        switch (type) {
            case 'like': return 'purple'
            case 'comment': return 'blue'
            case 'follow': return 'pink'
            case 'mention': return 'orange'
            case 'share': return 'green'
            case 'milestone': return 'yellow'
            case 'investment': return 'indigo'
            case 'event': return 'cyan'
            case 'trending': return 'red'
            default: return 'gray'
        }
    }

    const filteredNotifications = notifications.filter(notif => {
        if (selectedFilter === 'unread') return !notif.read
        if (selectedFilter === 'mentions') return notif.type === 'mention'
        if (selectedFilter === 'engagement') return ['like', 'comment', 'share'].includes(notif.type)
        return true
    }).filter(notif => {
        if (!searchQuery) return true
        const searchLower = searchQuery.toLowerCase()
        return (
            notif.content.toLowerCase().includes(searchLower) ||
            (notif.user?.name.toLowerCase().includes(searchLower)) ||
            (notif.postPreview?.toLowerCase().includes(searchLower))
        )
    })

    const unreadCount = notifications.filter(n => !n.read).length

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                                Notifications
                            </h1>
                            <p className="text-gray-600">Stay updated with your startup journey</p>
                        </div>

                        <div className="flex items-center gap-3">
                            {unreadCount > 0 && (
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    onClick={markAllAsRead}
                                    className="px-4 py-2 bg-white border-2 border-purple-200 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all flex items-center gap-2"
                                >
                                    <Check className="w-4 h-4" />
                                    Mark all read
                                </motion.button>
                            )}
                            <button className="p-2 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
                                <Settings className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search notifications..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {filters.map(filter => {
                            const Icon = filter.icon
                            const isActive = selectedFilter === filter.id
                            return (
                                <button
                                    key={filter.id}
                                    onClick={() => setSelectedFilter(filter.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${isActive
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                                            : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {filter.label}
                                    {filter.id === 'unread' && unreadCount > 0 && (
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${isActive ? 'bg-white/20' : 'bg-purple-100 text-purple-600'
                                            }`}>
                                            {unreadCount}
                                        </span>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm"
                >
                    <div className="divide-y divide-gray-100">
                        <AnimatePresence mode="popLayout">
                            {filteredNotifications.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="p-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Bell className="w-10 h-10 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {searchQuery ? 'No results found' : 'All caught up!'}
                                    </h3>
                                    <p className="text-gray-600">
                                        {searchQuery ? 'Try a different search term' : "You don't have any notifications right now"}
                                    </p>
                                </motion.div>
                            ) : (
                                filteredNotifications.map((notification, idx) => {
                                    const Icon = notification.icon || getNotificationIcon(notification.type)
                                    const color = getNotificationColor(notification.type)

                                    return (
                                        <motion.div
                                            key={notification.id}
                                            layout
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20, height: 0 }}
                                            transition={{ delay: idx * 0.03 }}
                                            onClick={() => markAsRead(notification.id)}
                                            className={`p-4 sm:p-6 hover:bg-gray-50 cursor-pointer transition-all relative group ${!notification.read ? 'bg-purple-50/40' : ''
                                                }`}
                                        >
                                            {!notification.read && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                                                />
                                            )}

                                            <div className="flex gap-3 sm:gap-4 ml-5">
                                                {notification.user ? (
                                                    <div className="relative flex-shrink-0">
                                                        <img
                                                            src={notification.user.avatar}
                                                            alt={notification.user.name}
                                                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white"
                                                        />
                                                        <div className={`absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-${color}-100 to-${color}-200 rounded-full flex items-center justify-center border-2 border-white shadow-sm`}>
                                                            <Icon className={`w-3.5 h-3.5 text-${color}-600`} />
                                                        </div>
                                                        {notification.user.verified && (
                                                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                                                                <Check className="w-3 h-3 text-white" />
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-${color}-100 via-${color}-200 to-${color}-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${color}-600`} />
                                                    </div>
                                                )}

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between gap-2">
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                                                                {notification.user && (
                                                                    <span className="font-bold">{notification.user.name} </span>
                                                                )}
                                                                <span className={!notification.read ? 'font-semibold' : 'text-gray-700'}>
                                                                    {notification.content}
                                                                </span>
                                                            </p>

                                                            {notification.description && (
                                                                <p className="mt-1 text-sm text-gray-600">
                                                                    {notification.description}
                                                                </p>
                                                            )}

                                                            {notification.comment && (
                                                                <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                                    <p className="text-sm text-gray-700 italic">
                                                                        "{notification.comment}"
                                                                    </p>
                                                                </div>
                                                            )}

                                                            {notification.postPreview && (
                                                                <div className="mt-2 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                                                                    <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">
                                                                        {notification.postPreview}
                                                                    </p>
                                                                </div>
                                                            )}

                                                            <div className="mt-2 flex items-center gap-3">
                                                                <p className="text-xs text-gray-500 font-medium">{notification.time}</p>
                                                                {!notification.read && (
                                                                    <span className="px-2 py-0.5 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full">
                                                                        New
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                deleteNotification(notification.id)
                                                            }}
                                                            className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-red-50 rounded-lg transition-all"
                                                        >
                                                            <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {filteredNotifications.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-center"
                    >
                        <p className="text-sm text-gray-500">
                            Showing {filteredNotifications.length} of {notifications.length} notifications
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default NotificationPage