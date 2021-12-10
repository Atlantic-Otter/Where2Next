import React, { useEffect, useState } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from 'axios';

function CityGroup({ data}) {
  const { city } = useSearchParams();
  const { name, destinationId, latititude, longitude } = data
  const encodedCity = city.split(' ').join('+')

  const handleClick = () => {
    fetchHotels(data.destinationId)
  }

  const fetchHotels = (sectionId) => {
    const url = `http://localhost:3000/hotels/${encodedCity}/${destinationId}`
    axios.get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
    // console.log(url)
  }

  return(
    <div name="city-section" onClick={handleClick}>
      {name}
    </div>
  )
}

export default CityGroup;

