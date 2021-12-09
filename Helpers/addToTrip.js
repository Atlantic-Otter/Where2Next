// import axios from "axios";
// import TripContext from '../src/TripContext.js';
// import { useContext } from 'react';

const addToTrip = (object, category) => {
  // add to local storage AT category
  const {currentTrip, setCurrentTrip } = useContext(TripContext);
  const newTrip = {...currentTrip}
  newTrip[category].push(object)
  setCurrentTrip(newTrip);
  console.log('new state of current trip:', currentTrip);
};

export default addToTrip;
