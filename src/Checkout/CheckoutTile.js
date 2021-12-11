// a tile to represent ONE item in cart

import React from 'react';

const CheckoutTile = ({ service, info }) => {
  // props should include
    // name of service (flight, hotel, event)
    // the object itself
    switch (service) {
      case 'event':
        return (
          <div className="checkout-tile">
            event
          </div>
        )
      case 'flight':
        return (
          <div className="checkout-tile">
            flight
          </div>
        )
      case 'hotel':
        return (
          <div className="checkout-tile">
            hotel
          </div>
        )
      default:
        return (<p>Please specify tile type</p>)
    }
};

export default CheckoutTile;