import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Bell, Users, TrendingUp, Plus } from 'lucide-react'

const NotificationBar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <div className="flex items-center justify-around py-3">
            <button
                className={`p-2 ${isActive('/feed') ? 'text-purple-600' : 'text-gray-600'}`}
                onClick={() => navigate('/feed')}
            >
                <Home className="w-6 h-6" />
            </button>

            <button
                className={`p-2 ${isActive('/trending') ? 'text-purple-600' : 'text-gray-600'}`}
                onClick={() => navigate('/trending')}
            >
                <TrendingUp className="w-6 h-6" />
            </button>

            <button className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg">
                <Plus className="w-6 h-6" />
            </button>

            <button
                className={`p-2 ${isActive('/notifications') ? 'text-purple-600' : 'text-gray-600'}`}
                onClick={() => navigate('/notifications')}
            >
                <Bell className="w-6 h-6" />
            </button>

            <button
                className={`p-2 ${isActive('/users') ? 'text-purple-600' : 'text-gray-600'}`}
                onClick={() => navigate('/users')}
            >
                <Users className="w-6 h-6" />
            </button>
        </div>
    )
}

export default NotificationBar
