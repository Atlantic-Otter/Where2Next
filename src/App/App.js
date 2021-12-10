import React, { useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import addToTrip from "../../Helpers/addToTrip.js";
import getTrip from "../../Helpers/getTrip.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.js";
import LandingPage from "../LandingPage/LandingPage.js";
import ProfilePage from "../User/ProfilePage/ProfilePage.js";
import LoginButton from "../Login/LoginButton.js";
import UserIcon from  "../User/UserIcon.js";
import TripContext from "../TripContext";
import UserContext from "../UserContext";


const App = ({ test }) => {
  ///// CLEAR STORAGE ON CHECKOUT
  const [currentTrip, setCurrentTrip] = React.useState({
    events: [],
    flights: [],
    hotels: [],
  });

  // LATER CHANGE TO INITIALiZE TO LOCAL STORAGE'S RECORDS
    // user should remain signed in after refreshing the page
  const [user, setUser] = React.useState(null);


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
    <UserContext.Provider value={{ user, setUser }} >
      <TripContext.Provider value={{ currentTrip, setCurrentTrip }}>
        <LoginButton />
        <UserIcon />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage test={test} />} />
            <Route path="/dashboard/*" element={<Dashboard test={test} />} />
            {/* won't work yet - need to add a Link */}
            <Route path="/account" element={<ProfilePage />} />
          </Routes>
        </Router>
      </TripContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
