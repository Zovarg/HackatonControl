import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("/register/", data),
  login: (data) => axios.post("/login/", data),
  getTickets: () => axios.get("/kanban/tickets/"),
  getKanban: () => axios.get("/kanban/tasks/"),
  getTaskStatuses: () => axios.get("/kanban/tasks/statuses"),
  updateToken: (data) => axios.post("/token/refresh/", data),

};

export default endpoints;
