import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import citiesAndStates from "../../Helpers/usCitiesAndStates";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Image from "../../images/logo.gif"
import BackgroundImg from "../landingScreenBackground.jpeg";

function LandingPage() {
  const navigate = useNavigate();
  const startMin = new Date().toISOString().split("T")[0];

  const [errorMessage, setErrorMessage] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [formData, setFormData] = useState({
    startDate: startMin,
    endDate: startMin,
  });
  const { cityList, stateList } = citiesAndStates;

  const submitSearch = () => {
    console.log(city, state);
    const { startDate, endDate } = formData;

    if (!city || !state) {
      return setErrorMessage("Please select a city and state");
    }

    if (!startDate || !endDate) {
      return setErrorMessage("Please select a start and end date");
    }
    navigate(
      `/dashboard/?city=${city}&state=${state}&startDate=${startDate}&endDate=${endDate}`
    );
  };
  const onChange = (e) => {
    console.log("tough stuff");
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;

    setFormData(newFormData);
  };

  return (
    <div id="landingPage">
      <div id="logo">
        <div id="logoName">
        <img src={Image} />
        <h1>WHERE2NEXT</h1>
        </div>
        <div id="slogan">
          <h3>Totally cool slogan here</h3>
        </div>
      </div>
      <div id="inputForm">
        <label htmlFor="city" className="searchLabel" style={{opacity: 0}}>City</label>
        <ReactSearchAutocomplete
          autofocus
          items={cityList}
          maxResults={10}
          onSelect={(val) => {
            setCity(val.name);
          }}
          onSearch={(val) => setCity(val)}
          onClear={() => setCity("")}
          placeholder={"City"}
          styling={{ zIndex: 2, backgroundColor: 'rgba(90,23,94,.75)', width:'50%', iconColor: 'white', color: 'white', placeholderColor: "white",}}
        />

        <label htmlFor="state" className="searchLabel" style={{opacity: 0}}>State</label>
        <ReactSearchAutocomplete
          items={stateList}
          maxResults={10}
          onSelect={(val) => setState(val.name)}
          onClear={() => setState("")}
          onSearch={(val) => setState(val)}
          placeholder={"State"}
          styling={{ zIndex: 1, backgroundColor: 'rgba(90,23,94,.75)', width:'50%', iconColor: 'white', color: 'white', placeholderColor: "white",}}
        />
        <div className="dateContainer">
          <div className="startDate">
            <label htmlFor="startDate" style={{opacity: 0}}>From</label>
            <input
              className="dateSelect"
              type="date"
              name="startDate"
              min={startMin}
              value={formData.startDate}
              onChange={onChange}
            />
          </div>
          <div id="rightArrow">{'➡️'}</div>
          <div className="endDate">
            <label htmlFor="endDate" style={{opacity: 0}}>To</label>
            <input
              className="dateSelect"
              type="date"
              name="endDate"
              min={formData.startDate}
              value={formData.endDate}
              onChange={onChange}
            />
          </div>
        </div>
        <br />
      </div>
        <div className="buttonContainer">
          <span id="errorMessage">{errorMessage}</span>
          <button className="glow-on-hover" onClick={submitSearch}>Go</button>
        </div>
    </div>
  );
}

export default LandingPage;
