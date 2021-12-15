import React, { useEffect, useState } from "react";
import "../App.css";
import "../landingScreenBackground.jpeg"
import "bootstrap/dist/css/bootstrap.min.css";
import addToTrip from "../../Helpers/addToTrip.js";
import getTrip from "../../Helpers/getTrip.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.js";
import LandingPage from "../LandingPage/LandingPage.js";
import ProfileModal from "../Header/User/ProfileModal";
import Header from "../Header/Header.js";
import TripContext from "../TripContext";
import UserContext from "../UserContext";
import CheckoutModal from '../Checkout/CheckoutModal';

const App = ({ test }) => {
  ///// CLEAR STORAGE ON CHECKOUT
  const [currentTrip, setCurrentTrip] = React.useState({
    events: [],
    flights: [],
    hotels: [],
  });

  const [ unvisited, setUnvisited ] = useState(['flights', 'hotels']);


  var initUserState;
  var localUser = JSON.parse(window.localStorage.getItem('user'));
  if (localUser) {
    initUserState = localUser;
    localStorage.setItem('user', JSON.stringify(localUser));
  } else {
    initUserState = null;
    localStorage.setItem('user', JSON.stringify(null));
  }

  const [user, setUser] = React.useState(initUserState);

  useEffect(() => {
    console.log('infinite loop?')
    window.localStorage.setItem('user', JSON.stringify(user));
  }, [user])


  // state of the user info modal appearance
  const [profileModal, setProfileModal] = React.useState(false);
  const [checkoutModal, setCheckoutModal] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);

  const toggleLoginModal = (event) => {
    setLoginModal(!loginModal);
  };

  const toggleCheckoutModal = (event) => {
    const { events, flights, hotels } = currentTrip;

    if (!checkoutModal) {
      if (!events.length && !flights.length && !hotels.length ) {
        alert('Please add some items to your cart.');
        return;
      }
    }

    setCheckoutModal(!checkoutModal);

  };

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
    <UserContext.Provider value={{ user, setUser, toggleProfileModal}}>
      <TripContext.Provider value={{ currentTrip, setCurrentTrip, toggleCheckoutModal, unvisited, setUnvisited  }}>
        <Header loginModal={loginModal} toggleLoginModal={toggleLoginModal} />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage test={test} />} />
            <Route path="/dashboard/*" element={<Dashboard test={test} />} />
          </Routes>
        {profileModal ? <ProfileModal /> : <></>}
        {checkoutModal ? <CheckoutModal toggleLoginModal={toggleLoginModal}/> : <></>}
        </Router>
      </TripContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
