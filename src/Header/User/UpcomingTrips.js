import React from 'react';
import TripTile from './TripTile.js';

const UpcomingTrips = ({ trips }) => {
  return (
    <>
      <h4>Upcoming Trips:</h4>
      <div id="upcoming-trips">
        {trips.map((trip, i) => <TripTile trip={trip} key={i} />)}
      </div>
    </>
  )
};

export default UpcomingTrips;
