import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    zip: "",
    startDate: null,
    endDate: null,
  });
  const submitSearch = () => {
    const { zip, startDate, endDate } = formData;
    navigate(
      `/dashboard/?zip=${zip}&startDate=${startDate}&endDate=${endDate}`
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
      <input type="number" name="zip" onChange={onChange} />
      <input type="date" name="startDate" onChange={onChange} />
      <input type="date" name="endDate" onChange={onChange} />
      <button onClick={submitSearch}>Go!</button>
    </div>
  );
}

export default LandingPage;
