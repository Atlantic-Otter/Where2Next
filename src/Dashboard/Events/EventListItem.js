import React from "react";
import axios from "axios";
function EventListItem({ event }) {
  const date = new Date(event.dates.start.dateTime).toLocaleString();
  const imgURL = event.images[0].url;
  return (
    <div className="eventListItem">
      <h4>{event.name}</h4>
      <img className="eventListImage" src={imgURL} />
      <span>{date}</span>
      <button>Add to Trip</button>
    </div>
  );
}

export default EventListItem;
