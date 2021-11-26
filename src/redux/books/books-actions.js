import { createAction } from "@reduxjs/toolkit";

export const getBooksRequest = createAction("books/getBooksRequest");
export const getBooksSuccess = createAction("books/getBooksSuccess");
export const getBooksError = createAction("books/getBooksError");

export const getQueryBooksRequest = createAction("books/getQueryBooksRequest");
export const getQueryBooksSuccess = createAction("books/getQueryBooksSuccess");
export const getQueryBooksError = createAction("books/getQueryBooksError");

export const getQuery = createAction("books/getQuery");
export const getCatedory = createAction("books/getCatedory");
export const getSorting = createAction("books/getSorting");
