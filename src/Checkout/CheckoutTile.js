// a tile to represent ONE item in cart

import React from 'react';

const CheckoutTile = ({ service, infoObj }) => {
  // props should include
    // name of service (flight, hotel, event)
    // the object itself
    const dateOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute:'2-digit'
    };

    var title, dateTime, price;

    switch (service) {
      case 'event':

        let minPrice = infoObj.priceRanges ? infoObj.priceRanges[0].min.toFixed(2) : "";
        let maxPrice = infoObj.priceRanges ? infoObj.priceRanges[0].max.toFixed(2) : "";
        minPrice = minPrice ? `$${minPrice}` : "No price listed";

        title = infoObj.name
        price = maxPrice > minPrice ? `$${maxPrice}` : `$${minPrice}`;
        dateTime = new Date(infoObj.dates.start.dateTime).toLocaleString([], dateOptions);

      break;
      case 'flight':
        let segments = infoObj.itineraries[0].segments;
        let departTime = new Date(segments[0].departure.at).toLocaleString([], dateOptions);
        let arriveTime = new Date(segments[segments.length - 1].arrival.at).toLocaleString([], dateOptions);

        title = `${segments[0].departure.iataCode} to ${segments[segments.length - 1].arrival.iataCode}`;
        dateTime = (
          <>
            <b>Departure:</b> &emsp; {departTime} <b>Arrival:</b> &emsp; {arriveTime}
          </>
        );
        price = '$' + infoObj.price.total

      break;
      case 'hotel':
        return (
          <div className="checkout-tile">
            hotel
          </div>
        )
    }


    return(
      <div id="checkout-tile">
        <h4>
          {title}
        </h4>
        <span>{dateTime}</span>

        {/* will float right: */}
        <span>{price}</span>
      </div>
    );


};

export default CheckoutTile;

