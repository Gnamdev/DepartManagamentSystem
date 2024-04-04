import axios from "axios";

// export const BASE_URL = "http://localhost:9595";
export const BASE_URL =
  "https://departmanagamentsystem-server-production.up.railway.app";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
