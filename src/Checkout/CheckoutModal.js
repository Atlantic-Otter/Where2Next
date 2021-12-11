// this modal should grab all items from localStorage and present them to the user to checkout

// upon entering a Credit card and email address and clicking "place your order"
  // localstorage should be cleared
  // the modal should rernder to show a thank you message

import React from 'react';
import TripContext from '../TripContext.js';
import CheckoutTile from './CheckoutTile.js';

const CheckoutModal = () => {

  const { toggleCheckoutModal } = React.useContext(TripContext);
  const { events, flights, hotels } = JSON.parse(window.localStorage.currentTrip);

  return (
    <div className="modal-background" onClick={toggleCheckoutModal}>
      <div className="modal-window" onClick={(event) => { event.stopPropagation(); }}>
        <div className="modal-close-box">
          <span className="modal-close-button" onClick={toggleCheckoutModal}>&times;</span>
        </div>
        <div id="checkout-categories">
          {events.map((event, i) =>
            <CheckoutTile key={i} service="event" info={event} />

          )}

          {flights.map((flight, i) =>
            <CheckoutTile key={i} service="flight" info={flight} />
          )}

          {hotels.map((hotel, i) =>
            <CheckoutTile key={i} service="hotel" info={hotel} />
          )}
        </div>
      </div>
    </div>
    );
};

export default CheckoutModal;
