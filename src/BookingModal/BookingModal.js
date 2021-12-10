import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';
import styles from './BookingModal.css'

const BookingModal = ( { closeModal, modalType }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  let subtitle;


  return (
    <div className = {'modalBG'}>
      <div className = 'modal'>
        <h4 ref={(_subtitle) => (subtitle = _subtitle)}>The event has been added to your cart!</h4>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <div>
            <button>tab navigation</button>
            <button>stays</button>
            <button onClick={closeModal}>close</button>
          </div>
      </div>
    </div>
  );
};

export default BookingModal;