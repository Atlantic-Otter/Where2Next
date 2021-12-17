import React, { useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
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
      <div id="navLinks">
        <NavLink
          to={`events${search}`}
          className={
            "nav-link" +
            (window.location.href.includes("events") ? " active" : "")
          }
        >
          <a href="#" className={"neon-button" + (window.location.href.includes("events") ? " active" : "")}>Events</a>
        </NavLink>
        <NavLink
          to={`flights${search}`}
          className={
            "nav-link" +
            (window.location.href.includes("flights") ? " active" : "")
          }
        >
          <a href="#" className={"neon-button" + (window.location.href.includes("flights") ? " active" : "")}>Flights</a>
        </NavLink>
        <NavLink
          to={`hotels${search}`}
          className={
            "nav-link" +
            (window.location.href.includes("hotels") ? " active" : "")
          }
        >
          <a href="#" className={"neon-button" + (window.location.href.includes("hotels") ? " active" : "")}>Hotels</a>
        </NavLink>
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
