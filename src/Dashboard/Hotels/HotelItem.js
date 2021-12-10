import React from 'react';

const HotelItem = ({ data }) => {


  return (
    <div className="hotel-item">
      {data.name}
    </div>
  )
}

export default HotelItem;