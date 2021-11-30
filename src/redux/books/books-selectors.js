const getBooksSelector = (state) => state.books.BooksReducer;
const getTotalBooks = (state) => state.books.TotalBooks;
const getStartIndex = (state) => state.books.StartIndexReducer;
const getLoader = (state) => state.books.ToggleLoaderReducer;

const getQuerySelector = (state) => state.books.QueryReducer;
const getCategorySelector = (state) => state.books.CategoryReducer;
const getSortingSelector = (state) => state.books.SortingReducer;
const getStartIndexSelector = (state) => state.books.StartIndexReducer;
export {
  getBooksSelector,
  getQuerySelector,
  getCategorySelector,
  getSortingSelector,
  getStartIndexSelector,
  getTotalBooks,
  getStartIndex,
  getLoader,
};
