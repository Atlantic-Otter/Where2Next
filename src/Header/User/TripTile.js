import React from 'react';

const TripTile = ({ trip }) => {
  // should map over trip and return a list of each category
  const { destination, dates, events, flights, lodging } = trip;
  return (
    <div className="trip-tile">
      <h5>{destination}: {dates}</h5>

      {events.length ?
      <div className="given-category">
        <h6>Events:</h6>
        <ul>
          {events.map((event, i) =>
            <li key={i} >{event}</li>
          )}
        </ul>
      </div>
      :
      <></>
      }

      {flights.length ?
      <div className="given-category">
        <h6>Flights:</h6>
        <ul>
          {flights.map((flight, i) =>
            <li key={i} >{flight}</li>
          )}
        </ul>
      </div>
      :
      <></>
      }

      {lodging.length ?
      <div className="given-category">
        <h6>Lodging:</h6>
        <ul>
          {lodging.map((hotel, i) =>
            <li key={i} >{hotel}</li>
          )}
        </ul>
      </div>
      :
      <></>
      }

    </div>


  )
};

export default TripTile;
