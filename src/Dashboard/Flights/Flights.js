import React, { useState, useEffect } from "react";
import axios from "axios";

function Flights() {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/flights`
      )
      .then((flights) => {
        setFlights(flights)
      })
      .catch((error) => console.log(error));
  }, []);
  return <div>Flights</div>;
}

export default Flights;
