import React, { useContext } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Button from "react-bootstrap/Button";
import TripContext from "../../TripContext";
function YourTripToast({ tripToastVisible, toggleTripToast }) {
  const { currentTrip } = useContext(TripContext);
  const eventList = currentTrip.events.map((event) => event.name);
  const flightList = currentTrip.flights.map((flight) => flight.name);
  const hotelList = currentTrip.hotels.map((hotel) => hotel.name);

  return (
    <ToastContainer position="bottom-end">
      <Toast bg="light" show={tripToastVisible} onClose={toggleTripToast}>
        <Toast.Header>My Trip</Toast.Header>
        <Toast.Body>
          {eventList}
          {flightList}
          {hotelList}
        </Toast.Body>
        {/* <Button>Check Out!</Button> */}
      </Toast>
    </ToastContainer>
  );
}

export default YourTripToast;
