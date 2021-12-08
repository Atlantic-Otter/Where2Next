import React, { useState, useEffect } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/nearbyEvents").then(({ data }) => {
      setEvents(data);
    });
  }, []);

  const eventList = events.map((event) => {
    console.log(event);
    return (
      <>
        <span>{event.name}</span> <br />
      </>
    );
  });
  const { startDate, endDate, zip } = useSearchParams();
  console.log(startDate, endDate, zip);
  return (
    <>
      <div>Events</div> {eventList}
    </>
  );
}

export default Events;
