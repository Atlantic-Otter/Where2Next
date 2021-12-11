import React, { useEffect } from "react";
import "../App.css";
import "../landingScreenBackground.jpeg"
import "bootstrap/dist/css/bootstrap.min.css";
import addToTrip from "../../Helpers/addToTrip.js";
import getTrip from "../../Helpers/getTrip.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.js";
import LandingPage from "../LandingPage/LandingPage.js";
import ProfileModal from "../User/ProfileModal";
import Header from "../Login/Header.js";
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

  // state of the user info modal appearance
  const [profileModal, setProfileModal] = React.useState(false);

  const toggleProfileModal = (event) => {
    // ONLY if user is logged in
    if (user) {
      // set modal state to true
      setProfileModal(!profileModal);
      console.log("switched to state: ", profileModal);
    }
  };

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
    <UserContext.Provider value={{ user, setUser, toggleProfileModal }}>
      <TripContext.Provider value={{ currentTrip, setCurrentTrip }}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage test={test} />} />
            <Route path="/dashboard/*" element={<Dashboard test={test} />} />
          </Routes>
        </Router>
        {profileModal ? <ProfileModal /> : <></>}
      </TripContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
