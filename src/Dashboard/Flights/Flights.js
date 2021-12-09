import React, { useState, useEffect } from "react";
import axios from "axios";

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
  <li key={flight.id}>{flight.id}</li>)

  return (
    <>
      <h2>Flights</h2>
      <ul>
        {flightList}
      </ul>
    </>
  );
}

export default Flights;
