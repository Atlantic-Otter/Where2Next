import React from "react";
import TripContext from "../../../src/TripContext.js";
import { useContext } from "react";
function EventToastItem({ event }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const removeEventFromTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.events = newTrip.events.map((e) => {
      if (e.id === event.id) {
        if (e.quantity > 1) {
          e.quantity -= 1;
          return e;
        } else {
          // return;
        }
      }
    });
    newTrip.events = newTrip.events.filter(Boolean);
    setCurrentTrip(newTrip);
    console.log(newTrip.events);
  };

  return (
    <div>
      <strong>{event.name}</strong>
      <span>{event.quantity}</span>
      <button onClick={removeEventFromTrip}>REMOVE</button>
    </div>
  );

}

export default EventToastItem;
