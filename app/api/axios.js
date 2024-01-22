import axios from "axios";

export const API = axios.create({
  baseURL: "https://aguramarketapi.onrender.com/AguraMarket",
});
