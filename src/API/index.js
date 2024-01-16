import axios from "axios";
export const api = axios.create({
  baseURL: "https://searchartback-production-dc78.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});
