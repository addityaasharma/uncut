import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignupPage from './pages/SignupPage'
import ForgotPassword from './pages/ForgotPassword'
import SocialFeed from './pages/SocialFeed'
import MainLayout from './pages/MainLayout'
import NotificationBar from './component/useful/Notification'
import NotificationPage from './pages/FeaturedPages/NotificationPage'
import ProfilePage from './pages/FeaturedPages/UserProfile'
import TrendingPage from './pages/FeaturedPages/Trending'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route element={<MainLayout />}>
        <Route path="/feed" element={<SocialFeed />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/users" element={<ProfilePage />} />
        <Route path="/trending" element={<TrendingPage />} />
      </Route>
    </Routes>
  )
}

export default App
