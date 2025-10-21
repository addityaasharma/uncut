import React from 'react'
import { Outlet } from 'react-router-dom'
import NotificationBar from '../component/useful/Notification'

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 overflow-auto">
                <Outlet />
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50">
                <NotificationBar />
            </div>
        </div>
    )
}

export default MainLayout