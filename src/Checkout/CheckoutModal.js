// this modal should grab all items from localStorage and present them to the user to checkout

// upon entering a Credit card and email address and clicking "place your order"
  // localstorage should be cleared
  // the modal should rernder to show a thank you message

import React from 'react';

const CheckoutModal = () => {

  return (
    <div className="modal-background" onClick={toggleProfileModal}>
      <div className="modal-window" onClick={(event) => { event.stopPropagation(); }}>
        <div className="modal-close-box">
          <span className="modal-close-button" onClick={toggleProfileModal}>&times;</span>
        </div>

        <p>this will be the checkout page</p>
      </div>
    </div>
    );
};

export default CheckoutModal;
