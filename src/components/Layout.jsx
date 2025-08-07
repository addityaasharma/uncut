import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import Header from "./Header";
import NotificationHeader from "./NotificationHeader";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic Header */}
      {location.pathname === "/notification" ? (
        <NotificationHeader />
      ) : (
        <Header />
      )}

      {/* Main content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer */}
      <BottomNav />
    </div>
  );
};

export default Layout;
