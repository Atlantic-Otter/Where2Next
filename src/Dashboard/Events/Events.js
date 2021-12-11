import React, { useState, useEffect } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
import EventListItem from "./EventListItem";
import BookingModal from "../../BookingModal/BookingModal";
import FadeLoader from "react-spinners/FadeLoader";
import styles from "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { startDate, endDate, city, state } = useSearchParams();

  useEffect(() => {
    let isSubscribed = true;
    axios
      .get(
        `http://localhost:3000/nearbyEvents/${city}/${state}/${startDate}/${endDate}`
      )
      .then(({ data }) => {
        if (isSubscribed) {
          setLoading(false);
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

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div id="listContainer" >
      {modalIsOpen && (
        <BookingModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      )}
      {loading ? (
        <FadeLoader color="orange" loading={loading} />
      ) : (
        <>
          <div className="listHeader">
            <h2>Events</h2>
          </div>
          {/* <div id="scrollContainer">{eventList}</div> */}
          <div id="scrollContainer">
            {events.map(((event, i,) => (
              <EventListItem key={i} event={event} openModal={openModal} />)))}
          </div>
        </>
      )}
    </div>
  );
}

export default Events;
