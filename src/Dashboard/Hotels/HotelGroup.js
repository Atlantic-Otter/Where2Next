import React, { useEffect, useState } from "react";
import HotelItem from "./HotelItem";

// const [loading, setLoading] = useState(true);

function HotelGroup({ list, tripDuration }) {
  return (
    <div className="hotel-group">
      {list.map((hotel, idx) => (
        <HotelItem hotel={hotel} key={idx} tripDuration={tripDuration} />
      ))}
    </div>
  );
}

export default HotelGroup;
