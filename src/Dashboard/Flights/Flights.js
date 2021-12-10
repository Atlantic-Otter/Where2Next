import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightListItem from './FlightListItem';

function Flights() {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/flights`
      )
      .then((flightsResponse) => {
        setFlights(flightsResponse.data)
      })
      .catch((error) => console.log(error));
  }, []);

  const flightList = flights.map((flight) =>
  <FlightListItem key={flight.id} flight={flight}/>)

  return (
    <>
      <h2>Flights</h2>
      <div id="scrollContainer">{flightList}</div>
    </>
  );
}

export default Flights;
