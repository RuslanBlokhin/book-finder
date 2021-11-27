import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/books/v1/volumes";
const API_KEY = "AIzaSyD-DyTBQiML8xbJI22-u54SoB9fqPQzybg";

const api = {
  getBooks(booksOnPage) {
    return axios
      .get(`?q=all&maxResults=${booksOnPage}&key=${API_KEY}`)
      .then((response) => response.data.items);
  },
  getByQueryBooks(query, booksOnPage, sorting) {
    return axios
      .get(
        `?q=${query}&orderBy=${sorting}&maxResults=${booksOnPage}&key=${API_KEY}`
      )
      .then((response) => response.data.items);
  },
  getBookById(id) {
    return axios.get(`${id}?key=${API_KEY}`);
  },
};

export default api;
