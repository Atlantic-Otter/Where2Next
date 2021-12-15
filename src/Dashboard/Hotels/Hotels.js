import React, { useEffect, useState } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
import CityGroup from "./CityGroup";
import HotelGroup from "./HotelGroup";
import getTripLength from "../../../Helpers/getTripLength";
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";
import "../dashboard.css";
// import { ConnectionStates } from "mongoose";

function Hotels() {
  const [cityGroups, setCityGroups] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const [loading, setLoading] = useState(true);
  let { city, state, endDate, startDate } = useSearchParams();
  city = city || "";
  const encodedCity = city.split(" ").join("+");
  const neighborhood = useParams()["*"];
  const abortFetch = new AbortController();

  useEffect(() => {
    fetchNeighborhoods(city);
    return () => abortFetch.abort();
  }, []);

  useEffect(() => {
    if (neighborhood && cityGroups.length) {
      const neighborhoodId = cityGroups.filter(
        (n) => n.name === neighborhood
      )[0].destinationId;
      fetchHotels(neighborhoodId);
    }
    return () => abortFetch.abort();
  }, [cityGroups, neighborhood]);

  const tripDuration = getTripLength(startDate, endDate);

  // attach url search params while inside router context
  const addDates = (hotelArray) => {
    for (var i = 0; i < hotelArray.length; i++) {
      hotelArray[i].startDate = startDate;
      hotelArray[i].endDate = endDate;
    }
    return hotelArray;
  };

  const fetchNeighborhoods = (city) => {
    axios
      .get(`http://localhost:3000/hotels/${encodedCity}`, {
        signal: abortFetch.signal,
      })
      .then((response) => {
        console.log("cityGroups recieved: ", cityGroups);
        setCityGroups(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (err.name === "AbortError") {
          console.log(error);
        }
      });
  };
  const fetchHotels = (id) => {
    const url = `http://localhost:3000/hotels/${encodedCity}/${id}`;
    axios
      .get(url)
      .then((response) => {
        console.log("response data:", response.data);
        var withDates = addDates(response.data);
        setHotelList(withDates);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log(err.message);
        }
      });
  };

  return (
    <div className="listContainer">
      <h3>Neighborhoods</h3>
      <div className="neighborhoods">
        <FadeLoader color="whitesmoke" loading={loading} />
        {cityGroups.map((group, idx) => (
          <CityGroup key={idx} data={group} setHotelList={setHotelList} />
        ))}
      </div>
      <div id="scrollContainer">
        <HotelGroup list={hotelList} tripDuration={tripDuration} />
      </div>
    </div>
  );
}

export default Hotels;
