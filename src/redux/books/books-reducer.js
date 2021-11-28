import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  getBooksSuccess,
  getQueryBooksSuccess,
  getQuery,
  getCatedory,
  getSorting,
  getBookByIdRequest,
  getBookByIdSuccess,
  getBookByIdError,
} from "./books-actions";

const BooksReducer = createReducer([], {
  [getBooksSuccess]: (_, { payload }) => payload,
  [getQueryBooksSuccess]: (_, { payload }) => payload,
});

// const BookByIdReducer = createReducer("", {
//   [getBookByIdSuccess]: (_, { payload }) => payload,
// });

const QueryReducer = createReducer("", {
  [getQuery]: (_, { payload }) => payload,
});
const CategoryReducer = createReducer("all", {
  [getCatedory]: (_, { payload }) => payload,
});
const SortingReducer = createReducer("", {
  [getSorting]: (_, { payload }) => payload,
});

export default combineReducers({
  BooksReducer,
  QueryReducer,
  CategoryReducer,
  SortingReducer,
});
