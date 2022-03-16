import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL ?? 'http://localhost:8080';

const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

httpClient.interceptors.request.use(async request => {
  return request;
});

httpClient.interceptors.response.use(response => response.data);

export default httpClient;
