import { createReducer } from "@reduxjs/toolkit";

import { getBooksSuccess } from "./books-actions";

const BooksReducer = createReducer([], {
  [getBooksSuccess]: (_, { payload }) => payload,
});

export default BooksReducer;
