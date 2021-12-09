import axios from 'axios';
const BASE_URL = 'http://localhost:8080'

const helpers = {
  requestValidation: function(username) {
    return axios.request(
      url: BASE_URL + '/login',
      method: 'get',
      params: {username: username}
    );
  }
}