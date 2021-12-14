// a tile to represent ONE item in cart

import React from 'react';
import helpers from './helpers.js';

const CheckoutTile = ({ service, infoObj }) => {
  // props should include
    // name of service (flight, hotel, event)
    // the object itself
    const { title, dateTime, price } = helpers.getInfo(infoObj, service)

    return(
      <div className="checkout-tile">
        <h5>
          {title}
        </h5>
        <span>{dateTime}</span>

        {/* will float right: */}
        <span className="tile-price">{price}</span>
      </div>
    );
};

export default CheckoutTile;

