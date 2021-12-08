import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Events from "./Events/Events.js";
import Flights from "./Flights/Flights.js";
import Hotels from "./Hotels/Hotels.js";
function Dashboard() {
  const { search } = useLocation();
  return (
    <div id="dashboardContainer">
      <h1>DASHBOARD</h1>
      <Link to={`events${search}`}>Events</Link>
      <Link to={`flights${search}`}>Flights</Link>
      <Link to={`hotels${search}`}>Hotels</Link>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
