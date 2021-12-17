import React from "react";
import TripContext from "../../../src/TripContext.js";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
function EventToastItem({ event }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const removeEventFromTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.events = newTrip.events.map((e) => {
      if (e.id === event.id) {
        if (e.quantity > 1) {
          e.quantity -= 1;
          return e;
        }
      } else {
        return e;
      }
    });
    newTrip.events = newTrip.events.filter(Boolean);
    setCurrentTrip(newTrip);
  };

  return (
    <div className="toastItem">
      <strong>{event.name}</strong>
      <span>{event.quantity}</span>
      <Button variant="outline-dark" onClick={removeEventFromTrip}>
        REMOVE
      </Button>
    </div>
  );
}

export default EventToastItem;
