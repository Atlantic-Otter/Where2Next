import React from "react";

function HotelToastItem({ hotel }) {

  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const removeEventFromTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.hotels = newTrip.hotels.filter((e) => e.id !== hotel.id);
    setCurrentTrip(newTrip);
    console.log(currentTrip);
  };

  return (
    <div>
      <strong>{hotel.hotelName}</strong>
      <button onClick={removeEventFromTrip}>REMOVE</button>
    </div>
  );

}

export default HotelToastItem;
