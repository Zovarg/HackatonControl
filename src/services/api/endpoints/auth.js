import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("/register/", data),
  login: (data) => axios.post("/login/", data),
  getProfile: () => axios.get("/person/1/"),
  saveProfile: () => axios.put("/person/1/"),
  getDate: () => axios.get("/requests"),
  updateToken: (data) => axios.post("/token/refresh/", data),

};

export default endpoints;
