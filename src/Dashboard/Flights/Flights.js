import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightListItem from "./FlightListItem";

function Flights({ test }) {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    axios
      .get(`http://localhost:3000/flights`)
      .then((flightsResponse) => {
        if (isSubscribed) {
          setFlights(flightsResponse.data);
        }
      })
      .catch((error) => {
        if (isSubscribed) {
          console.log(error);
        }
      });
    return () => (isSubscribed = false);
  }, []);

  const flightList = flights.map((flight) => (
    <FlightListItem key={flight.id} flight={flight} />
  ));

  return (
    <div id="listContainer">
      <div className="listHeader">
        <h2>Flights</h2>
      </div>
      <div id="scrollContainer">{flightList}</div>
    </div>
  );
}

export default Flights;
