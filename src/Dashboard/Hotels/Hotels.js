import React, { useState, useEffect } from "react";
import axios from 'axios';
import useSearchParams from "../../../Helpers/useSearchParams";
import HotelListItem from './HotelListItem';

const Hotels = (props) => {
  const { startDate, endDate, city, state } = useSearchParams();
  const [ hotelList, setHotelList ] = useState([]);

  useEffect(() => {
    fetchHotels()
  }, [])

  const fetchHotels = () => {
    const url = `http://localhost:3000/hotels/${city}/${state}/${startDate}/${endDate}`;

    axios.get(url)
      .then((res) => {
        setHotelList(res.data);
        // console.log(res.data, 'hotels.js')
      })
      .catch((err) => {
        console.log(err)
      });
    }

  return (
    <div>
      {
        hotelList.map((hotel, idx) =>
          <HotelListItem
            key={idx}
            data={hotel}/>)
      }
    </div>
  )
}

export default Hotels;
