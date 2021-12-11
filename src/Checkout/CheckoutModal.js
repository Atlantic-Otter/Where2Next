// this modal should grab all items from localStorage and present them to the user to checkout

// upon entering a Credit card and email address and clicking "place your order"
  // localstorage should be cleared
  // the modal should rernder to show a thank you message

import React from 'react';
import TripContext from '../TripContext.js';

const CheckoutModal = () => {

  const { toggleCheckoutModal } = React.useContext(TripContext);

  return (
    <div className="modal-background" onClick={toggleCheckoutModal}>
      <div className="modal-window" onClick={(event) => { event.stopPropagation(); }}>
        <div className="modal-close-box">
          <span className="modal-close-button" onClick={toggleCheckoutModal}>&times;</span>
        </div>

        <p>in localstorage:</p>
        <p>{window.localStorage.currentTrip}</p>



      </div>
    </div>
    );
};

export default CheckoutModal;
