import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.16.0.88:5000",
});

export default instance;
