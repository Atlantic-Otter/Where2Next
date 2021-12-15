import React from 'react';
import TripTile from './TripTile.js';

const UpcomingTrips = ({ trips }) => {
  console.log('upcoming trips:', trips);

  return (
    <div id="upcoming-tips">
      <h4>Upcoming Trips:</h4>
      {trips.map(trip => <TripTile trip={trip}/>)}
    </div>
  )
};

export default UpcomingTrips;