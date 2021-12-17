import React, { useState, useEffect } from "react";
import axios from "axios";
import FlightListItem from "./FlightListItem";
import FadeLoader from "react-spinners/FadeLoader";
import "../dashboard.css";
import useSearchParams from "../../../Helpers/useSearchParams";
import airports from "airport-codes";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import citiesAndStates from "../../../Helpers/usCitiesAndStates";

function Flights({ test }) {
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const [renderedFlights, setRenderedFlights] = useState(flights);
  const { startDate, endDate, city, state } = useSearchParams();
  const { cityList, stateList } = citiesAndStates;
  const [destination, setDestination] = useState(city);
  const [origin, setOrigin] = useState('');

  let arrivalCode = airports.findWhere({ city: city }).get("iata");
  if (city === "Los Angeles") {
    arrivalCode = "LAX";
  }
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

  useEffect(() => {
    if (origin) {
      let departureCode = airports.findWhere({ city: origin }).get("iata");
      setRenderedFlights(flights.filter( (flight) =>  {
        return flight.itineraries[0].segments.some( (segment) => {
          return segment.arrival.iataCode === arrivalCode && segment.departure.iataCode === departureCode;
        })
      }))

    } else {
      setRenderedFlights(flights);
    }
  }, [origin])

  useEffect( () => {
    setRenderedFlights(flights)
  }, [flights])

  const flightList = renderedFlights.map((flight) => (
    <FlightListItem arrivalCode={arrivalCode} key={flight.id} flight={flight} />
  ));

  return (
    <div className="listContainer">
      <div className="listHeader"></div>
      {loading ? (
        <>
          <h4 id="flightsLoading">
            Just a moment while we pull up some flights for you...
          </h4>
          <FadeLoader color={"whitesmoke"} loading={loading} />
        </>
      ) : (
        <>
          <h3 style={{color: 'white'}}>Your flights to {city} from:</h3>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1%'}}>
            {/* added a className for mobile styling */}
            <div className="flight-origin-search" style={{width: '33%'}}>
              <ReactSearchAutocomplete
                autofocus
                items={cityList}
                maxResults={10}
                onSelect={(val) => {
                  console.log('hi', val)
                  setOrigin(val.name);
                }}
                // onSearch={(val) => setOrigin(val)}
                onClear={() => setOrigin("")}
                placeholder={"Origin"}
                styling={{
                  zIndex: 2,
                  backgroundColor: "rgba(90,23,94,.75)",
                  width: "50%",
                  iconColor: "white",
                  color: "white",
                  placeholderColor: "white",
                }}
              />
            </div>
          </div>
          <div id="scrollContainer">{flightList}</div>
        </>
      )}
    </div>
  );
}

export default Flights;
