import React, { useState, useEffect } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
import EventListItem from "./EventListItem";
function Events() {
  const [events, setEvents] = useState([]);
  const { startDate, endDate, city, state } = useSearchParams();
  console.log(startDate, endDate, city, state);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/nearbyEvents/${city}/${state}/${startDate}/${endDate}`
      )
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const eventList = events.map((event, i) => <EventListItem key={i} event={event} />);

  return (
    <>
      <h2>Events</h2>
      <div id="scrollContainer">{eventList}</div>
    </>
  );
}

export default Events;
