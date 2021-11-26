import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  getBooksSuccess,
  getQueryBooksSuccess,
  getQuery,
  getCatedory,
  getSorting,
} from "./books-actions";

const BooksReducer = createReducer([], {
  [getBooksSuccess]: (_, { payload }) => payload,
  [getQueryBooksSuccess]: (_, { payload }) => payload,
});

const QueryReducer = createReducer("", {
  [getQuery]: (_, { payload }) => payload,
});
const CategoryReducer = createReducer("", {
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
