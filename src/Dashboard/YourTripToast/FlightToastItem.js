import React, { useContext } from "react";
import TripContext from "../../TripContext";
import Button from "react-bootstrap/Button";
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
    <div className="toastItem">
      <strong>
        {departureCode}
        {" to "}
        {arrivalCode}
      </strong>
      {/* <span>{flight.quantity}</span> */}
      <Button variant="outline-dark" onClick={removeFlightFromTrip}>
        REMOVE
      </Button>
    </div>
  );
}

export default FlightToastItem;
