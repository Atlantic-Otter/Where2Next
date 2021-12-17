import React, { useContext } from "react";
import TripContext from "../../TripContext.js";
import Button from "react-bootstrap/Button";

function HotelToastItem({ hotel }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const removeHotelFromTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.hotels = newTrip.hotels.filter((h) => h.hotelId !== hotel.hotelId);
    setCurrentTrip(newTrip);
    // console.log(currentTrip);
  };

  return (
    <div className="toastItem">
      <strong>{hotel.hotelName}</strong>
      <Button variant="outline-dark" onClick={removeHotelFromTrip}>
        REMOVE
      </Button>
    </div>
  );
}

export default HotelToastItem;
