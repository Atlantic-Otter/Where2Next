import React from "react";
// import addToTrip from '../../../Helpers/addToTrip.js';
import TripContext from '../../../src/TripContext.js';
import { useContext } from 'react';

function EventListItem({ event }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const addEventToTrip = () => {
      const newTrip = {...currentTrip}
      newTrip.events.push(event);
      setCurrentTrip(newTrip);
      console.log('new state of current trip:', currentTrip);
  };

  const date = new Date(event.dates.start.dateTime).toLocaleString();
  const imgURL = event.images[0].url;
  return (
    <div className="eventListItem">
      <h4>{event.name}</h4>
      <img className="eventListImage" src={imgURL} />
      <span>{date}</span>
      <button onClick={addEventToTrip}>
        Add to Trip
      </button>
    </div>
  );
}

export default EventListItem;