import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: 'http://localhost:5000'
});

export default axiosBackend;