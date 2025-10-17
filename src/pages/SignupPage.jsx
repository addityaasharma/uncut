import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'

const SignupPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const images = [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
    ]

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
            {/* Left Side - Photo Collage */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center p-8 lg:p-12">
                <div className="relative w-full max-w-md">
                    {/* Background decoration */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"></div>

                    {/* Photo Grid Container */}
                    <div className="relative grid grid-cols-3 gap-3 p-6">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                className="relative rounded-xl overflow-hidden shadow-lg aspect-square"
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    zIndex: 10,
                                    rotate: 5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Collage ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 + 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Centered Text Overlay */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                    >
                        <div className="text-center bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                                Uncut
                            </h2>
                            <p className="text-gray-700 text-lg font-medium">Your Startup, Your Story.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side - Auth Forms */}
            <div className="flex-1 md:w-1/2 flex items-center justify-center md:p-12">
                <motion.div
                    className="w-full max-w-md bg-white md:rounded-2xl md:shadow-xl p-6 sm:p-8 md:p-10 min-h-screen md:min-h-0 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Mobile Logo */}
                    <div className="md:hidden text-center mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                            Uncut
                        </h1>
                        <p className="text-gray-600 mt-2">Your Startup, Your Story.</p>
                    </div>

                    {/* Toggle Buttons */}
                    <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${isLogin
                                ? 'bg-white text-purple-600 shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${!isLogin
                                ? 'bg-white text-purple-600 shadow-md'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? 'login' : 'signup'}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                {isLogin ? 'Welcome back!' : 'Create account'}
                            </h2>
                            <p className="text-gray-600 mb-6 sm:mb-8">
                                {isLogin
                                    ? 'Enter your credentials to access your account'
                                    : 'Sign up to get started with Uncut'}
                            </p>

                            <div className="space-y-4 sm:space-y-5">
                                {!isLogin && (
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                )}

                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-11 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>

                                {!isLogin && (
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                )}

                                {isLogin && (
                                    <div className="flex items-center justify-between text-sm">
                                        <label className="flex items-center cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                                            <span className="ml-2 text-gray-600">Remember me</span>
                                        </label>
                                        <button onClick={() => alert('Forgot password clicked')} className="text-purple-600 hover:text-purple-700 font-medium">
                                            Forgot password?
                                        </button>
                                    </div>
                                )}

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
                                >
                                    {isLogin ? 'Login' : 'Create Account'}
                                </button>
                            </div>

                            <div className="mt-6 text-center">
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button onClick={() => alert('Google login')} className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700">Google</span>
                                    </button>
                                    <button onClick={() => alert('GitHub login')} className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700">GitHub</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}

export default SignupPage