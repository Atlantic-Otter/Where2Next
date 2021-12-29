import React from "react";

function YourTripButton({ toggleTripToast }) {
  return (
    <button id="yourTripButton" onClick={toggleTripToast}>
      YOUR TRIP
    </button>
  );
}

export default YourTripButton;
