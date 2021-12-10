import React, { useEffect, useState } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from 'axios';

function Hotels() {

  const [ hotelGroup, setHotelGroup ] = useState([]);
  const { city } = useSearchParams();

  useEffect(() => {
      fetchCityGroups(city)
  }, [])

  const fetchCityGroups = (city) => {
    axios.get(`http://localhost:3000/hotels/${city.split(' ').join('+')}`)
      .then((response) => {
        console.log(response.data, 'api output')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return(
    <div>
      { city }
      { hotelGroup }
    </div>
  )
}

export default Hotels;
