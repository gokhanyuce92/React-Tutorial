import axios from 'axios';

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000, // 10 saniye zaman aşımı
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiClient;
