import React, { useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import addToTrip from "../../Helpers/addToTrip.js";
import getTrip from "../../Helpers/getTrip.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.js";
import LandingPage from "../LandingPage/LandingPage.js";
import TripContext from "../TripContext";
import LoginButton from "../Login/LoginButton.js";

const App = ({ test }) => {
  ///// CLEAR STORAGE ON CHECKOUT
  const [currentTrip, setCurrentTrip] = React.useState({
    events: [],
    flights: [],
    hotels: [],
  });
  useEffect(() => {
    console.log("storage", window.localStorage);
    if (window.localStorage.getItem("currentTrip")) {
      setCurrentTrip(JSON.parse(window.localStorage.getItem("currentTrip")));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("currentTrip", JSON.stringify(currentTrip));
  }, [currentTrip]);

  return (
    <TripContext.Provider value={{ currentTrip, setCurrentTrip }}>
      <LoginButton />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage test={test} />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </TripContext.Provider>
  );
};

export default App;
