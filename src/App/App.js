import React from "react";
import "../App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.js";
import LandingPage from "../LandingPage/LandingPage.js";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
