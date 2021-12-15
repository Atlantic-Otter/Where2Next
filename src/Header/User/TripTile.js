import React from 'react';

const TripTile = ({ trip }) => {
  // should map over trip and return a list of each category
  const { destination, dates, events, flights, lodging } = trip;
  return (
    <div>
      <h6>{destination} &nbsp; {dates}</h6>

      <div className="given-category">
        <h3>Events:</h3>
        <ul>
          {events.map((event, i) =>
            <li key={i} >{event}</li>
          )}

        </ul>
      </div>

      <div className="given-category">
        <h3>Flights:</h3>
        <ul>
          {flights.map((flight, i) =>
            <li key={i} >{flight}</li>
          )}

        </ul>
    </div>

      <div className="given-category">
        <h3>Lodging:</h3>
        <ul>
          {lodging.map((hotel, i) =>
            <li key={i} >{hotel}</li>
          )}

        </ul>
      </div>

    </div>


  )
};

export default TripTile;
