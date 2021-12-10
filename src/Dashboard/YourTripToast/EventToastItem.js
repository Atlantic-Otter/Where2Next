import React from "react";
import TripContext from "../../../src/TripContext.js";
import { useContext } from "react";
function EventToastItem({ event }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const removeEventFromTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.events = newTrip.events.filter((e) => e.id !== event.id);
    setCurrentTrip(newTrip);
    console.log(currentTrip);
  };

  return (
    <div>
      <strong>{event.name}</strong>
      <button onClick={removeEventFromTrip}>REMOVE</button>
    </div>
  );
}

export default EventToastItem;
