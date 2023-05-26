import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: 'http://109.93.37.171:5000/api'
});

export default axiosBackend;