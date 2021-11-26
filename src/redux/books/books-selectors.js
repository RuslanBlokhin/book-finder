const getBooksSelector = (state) => state.books.BooksReducer;
const getQuerySelector = (state) => state.books.QueryReducer;
const getCategorySelector = (state) => state.books.CategoryReducer;
const getSortingSelector = (state) => state.books.SortingReducer;
export {
  getBooksSelector,
  getQuerySelector,
  getCategorySelector,
  getSortingSelector,
};
