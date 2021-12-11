import React, { useEffect, useState } from "react";
import HotelItem from "./HotelItem";

function HotelGroup({ list }) {
  return (
    <div name="hotel-group">
      {list.map((hotel, idx) => (
        <HotelItem hotel={hotel} key={idx} />
      ))}
    </div>
  );
}

export default HotelGroup;
