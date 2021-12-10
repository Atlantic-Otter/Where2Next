import React from 'react';

const HotelListItem = ({data}) => {

  const { destinationId, name, caption } = data

  return (
    <div>
      { name }
      { caption }
    </div>
  )
};

export default HotelListItem;