import api from "../../services/booksApi";

import {
  getBooksRequest,
  getBooksSuccess,
  getBooksError,
  getQueryBooksRequest,
  getQueryBooksSuccess,
  getQueryBooksError,
} from "./books-actions";

const getBooks = (booksOnPage) => async (dispatch) => {
  dispatch(getBooksRequest());
  try {
    const data = await api.getBooks(booksOnPage);
    // console.log(data);
    dispatch(getBooksSuccess(data));
  } catch (error) {
    dispatch(getBooksError(error));
  }
};

const getQueryBooks = (query, booksOnPage, sorting) => async (dispatch) => {
  dispatch(getQueryBooksRequest());
  try {
    const data = await api.getByQueryBooks(query, booksOnPage, sorting);
    // console.log(data);
    dispatch(getQueryBooksSuccess(data));
  } catch (error) {
    dispatch(getQueryBooksError(error));
  }
};

export { getBooks, getQueryBooks };
