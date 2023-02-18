import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("/register/", data),
  login: (data) => axios.post("/login/", data),
  getTickets: () => axios.get("/kanban/tickets/"),
  getDate: () => axios.get("/requests"),
  updateToken: (data) => axios.post("/token/refresh/", data),

};

export default endpoints;
