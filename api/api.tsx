import axios from 'axios';

const API_HOST = 'http://localhost:3000/api/v1';

const Api = axios.create({
  baseURL: API_HOST,
});

export default Api;
