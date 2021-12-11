import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Events from "./Events/Events.js";
import Flights from "./Flights/Flights.js";
import Hotels from "./Hotels/Hotels.js";
import YourTripButton from "./YourTripButton/YourTripButton.js";
import YourTripToast from "./YourTripToast/YourTripToast.js";

function Dashboard({ test }) {
  const { search } = useLocation();
  const [tripToastVisible, setTripToastVisible] = useState(false);
  const toggleTripToast = () => {
    setTripToastVisible((prev) => !prev);
    console.log(tripToastVisible);
  };
  return (
    <div id="dashboardContainer">
      <h1>DASHBOARD</h1>
      <div id="navLinks">
        <Link to={`events${search}`}>Events</Link>
        <Link to={`flights${search}`}>Flights</Link>
        <Link to={`hotels${search}`}>Hotels</Link>
      </div>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels/*" element={<Hotels />} />
      </Routes>
      <YourTripButton toggleTripToast={toggleTripToast} />
      <YourTripToast
        tripToastVisible={tripToastVisible}
        toggleTripToast={toggleTripToast}
      />
    </div>
  );
}

export default Dashboard;
