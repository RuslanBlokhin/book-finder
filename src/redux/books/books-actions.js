import { createAction } from "@reduxjs/toolkit";

export const getQueryBooksRequest = createAction("books/getQueryBooksRequest");
export const getQueryBooksSuccess = createAction("books/getQueryBooksSuccess");
export const getQueryBooksError = createAction("books/getQueryBooksError");

export const onLoadMoreCLickRequest = createAction(
  "books/onLoadMoreCLickRequest"
);
export const onLoadMoreCLickSuccess = createAction(
  "books/onLoadMoreCLickSuccess"
);
export const onLoadMoreCLickError = createAction("books/onLoadMoreCLickError");

export const getTotalBooks = createAction("books/getTotalBooks");
export const getQuery = createAction("books/getQuery");
export const getCatedory = createAction("books/getCatedory");
export const getSorting = createAction("books/getSorting");
