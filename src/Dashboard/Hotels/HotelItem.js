import React from "react";

const HotelItem = ({ hotel }) => {
  return <div className="hotel-item">{hotel.name}</div>;
};

export default HotelItem;
