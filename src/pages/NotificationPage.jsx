import React from "react";

const NotificationPage = () => {
    return (
        <div className="p-4">
            <div className="bg-white rounded-lg shadow p-4 mb-3">
                <p className="text-gray-800">You have a new follower!</p>
                <span className="text-sm text-gray-500">Just now</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 mb-3">
                <p className="text-gray-800">Your post was liked by Emma.</p>
                <span className="text-sm text-gray-500">10 mins ago</span>
            </div>
            {/* Add more notifications if needed */}
        </div>
    );
};

export default NotificationPage;