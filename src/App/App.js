import React from "react";
import "../App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.js";
import LandingPage from "../LandingPage/LandingPage.js";
import TripContext from "../TripContext";
const App = () => {
  return (
    <TripContext.Provider value={{}}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </TripContext.Provider>
  );
};

export default App;
