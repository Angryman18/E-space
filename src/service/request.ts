import { AxiosResponse } from "axios";
import axios from "./axiosService";

async function request<T>(url: string, ...args: any[]) {
  try {
    return (await axios.get(url, ...args)) as AxiosResponse<T>;
  } catch (err) {
    console.error("REQUEST ERROR");
    return Promise.reject(err);
  }
}

request.post = async function <T, Z>(url: string, payload: T, ...args: any[]) {
  try {
    return (await axios.post(url, payload, ...args)) as AxiosResponse<Z>;
  } catch (err) {
    console.error("REQUEST ERROR");
    return Promise.reject(err);
  }
};

request.get = request;

export default request;
