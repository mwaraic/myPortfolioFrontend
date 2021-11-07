import axios from "axios";

const instance = axios.create({
  baseURL: "https://share-my-portfolio.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;