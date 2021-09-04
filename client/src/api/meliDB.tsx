import axios from "axios";

const meliDB = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default meliDB;
