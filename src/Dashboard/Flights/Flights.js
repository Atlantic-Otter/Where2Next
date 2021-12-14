import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightListItem from "./FlightListItem";
import FadeLoader from "react-spinners/FadeLoader";
import "../dashboard.css";
import useSearchParams from "../../../Helpers/useSearchParams";
import airports from "airport-codes";
function Flights({ test }) {
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const { startDate, endDate, city, state } = useSearchParams();

  const arrivalCode = airports.findWhere({ city: city }).get("iata");
  if (city === "Los Angeles") {
    arrivalCode = "LAX";
  }
  console.log(arrivalCode);
  useEffect(() => {
    setLoading(true);
    let isSubscribed = true;
    axios
      .get(`http://localhost:3000/flights/${arrivalCode}`)
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
    <FlightListItem arrivalCode={arrivalCode} key={flight.id} flight={flight} />
  ));

  return (
    <div className="listContainer">
      <div className="listHeader"></div>
      {loading ? (
        <>
          <h4>Just a moment while we pull up some flights for you...</h4>
          <FadeLoader color={"orange"} loading={loading} />
        </>
      ) : (
        <div id="scrollContainer">{flightList}</div>
      )}
    </div>
  );
}

export default Flights;
