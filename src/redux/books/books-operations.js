import api from "../../services/booksApi";

import {
  getQueryBooksRequest,
  getQueryBooksSuccess,
  getQueryBooksError,
  onLoadMoreCLickRequest,
  onLoadMoreCLickSuccess,
  onLoadMoreCLickError,
  getTotalBooks,
} from "./books-actions";

const getQueryBooks = (query, startIndex, sorting) => async (dispatch) => {
  dispatch(getQueryBooksRequest());
  try {
    const data = await api.getByQueryBooks(query, startIndex, sorting);
    dispatch(getQueryBooksSuccess(data.items));
    const numberOfBooks = data.totalItems;
    dispatch(getTotalBooks(numberOfBooks));
  } catch (error) {
    dispatch(getQueryBooksError(error));
  }
};

const getOnLoadMoreClickBooks =
  (query, startIndex, sorting) => async (dispatch) => {
    dispatch(onLoadMoreCLickRequest());
    try {
      const data = await api.getByQueryBooks(query, startIndex, sorting);
      dispatch(onLoadMoreCLickSuccess(data.items));
    } catch (error) {
      dispatch(onLoadMoreCLickError(error));
    }
  };

export { getQueryBooks, getOnLoadMoreClickBooks };
