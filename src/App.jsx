import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotificationPage from "./pages/NotificationPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notification" element={<NotificationPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
