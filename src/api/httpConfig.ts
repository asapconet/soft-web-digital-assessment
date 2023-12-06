import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const request = axios.create({
  baseURL: API_URL,
});

const errorHandler = (error:any) => {
  switch (error.response.status) {


    default:
      return Promise.reject(error);
  }
};

request.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error),
);

export default request;
