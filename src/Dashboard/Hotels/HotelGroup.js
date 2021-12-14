import React, { useEffect, useState } from "react";
import HotelItem from "./HotelItem";

// const [loading, setLoading] = useState(true);

function HotelGroup({ list, tripDuration }) {
  return (
    <div id="scrollContainer">
      {list.map((hotel, idx) => (
        <HotelItem hotel={hotel} key={idx} tripDuration={tripDuration} />
      ))}
    </div>
  );
}

export default HotelGroup;
