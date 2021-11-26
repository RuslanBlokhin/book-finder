import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "../components/button/Button";
import Notification from "../components/notification/Notification";
import MyLoader from "../components/myLoader/MyLoader";
import BooksGallery from "../components/booksGallery/BooksGallery";

import getBooks from "../redux/books/books-operations";

const HomePage = () => {
  const [booksOnPage, setBooksOnPage] = useState(30);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const handleOnButtonClick = () => {
    setBooksOnPage(booksOnPage + 10);
  };

  useLayoutEffect(() => {
    dispatch(getBooks(booksOnPage));
  }, [booksOnPage]);

  const showButtons = !loader && true;
  // const disabled = true;

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
          // disabled={disabled}
        />
      )}
    </>
  );
};

export default HomePage;
