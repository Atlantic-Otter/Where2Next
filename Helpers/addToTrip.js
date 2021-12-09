import axios from "axios";

const addToTrip = (object, category, userId) => {
  return axios.post(`https://localhost:3030/trip/${userId}`, {
    object,
    category,
  });
};

export default addToTrip;
