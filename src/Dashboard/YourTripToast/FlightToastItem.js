import React from "react";

function FlightToastItem({ flight }) {
  const { arrivalCode, departureCode } = flight;
  return (
    <div>
      {departureCode}
      {" to "}
      {arrivalCode}.
    </div>
  );
}

export default FlightToastItem;
