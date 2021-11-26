import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getBooksSelector,
  getQuerySelector,
  getSortingSelector,
  getCategorySelector,
} from "../redux/books/books-selectors";
import Button from "../components/button/Button";
// import Notification from "../components/notification/Notification";
import MyLoader from "../components/myLoader/MyLoader";
import BooksGallery from "../components/booksGallery/BooksGallery";
import { getBooks, getQueryBooks } from "../redux/books/books-operations";

const HomePage = () => {
  const [booksOnPage, setBooksOnPage] = useState(10);
  const [loader, setLoader] = useState(false);

  const books = useSelector(getBooksSelector);
  const query = useSelector(getQuerySelector);
  const category = useSelector(getCategorySelector);
  const sorting = useSelector(getSortingSelector);

  console.log(query);
  console.log(category);
  console.log(sorting);

  const mounted = useRef();

  // console.log(category);
  const dispatch = useDispatch();

  const handleOnButtonClick = () => {
    setBooksOnPage(booksOnPage + 10);
  };

  useEffect(() => {
    dispatch(getBooks(booksOnPage));
  }, [booksOnPage]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      dispatch(getQueryBooks(query, booksOnPage, sorting));
    }
  }, [query, booksOnPage, sorting]);

  // useLayoutEffect(() => {
  //   dispatch(getBooks(booksOnPage));
  // }, [booksOnPage]);

  // useCallback(() => {
  //   dispatch(getQueryBooks(query, booksOnPage, sorting));
  // }, [query]);

  const showButtons = !loader && books[0] && true;

  return (
    <>
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
