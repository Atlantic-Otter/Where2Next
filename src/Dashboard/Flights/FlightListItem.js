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
  const departureTime = new Date(departure.at).toLocaleString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  const arrivalTime = new Date(arrival.at).toLocaleString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  let duration = new Date(arrival.at) - new Date(departure.at);
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
