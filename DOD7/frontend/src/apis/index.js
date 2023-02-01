import axios from "axios";

const instance = axios.create({
    baseURL: "http://172.16.1.7:5000",
});

export default instance;
