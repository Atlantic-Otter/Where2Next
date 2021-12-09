import axios from "axios";

const getTrip = (userId) => {
  return axios.get(`http://localhost:3000/trips/${userId}`);
};

export default getTrip;
