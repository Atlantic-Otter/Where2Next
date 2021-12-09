import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const startMin = new Date().toISOString().split("T")[0];
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    startDate: startMin,
    endDate: startMin,
  });
  console.log(formData);
  const submitSearch = () => {
    const { city, state, startDate, endDate } = formData;

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
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  return (
    <div id="landingPage">
      <h1>HOME</h1>
      <label htmlFor="city">City</label>
      <input type="text" name="city" onChange={onChange} />
      <label htmlFor="state">State</label>
      <input type="text" name="state" onChange={onChange} />
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
  );
}

export default LandingPage;
