import axios from "axios";

axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error.response.data);
  }
);

export default axios;
