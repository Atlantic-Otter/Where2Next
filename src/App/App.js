import React, { useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import addToTrip from "../../Helpers/addToTrip.js";
import getTrip from "../../Helpers/getTrip.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.js";
import LandingPage from "../LandingPage/LandingPage.js";
import LoginButton from "../Login/LoginButton.js";
import TripContext from "../TripContext";
import UserContext from "../UserContext";

const App = () => {
  ///// CLEAR STORAGE ON CHECKOUT
  const [currentTrip, setCurrentTrip] = React.useState({
    events: [],
    flights: [],
    hotels: [],
  });

  const [user, setUser] = React.useState({});

  useEffect(() => {
    if (window.localStorage.getItem("currentTrip")) {
      setCurrentTrip(JSON.parse(window.localStorage.getItem("currentTrip")));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("currentTrip", JSON.stringify(currentTrip));
    // console.log(window.localStorage);
    console.log(currentTrip);
  }, [currentTrip]);

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <TripContext.Provider value={{ currentTrip, setCurrentTrip }}>
        <LoginButton />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </Router>
      </TripContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
