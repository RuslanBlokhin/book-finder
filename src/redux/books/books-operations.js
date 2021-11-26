import api from "../../services/booksApi";

import {
  getBooksRequest,
  getBooksSuccess,
  getBooksError,
} from "./books-actions";

const getBooks = (booksOnPage) => async (dispatch) => {
  dispatch(getBooksRequest());
  try {
    const data = await api.getBooks(booksOnPage);
    console.log(data);
    dispatch(getBooksSuccess(data));
  } catch (error) {
    dispatch(getBooksError(error));
  }
};
export default getBooks;
