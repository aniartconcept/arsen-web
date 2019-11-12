import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: ''
});

export default instance;
