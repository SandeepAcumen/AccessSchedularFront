import axios from "axios";
import { url } from "../config";

export const api = axios.create({
  baseURL: url,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem("accessToken")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
    }
    return config;
  },
  async (error) => { }
);

api.interceptors.response.use(
  async (config) => {
    return config;
  },
  async (error) => {
    const status = error.response.status;
    if (status === 401) {
      localStorage.clear();
      window.location.reload()
    }
    return error.response;
  }
);
