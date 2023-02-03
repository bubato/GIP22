import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "http://172.16.0.120:5000",
});

export default instance;
