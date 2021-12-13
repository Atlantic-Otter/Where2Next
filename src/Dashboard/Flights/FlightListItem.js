import React from "react";
import TripContext from "../../../src/TripContext.js";
import { useContext } from "react";

function FlightListItem({ flight }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);
  console.log({ flight });
  const addFlightToTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.flights.push(flight);
    setCurrentTrip(newTrip);
    console.log("new state of current trip:", currentTrip);
  };
  const { arrival, departure } = flight.itineraries[0].segments[0];
  const departureCode = departure.iataCode;
  const arrivalCode = arrival.iataCode;
  const departureTime = departure.at;
  const arrivalTime = arrival.at;
  const { total: price, currency } = flight.price;
  return (
    <div className="listItem">
      <h4 className="name">
        {departureCode} to {arrivalCode}
      </h4>
      <button className="addToTrip" onClick={addFlightToTrip}>
        Add to Trip
      </button>
    </div>
  );
}

export default FlightListItem;
