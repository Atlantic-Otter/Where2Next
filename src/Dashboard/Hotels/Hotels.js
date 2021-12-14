import React, { useEffect, useState } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
import CityGroup from "./CityGroup";
import HotelGroup from "./HotelGroup";
import getTripLength from "../../../Helpers/getTripLength";
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";
import "../dashboard.css";
// import { ConnectionStates } from "mongoose";

function Hotels() {
  const [cityGroups, setCityGroups] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const [loading, setLoading] = useState(true);
  let { city, state, endDate, startDate } = useSearchParams();
  city = city || "";
  const encodedCity = city.split(" ").join("+");
  const neighborhood = useParams()["*"];
  const abortFetch = new AbortController();

  useEffect(() => {
    fetchNeighborhoods(city);
    return () => abortFetch.abort();
  }, []);

  useEffect(() => {
    if (neighborhood && cityGroups.length) {
      const neighborhoodId = cityGroups.filter(
        (n) => n.name === neighborhood
      )[0].destinationId;
      fetchHotels(neighborhoodId);
    }
    return () => abortFetch.abort();
  }, [cityGroups, neighborhood]);

  const tripDuration = getTripLength(startDate, endDate);

  const fetchNeighborhoods = (city) => {
    axios
      .get(`http://localhost:3000/hotels/${encodedCity}`, {
        signal: abortFetch.signal,
      })
      .then((response) => {
        console.log('cityGroups recieved: ', cityGroups)
        setCityGroups(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (err.name === "AbortError") {
          console.log(error);
        }
      });
  };
  const fetchHotels = (id) => {
    const url = `http://localhost:3000/hotels/${encodedCity}/${id}`;
    axios
      .get(url)
      .then((response) => {
        setHotelList(response.data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log(err.message);
        }
      });
  };

  // const handlePagination = (e) => {
  //   const page = e.target.value
  //   const header = {params: {page}}
  //   axios
  //   .get(url, header)
  //   .then((response) => {
  //     setHotelList(response.data);
  //   })
  //   .catch((err) => console.log(err));
  // }

  //listContainer <=hotel-main
  return (
    <>
      <div className="eventsList">
        <h3>Neighborhoods</h3>
        <div className="neighborhoods">
          <FadeLoader color="orange" loading={loading} />
          {cityGroups.map((group, idx) => (
            <CityGroup key={idx} data={group} setHotelList={setHotelList} />
          ))}
        </div>
      </div>
        <div className="listContainer">
          <HotelGroup list={hotelList} tripDuration={tripDuration} />
        </div>

        <nav aria-label="hotel-pagination">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item page-link">1</li>
            <li className="page-item page-link">2</li>
            <li className="page-item">3</li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
    </>
  );
}

export default Hotels;
