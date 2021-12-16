import React, { useContext } from "react";
import TripContext from "../../TripContext";

function FlightToastItem({ flight }) {
  console.log(flight);
  const { arrivalCode, departureCode } = flight;
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const removeFlightFromTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.flights = newTrip.flights.filter((f) => f.id !== flight.id);

    setCurrentTrip(newTrip);
  };

  return (
    <div>
      <strong>
        {departureCode}
        {" to "}
        {arrivalCode}
      </strong>
      {/* <span>{flight.quantity}</span> */}
      <button onClick={removeFlightFromTrip}>REMOVE</button>
    </div>
  );
}

export default FlightToastItem;
