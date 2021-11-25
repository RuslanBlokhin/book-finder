import React, { useState, useLayoutEffect } from "react";

import api from "../services/booksApi";
import Button from "../components/button/Button";
import Notification from "../components/notification/Notification";
import MyLoader from "../components/myLoader/MyLoader";
import BooksGallery from "../components/booksGallery/BooksGallery";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [booksOnPage, setBooksOnPage] = useState(30);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  console.log(books);
  async function getBooks() {
    try {
      setLoader(true);
      const books = await api.getBooks(booksOnPage);

      addBooksToState(books, booksOnPage);
    } catch (err) {
      setError(err);
      setLoader(false);
    }
  }

  const handleOnButtonClick = (booksOnPage) => () => {
    setLoader(true);
    api
      .getBooks(booksOnPage)
      .then((books) => addBooksToState(books, booksOnPage))
      // .then(
      //   window.scrollTo({
      //     top: 0,
      //     behavior: "smooth",
      //   })
      // )
      .catch((error) => setError(error))
      .finally(() => {
        setLoader(false);
      });
  };

  function addBooksToState(books, booksOnPage) {
    setBooks(books);
    setBooksOnPage(booksOnPage);
    setError("");
    setLoader(false);
  }

  useLayoutEffect(() => {
    getBooks();
  }, [booksOnPage]);

  const showButtons = !loader && books[0] && true;
  // const disabled = true;

  return (
    <>
      <BooksGallery books={books} />
      {error && <Notification message="Something wrong :(" />}
      {loader && <MyLoader />}
      {showButtons && (
        <Button
          onClick={handleOnButtonClick(booksOnPage + 30)}
          name={"Load More"}
          // disabled={disabled}
        />
      )}
    </>
  );
};

export default HomePage;
