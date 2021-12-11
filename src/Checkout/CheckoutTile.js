// a tile to represent ONE item in cart

import React from 'react';

const CheckoutTile = ({ service, infoObj }) => {
  // props should include
    // name of service (flight, hotel, event)
    // the object itself
    switch (service) {
      case 'event':
        const date = new Date(infoObj.dates.start.dateTime).toLocaleString();
        let minPrice = infoObj.priceRanges ? infoObj.priceRanges[0].min.toFixed(2) : "";
        let maxPrice = infoObj.priceRanges ? infoObj.priceRanges[0].max.toFixed(2) : "";
        minPrice = minPrice ? `$${minPrice}` : "No price listed";
        const price = maxPrice > minPrice ? `$${maxPrice}` : `${minPrice}`;

        return (
          <div className="checkout-tile">
            <h4>{infoObj.name}</h4>
            <p>{date}</p>
            {/* style price to be on right side */}
            <p>{price}</p>
          </div>
        )
      case 'flight':
        const segments = infoObj.itineraries[0].segments;
        const departTime = segments[0].departure.at;
        const arriveTime = segments[segments.length - 1].arrival.at;
        // &emsp;

        return (
          <div className="checkout-tile">
            <h4>{segments[0].departure.iataCode} to {segments[segments.length - 1].arrival.iataCode}</h4>
            <p>
              {departTime} - {arriveTime}
            </p>
            <p>
              Total: {infoObj.price.total}
            </p>

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

