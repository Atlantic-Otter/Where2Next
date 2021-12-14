import React, { useContext } from "react";
import TripContext from '../../TripContext.js';

function HotelToastItem({ hotel }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const removeEventFromTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.hotels = newTrip.hotels.filter((h) => h.hotelId !== hotel.hotelId);
    setCurrentTrip(newTrip);
    // console.log(currentTrip);
  };

  return (
    <div>
      <strong>{hotel.hotelName}</strong>
      <button onClick={removeEventFromTrip}>REMOVE</button>
    </div>
  );

}

export default HotelToastItem;
