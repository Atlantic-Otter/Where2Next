import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import citiesAndStates from "../../Helpers/usCitiesAndStates";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

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
      <div id="inputForm">
        <label htmlFor="city">City</label>
        <ReactSearchAutocomplete
          items={cityList}
          maxResults={10}
          onSelect={(val) => {
            setCity(val.name);
          }}
          onSearch={(val) => setCity(val.name)}
          onClear={() => setCity("")}
          styling={{ zIndex: 1 }} // To display it on top of the search box below
        />

        <label htmlFor="state">State</label>
        <ReactSearchAutocomplete
          items={stateList}
          maxResults={10}
          onSelect={(val) => setState(val.name)}
          onClear={() => setState("")}
          onSearch={(val) => setState(val.name)}
          styling={{ zIndex: 0 }} // To display it on top of the search box below
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          min={startMin}
          value={formData.startDate}
          onChange={onChange}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          name="endDate"
          min={formData.startDate}
          value={formData.endDate}
          onChange={onChange}
        />
        <button onClick={submitSearch}>Go!</button>
      </div>
    </div>
  );
}

export default LandingPage;
