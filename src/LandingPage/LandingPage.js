import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    startDate: null,
    endDate: null,
  });

  const submitSearch = () => {
    const { city, state, startDate, endDate } = formData;
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
      <input type="text" name="city" onChange={onChange} />
      <input type="text" name="state" onChange={onChange} />
      <input type="date" name="startDate" onChange={onChange} />
      <input type="date" name="endDate" onChange={onChange} />
      <button onClick={submitSearch}>Go!</button>
    </div>
  );
}

export default LandingPage;
