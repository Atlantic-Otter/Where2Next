import React, { useEffect, useState } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from 'axios';
import CityGroup from './CityGroup';

function Hotels() {

  const [ cityGroups, setCityGroups ] = useState([]);
  const { city } = useSearchParams();
  const encodedCity = city.split(' ').join('+')

  useEffect(() => {
      fetchCityGroups(city)
  }, [])

  const fetchCityGroups = (city) => {
    axios.get(`http://localhost:3000/hotels/${encodedCity}`)
      .then((response) => {
        setCityGroups(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return(
    <div>
      city sections
      {
        cityGroups.map((group, idx) => <CityGroup key={idx} data={group} />)
      }
    </div>
  )
}

export default Hotels;
