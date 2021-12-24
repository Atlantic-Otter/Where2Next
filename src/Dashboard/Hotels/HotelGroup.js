import React, { useEffect, useState } from "react";
import HotelItem from "./HotelItem";

function HotelGroup({ list, tripDuration }) {
  console.log('tripDuration', tripDuration);
  return (
    <div id="scrollContainer">
      {list.map((hotel, idx) => (
        <HotelItem hotel={hotel} key={idx} tripDuration={tripDuration} />
      ))}
    </div>
  );
}

export default HotelGroup;
