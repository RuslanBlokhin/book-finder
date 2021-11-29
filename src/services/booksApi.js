import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = "AIzaSyD-DyTBQiML8xbJI22-u54SoB9fqPQzybg";

const api = {
  getByQueryBooks(query, startIndex, sorting) {
    return axios
      .get(
        `?q=${query}&orderBy=${sorting}&printType=books&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
      )
      .then((response) => response.data);
  },
  getBookById(id) {
    return axios.get(`${id}?key=${API_KEY}`);
  },
};

export default api;
