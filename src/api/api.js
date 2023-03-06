import axios from 'axios';

const API = axios.create({
  baseURL: 'http://54.180.136.213:3001/mongo',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
