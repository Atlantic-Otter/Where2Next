import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function CityGroup({ data }) {
  const { name } = data;
  const { search } = useLocation();

  return (
    <Link to={`${name}${search}`}>
      <div name="city-section">{name}</div>
    </Link>
  );
}

export default CityGroup;
