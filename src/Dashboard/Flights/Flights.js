import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightListItem from "./FlightListItem";
import FadeLoader from "react-spinners/FadeLoader";

function Flights({ test }) {
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    setLoading(true);
    let isSubscribed = true;
    axios
    .get(`http://localhost:3000/flights`)
    .then((flightsResponse) => {
      if (isSubscribed) {
        setLoading(false);
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
    <>
      <h2>Flights</h2>
      {
        loading ?
        (
          <>
            <h4>Just a moment while we pull up some flights for you...</h4>
            <FadeLoader color={'orange'} loading={loading} />
          </>
        )
        :
        <div id="scrollContainer">{flightList}</div>
      }
    </>
  );
}

export default Flights;
