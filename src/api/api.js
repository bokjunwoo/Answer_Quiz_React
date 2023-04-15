import axios from 'axios';

const API = axios.create({
  baseURL: 'http://3.39.192.108:3001/mongo',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
