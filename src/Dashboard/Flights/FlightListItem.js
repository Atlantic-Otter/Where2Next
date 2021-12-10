import React from "react";
import TripContext from "../../../src/TripContext.js";
import { useContext } from "react";

function FlightListItem({ flight }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const addFlightToTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.flights.push(flight);
    setCurrentTrip(newTrip);
    console.log("new state of current trip:", currentTrip);
  };

  return (
    <div>
      <h4>{flight.id}</h4>
      <button onClick={addFlightToTrip}>Add to Trip</button>
    </div>
  );
}

export default FlightListItem;
