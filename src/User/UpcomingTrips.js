import React from 'react';
import UserContext from '../UserContext.js';

const UpcomingTrips = () => {
  const { user } = React.useContext(UserContext);

  return (
    <div>
      Upcoming:
      {/* render tiles */}
    </div>
  )
};

export default UpcomingTrips;