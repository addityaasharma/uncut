import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Lock, ArrowLeft, CheckCircle, Eye, EyeOff } from 'lucide-react'

const ForgotPasswordPage = () => {
    const [step, setStep] = useState(1) // 1: Email, 2: OTP, 3: New Password, 4: Success
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        if (email) {
            console.log('Email submitted:', email)
            setStep(2)
        }
    }

    const handleOtpChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)

            // Auto-focus next input
            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`)?.focus()
            }
        }
    }

    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`)?.focus()
        }
    }

    const handleOtpSubmit = (e) => {
        e.preventDefault()
        const otpValue = otp.join('')
        if (otpValue.length === 6) {
            console.log('OTP submitted:', otpValue)
            setStep(3)
        }
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault()
        if (newPassword && confirmPassword && newPassword === confirmPassword) {
            console.log('Password reset successful')
            setStep(4)
        }
    }

    const resetFlow = () => {
        setStep(1)
        setEmail('')
        setOtp(['', '', '', '', '', ''])
        setNewPassword('')
        setConfirmPassword('')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 md:p-4">
            <motion.div
                className="w-full max-w-md bg-white md:rounded-2xl md:shadow-xl p-6 sm:p-8 min-h-screen md:min-h-0 flex flex-col justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mb-4">
                        <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                        Forgot Password?
                    </h1>
                    <p className="text-gray-600">
                        {step === 1 && "No worries, we'll send you reset instructions"}
                        {step === 2 && "Enter the verification code sent to your email"}
                        {step === 3 && "Create a new secure password"}
                        {step === 4 && "Your password has been reset successfully"}
                    </p>
                </div>

                {/* Progress Indicator */}
                {step < 4 && (
                    <div className="flex items-center justify-center gap-2 mb-8">
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={`h-2 rounded-full transition-all duration-300 ${s === step
                                        ? 'w-12 bg-gradient-to-r from-purple-600 to-pink-500'
                                        : s < step
                                            ? 'w-8 bg-purple-600'
                                            : 'w-8 bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {/* Step 1: Email Input */}
                    {step === 1 && (
                        <motion.div
                            key="email"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-6">
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Email or Username"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <button
                                    onClick={handleEmailSubmit}
                                    disabled={!email}
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Send OTP
                                </button>

                                <button
                                    onClick={() => window.history.back()}
                                    className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-all"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Login
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: OTP Verification */}
                    {step === 2 && (
                        <motion.div
                            key="otp"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-6">
                                <div className="text-center">
                                    <p className="text-sm text-gray-600 mb-4">
                                        We sent a code to <span className="font-semibold text-purple-600">{email}</span>
                                    </p>
                                </div>

                                <div className="flex justify-center gap-2">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`otp-${index}`}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                            className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                                        />
                                    ))}
                                </div>

                                <div className="text-center text-sm">
                                    <span className="text-gray-600">Didn't receive the code? </span>
                                    <button
                                        onClick={() => alert('OTP resent!')}
                                        className="text-purple-600 hover:text-purple-700 font-semibold"
                                    >
                                        Resend
                                    </button>
                                </div>

                                <button
                                    onClick={handleOtpSubmit}
                                    disabled={otp.join('').length !== 6}
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Verify OTP
                                </button>

                                <button
                                    onClick={() => setStep(1)}
                                    className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-all"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Change Email
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: New Password */}
                    {step === 3 && (
                        <motion.div
                            key="password"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-6">
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
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

                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Confirm New Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full pl-11 pr-11 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>

                                {confirmPassword && newPassword !== confirmPassword && (
                                    <p className="text-red-500 text-sm">Passwords do not match</p>
                                )}

                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-xs text-gray-600 mb-2 font-semibold">Password must contain:</p>
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        <li className={newPassword.length >= 8 ? 'text-green-600' : ''}>
                                            • At least 8 characters
                                        </li>
                                        <li className={/[A-Z]/.test(newPassword) ? 'text-green-600' : ''}>
                                            • One uppercase letter
                                        </li>
                                        <li className={/[0-9]/.test(newPassword) ? 'text-green-600' : ''}>
                                            • One number
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    onClick={handlePasswordSubmit}
                                    disabled={!newPassword || !confirmPassword || newPassword !== confirmPassword}
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center space-y-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                >
                                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                                </motion.div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">All Set!</h2>
                                    <p className="text-gray-600">
                                        Your password has been reset successfully. You can now login with your new password.
                                    </p>
                                </div>

                                <button
                                    onClick={() => window.location.href = '/login'}
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
                                >
                                    Go to Login
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default ForgotPasswordPage