import React from "react";

function YourTripButton({ toggleTripToast }) {
  return (
    <button id="yourTripButton" onClick={toggleTripToast}>
      your trip
    </button>
  );
}

export default YourTripButton;
