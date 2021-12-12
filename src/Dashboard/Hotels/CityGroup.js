import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function CityGroup({ data }) {
  const { name } = data;
  const { search } = useLocation();

  const initial = name.split(' ').map(n=>n[0]).join('');

  return (
    <Link to={`${name}${search}`}>
      <div className="neighborhood">
        <div className="section-container">
          {/* <div className="city-section"><h4>{initial}</h4></div> */}
          <div className="section-name">{name}</div>
        </div>
      </div>
    </Link>
  );
}

export default CityGroup;
