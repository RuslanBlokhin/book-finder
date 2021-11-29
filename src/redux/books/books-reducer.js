import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getQueryBooksSuccess,
  getQuery,
  getCatedory,
  getSorting,
  getTotalBooks,
  onLoadMoreCLickSuccess,
} from "./books-actions";

const BooksReducer = createReducer([], {
  [getQueryBooksSuccess]: (_, { payload }) => payload,
  [onLoadMoreCLickSuccess]: (state, { payload }) => [...state, ...payload],
});

const TotalBooks = createReducer(0, {
  [getTotalBooks]: (_, { payload }) => payload,
});
const QueryReducer = createReducer("cat", {
  [getQuery]: (_, { payload }) => payload,
});

const CategoryReducer = createReducer("all", {
  [getCatedory]: (_, { payload }) => payload,
});
const SortingReducer = createReducer("relevance", {
  [getSorting]: (_, { payload }) => payload,
});

export default combineReducers({
  BooksReducer,
  QueryReducer,
  CategoryReducer,
  SortingReducer,
  TotalBooks,
});
