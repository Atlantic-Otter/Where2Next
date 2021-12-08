import React from "react";
import { Routes, Route, Link } from "react-router-dom";
function Dashboard() {
  return (
    <div id="dashboardContainer">
      <h1>DASHBOARD</h1>
      <Link to="events">Events</Link>
      <Link to="flights">Flights</Link>
      <Link to="hotels">Hotels</Link>
      <Routes>
        <Route path="/" element={<h1>Events</h1>} />
        <Route path="/events" element={<h1>Events</h1>} />
        <Route path="/flights" element={<h1>Flights</h1>} />
        <Route path="/hotels" element={<h1>Hotels</h1>} />
      </Routes>
    </div>
  );
}

export default Dashboard;
