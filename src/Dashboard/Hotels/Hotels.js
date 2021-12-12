import React, { useEffect, useState } from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
import axios from "axios";
import CityGroup from "./CityGroup";
import HotelGroup from "./HotelGroup";
import getTripLength from "../../../Helpers/getTripLength";
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";
import { ConnectionStates } from "mongoose";


function Hotels() {
  const [cityGroups, setCityGroups] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { city, state, endDate, startDate} = useSearchParams();
  const encodedCity = city.split(" ").join("+");
  const neighborhood = useParams()["*"];

  useEffect(() => {
    fetchNeighborhoods(city);
  }, []);

  useEffect(() => {
    if (neighborhood && cityGroups.length) {
      const neighborhoodId = cityGroups.filter(
        (n) => n.name === neighborhood
      )[0].destinationId;
      fetchHotels(neighborhoodId);
    }
  }, [cityGroups, neighborhood]);

  const tripDuration = getTripLength(startDate, endDate);

  const fetchNeighborhoods = (city) => {
    axios
      .get(`http://localhost:3000/hotels/${encodedCity}`)
      .then((response) => {
        setCityGroups(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchHotels = (id) => {
    const url = `http://localhost:3000/hotels/${encodedCity}/${id}`;
    axios
      .get(url)
      .then((response) => {
        setHotelList(response.data);
      })
      .catch((err) => console.log(err));
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

  return (
    <div className="hotel-main" id="listContainer">

      <h3>Neighborhoods</h3>
      <div className="neighborhoods">
        <FadeLoader color="orange" loading={loading} />
        {cityGroups.map((group, idx) => (
          <CityGroup key={idx} data={group} setHotelList={setHotelList} />
        ))}
      </div>

      <div id="scrollContainer">
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

    </div>
  );
}

export default Hotels;
