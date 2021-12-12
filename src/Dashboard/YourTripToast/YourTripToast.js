import React, { useContext } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Button from "react-bootstrap/Button";
import TripContext from "../../TripContext";
import EventToastItem from "./EventToastItem";
import HotelToastItem from "./HotelToastItem";
import FlightToastItem from "./FlightToastItem";

function YourTripToast({ tripToastVisible, toggleTripToast }) {
  const showCheckoutModal = {

  }


  const { currentTrip, toggleCheckoutModal } = useContext(TripContext);

  const eventList = currentTrip.events.map((event) => (
    <EventToastItem event={event} />
  ));
  const flightList = currentTrip.flights.map((flight) => (
    <FlightToastItem flight={flight} />
  ));
  const hotelList = currentTrip.hotels.map((hotel) => (
    <HotelToastItem hotel={hotel} />
  ));

  return (
    <ToastContainer position="bottom-end">
      <Toast bg="light" show={tripToastVisible} onClose={toggleTripToast}>
        <Toast.Header>My Trip</Toast.Header>
        <Toast.Body>
          {eventList}
          {flightList}
          {hotelList}
        </Toast.Body>
        <Button onClick={toggleCheckoutModal} >
          Check Out!
        </Button>
      </Toast>
    </ToastContainer>
  );
}

export default YourTripToast;
