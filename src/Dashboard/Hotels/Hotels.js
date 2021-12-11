import React, { useEffect, useState } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
import CityGroup from "./CityGroup";
import HotelGroup from "./HotelGroup";
import { useParams } from "react-router-dom";
import { ConnectionStates } from "mongoose";

function Hotels() {
  const [cityGroups, setCityGroups] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const { city } = useSearchParams();
  const encodedCity = city.split(" ").join("+");
  const neighborhood = useParams()["*"];

  useEffect(() => {
    fetchCityGroups(city);
  }, []);

  useEffect(() => {
    if (neighborhood && cityGroups.length) {
      const neighborhoodId = cityGroups.filter(
        (n) => n.name === neighborhood
      )[0].destinationId;
      fetchHotels(neighborhoodId);
    }
  }, [cityGroups, neighborhood]);

  const fetchCityGroups = (city) => {
    axios
      .get(`http://localhost:3000/hotels/${encodedCity}`)
      .then((response) => {
        setCityGroups(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchHotels = (id) => {
    const url = `http://localhost:3000/hotels/${encodedCity}/${id}`;
    axios
      .get(url)
      .then((response) => {
        setHotelList(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hotel-main" id="listContainer">
      <div className="neighborhoods">
        Neighborhoods
        {cityGroups.map((group, idx) => (
          <CityGroup key={idx} data={group} setHotelList={setHotelList} />
        ))}
      </div>
      <div id="scrollContainer">
        <HotelGroup list={hotelList} />
      </div>
    </div>
  );
}

export default Hotels;
