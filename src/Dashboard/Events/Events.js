import React, { useState, useEffect, useRef } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
import EventListItem from "./EventListItem";
import BookingModal from "../../BookingModal/BookingModal";
import FadeLoader from "react-spinners/FadeLoader";
import "../dashboard.css";
// import "./Events.css";
import styles from "./Events.css";
import moment from "moment";
import Carousel from "react-bootstrap/Carousel";

function Events() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keywords, setKeywords] = useState([]);
  const { startDate, endDate, city, state } = useSearchParams();
  const [currentEvents, setCurrentEvents] = useState([]);
  const [ selected, setSelected ] = useState('date');

  const eventsByDate = useRef([]);
  const selectedQuantity = useRef(0);

  useEffect(() => {
    let isSubscribed = true;
    console.log("startdate", startDate);
    axios
      .get(
        `http://localhost:3000/nearbyEvents/${city}/${state}/${startDate}/${endDate}`
      )
      .then(({ data }) => {
        if (isSubscribed) {
          setLoading(false);
          eventsByDate.current = data;
          setEvents(data);
          renderTodayEvents();
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

  const openModal = (quantity) => {
    // setSelectedQuantity(quantity);
    selectedQuantity.current = quantity;
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const keywordsOnChange = (e) => {
    let input = e.target.value.replaceAll(",", " ");
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
      if (matchedEvents.length > 0) {
        return matchedEvents.map((event, i) => (
          <EventListItem key={i} event={event} openModal={openModal} />
        ));
      } else {
        return (
          <div className="emptyList">
            <h2>Sorry! There are no events matching your keyword(s).</h2>
          </div>
        );
      }
    } else {
      if (events.length > 0) {
        return events.map((event, i) => (
          <EventListItem key={i} event={event} openModal={openModal} />
        ));
      } else {
        <div className="emptyList">
          <h2>
            Sorry! There are no events matching your specified location and
            time.
          </h2>
        </div>;
      }
    }
  };

  const sortEvents = (e) => {
    let sortedEvents = [];
    let eventsCopy = events.slice();

    const method = e.target.value;
    setSelected(method);
    console.log(method)

    if (method === 'date') {
      setEvents(eventsByDate.current);
    } else if (method === 'price') {
      eventsCopy.sort((a, b) => {
        let aPrice = a.priceRanges ?
          ((a.priceRanges[0].min + a.priceRanges[0].max) / 2).toFixed(2): 0;
        let bPrice = b.priceRanges ?
          ((b.priceRanges[0].min + b.priceRanges[0].max) / 2).toFixed(2): 0;

        return aPrice - bPrice;
      })
      setEvents(eventsCopy);
    } else if (method === 'distance') {
      eventsCopy.sort((a, b) => {
        return a.distance - b.distance;
      });
      setEvents(eventsCopy);
    }
  }

  const renderTodayEvents = () => {
    console.log("dates", events);

    const today = moment().add(0, "days").format("YYYY-MM-DD");
    const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");

    console.log("today", today);
    console.log("tomorrow", tomorrow);

    axios
      .get(
        `http://localhost:3000/nearbyEvents/${city}/${state}/${today}/${tomorrow}`
      )
      .then(({ data }) => {
        console.log(data);
        setCurrentEvents(data);
      })
      .catch((e) => {
        console.log(e);
        return <div>I</div>;
      });
  };

  const findLargestPhoto = (photoArray) => {
    let photos16_9 = photoArray.filter((aphoto) => aphoto.ratio === "16_9");
    let largePhoto = photos16_9.reduce((prev, current) =>
      prev.width > current.width ? prev : current
    );
    return largePhoto.url;
  };

  return (
    // <div id="eventsPage">
    <div className="listContainer">
      {modalIsOpen && (
        <BookingModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          quantity={selectedQuantity.current}
        />
      )}
      {loading ? (
        <FadeLoader color="whitesmoke" loading={loading} />
      ) : (
        <div id="eventsList">
          {/* <input
            type="text"
            name="locationInput"
            className="searchLocation"
            placeholder="Location"
          /> */}
          <div>
            {currentEvents.length ? (
              <Carousel>
                {currentEvents.map((event) => {
                  return (
                    <Carousel.Item interval={10000}>
                      <img
                        src={findLargestPhoto(event.images)}
                        className="d-block mx-auto"
                        width="400vw"
                      />
                      <Carousel.Caption>
                        <h4>{event.name}</h4>
                        <p>
                          {event.dates.start.localDate} |{" "}
                          {event.dates.start.localTime}
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            ) : (
              <h1>No events happening today</h1>
            )}
          </div>
          <div className="filterAndSortContainer">
            <input
              type="text"
              name="search-events"
              className="searchEvents"
              placeholder="Enter keywords(s)"
              onChange={keywordsOnChange}
            />
            <select onChange={sortEvents} className="dropdown">
              <option value="date">Sort By Date</option>
              <option value="price">Sort By Price</option>
              <option value="distance">Sort By Distance</option>
            </select>
          </div>
          {events.length > 0 ? (
            <div id="scrollContainer">{filterEvents()}</div>
          ) : (
            <div className="emptyList">
              <h2>
                Sorry! There are no events matching your specified location and time.
              </h2>
            </div>
          )}
        </div>
      )}
    </div>
    // </div>
  );
}

export default Events;
