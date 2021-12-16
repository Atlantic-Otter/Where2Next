import React from "react";
import TripContext from "../../../src/TripContext.js";
import { useContext } from "react";

function FlightListItem({ flight, arrivalCode }) {
  const { currentTrip, setCurrentTrip, unvisited, setUnvisited } = useContext(TripContext);
  const addFlightToTrip = () => {
    let newUnvisited = unvisited.filter((el) => el !== 'flights');
    setUnvisited(newUnvisited);
    const newTrip = { ...currentTrip };
    newTrip.flights.push(flight);
    setCurrentTrip(newTrip);
  };

  const segment = flight.itineraries[0].segments.filter(
    (seg) => seg.arrival.iataCode === arrivalCode
  )[0];
  if(!segment) return null;
  const { arrival, departure } = segment;
  const departureCode = departure.iataCode;
  const departureTime = departure ? new Date(departure.at).toLocaleString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
  : null
  const arrivalTime = arrival ? new Date(arrival.at).toLocaleString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
  : null
  let duration = arrival && departure ?new Date(arrival.at) - new Date(departure.at) : null
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  const { total: price, currency } = flight.price;
  return (
    <div className="listItem flightItem">
      <h4 className="name">
        {departureCode} to {arrivalCode}
      </h4>
      <div className="listDetails">
        <div className="eventText">
          <b>{"Departure: "}</b>
          {departureTime}
          <br />
          <b>{"Arrival: "}</b>
          {arrivalTime}
          <br />
          <b>{"Duration: "}</b>
          {`${hours} hours and ${minutes} minutes`}
        </div>

        <button className="addToTrip" onClick={addFlightToTrip}>
          Add to Trip
        </button>
      </div>
    </div>
  );
}

export default FlightListItem;
