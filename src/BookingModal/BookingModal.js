import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './BookingModal.css'

const BookingModal = ( { closeModal, modalType }) => {

  modalType = 'both'

  const renderMessage = (modalType) => {
    if(modalType === 'hotels') {
      return (
        <div className = {'btnContainer'}>
          Would you like to book your hotels for this event?
        </div>
      )
    } else if (modalType === 'flights') {
      return (
        <div>
          Would you like to book your flights for this event?
        </div>
      )
    } else {
      return (
        <div>
          Would you like to book your hotels and flights for this event?
        </div>
      )
    }
  };

  const renderButtons =  (modalType) => {
    if(modalType === 'hotels') {
      return (
        <div className = {'btnContainer'}>
          <button className = {'navBtn'}>See Hotels</button>
          <button className = {'closeBtn'}onClick={closeModal}>No Thanks!</button>
        </div>
      )
    } else if (modalType === 'flights') {
      return (
        <div className = {'btnContainer'}>
          <button className = {'navBtn'}>See Flights</button>
          <button className = {'closeBtn'}onClick={closeModal}>No Thanks!</button>
        </div>
      )
    } else if (modalType === 'both') {
      return (
        <div className = {'btnContainer'}>
          <button className = {'navBtn'}>See Hotels</button>
          <button className = {'navBtn'}>See Flights</button>
          <button className = {'closeBtn'}onClick={closeModal}>No Thanks!</button>
        </div>
      )
    } else {
      return (
        <div className = {'btnContainer'}>
          <button className = {'continueBtn'}onClick={closeModal}>Continue</button>
          <button className = {'checkoutBtn'}>Checkout</button>
        </div>
      )
    }
  };


  return (
    <div className = {'modalBG'}>
      <div className = 'modal'>
        <h4>The event has been added to your cart!</h4>
        {renderMessage(modalType)}
        {renderButtons(modalType)}
      </div>
    </div>
  );
};

export default BookingModal;