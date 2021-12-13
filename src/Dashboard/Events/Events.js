import React, { useState, useEffect } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
import EventListItem from "./EventListItem";
import BookingModal from "../../BookingModal/BookingModal";
import FadeLoader from "react-spinners/FadeLoader";

import "./Events.css";
import "../dashboard.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keywords, setKeywords] = useState([]);
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

  const keywordsOnChange = (e) => {
    let input = e.target.value.replaceAll(",", " ");
    // console.log(input)
    let inputs = input.split(" ");
    console.log(inputs);
    setKeywords(inputs);
  };

  const filterEvents = () => {
    let matchedEvents = [];
    let eventsCopy = events.slice();

    if (keywords.join(",").length >= 3) {
      eventsCopy.forEach((event) => {
        for (let i = 0; i < keywords.length; i++) {
          const keyword = keywords[i];
          if (
            keyword.length >= 3 &&
            event.name.toLowerCase().includes(keyword.toLowerCase())
          ) {
            matchedEvents.push(event);
            break;
          }
        }
      });
      return renderEventList(matchedEvents);
    } else {
      return renderEventList();
    }
  };

  const renderEventList = (matchedEvents) => {
    if (matchedEvents) {
      return matchedEvents.map((event, i) => (
        <EventListItem key={i} event={event} openModal={openModal} />
      ));
    } else {
      return events.map((event, i) => (
        <EventListItem key={i} event={event} openModal={openModal} />
      ));
    }
  };

  return (
    <div id="eventsPage">
      {modalIsOpen && (
        <BookingModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      )}
      <div className="eventsList">
        <div className="listHeader">
          <h2>Events</h2>
        </div>
        <input
          type="text"
          name="locationInput"
          className="searchLocation"
          placeholder="Location"
        />
        <input
          type="text"
          name="search-events"
          className="searchEvents"
          placeholder="Enter keywords(s)"
          onChange={keywordsOnChange}
        />
        <div id="scrollContainer">
          {loading ? (
            <div id="loaderContainer">
              <FadeLoader color="orange" loading={loading} />
            </div>
          ) : (
            filterEvents()
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
