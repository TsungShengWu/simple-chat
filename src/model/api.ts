import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error?.response?.data),
);

export default instance;
