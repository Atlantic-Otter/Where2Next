import React, { useState, useEffect } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
import EventListItem from "./EventListItem";
import BookingModal from '../../BookingModal/BookingModal';
import Modal from 'react-modal';

function Events() {
  const [events, setEvents] = useState([]);
  const { startDate, endDate, city, state } = useSearchParams();
  console.log(startDate, endDate, city, state);
  useEffect(() => {
    let isSubscribed = true;
    axios
      .get(
        `http://localhost:3000/nearbyEvents/${city}/${state}/${startDate}/${endDate}`
      )
      .then(({ data }) => {
        if (isSubscribed) {
          setEvents(data);
        }
      })
      .catch((e) => {
        if (isSubscribed) {
          console.log(e);
        }
      });
    return () => (isSubscribed = false);
  }, []);

  const eventList = events.map((event, i) => (
    <EventListItem key={i} event={event} />
  ));

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () =>  {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      {modalIsOpen && <BookingModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>}

      <h2>Events</h2>
      <div id="scrollContainer">{eventList}</div>
    </>
  );
}

export default Events;
