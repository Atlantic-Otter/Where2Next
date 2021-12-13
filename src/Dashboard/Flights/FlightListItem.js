import React from "react";
import TripContext from "../../../src/TripContext.js";
import { useContext } from "react";

function FlightListItem({ flight, arrivalCode }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);
  console.log({ flight });
  const addFlightToTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.flights.push(flight);
    setCurrentTrip(newTrip);
    console.log("new state of current trip:", currentTrip);
  };

  const segment = flight.itineraries[0].segments.filter(
    (seg) => seg.arrival.iataCode === arrivalCode
  )[0];
  console.log(segment);
  const { arrival, departure } = segment;
  const departureCode = departure.iataCode;
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
