import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function CityGroup({ data }) {
  const { name } = data;
  const { search } = useLocation();

  const initial = name.split(' ').map(n=>n[0]).join('');

  return (
    <Link to={`${name}${search}`}>
      <div className="neighborhoods">
        <div className="section-container">
          <div className="addToTrip">{name}</div>
        </div>
      </div>
    </Link>
  );
}

export default CityGroup;
