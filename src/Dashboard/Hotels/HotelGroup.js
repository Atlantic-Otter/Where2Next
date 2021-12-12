import React, { useEffect, useState } from "react";
import HotelItem from "./HotelItem";

// const [loading, setLoading] = useState(true);

function HotelGroup({ list }) {
  return (
    <div className="hotel-group">
      {list.map((hotel, idx) => (
        <HotelItem hotel={hotel} key={idx} />
      ))}
    </div>
  );
}

export default HotelGroup;
