import React, { useState, useEffect } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
function Events() {
  const [events, setEvents] = useState([]);
  const { startDate, endDate, zip } = useSearchParams();
  console.log(startDate, endDate, zip);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/nearbyEvents/${zip}/${startDate}/${endDate}`)
      .then(({ data }) => {
        setEvents(data);
      });
  }, []);

  const eventList = events.map((event) => {
    return (
      <>
        <span>{event.name}</span> <br />
      </>
    );
  });

  return (
    <>
      <div>Events</div> {eventList}
    </>
  );
}

export default Events;
