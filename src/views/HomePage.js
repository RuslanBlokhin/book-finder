import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getBooksSelector,
  getQuerySelector,
  getSortingSelector,
} from "../redux/books/books-selectors";
import Button from "../components/button/Button";
import Notification from "../components/notification/Notification";
import MyLoader from "../components/myLoader/MyLoader";
import BooksGallery from "../components/booksGallery/BooksGallery";
import {
  getQueryBooks,
  getOnLoadMoreClickBooks,
} from "../redux/books/books-operations";

const HomePage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [loader, setLoader] = useState(false);

  const books = useSelector(getBooksSelector);
  const query = useSelector(getQuerySelector);
  const sorting = useSelector(getSortingSelector);

  const dispatch = useDispatch();

  const handleOnButtonClick = () => {
    setStartIndex(books.length);

    dispatch(getOnLoadMoreClickBooks(query, startIndex, sorting));
  };

  useEffect(() => {
    dispatch(getQueryBooks(query, startIndex, sorting));
  }, [query, startIndex, sorting]);

  const showButtons = !loader && books[0] && true;

  return (
    <>
      {!query && <Notification message="Please enter a search parameter" />}

      <BooksGallery />
      {/* {error && <Notification message="Something wrong :(" />} */}
      {loader && <MyLoader />}
      {showButtons && (
        <Button
          type={"button"}
          onClick={handleOnButtonClick}
          name={"Load More"}
        />
      )}
    </>
  );
};

export default HomePage;
