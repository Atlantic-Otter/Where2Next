import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import addToTrip from "../../Helpers/addToTrip.js";
import getTrip from "../../Helpers/getTrip.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.js";
import LandingPage from "../LandingPage/LandingPage.js";
import TripContext from "../TripContext";
import LoginButton from "../Login/LoginButton.js";

const App = () => {

  //check localstorage


  const [currentTrip, setCurrentTrip] = React.useState({
    events: [],
    flights: [],
    hotels: []
  });

  return (
    <TripContext.Provider value={{currentTrip, setCurrentTrip}}>
      <LoginButton />
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
