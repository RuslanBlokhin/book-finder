import { createAction } from "@reduxjs/toolkit";

export const getBooksRequest = createAction("books/getBooksRequest");
export const getBooksSuccess = createAction("books/getBooksSuccess");
export const getBooksError = createAction("books/getBooksError");
