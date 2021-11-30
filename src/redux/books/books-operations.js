import api from "../../services/booksApi";
import {
  getQueryBooksRequest,
  getQueryBooksSuccess,
  getQueryBooksError,
  onLoadMoreCLickRequest,
  onLoadMoreCLickSuccess,
  onLoadMoreCLickError,
  getTotalBooks,
  getLoaderToggle,
} from "./books-actions";

const getQueryBooks = (query, startIndex, sorting) => async (dispatch) => {
  dispatch(getQueryBooksRequest());
  try {
    dispatch(getLoaderToggle(true));
    const data = await api.getByQueryBooks(query, startIndex, sorting);
    dispatch(getQueryBooksSuccess(data.items));
    dispatch(getLoaderToggle(false));
    const numberOfBooks = data.totalItems;
    dispatch(getTotalBooks(numberOfBooks));
  } catch (error) {
    dispatch(getQueryBooksError(error));
    dispatch(getLoaderToggle(false));
  }
};

const getOnLoadMoreClickBooks =
  (query, startIndex, sorting) => async (dispatch) => {
    dispatch(onLoadMoreCLickRequest());
    try {
      dispatch(getLoaderToggle(true));
      const data = await api.getByQueryBooks(query, startIndex, sorting);
      dispatch(onLoadMoreCLickSuccess(data.items));
      dispatch(getLoaderToggle(false));
    } catch (error) {
      dispatch(onLoadMoreCLickError(error));
      dispatch(getLoaderToggle(false));
    }
  };

export { getQueryBooks, getOnLoadMoreClickBooks };
