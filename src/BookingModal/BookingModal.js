import React, {useContext} from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./BookingModal.css";
import { useNavigate, useLocation } from "react-router-dom";
import TripContext from "../../src/TripContext";

const BookingModal = ({ closeModal, quantity }) => {
  const { currentTrip, setCurrentTrip, unvisited, setUnvisited, toggleCheckoutModal } = useContext(TripContext);
  const navigate = useNavigate();
  const { search } = useLocation();
  console.log(useContext(TripContext))
  const renderMessage = () => {
    if (unvisited.includes("hotels") && !unvisited.includes("flights")) {
      return (
        <div className={"btnContainer"}>
          Would you like to book your hotels for this event?
        </div>
      );
    } else if (unvisited.includes("flights") && !unvisited.includes("hotels")) {
      return <div>Would you like to book your flights for this event?</div>;
    } else if (unvisited.length === 2) {
      return (
        <div>
          Would you like to book your hotels and flights for this event?
        </div>
      );
    }
  };

  const onNoThanks = () => {
    closeModal();

    setUnvisited([]);
  };

  const onNavigate = (path) => {
    closeModal();

    let newUnvisited = unvisited.filter(el => path !== el);
    setUnvisited(newUnvisited);

    navigate("../" + path + search);
  };

  const onCheckout = () => {
    closeModal();
    toggleCheckoutModal();
  };

  const renderButtons = () => {
    if (unvisited.includes("hotels") && !unvisited.includes("flights")) {
      return (
        <div className={"btnContainer"}>
          <button onClick={() => onNavigate("hotels")} className={"navBtn"}>
            See Hotels
          </button>
          <button className={"closeBtn"} onClick={onNoThanks}>
            No Thanks!
          </button>
        </div>
      );
    } else if (unvisited.includes("flights") && !unvisited.includes("hotels")) {
      return (
        <div className={"btnContainer"}>
          <button onClick={() => onNavigate("flights")} className={"navBtn"}>
            See Flights
          </button>
          <button className={"closeBtn"} onClick={onNoThanks}>
            No Thanks!
          </button>
        </div>
      );
    } else if (unvisited.includes("hotels") && unvisited.includes("flights")){
      return (
        <div className={"btnContainer"}>
          <button onClick={() => onNavigate("hotels")} className={"navBtn"}>
            See Hotels
          </button>
          <button onClick={() => onNavigate("flights")} className={"navBtn"}>
            See Flights
          </button>
          <button className={"closeBtn"} onClick={onNoThanks}>
            No Thanks!
          </button>
        </div>
      );
    } else {
      return (
        <div className={"btnContainer"}>
          <button className={"continueBtn"} onClick={closeModal}>
            Continue
          </button>
          <button className={"checkoutBtn"} onClick={onCheckout}>Checkout</button>
        </div>
      );
    }
  };

  return (
    <div className={"modalBG"}>
      <div className="modal">
        <h4>{quantity} items have been added to your cart!</h4>
        {renderMessage()}
        {renderButtons()}
      </div>
    </div>
  );
};

export default BookingModal;
