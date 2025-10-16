import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import uncutLogo from "../assets/uncutcolorfullogopn.png"

const LandingPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 2200)
        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 md:px-8"
                style={{ willChange: 'opacity, transform' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1 }}
            >

                <motion.img
                    src={uncutLogo}
                    alt="uncut_logo"
                    className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 mb-3 sm:mb-4 object-contain"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                />
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    Uncut
                </motion.h1>
                <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-3 text-gray-300 text-center max-w-xs sm:max-w-sm md:max-w-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                    Your Startup, Your Story.
                </motion.p>
            </motion.div>
        </AnimatePresence>
    )
}

export default LandingPage