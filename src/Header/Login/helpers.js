import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

const helpers = {

  requestValidation: function({ username, password }) {
    return axios.request({
      url: BASE_URL + '/login',
      method: 'get',
      params: {username, password}
    });
  }

};

export default helpers;
