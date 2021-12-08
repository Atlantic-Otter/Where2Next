import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Events from "./Events/Events.js";
import Flights from "./Flights/Flights.js";
import Hotels from "./Hotels/Hotels.js";
function Dashboard() {
  return (
    <div id="dashboardContainer">
      <h1>DASHBOARD</h1>
      <Link to="events">Events</Link>
      <Link to="flights">Flights</Link>
      <Link to="hotels">Hotels</Link>
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
